/**
 * GRADUATE CONSULT - BOOKING SYSTEM
 * Google Apps Script for handling bookings, payments, and calendar events
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Spreadsheet
 * 2. Click Extensions → Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire file
 * 5. Update CALENDAR_ID below with your email
 * 6. Save and deploy as web app
 * 7. Copy the deployment URL to your website
 */

// ==================== CONFIGURATION ====================
const PAYSTACK_SECRET_KEY = 'sk_test_e1fe435438a0b7c805817207f934903d484b26e4';
const CALENDAR_ID = 'YOUR_EMAIL@gmail.com'; // Replace with your Google Calendar email or use 'primary'

// Sheet names
const NEWSLETTER_SHEET = 'Newsletter';
const BOOKINGS_SHEET = 'Bookings';

// ==================== MAIN HANDLER ====================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    Logger.log('Received action: ' + action);
    
    // Newsletter actions
    if (action === 'subscribe' || action === 'unsubscribe') {
      return handleNewsletter(data);
    }
    
    // Booking actions
    if (action === 'create_booking') {
      return handleBooking(data);
    }
    
    if (action === 'verify_payment') {
      return verifyPayment(data);
    }
    
    return createJsonResponse(false, 'Unknown action: ' + action);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return createJsonResponse(false, 'Server error: ' + error.toString());
  }
}

// ==================== BOOKING HANDLER ====================
function handleBooking(data) {
  try {
    // Get or create Bookings sheet
    const sheet = getOrCreateSheet(BOOKINGS_SHEET, [
      'Timestamp', 'Email', 'Name', 'Phone', 'Service', 'Date', 
      'Time', 'Duration', 'Price', 'Status', 'Payment Reference', 
      'Payment Status', 'Calendar Event ID'
    ]);
    
    // Extract booking data
    const email = data.email;
    const name = data.name;
    const phone = data.phone;
    const service = data.service;
    const date = data.date; // "2025-02-20"
    const time = data.time; // "10:00"
    const duration = data.duration; // in minutes
    const price = data.price;
    const paymentReference = data.paymentReference;
    
    Logger.log('Processing booking for: ' + name + ' (' + email + ')');
    
    // Verify payment with Paystack
    const paymentVerified = verifyPaystackPayment(paymentReference);
    
    if (!paymentVerified.success) {
      Logger.log('Payment verification failed for reference: ' + paymentReference);
      return createJsonResponse(false, 'Payment verification failed. Please contact support.');
    }
    
    Logger.log('Payment verified: GHS ' + paymentVerified.amount);
    
    // Create Google Calendar Event
    try {
      const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
      
      // Parse date and time
      const [year, month, day] = date.split('-');
      const [hours, minutes] = time.split(':');
      const startTime = new Date(year, parseInt(month) - 1, day, hours, minutes);
      const endTime = new Date(startTime.getTime() + (duration * 60000));
      
      // Create calendar event
      const event = calendar.createEvent(
        `${service} - ${name}`,
        startTime,
        endTime,
        {
          description: `Service: ${service}\nClient: ${name}\nEmail: ${email}\nPhone: ${phone}\nPrice: GHS ${price}\nPayment Reference: ${paymentReference}`,
          guests: email,
          sendInvites: true,
          location: 'Virtual Meeting (Details will be sent 24 hours before)'
        }
      );
      
      const eventId = event.getId();
      Logger.log('Calendar event created: ' + eventId);
      
      // Save to spreadsheet
      sheet.appendRow([
        new Date(), // Timestamp
        email,
        name,
        phone,
        service,
        date,
        time,
        duration,
        price,
        'Confirmed',
        paymentReference,
        'Paid',
        eventId
      ]);
      
      // Send confirmation email
      sendBookingConfirmation(email, name, service, date, time, duration, price, paymentReference);
      
      return createJsonResponse(true, 'Booking confirmed and added to calendar', { eventId: eventId });
      
    } catch (calendarError) {
      Logger.log('Calendar error: ' + calendarError.toString());
      
      // Save booking even if calendar fails
      sheet.appendRow([
        new Date(),
        email,
        name,
        phone,
        service,
        date,
        time,
        duration,
        price,
        'Confirmed',
        paymentReference,
        'Paid',
        'Calendar Error: ' + calendarError.toString()
      ]);
      
      return createJsonResponse(true, 'Booking confirmed (calendar invite may be delayed)', {});
    }
    
  } catch (error) {
    Logger.log('Booking error: ' + error.toString());
    return createJsonResponse(false, 'Booking error: ' + error.toString());
  }
}

