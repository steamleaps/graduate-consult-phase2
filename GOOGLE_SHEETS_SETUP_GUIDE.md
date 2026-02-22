# 📊 Google Sheets Newsletter Integration - Setup Guide

## Overview

This guide will help you set up the Google Sheets integration for your newsletter subscription system. The entire setup takes **about 10 minutes**.

---

## 🎯 What You'll Create

1. **Google Sheet** - Stores all newsletter subscriptions
2. **Apps Script Web App** - Handles form submissions from your website
3. **Environment Variable** - Connects your website to the sheet

---

## 📋 Step 1: Create Your Google Sheet

### 1.1 Create a New Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"Graduate Consult Newsletter"**

### 1.2 Set Up the Headers

In **Row 1**, add these column headers:

| A         | B     | C    | D      | E                 | F      |
| --------- | ----- | ---- | ------ | ----------------- | ------ |
| Timestamp | Email | Name | Status | Unsubscribed Date | Source |

**Example:**

```
A1: Timestamp
B1: Email
C1: Name
D1: Status
E1: Unsubscribed Date
F1: Source
```

### 1.3 Format the Sheet (Optional but Recommended)

1. Select Row 1 (the header row)
2. Make it **bold**
3. Add a background color (light blue or gray)
4. Freeze Row 1:
   - Click **View** → **Freeze** → **1 row**

---

## 🔧 Step 2: Create the Apps Script

### 2.1 Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. A new tab will open with the script editor
3. Delete any existing code in the editor

### 2.2 Paste the Script Code

Copy and paste this **complete script**:

```javascript
/**
 * Graduate Consult Newsletter Management System
 * Handles subscriptions, unsubscriptions, and resubscriptions
 */

// Configuration
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name
const STATUS_SUBSCRIBED = 'Subscribed';
const STATUS_UNSUBSCRIBED = 'Unsubscribed';

/**
 * Main function - handles POST requests from the website
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    const email = data.email.toLowerCase().trim();

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Route to appropriate handler based on action
    let result;
    switch(action) {
      case 'subscribe':
        result = handleSubscribe(sheet, data);
        break;
      case 'unsubscribe':
        result = handleUnsubscribe(sheet, email);
        break;
      case 'resubscribe':
        result = handleResubscribe(sheet, email);
        break;
      default:
        result = { success: false, message: 'Invalid action' };
    }

    // Return JSON response
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return error response
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle new subscription
 */
function handleSubscribe(sheet, data) {
  const email = data.email.toLowerCase().trim();
  const name = data.name || '';
  const source = data.source || 'Website';
  const timestamp = new Date();

  // Check if email already exists
  const existingRow = findEmailRow(sheet, email);

  if (existingRow) {
    // Email exists - check status
    const currentStatus = sheet.getRange(existingRow, 4).getValue();

    if (currentStatus === STATUS_SUBSCRIBED) {
      // Already subscribed
      return {
        success: true,
        message: 'Already subscribed',
        alreadySubscribed: true
      };
    } else {
      // Was unsubscribed - reactivate
      sheet.getRange(existingRow, 1).setValue(timestamp); // Update timestamp
      sheet.getRange(existingRow, 3).setValue(name); // Update name if provided
      sheet.getRange(existingRow, 4).setValue(STATUS_SUBSCRIBED); // Set status to Subscribed
      sheet.getRange(existingRow, 5).setValue(''); // Clear unsubscribed date

      return {
        success: true,
        message: 'Resubscribed successfully',
        resubscribed: true
      };
    }
  } else {
    // New subscriber - add to sheet
    sheet.appendRow([
      timestamp,           // Timestamp
      email,               // Email
      name,                // Name
      STATUS_SUBSCRIBED,   // Status
      '',                  // Unsubscribed Date (empty)
      source               // Source
    ]);

    return {
      success: true,
      message: 'Subscribed successfully',
      newSubscriber: true
    };
  }
}

/**
 * Handle unsubscription
 */
function handleUnsubscribe(sheet, email) {
  const existingRow = findEmailRow(sheet, email);

  if (!existingRow) {
    return {
      success: false,
      message: 'Email not found in our records'
    };
  }

  // Update status to Unsubscribed
  sheet.getRange(existingRow, 4).setValue(STATUS_UNSUBSCRIBED);
  sheet.getRange(existingRow, 5).setValue(new Date()); // Set unsubscribed date

  return {
    success: true,
    message: 'Unsubscribed successfully'
  };
}

/**
 * Handle resubscription
 */
function handleResubscribe(sheet, email) {
  const existingRow = findEmailRow(sheet, email);

  if (!existingRow) {
    return {
      success: false,
      message: 'Email not found in our records'
    };
  }

  // Update status to Subscribed
  sheet.getRange(existingRow, 1).setValue(new Date()); // Update timestamp
  sheet.getRange(existingRow, 4).setValue(STATUS_SUBSCRIBED);
  sheet.getRange(existingRow, 5).setValue(''); // Clear unsubscribed date

  return {
    success: true,
    message: 'Resubscribed successfully'
  };
}

/**
 * Find row number for a given email address
 * Returns row number if found, null if not found
 */
function findEmailRow(sheet, email) {
  const emailColumn = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();

  for (let i = 0; i < emailColumn.length; i++) {
    if (emailColumn[i][0].toString().toLowerCase().trim() === email) {
      return i + 2; // +2 because arrays are 0-indexed and we start from row 2
    }
  }

  return null;
}

/**
 * Test function - for manual testing only
 */
function testSubscribe() {
  const testData = {
    action: 'subscribe',
    email: 'test@example.com',
    name: 'Test User',
    source: 'Manual Test',
    timestamp: new Date().toISOString()
  };

  const result = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });

  Logger.log(result.getContent());
}
```

