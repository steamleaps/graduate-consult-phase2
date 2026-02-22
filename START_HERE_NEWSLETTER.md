# 🚀 START HERE - Newsletter System Setup

**Quick setup guide for Graduate Consult Newsletter System**

---

## ⏱️ Total Time: 10 Minutes

---

## ✅ Step 1: Create Google Sheet (3 minutes)

### 1.1 Create Spreadsheet
1. Go to https://sheets.google.com
2. Click "**+ Blank**" 
3. Name it: **Graduate Consult Newsletter**

### 1.2 Add Headers (Row 1)
Copy and paste these into Row 1, columns A-F:

```
Timestamp | Email | Name | Status | Unsubscribed Date | Source
```

### 1.3 Format Headers (Optional)
- Make Row 1 **bold**
- Add a background color
- Freeze Row 1: **View** → **Freeze** → **1 row**

✅ **Done!** Your Google Sheet is ready.

---

## ✅ Step 2: Add Apps Script (3 minutes)

### 2.1 Open Script Editor
1. In your Google Sheet: **Extensions** → **Apps Script**
2. Delete any existing code

### 2.2 Copy the Script
📋 Copy this entire script:

<details>
<summary><strong>👉 Click to see the Apps Script code (Click to expand)</strong></summary>

```javascript
/**
 * Graduate Consult Newsletter Management System
 */

const SHEET_NAME = 'Sheet1';
const STATUS_SUBSCRIBED = 'Subscribed';
const STATUS_UNSUBSCRIBED = 'Unsubscribed';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    const email = data.email.toLowerCase().trim();
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
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
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Server error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleSubscribe(sheet, data) {
  const email = data.email.toLowerCase().trim();
  const name = data.name || '';
  const source = data.source || 'Website';
  const timestamp = new Date();
  const existingRow = findEmailRow(sheet, email);
  
  if (existingRow) {
    const currentStatus = sheet.getRange(existingRow, 4).getValue();
    if (currentStatus === STATUS_SUBSCRIBED) {
      return { success: true, message: 'Already subscribed', alreadySubscribed: true };
    } else {
      sheet.getRange(existingRow, 1).setValue(timestamp);
      sheet.getRange(existingRow, 3).setValue(name);
      sheet.getRange(existingRow, 4).setValue(STATUS_SUBSCRIBED);
      sheet.getRange(existingRow, 5).setValue('');
      return { success: true, message: 'Resubscribed successfully', resubscribed: true };
    }
  } else {
    sheet.appendRow([timestamp, email, name, STATUS_SUBSCRIBED, '', source]);
    return { success: true, message: 'Subscribed successfully', newSubscriber: true };
  }
}

function handleUnsubscribe(sheet, email) {
  const existingRow = findEmailRow(sheet, email);
  if (!existingRow) {
    return { success: false, message: 'Email not found in our records' };
  }
  sheet.getRange(existingRow, 4).setValue(STATUS_UNSUBSCRIBED);
  sheet.getRange(existingRow, 5).setValue(new Date());
  return { success: true, message: 'Unsubscribed successfully' };
}

function handleResubscribe(sheet, email) {
  const existingRow = findEmailRow(sheet, email);
  if (!existingRow) {
    return { success: false, message: 'Email not found in our records' };
  }
  sheet.getRange(existingRow, 1).setValue(new Date());
  sheet.getRange(existingRow, 4).setValue(STATUS_SUBSCRIBED);
  sheet.getRange(existingRow, 5).setValue('');
  return { success: true, message: 'Resubscribed successfully' };
}

function findEmailRow(sheet, email) {
  const emailColumn = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
  for (let i = 0; i < emailColumn.length; i++) {
    if (emailColumn[i][0].toString().toLowerCase().trim() === email) {
      return i + 2;
    }
  }
  return null;
}
```

</details>

### 2.3 Paste and Save
1. Paste the code into the Apps Script editor
2. Click the **💾 Save** icon
3. Name it: **Newsletter Manager**

✅ **Done!** Your script is ready.

---

## ✅ Step 3: Deploy Script (3 minutes)

### 3.1 Create Deployment
1. Click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** → Select **"Web app"**

### 3.2 Configure
- **Description:** Newsletter Subscription Handler
- **Execute as:** Me (your email)
- **Who has access:** **Anyone** ⚠️ (Important: select "Anyone", not "Anyone with Google account")

### 3.3 Authorize
1. Click **Deploy**
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** → **Go to Newsletter Manager (unsafe)**
   - (Don't worry - it's your own script, so it's safe!)
5. Click **Allow**

### 3.4 Copy URL
1. After authorization, you'll see a **"Web app URL"**
2. It looks like: `https://script.google.com/macros/s/AKfycby...../exec`
3. **📋 COPY THIS ENTIRE URL**

✅ **Done!** Save this URL - you'll need it in the next step.

---

## ✅ Step 4: Send Me The URL (1 minute)

### What To Send:
1. The complete Web App URL from Step 3.4
2. Confirm you've completed Steps 1-3

### I'll Do The Rest:
1. Add the URL to your website (Vercel environment variable)
2. Redeploy the website
3. Test everything works
4. Confirm it's live!

---

## 🎉 That's It!

Once you send me the URL, your newsletter system will be live within 5 minutes!

---

## 📧 Test It After It's Live

### Test Subscribe:
1. Go to: `https://www.graduateconsult.com/newsletter`
2. Enter a test email
3. Click "Subscribe"
4. Check your Google Sheet - you should see the entry!

### Test Unsubscribe:
1. Go to: `https://www.graduateconsult.com/unsubscribe`
2. Enter the same email
3. Click "Unsubscribe"
4. Check your Google Sheet - status should change!

---

## ❓ Need More Help?

**Detailed guide:** See `GOOGLE_SHEETS_SETUP_GUIDE.md`

**Quick reference:** See `NEWSLETTER_QUICK_START.md`

**Having issues?** Contact me with:
- What step you're on
- What's not working
- Screenshot if helpful

---

## 🎯 Quick Checklist

Use this to track your progress:

- [ ] Created Google Sheet ✓
- [ ] Added column headers ✓
- [ ] Opened Apps Script editor ✓
- [ ] Pasted script code ✓
- [ ] Saved script ✓
- [ ] Created deployment ✓
- [ ] Configured as "Anyone" access ✓
- [ ] Authorized script ✓
- [ ] Copied Web App URL ✓
- [ ] Sent URL to developer ✓
- [ ] Waiting for confirmation ✓

---

## 📞 Contact

**Send your Web App URL to:** [Your developer contact]

**Questions?** Message me anytime!

---

**Setup Time:** 10 minutes  
**Your Part:** Steps 1-4 (copy, paste, click)  
**My Part:** Add URL to website (5 minutes)  
**Result:** Fully working newsletter system! 🎉

---

**Let's do this!** 🚀
