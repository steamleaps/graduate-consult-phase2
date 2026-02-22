# 💳 Paystack Integration Guide for Graduate Consult

## 📋 Complete Step-by-Step Setup

---

## **PHASE 1: Get Your Paystack Credentials**

### Step 1: Create Paystack Account
1. Go to https://paystack.com/
2. Click "Get Started" and sign up
3. Use your business email (e.g., info@graduateconsult.com)
4. Complete business verification:
   - Business name: Graduate Consult
   - Business type: Professional Services
   - Country: Ghana
   - Business details and bank account

### Step 2: Get API Keys
1. Login to Paystack Dashboard
2. Go to **Settings → API Keys & Webhooks**
3. Copy your keys:
   - **Test Public Key**: `pk_test_xxxxxxxxxxxxxxxxx`
   - **Test Secret Key**: `sk_test_xxxxxxxxxxxxxxxxx`
   - **Live Public Key**: `pk_live_xxxxxxxxxxxxxxxxx` (after verification)
   - **Live Secret Key**: `sk_live_xxxxxxxxxxxxxxxxx` (after verification)

### Step 3: Store Keys Securely
**IMPORTANT**: Never commit API keys to GitHub!

Create a `.env` file in your project root:
```bash
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key_here
VITE_PAYSTACK_SECRET_KEY=sk_test_your_secret_key_here
```

---

## **PHASE 2: Update Your Website Code**

### Files Modified:
1. `/src/app/pages/BookingPage.tsx` - Added payment flow
2. `/src/app/components/PaystackPayment.tsx` - New payment component
3. Google Apps Script - Handle booking + calendar + payment verification

---

## **PHASE 3: Google Apps Script Setup**

### Add These Columns to Your "Bookings" Sheet:
| Timestamp | Email | Name | Phone | Service | Date | Time | Duration | Price | Status | Payment Reference | Payment Status | Calendar Event ID |
|-----------|-------|------|-------|---------|------|------|----------|-------|--------|-------------------|----------------|-------------------|

### Update Your Apps Script Code:

```javascript
// Constants
const PAYSTACK_SECRET_KEY = 'YOUR_SECRET_KEY_HERE'; // sk_test_... or sk_live_...
const CALENDAR_ID = 'YOUR_CALENDAR_EMAIL@gmail.com'; // or 'primary'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
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
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleBooking(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings');
  
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
  
  // Verify payment with Paystack
  const paymentVerified = verifyPaystackPayment(paymentReference);
  
  if (!paymentVerified.success) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Payment verification failed'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Create Google Calendar Event
  const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  
  // Parse date and time
  const [year, month, day] = date.split('-');
  const [hours, minutes] = time.split(':');
  const startTime = new Date(year, month - 1, day, hours, minutes);
  const endTime = new Date(startTime.getTime() + (duration * 60000));
  
  // Create calendar event
  const event = calendar.createEvent(
    `${service} - ${name}`,
    startTime,
    endTime,
    {
      description: `Service: ${service}\nClient: ${name}\nEmail: ${email}\nPhone: ${phone}\nPrice: GHS ${price}\nPayment Ref: ${paymentReference}`,
      guests: email,
      sendInvites: true,
      location: 'Virtual Meeting'
    }
  );
  
  const eventId = event.getId();
  
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
  
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Booking confirmed and added to calendar',
    eventId: eventId
  })).setMimeType(ContentService.MimeType.JSON);
}

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
    
    if (result.status && result.data.status === 'success') {
      return {
        success: true,
        amount: result.data.amount / 100, // Paystack returns in kobo
        reference: result.data.reference
      };
    }
    
    return { success: false };
  } catch (error) {
    Logger.log('Payment verification error: ' + error);
    return { success: false };
  }
}

function sendBookingConfirmation(email, name, service, date, time, duration, price, reference) {
  const subject = '✅ Booking Confirmed - Graduate Consult';
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1E3A8A; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .details { background: white; padding: 15px; margin: 20px 0; border-left: 4px solid #1E3A8A; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmed!</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Your consultation has been successfully booked and paid for. We're looking forward to meeting you!</p>
      
      <div class="details">
        <h3>📋 Booking Details</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time} GMT</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
        <p><strong>Amount Paid:</strong> GHS ${price}</p>
        <p><strong>Payment Reference:</strong> ${reference}</p>
      </div>
      
      <p>A calendar invitation has been sent to your email. Please check your inbox.</p>
      
      <p><strong>What to Expect:</strong></p>
      <ul>
        <li>Meeting link will be sent 24 hours before the session</li>
        <li>Please be ready 5 minutes before the scheduled time</li>
        <li>Have any relevant documents ready to share</li>
      </ul>
      
      <p>If you need to reschedule or have any questions, please contact us at info@graduateconsult.com</p>
      
      <p>Best regards,<br><strong>Graduate Consult Team</strong></p>
    </div>
    <div class="footer">
      <p>Graduate Consult | Professional Learning & Consulting</p>
      <p>www.graduateconsult.com</p>
    </div>
  </div>
</body>
</html>
  `;
  
  GmailApp.sendEmail(email, subject, '', {
    htmlBody: htmlBody,
    name: 'Graduate Consult'
  });
}
```

---

## **PHASE 4: Deploy & Test**

### Test Mode (Use Test Keys):
1. Use test card: `5060 6666 6666 6666 666`
2. CVV: `123`
3. Expiry: Any future date
4. PIN: `1234`
5. OTP: `123456`

### Going Live:
1. Complete Paystack verification
2. Update `.env` with live keys
3. Change `VITE_PAYSTACK_PUBLIC_KEY` to `pk_live_...`
4. Deploy to production

---

## **PHASE 5: Security Checklist**

- [ ] ✅ Never commit `.env` file to GitHub
- [ ] ✅ Add `.env` to `.gitignore`
- [ ] ✅ Use secret keys only on backend (Google Apps Script)
- [ ] ✅ Verify all payments server-side
- [ ] ✅ Enable Paystack webhooks for real-time updates
- [ ] ✅ Set up fraud detection rules in Paystack dashboard
- [ ] ✅ Test with small amounts first

---

## **PHASE 6: Webhooks (Optional but Recommended)**

Paystack can notify you of payment events automatically.

### In Paystack Dashboard:
1. Go to Settings → Webhooks
2. Add your Apps Script URL
3. Select events: `charge.success`, `charge.failed`

### In Apps Script, add:
```javascript
function handleWebhook(e) {
  const payload = JSON.parse(e.postData.contents);
  const event = payload.event;
  
  if (event === 'charge.success') {
    // Update booking status
    updateBookingStatus(payload.data.reference, 'Paid');
  }
}
```

---

## **📞 Support**

**Paystack Support:**
- Email: support@paystack.com
- Phone: +234 1 888 3948
- Docs: https://paystack.com/docs

**Technical Issues:**
- Test thoroughly in test mode before going live
- Check Paystack dashboard for transaction logs
- Monitor Google Sheets for booking records

---

## **💰 Pricing**

Paystack Fees (Ghana):
- Local Cards: 1.95% + GHS 0.50 per transaction
- International Cards: 3.9% + GHS 0.50 per transaction

**Example:**
- Booking: GHS 1,500
- Paystack Fee: ~GHS 29.75
- You Receive: ~GHS 1,470.25

---

## **🚀 Next Steps**

1. ✅ Install react-paystack (Done)
2. ⏳ Create Paystack account & get keys
3. ⏳ Add PaystackPayment component to website
4. ⏳ Update Google Apps Script
5. ⏳ Test with test cards
6. ⏳ Go live!
