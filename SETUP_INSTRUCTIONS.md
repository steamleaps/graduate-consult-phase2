# 🚀 COMPLETE SETUP INSTRUCTIONS - Graduate Consult Booking System

## ✅ CURRENT STATUS
- ✅ Paystack package installed (`react-paystack`)
- ✅ Payment component created
- ✅ Booking flow updated (4 steps: Service → Schedule → Details → Payment)
- ✅ Test keys configured in `.env` file
- ✅ `.gitignore` created (protects your secret keys)

---

## 📋 STEP-BY-STEP SETUP GUIDE

### **STEP 1: Update Google Apps Script** ⏰ **5 minutes**

1. Open your Google Spreadsheet for bookings
2. Click **Extensions** → **Apps Script**
3. Delete any existing code
4. Copy and paste the **entire code** from `/GOOGLE_APPS_SCRIPT_CODE.js`
5. **IMPORTANT:** Update line 14 with your email:
   ```javascript
   const CALENDAR_ID = 'YOUR_EMAIL@gmail.com'; // Replace with your actual email
   ```
6. Click **Save** (💾 icon)
7. Click **Deploy** → **New deployment**
8. Click **⚙️ gear icon** → Select type: **Web app**
9. Fill in:
   - Description: "Graduate Consult Booking System"
   - Execute as: **Me**
   - Who has access: **Anyone**
10. Click **Deploy**
11. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)
12. Click **Done**

---

### **STEP 2: Update Your Website Code** ⏰ **1 minute**

The Apps Script URL is already in your code, but you need to **replace it** with your new deployment URL.

**Find this line in `/src/app/pages/BookingPage.tsx` (around line 105):**
```typescript
const scriptUrl = 'https://script.google.com/macros/s/AKfycbz_LP_TwtqUZD_joC-LdIkBTxDrA8OiBAcq2WLwO3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec';
```

**Replace with your new URL from Step 1.**

---

### **STEP 3: Test the Booking System** ⏰ **5 minutes**

1. Go to your website's `/booking` page
2. Select a service (e.g., "Career Coaching")
3. Pick a date and time (must be 48+ hours in future for individual services)
4. Fill in your contact details
5. Click through to payment
6. Use **Paystack test card**:
   - **Card Number:** `5060 6666 6666 6666 666`
   - **CVV:** `123`
   - **Expiry:** `12/25` (any future date)
   - **PIN:** `1234`
   - **OTP:** `123456`
7. Complete payment
8. **Check these 4 things:**
   - ✅ Success message appears
   - ✅ Booking appears in your Google Sheet
   - ✅ Calendar invitation in your email
   - ✅ Confirmation email received

---

### **STEP 4: Prepare Your Google Sheet** ⏰ **2 minutes**

The Apps Script will **automatically create** these sheets if they don't exist:

1. **Newsletter** - For email subscriptions
   - Columns: Email, Status, Timestamp, Last Updated

2. **Bookings** - For all bookings
   - Columns: Timestamp, Email, Name, Phone, Service, Date, Time, Duration, Price, Status, Payment Reference, Payment Status, Calendar Event ID

**You don't need to create these manually!** Just run a test booking and they'll appear.

---

### **STEP 5: Going Live (When Ready)** ⏰ **10 minutes**

#### A. Complete Paystack Verification
1. Login to https://dashboard.paystack.com
2. Go to **Settings** → **Business Profile**
3. Complete all verification steps:
   - Business information
   - Bank account details
   - Identity verification
   - Business documents

#### B. Get Live API Keys
1. Once verified, go to **Settings** → **API Keys & Webhooks**
2. Copy your **Live Keys**:
   - Public Key: `pk_live_...`
   - Secret Key: `sk_live_...`

#### C. Update Your `.env` File
```bash
# Change from test to live
VITE_PAYSTACK_PUBLIC_KEY=pk_live_YOUR_LIVE_PUBLIC_KEY_HERE
```

#### D. Update Google Apps Script
```javascript
// Line 11 - Change to live secret key
const PAYSTACK_SECRET_KEY = 'sk_live_YOUR_LIVE_SECRET_KEY_HERE';
```

#### E. Redeploy Apps Script
1. In Apps Script editor, click **Deploy** → **Manage deployments**
2. Click **✏️ Edit** on your existing deployment
3. Under **Version**, select **New version**
4. Click **Deploy**
5. URL stays the same (no need to update website)

---

## 🔒 SECURITY CHECKLIST

- [x] ✅ `.env` file created (contains public key only)
- [x] ✅ `.gitignore` includes `.env` (won't commit secrets)
- [ ] ⚠️ **NEVER** commit `.env` file to GitHub
- [ ] ⚠️ **NEVER** put secret key in frontend code
- [ ] ⚠️ Secret key should **ONLY** be in Google Apps Script
- [ ] ⚠️ Test thoroughly before going live
- [ ] ⚠️ Monitor transactions in Paystack dashboard

---

## 🧪 TEST CARDS (Test Mode Only)

| Card Type | Number | CVV | Expiry | PIN | OTP |
|-----------|--------|-----|--------|-----|-----|
| Success | 5060 6666 6666 6666 666 | 123 | 12/25 | 1234 | 123456 |
| Declined | 5060 6666 6666 6666 664 | 123 | 12/25 | 1234 | - |

---

## 🎯 BOOKING FLOW

```
1. Service Selection
   ↓
2. Schedule (Date & Time)
   ↓
3. Contact Details
   ↓
4. Payment (Paystack) ✨
   ↓
5. Confirmation
   ├── Save to Google Sheets
   ├── Create Calendar Event
   └── Send Confirmation Email
```

---

## 💰 PAYSTACK FEES (Ghana)

- **Local Cards:** 1.95% + GHS 0.50 per transaction
- **International Cards:** 3.9% + GHS 0.50 per transaction
- **Mobile Money:** 1.95% capped at GHS 10

**Example for GHS 1,500 booking:**
- Fee: ~GHS 29.75
- You receive: ~GHS 1,470.25

---

## 📞 SUPPORT & TROUBLESHOOTING

### Common Issues:

**1. Payment not verifying**
- Check secret key is correct in Apps Script
- View Paystack Dashboard → Transactions to see payment status
- Check Apps Script logs: Extensions → Apps Script → Execution log

**2. Calendar invitation not sending**
- Verify `CALENDAR_ID` is your correct email
- Check Google Calendar settings allow invitations
- Check spam folder

**3. Booking not saving to sheet**
- Check Apps Script permissions are granted
- View Apps Script execution log for errors
- Verify sheet name matches exactly: "Bookings"

**4. Environment variable not loading**
- Restart your development server after creating `.env`
- Ensure `.env` is in project root (not `/src/`)
- Verify variable name starts with `VITE_`

---

## 🎉 YOU'RE READY!

Your booking system is now fully integrated with:
- ✅ Secure Paystack payments
- ✅ Google Calendar sync
- ✅ Automated email confirmations
- ✅ Google Sheets tracking
- ✅ 48/24-hour advance booking enforcement

**Next:** Test with test cards, then go live when ready! 🚀

---

## 📧 QUESTIONS?

- **Paystack Support:** support@paystack.com
- **Paystack Docs:** https://paystack.com/docs
- **Test Dashboard:** https://dashboard.paystack.com (test mode toggle in bottom left)
