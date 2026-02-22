# Contact Form - Google Apps Script Setup

This guide will help you set up the Gmail email sending functionality for your contact form.

## Google Apps Script Code

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **"New Project"**
3. Name it **"Graduate Consult Contact Form"**
4. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Email configuration
    const recipient = 'info@graduateconsult.com';
    const subject = `New Inquiry from ${data.name}`;
    
    // Create HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1E3A8A; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1E3A8A; margin-bottom: 5px; }
          .value { background-color: white; padding: 10px; border-left: 3px solid #D97757; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Inquiry</h1>
            <p>Graduate Consult Website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Organization:</div>
              <div class="value">${data.organization}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
            
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date(data.timestamp).toLocaleString('en-GB', { 
                dateStyle: 'full', 
                timeStyle: 'long',
                timeZone: 'GMT'
              })}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This inquiry was submitted via the Graduate Consult contact form</p>
            <p><a href="https://www.graduateconsult.com">www.graduateconsult.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Plain text version
    const plainBody = `
New Contact Form Inquiry - Graduate Consult

Name: ${data.name}
Email: ${data.email}
Organization: ${data.organization}
Message: ${data.message}

Submitted: ${new Date(data.timestamp).toLocaleString('en-GB', { 
  dateStyle: 'full', 
  timeStyle: 'long',
  timeZone: 'GMT'
})}

---
This inquiry was submitted via the Graduate Consult contact form
www.graduateconsult.com
    `;
    
    // Send email
    GmailApp.sendEmail(
      recipient,
      subject,
      plainBody,
      {
        htmlBody: htmlBody,
        replyTo: data.email,
        name: 'Graduate Consult Website'
      }
    );
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Email sent successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error
    console.error('Error:', error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function testEmail() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        organization: 'Test Organization',
        message: 'This is a test inquiry from the contact form.',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Deployment Steps

1. **Save the script**: Click the save icon (💾) or press `Ctrl+S` / `Cmd+S`

2. **Deploy as Web App**:
   - Click **"Deploy"** → **"New deployment"**
   - Click the gear icon (⚙️) next to "Select type"
   - Choose **"Web app"**
   
3. **Configure deployment**:
   - **Description**: "Contact form email handler"
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone"
   - Click **"Deploy"**

4. **Authorize the script**:
   - Click **"Authorize access"**
   - Select your Google account
   - Click **"Advanced"** → **"Go to Graduate Consult Contact Form (unsafe)"**
   - Click **"Allow"**

5. **Copy the Web App URL**:
   - After deployment, you'll see a **"Web app URL"**
   - It looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
   - **Copy this entire URL**

6. **Update your website code**:
   - Open `/src/app/pages/ContactPage.tsx`
   - Find line 46: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
   - Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL

## Testing

1. **Test from Google Apps Script**:
   - In the script editor, select the `testEmail` function from the dropdown
   - Click the **Run** button (▶️)
   - Check `info@graduateconsult.com` for a test email

2. **Test from your website**:
   - Go to your Contact page
   - Fill out the inquiry form
   - Submit and check for the success message
   - Verify the email arrives at info@graduateconsult.com

## Email Features

✅ Professional HTML formatting  
✅ All form fields included (name, email, organization, message)  
✅ Timestamp in GMT timezone  
✅ Reply-to set to the user's email address  
✅ Both HTML and plain text versions  
✅ Graduate Consult branding

## Troubleshooting

**If emails aren't sending:**

1. Check that the script is deployed as "Anyone" can access
2. Verify you authorized the script to send emails
3. Check Google Apps Script logs: View → Logs or View → Executions
4. Ensure info@graduateconsult.com is correct
5. Check your spam folder

**If you get CORS errors:**

- The frontend uses `mode: 'no-cors'` to avoid CORS issues
- This is normal for Google Apps Script web apps
- As long as no error is thrown, the email was sent successfully

## Redeployment

If you make changes to the script:

1. Save the script
2. Click **"Deploy"** → **"Manage deployments"**
3. Click the edit icon (✏️) next to your deployment
4. **Change version to "New version"**
5. Click **"Deploy"**
6. The URL stays the same - no need to update your website code

---

**Need help?** Contact your developer or refer to [Google Apps Script documentation](https://developers.google.com/apps-script).
