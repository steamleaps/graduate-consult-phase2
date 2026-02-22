# Graduate Consult - Contact & Inquiry Form Google Apps Script

## 📋 SETUP INSTRUCTIONS

### Step 1: Create Your Google Sheet

1. **Create/Open your spreadsheet:**
   - Name: "Graduate Consult Inquiry"
   - **Tab 1:** Rename to exactly `General`
   - **Tab 2:** Rename to exactly `Organisations`

2. **Set up headers:**

   **General Tab (Row 1):**
   ```
   Timestamp | Name | Email | Organization | Message | Status
   ```

   **Organisations Tab (Row 1):**
   ```
   Timestamp | Name | Email | Phone | Service Type | Organization Size | Suggested Date | Details | Status
   ```

---

### Step 2: Create the Google Apps Script

1. **Open your Google Sheet**
2. Click **Extensions → Apps Script**
3. **Delete** any existing code
4. **Copy and paste** the script below
5. Click **Save** (💾 icon)
6. Name your project: "Graduate Consult Contact Handler"

---

## 📝 GOOGLE APPS SCRIPT CODE

```javascript
/**
 * Graduate Consult - Contact & Organizational Inquiry Form Handler
 * Routes submissions to General or Organisations tabs
 * Sends email notifications to info@graduateconsult.com
 */

// Configuration
const NOTIFICATION_EMAIL = 'info@graduateconsult.com';

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Log for debugging
    Logger.log('Received data: ' + JSON.stringify(data));
    
    // Determine which tab to use based on the data structure
    // Organizational inquiries will have 'phone' and 'serviceType' fields
    const isOrganizational = data.phone || data.serviceType || data.organizationSize;
    
    if (isOrganizational) {
      // Route to Organisations tab
      handleOrganizationalInquiry(ss, data);
      sendOrganizationalNotificationEmail(data);
    } else {
      // Route to General tab
      handleGeneralContact(ss, data);
      sendGeneralContactNotificationEmail(data);
    }
    
    // Send success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Form submitted successfully',
        'type': isOrganizational ? 'organizational' : 'general'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle General Contact Form submissions
 */
function handleGeneralContact(ss, data) {
  const sheet = ss.getSheetByName('General');
  
  if (!sheet) {
    throw new Error('General tab not found. Please create a tab named "General"');
  }
  
  // Format timestamp
  const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
  
  // Prepare row data
  const rowData = [
    timestamp,                          // Timestamp
    data.name || '',                    // Name
    data.email || '',                   // Email
    data.organization || 'N/A',         // Organization
    data.message || '',                 // Message
    'New'                               // Status
  ];
  
  // Append to sheet
  sheet.appendRow(rowData);
  
  // Format the new row
  const lastRow = sheet.getLastRow();
  
  // Format timestamp column
  sheet.getRange(lastRow, 1).setNumberFormat('dd/mm/yyyy hh:mm:ss');
  
  // Add alternating row colors for readability
  if (lastRow % 2 === 0) {
    sheet.getRange(lastRow, 1, 1, 6).setBackground('#f8f9fa');
  }
  
  Logger.log('General contact form submitted: ' + data.email);
}

/**
 * Handle Organizational Inquiry Form submissions
 */
function handleOrganizationalInquiry(ss, data) {
  const sheet = ss.getSheetByName('Organisations');
  
  if (!sheet) {
    throw new Error('Organisations tab not found. Please create a tab named "Organisations"');
  }
  
  // Format timestamp
  const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
  
  // Extract service type from organization field if it contains it
  let serviceType = '';
  let organizationSize = '';
  
  if (data.organization && data.organization.includes('|')) {
    const parts = data.organization.split('|');
    organizationSize = parts[0].trim();
    serviceType = parts[1].trim();
  }
  
  // Parse details from message
  let suggestedDate = '';
  let details = data.message || '';
  
  // Extract structured data from formatted message
  const messageLines = details.split('\n');
  messageLines.forEach(line => {
    if (line.includes('SUGGESTED DATE:')) {
      suggestedDate = line.replace('SUGGESTED DATE:', '').trim();
    }
    if (line.includes('DETAILS:')) {
      const index = details.indexOf('DETAILS:');
      if (index !== -1) {
        details = details.substring(index + 8).trim();
      }
    }
  });
  
  // Format phone number to prevent #ERROR! (prepend with apostrophe to force text)
  let phoneNumber = data.phone || '';
  // If phone starts with + or contains only digits and special chars, treat as text
  if (phoneNumber && (phoneNumber.startsWith('+') || /^[\d\s\-\+\(\)]+$/.test(phoneNumber))) {
    phoneNumber = "'" + phoneNumber; // Force text format in Google Sheets
  }
  
  // Prepare row data
  const rowData = [
    timestamp,                          // Timestamp
    data.name || '',                    // Name
    data.email || '',                   // Email
    phoneNumber,                        // Phone (formatted as text)
    serviceType || '',                  // Service Type
    organizationSize || '',             // Organization Size
    suggestedDate || '',                // Suggested Date
    details || '',                      // Details
    'New'                               // Status
  ];
  
  // Append to sheet
  sheet.appendRow(rowData);
  
  // Format the new row
  const lastRow = sheet.getLastRow();
  
  // Format timestamp column
  sheet.getRange(lastRow, 1).setNumberFormat('dd/mm/yyyy hh:mm:ss');
  
  // Format phone column as plain text
  sheet.getRange(lastRow, 4).setNumberFormat('@'); // @ = plain text format
  
  // Add alternating row colors for readability
  if (lastRow % 2 === 0) {
    sheet.getRange(lastRow, 1, 1, 9).setBackground('#f8f9fa');
  }
  
  // Highlight organizational inquiries with a subtle color
  sheet.getRange(lastRow, 1, 1, 9).setBackground('#e3f2fd');
  
  Logger.log('Organizational inquiry submitted: ' + data.email);
}

/**
 * Send email notification for General Contact Form
 */
function sendGeneralContactNotificationEmail(data) {
  try {
    const subject = '📬 New General Contact Form Submission - Graduate Consult';
    
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1E3A8A; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1E3A8A; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1E3A8A; }
          .footer { margin-top: 20px; padding: 15px; background-color: #f0f0f0; text-align: center; font-size: 12px; color: #666; }
          .badge { display: inline-block; background-color: #10b981; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 New General Contact Form Submission</h2>
            <span class="badge">GENERAL INQUIRY</span>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${data.name || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></div>
            </div>
            
            <div class="field">
              <div class="label">🏢 Organization:</div>
              <div class="value">${data.organization || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${(data.message || 'N/A').replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">🕐 Submitted:</div>
              <div class="value">${new Date(data.timestamp || Date.now()).toLocaleString('en-GB', { 
                timeZone: 'Africa/Accra',
                dateStyle: 'full',
                timeStyle: 'short'
              })}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This inquiry has been automatically logged in the <strong>General</strong> tab of your Graduate Consult Inquiry spreadsheet.</p>
            <p>📊 <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}">View Spreadsheet</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const plainBody = `