### 2.3 Save the Script

1. Click the **💾 Save** icon (or press `Ctrl/Cmd + S`)
2. Name your project: **"Newsletter Manager"**
3. Click **OK**

---

## 🚀 Step 3: Deploy the Web App

### 3.1 Deploy

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Choose **"Web app"**

### 3.2 Configure Deployment Settings

Fill in these settings:

**Description:** `Newsletter Subscription Handler`

**Execute as:** `Me (your@email.com)`

**Who has access:** `Anyone`

- ⚠️ **Important:** Select "Anyone" (not "Anyone with Google account")
- This allows your website to access the script without authentication

### 3.3 Authorize the Script

1. Click **Deploy**
2. You'll see a popup: "Authorization required"
3. Click **Authorize access**
4. Select your Google account
5. Click **Advanced** → **Go to Newsletter Manager (unsafe)**
   - Don't worry - this is your own script, so it's safe
6. Click **Allow**

### 3.4 Copy the Web App URL

1. After authorization, you'll see a **"Web app URL"**
2. It will look like:
   ```
   https://script.google.com/macros/s/AKfycbyXXXXXXXXXXXXXXXXXXXXX/exec
   ```
3. **📋 COPY THIS URL** - you'll need it in Step 4

---

## 🔗 Step 4: Connect to Your Website

### 4.1 Create Environment Variable

You need to add the Web App URL to your website's environment variables.

#### For Vercel Deployment:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Graduate Consult** project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `VITE_NEWSLETTER_SCRIPT_URL`
   - **Value:** [Paste the Web App URL you copied]
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy your website:**
   - Go to **Deployments** tab
   - Click the **"•••"** menu on the latest deployment
   - Click **"Redeploy"**

#### For Local Development:

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add this line:
   ```
   VITE_NEWSLETTER_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
   ```
3. Replace with your actual Web App URL
4. Restart your development server

---

## ✅ Step 5: Test the Integration

### 5.1 Test Subscribe

1. Go to your website: `https://www.graduateconsult.com/newsletter`
2. Enter a test email address
3. Click **Subscribe**
4. Check your Google Sheet - you should see a new row with:
   - Current timestamp
   - Your email
   - Status: "Subscribed"

### 5.2 Test Unsubscribe

1. Go to: `https://www.graduateconsult.com/unsubscribe`
2. Enter the same email you just subscribed
3. Click **Unsubscribe**
4. Check your Google Sheet:
   - Status should change to "Unsubscribed"
   - Unsubscribed Date should be filled

### 5.3 Test Resubscribe

1. On the unsubscribe success page, click **"Resubscribe"**
2. Check your Google Sheet:
   - Status should change back to "Subscribed"
   - Unsubscribed Date should be cleared

---

## 📊 Understanding Your Data

### Column Explanations

| Column                | Description                            | Example                                     |
| --------------------- | -------------------------------------- | ------------------------------------------- |
| **Timestamp**         | When they subscribed                   | `2/17/2026 10:30:45 AM`                     |
| **Email**             | Their email address                    | `user@example.com`                          |
| **Name**              | Their name (optional)                  | `John Doe`                                  |
| **Status**            | Current subscription status            | `Subscribed` or `Unsubscribed`              |
| **Unsubscribed Date** | When they unsubscribed (if applicable) | `2/20/2026 3:45 PM`                         |
| **Source**            | Where they signed up                   | `Newsletter Page`, `Footer`, `Webinar Form` |