// ==================== PAYSTACK PAYMENT VERIFICATION ====================
function verifyPaystackPayment(reference) {
  try {
    const url = `https://api.paystack.co/transaction/verify/${reference}`;
    
    const options = {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    
    Logger.log('Paystack response: ' + JSON.stringify(result));
    
    if (result.status && result.data.status === 'success') {
      return {
        success: true,
        amount: result.data.amount / 100, // Paystack returns in pesewas
        reference: result.data.reference,
        channel: result.data.channel
      };
    }
    
    return { success: false };
  } catch (error) {
    Logger.log('Payment verification error: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

// ==================== EMAIL CONFIRMATION ====================
function sendBookingConfirmation(email, name, service, date, time, duration, price, reference) {
  try {
    const subject = '✅ Booking Confirmed - Graduate Consult';
    
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1E3A8A; color: white; padding: 30px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background: #f9f9f9; padding: 30px 20px; }
    .details { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1E3A8A; }
    .details h3 { color: #1E3A8A; margin-top: 0; }
    .details p { margin: 8px 0; }
    .highlight { background: #FEF3C7; padding: 15px; border-left: 4px solid #F59E0B; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    .button { display: inline-block; background: #1E3A8A; color: white; padding: 12px 30px; text-decoration: none; margin: 20px 0; }
    ul { padding-left: 20px; }
    ul li { margin: 8px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Booking Confirmed!</h1>
    </div>
    <div class="content">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for choosing Graduate Consult! Your consultation has been successfully booked and paid for.</p>
      
      <div class="details">
        <h3>📋 Booking Details</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${formatDateForEmail(date)}</p>
        <p><strong>Time:</strong> ${time} GMT</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
        <p><strong>Amount Paid:</strong> GHS ${price.toLocaleString()}</p>
        <p><strong>Payment Reference:</strong> ${reference}</p>
      </div>
      
      <div class="highlight">
        <p><strong>📅 Calendar Invitation Sent</strong></p>
        <p>A calendar invitation has been sent to your email (${email}). Please check your inbox and accept the invitation.</p>
      </div>
      
      <p><strong>What Happens Next:</strong></p>
      <ul>
        <li>You'll receive a meeting link 24 hours before your scheduled session</li>
        <li>Please be ready 5 minutes before the scheduled time</li>
        <li>Have any relevant documents ready to share</li>
        <li>Prepare any questions you'd like to discuss</li>
      </ul>
      
      <p><strong>Need to Reschedule?</strong></p>
      <p>If you need to reschedule or have any questions, please contact us at <a href="mailto:info@graduateconsult.com">info@graduateconsult.com</a> at least 24 hours before your appointment.</p>
      
      <p style="margin-top: 30px;">We're looking forward to working with you!</p>
      
      <p>Best regards,<br><strong>The Graduate Consult Team</strong></p>
    </div>
    <div class="footer">
      <p><strong>Graduate Consult</strong></p>
      <p>Professional Learning & Consulting</p>
      <p><a href="https://www.graduateconsult.com">www.graduateconsult.com</a></p>
      <p style="margin-top: 15px; font-size: 11px; color: #999;">
        This is an automated confirmation email. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
    `;
    
    GmailApp.sendEmail(email, subject, '', {
      htmlBody: htmlBody,
      name: 'Graduate Consult',
      noReply: false
    });
    
    Logger.log('Confirmation email sent to: ' + email);
    
  } catch (error) {
    Logger.log('Email error: ' + error.toString());
    // Don't fail the booking if email fails
  }
}

// ==================== NEWSLETTER HANDLER ====================
function handleNewsletter(data) {
  try {
    const sheet = getOrCreateSheet(NEWSLETTER_SHEET, ['Email', 'Status', 'Timestamp', 'Last Updated']);
    const email = data.email ? data.email.trim().toLowerCase() : '';
    const action = data.action;
    
    if (!email || !isValidEmail(email)) {
      return createJsonResponse(false, 'Invalid email address');
    }
    
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    let emailRow = -1;
    
    // Find existing email
    for (let i = 1; i < values.length; i++) {
      if (values[i][0].toLowerCase() === email) {
        emailRow = i + 1;
        break;
      }
    }
    
    if (action === 'subscribe') {
      if (emailRow > -1) {
        const currentStatus = values[emailRow - 1][1];
        if (currentStatus === 'Subscribed') {
          return createJsonResponse(false, 'This email is already subscribed');
        }
        sheet.getRange(emailRow, 2).setValue('Subscribed');
        sheet.getRange(emailRow, 4).setValue(new Date());
        return createJsonResponse(true, 'Successfully resubscribed!');
      } else {
        sheet.appendRow([email, 'Subscribed', new Date(), new Date()]);
        return createJsonResponse(true, 'Successfully subscribed!');
      }
    } else if (action === 'unsubscribe') {
      if (emailRow > -1) {
        sheet.getRange(emailRow, 2).setValue('Unsubscribed');
        sheet.getRange(emailRow, 4).setValue(new Date());
        return createJsonResponse(true, 'Successfully unsubscribed');
      } else {
        return createJsonResponse(false, 'Email not found in newsletter list');
      }
    }
    
    return createJsonResponse(false, 'Unknown action');
    
  } catch (error) {
    Logger.log('Newsletter error: ' + error.toString());
    return createJsonResponse(false, 'Error processing request: ' + error.toString());
  }
}

// ==================== UTILITY FUNCTIONS ====================
function getOrCreateSheet(sheetName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function createJsonResponse(success, message, data = {}) {
  return ContentService.createTextOutput(JSON.stringify({
    success: success,
    message: message,
    data: data
  })).setMimeType(ContentService.MimeType.JSON);
}

function formatDateForEmail(dateStr) {
  // Convert "2025-02-20" to "Thursday, 20 February 2025"
  const [year, month, day] = dateStr.split('-');
  const date = new Date(year, parseInt(month) - 1, day);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

// ==================== TEST FUNCTION ====================
function testPaystackVerification() {
  // Use this to test payment verification
  // Replace with a real transaction reference from Paystack
  const result = verifyPaystackPayment('test_reference_here');
  Logger.log('Test result: ' + JSON.stringify(result));
}