New General Contact Form Submission

Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Organization: ${data.organization || 'N/A'}

Message:
${data.message || 'N/A'}

Submitted: ${new Date(data.timestamp || Date.now()).toLocaleString('en-GB', { timeZone: 'Africa/Accra' })}

This inquiry has been logged in the General tab of your spreadsheet.
View spreadsheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;
    
    GmailApp.sendEmail(
      NOTIFICATION_EMAIL,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        name: 'Graduate Consult Forms'
      }
    );
    
    Logger.log('✅ General contact notification email sent to ' + NOTIFICATION_EMAIL);
    
  } catch (error) {
    Logger.log('❌ Error sending general contact email: ' + error.toString());
    // Don't throw error - we still want the form submission to succeed
  }
}

/**
 * Send email notification for Organizational Inquiry
 */
function sendOrganizationalNotificationEmail(data) {
  try {
    // Extract structured data
    let serviceType = '';
    let organizationSize = '';
    let suggestedDate = '';
    let details = data.message || '';
    
    if (data.organization && data.organization.includes('|')) {
      const parts = data.organization.split('|');
      organizationSize = parts[0].trim();
      serviceType = parts[1].trim();
    }
    
    const messageLines = details.split('\n');
    messageLines.forEach(line => {
      if (line.includes('SUGGESTED DATE:')) {
        suggestedDate = line.replace('SUGGESTED DATE:', '').trim();
      }
      if (line.includes('DETAILS:')) {
        const index = details.indexOf('DETAILS:');
        if (index !== -1) {
          details = details.substring(index + 8).trim();
        }
      }
    });
    
    const subject = '🏢 New Organizational Inquiry - Graduate Consult';
    
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1E3A8A; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1E3A8A; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1E3A8A; }
          .footer { margin-top: 20px; padding: 15px; background-color: #f0f0f0; text-align: center; font-size: 12px; color: #666; }
          .badge { display: inline-block; background-color: #f59e0b; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; font-weight: bold; }
          .highlight { background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🏢 New Organizational Inquiry</h2>
            <span class="badge">ORGANIZATIONAL SERVICE</span>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>⚡ Priority Inquiry:</strong> This is a potential organizational client requiring personalized attention.
            </div>
            
            <div class="field">
              <div class="label">👤 Contact Name:</div>
              <div class="value">${data.name || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone || 'N/A'}</a></div>
            </div>
            
            <div class="field">
              <div class="label">🎯 Service Type:</div>
              <div class="value">${serviceType || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">👥 Organization Size:</div>
              <div class="value">${organizationSize || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">📅 Suggested Date:</div>
              <div class="value">${suggestedDate || 'Not specified'}</div>
            </div>
            
            <div class="field">
              <div class="label">📝 Details:</div>
              <div class="value">${details.replace(/\n/g, '<br>') || 'N/A'}</div>
            </div>
            
            <div class="field">
              <div class="label">🕐 Submitted:</div>
              <div class="value">${new Date(data.timestamp || Date.now()).toLocaleString('en-GB', { 
                timeZone: 'Africa/Accra',
                dateStyle: 'full',
                timeStyle: 'short'
              })}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This inquiry has been automatically logged in the <strong>Organisations</strong> tab of your Graduate Consult Inquiry spreadsheet.</p>
            <p>📊 <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}">View Spreadsheet</a></p>
            <p style="margin-top: 10px; color: #f59e0b;"><strong>⏰ Action Required:</strong> Please respond within 24 hours to maintain service standards.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const plainBody = `
🏢 NEW ORGANIZATIONAL INQUIRY

⚡ PRIORITY: This is a potential organizational client requiring personalized attention.

Contact Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}

Service Type: ${serviceType || 'N/A'}
Organization Size: ${organizationSize || 'N/A'}
Suggested Date: ${suggestedDate || 'Not specified'}

Details:
${details || 'N/A'}

Submitted: ${new Date(data.timestamp || Date.now()).toLocaleString('en-GB', { timeZone: 'Africa/Accra' })}

This inquiry has been logged in the Organisations tab of your spreadsheet.
View spreadsheet: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

⏰ ACTION REQUIRED: Please respond within 24 hours to maintain service standards.
    `;
    
    GmailApp.sendEmail(
      NOTIFICATION_EMAIL,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        name: 'Graduate Consult Forms'
      }
    );
    
    Logger.log('✅ Organizational inquiry notification email sent to ' + NOTIFICATION_EMAIL);
    
  } catch (error) {
    Logger.log('❌ Error sending organizational inquiry email: ' + error.toString());
    // Don't throw error - we still want the form submission to succeed
  }
}

/**
 * Test function - Run this to verify your setup
 */
function testGeneralContact() {
  const testData = {
    name: 'John Doe',
    email: 'john@example.com',
    organization: 'Test Company',
    message: 'This is a test message from the general contact form.',
    timestamp: new Date().toISOString()
  };
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  handleGeneralContact(ss, testData);
  sendGeneralContactNotificationEmail(testData);
  
  Logger.log('✅ Test general contact created successfully');
}

/**
 * Test function - Run this to verify organizational routing
 */
function testOrganizationalInquiry() {
  const testData = {
    name: 'Jane Smith',
    email: 'jane@organization.com',
    phone: '+233 24 123 4567',
    organization: '50-100 employees | Training Workshop',
    message: 'SERVICE TYPE: Training Workshop\n\nORGANIZATION SIZE: 50-100 employees\n\nSUGGESTED DATE: March 15, 2026\n\nDETAILS:\nWe need leadership training for our management team.',
    timestamp: new Date().toISOString()
  };
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  handleOrganizationalInquiry(ss, testData);
  sendOrganizationalNotificationEmail(testData);
  
  Logger.log('✅ Test organizational inquiry created successfully');
}
```

---

### Step 3: Deploy as Web App

1. **Click Deploy → New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description:** "Graduate Consult Contact & Inquiry Handler"
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize** the app (click "Authorize access")
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

---

### Step 4: Test Your Setup

**Before connecting to the website, test the script:**

1. In Apps Script editor, select `testGeneralContact` from the dropdown
2. Click **Run** (▶️)
3. Check your **General** tab - you should see a test entry
4. Select `testOrganizationalInquiry` from the dropdown
5. Click **Run** (▶️)
6. Check your **Organisations** tab - you should see a test entry

**If both tests work, you're ready to connect to your website!**

---

### Step 5: Update Your Website

You'll need to update the script URL in two files. The new URL is the one you copied in Step 3.

**Replace the old URL with your new Web App URL in:**

1. `/src/app/pages/ContactPage.tsx` (line 44)
2. `/src/app/components/OrganizationalInquiryForm.tsx` (line 36)

**Or better yet, use an environment variable:**

Add to Vercel:
```
Name: VITE_CONTACT_SCRIPT_URL
Value: https://script.google.com/macros/s/YOUR_NEW_SCRIPT_ID/exec
```

---

## 🎨 OPTIONAL: Beautify Your Spreadsheet

### General Tab Formatting:

1. **Freeze header row:** View → Freeze → 1 row
2. **Bold headers:** Select row 1 → Format → Bold
3. **Add filters:** Data → Create a filter
4. **Set column widths:**
   - Timestamp: 150px
   - Name: 150px
   - Email: 200px
   - Organization: 150px
   - Message: 400px
   - Status: 100px

### Organisations Tab Formatting:

Same as above, but adjust for 9 columns instead of 6.

### Add Status Dropdown:

1. Select the **Status** column (column F for General, column I for Organisations)
2. Go to **Data → Data validation**
3. **Criteria:** List of items
4. **Values:** `New, In Progress, Contacted, Resolved`
5. Check **Show dropdown list in cell**
6. Click **Save**

---

## 📊 HOW IT WORKS

### Smart Routing Logic:

The script automatically detects which form was submitted:

**Routes to "General" tab if:**
- No `phone` field
- No `serviceType` field  
- No `organizationSize` field
- ✅ General contact form from `/contact` page

**Routes to "Organisations" tab if:**
- Contains `phone` field
- Contains `serviceType` field
- Contains `organizationSize` field
- ✅ Organizational inquiry from booking page

### Data Mapping:

**General Contact Form:**
```
{
  name: "John Doe",
  email: "john@example.com",
  organization: "Test Company",
  message: "General inquiry...",
  timestamp: "2026-02-22T10:30:00.000Z"
}
```
→ Goes to **General** tab

**Organizational Inquiry:**
```
{
  name: "Jane Smith",
  email: "jane@organization.com",
  phone: "+233 24 123 4567",
  organization: "50-100 employees | Training Workshop",
  message: "SERVICE TYPE: Training Workshop\n\n...",
  timestamp: "2026-02-22T10:30:00.000Z"
}
```
→ Goes to **Organisations** tab

---

## 🔧 TROUBLESHOOTING

### Issue: "General tab not found" error
**Fix:** Make sure your tab is named exactly `General` (capital G)

### Issue: "Organisations tab not found" error
**Fix:** Make sure your tab is named exactly `Organisations` (capital O, with 's')

### Issue: No data appearing
**Fix:** 
1. Check Apps Script logs: View → Executions
2. Make sure you deployed the script
3. Verify the Web App URL is correct

### Issue: Organizational inquiries going to General tab
**Fix:** The script looks for `phone` field - make sure organizational form includes it

---

## 📞 NEXT STEPS

After deploying:

1. **Copy your new Web App URL**
2. **Reply with the URL** and I'll update your website code
3. **Add to Vercel environment variables** for security
4. **Test both forms** on the live site

---

**Need help? Let me know!**