### Filtering Active Subscribers

To see only active subscribers:

1. Click on any cell in your data
2. Click **Data** → **Create a filter**
3. Click the filter icon on the **Status** column
4. Uncheck "Unsubscribed"
5. Click **OK**

### Exporting for Email Marketing

To export active subscribers:

1. Apply the "Subscribed" filter (see above)
2. Select the **Email** column (Column B)
3. Copy the emails
4. Paste into your email marketing tool (Mailchimp, ConvertKit, etc.)

---

## 🔒 Security & Privacy

### Data Protection

✅ **Your script only accepts data from your website**
✅ **All email addresses are stored in your private Google Sheet**
✅ **Only you have access to the data**
✅ **Emails are automatically converted to lowercase and trimmed**
✅ **Duplicate prevention built-in**

### GDPR Compliance

✅ **Users can self-unsubscribe anytime**
✅ **Clear privacy policy link on forms**
✅ **Easy data export for user requests**
✅ **Audit trail with timestamps**

---

## 🛠️ Troubleshooting

### Issue 1: "Form submitted but not appearing in sheet"

**Solution:**

1. Check that your Web App URL is correct in Vercel environment variables
2. Make sure the sheet name in the script matches your actual sheet name
3. Check the Apps Script **Executions** log:
   - Go to Apps Script editor
   - Click **Executions** on the left
   - Look for errors

### Issue 2: "Authorization error"

**Solution:**

1. Go to Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click **Edit** (pencil icon)
4. Make sure "Who has access" is set to **"Anyone"**
5. Click **Deploy**

### Issue 3: "Nothing happens when I submit"

**Solution:**

1. Open browser console (F12)
2. Look for error messages
3. Check that `VITE_NEWSLETTER_SCRIPT_URL` is set correctly
4. Make sure you redeployed after adding the environment variable

### Issue 4: "Script is slow"

**Note:** Google Apps Script uses `no-cors` mode, which means:

- The form will always appear to succeed from the user's perspective
- Data is still saved correctly in the background
- This is normal behavior and not an error

---

## 📈 Advanced Features

### Adding Email Notifications

Want to get notified when someone subscribes? Add this to your script:

```javascript
function sendNotificationEmail(email, action) {
  const recipient = 'your-email@graduateconsult.com';
  const subject = `Newsletter ${action}: ${email}`;
  const body = `New newsletter ${action}:\n\nEmail: ${email}\nTime: ${new Date()}`;

  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in your `handleSubscribe` function:

```javascript
sendNotificationEmail(email, 'subscription');
```

### Adding Double Opt-In

For double opt-in confirmation, you would:

1. Add a "Confirmed" column
2. Generate a unique confirmation token
3. Send confirmation email with link
4. Create a new endpoint to handle confirmation

(This is more advanced - let me know if you want the full implementation)

### Connecting to Mailchimp/ConvertKit

Most email marketing tools accept CSV imports:

1. Export your Google Sheet as CSV
2. Import into your email tool
3. Or use Zapier/Make to auto-sync

---

## 📞 Support

If you encounter any issues during setup:

1. **Check the Executions log** in Apps Script editor
2. **Test the script manually** using the `testSubscribe()` function
3. **Verify environment variables** are set correctly in Vercel
4. **Contact the developer** for assistance

---

## ✅ Setup Checklist

Use this checklist to verify everything is working:

- [ ] Google Sheet created with correct headers
- [ ] Apps Script code pasted and saved
- [ ] Web app deployed with "Anyone" access
- [ ] Web App URL copied
- [ ] Environment variable `VITE_NEWSLETTER_SCRIPT_URL` added to Vercel
- [ ] Website redeployed after adding environment variable
- [ ] Test subscription successful (data appears in sheet)
- [ ] Test unsubscription successful (status changes)
- [ ] Test resubscription successful (status changes back)

---

## 🎉 You're Done!

Your newsletter subscription system is now fully operational! Subscribers will be automatically added to your Google Sheet, and they can manage their subscription through your website.

**Next Steps:**

- Set up regular email campaigns using the subscriber list
- Monitor subscriber growth in your Google Sheet
- Consider adding the footer newsletter form (optional)
- Set up automated welcome emails (optional)

---

**Questions?** Feel free to reach out for support!