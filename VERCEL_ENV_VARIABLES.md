# 🔐 Graduate Consult - Environment Variables for Production

## **CRITICAL: ADD THESE TO VERCEL BEFORE DEPLOYMENT**

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

---

## **1. BOOKING SYSTEM** ⚠️ CRITICAL - £550 Phase 2

### Variable Name:
```
VITE_BOOKING_SCRIPT_URL
```

### Value:
```
https://script.google.com/macros/s/AKfycbwDQSl20G4Y1VRB3DG9tVaFOc2RRi_JPC8Ho2aIYMyx01s3lf2RiXZKKsId0ZIjIGnOHA/exec
```

### What it does:
- Creates Google Calendar events with Meet links
- Sends email notifications to admin and clients
- Logs bookings to "Graduate Consult - Booking System" spreadsheet
- Handles payment tracking

### Used in:
- `/src/app/pages/BookingPage.tsx` (line 114)

### Status:
✅ **NOW USING ENVIRONMENT VARIABLE**

---

## **2. CONTACT & INQUIRY FORMS** ⚠️ CRITICAL

### Variable Name:
```
VITE_CONTACT_SCRIPT_URL
```

### Value:
```
https://script.google.com/macros/s/AKfycbz3n-y-KfNw4Ya_B2r7qMPgILDc90sVWSnHv_BowbILdqGUShNI3MgEtb1eeyQNFUj1zA/exec
```

### What it does:
- Routes general contact forms to "General" tab
- Routes organizational inquiries to "Organisations" tab
- Sends professional email notifications to info@graduateconsult.com
- Logs all submissions to "Graduate Consult Inquiry" spreadsheet

### Used in:
- `/src/app/pages/ContactPage.tsx` (line 44)
- `/src/app/components/OrganizationalInquiryForm.tsx` (line 36)

### Status:
✅ **NOW USING ENVIRONMENT VARIABLE**

---

## **3. PAYSTACK PAYMENT** ⚠️ CURRENTLY TEST MODE

### Variable Name:
```
VITE_PAYSTACK_PUBLIC_KEY
```

### Value (TEST MODE):
```
pk_test_89e61fadd249bbab5f508110482254a193037114
```

### What it does:
- Processes payments for Individual Consultations (GHS 700)
- Processes payments for Organisational Services
- Supports Card, Bank, and Mobile Money payments

### Used in:
- `/src/app/components/PaystackPayment.tsx` (line 31)

### Status:
✅ **NOW USING ENVIRONMENT VARIABLE**

### ⚠️ IMPORTANT - FOR LIVE PAYMENTS:
1. Go to Paystack Dashboard: https://dashboard.paystack.com/
2. Navigate to: **Settings → API Keys & Webhooks**
3. Copy your **Live Public Key** (starts with `pk_live_...`)
4. Replace the test key above with your live key in Vercel
5. Redeploy

### 🧪 TEST PAYMENT CREDENTIALS:
- **Card Number:** 5060 6666 6666 6666 666
- **CVV:** 123
- **Expiry:** Any future date
- **PIN:** 1234
- **OTP:** 123456

---

## **4. NEWSLETTER SYSTEM** ✅ ALREADY CONFIGURED

### Variable Name:
```
VITE_NEWSLETTER_SCRIPT_URL
```

### Value:
```
https://script.google.com/macros/s/AKfycbz_LP_TwtqUZD_joC-LdIkBTxDrA8OiBAcq2WLwO3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec
```

### What it does:
- Handles newsletter subscriptions
- Manages unsubscribe requests
- Processes resubscribe requests
- Logs to spreadsheet

### Used in:
- `/src/app/components/NewsletterForm.tsx` (line 54)
- `/src/app/pages/UnsubscribePage.tsx` (lines 54 & 104)

### Status:
✅ **ALREADY USING ENVIRONMENT VARIABLE**

---

## **📋 HOW TO ADD ENVIRONMENT VARIABLES IN VERCEL**

### **Step 1: Access Environment Variables**
1. Go to: https://vercel.com/
2. Select your project: **graduate-consult-phase2**
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)

### **Step 2: Add Each Variable**
For each of the 4 variables above:

1. Click **"Add New"** button
2. **Key/Name:** Enter the variable name (e.g., `VITE_BOOKING_SCRIPT_URL`)
3. **Value:** Paste the URL/key exactly as shown above
4. **Environments:** Select **ALL THREE**:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Click **"Save"**
6. Repeat for all 4 variables

### **Step 3: Redeploy**
After adding all variables:
1. Go to **Deployments** tab
2. Click **"Redeploy"** on the latest deployment
3. Wait 2-3 minutes for deployment to complete

---

## **✅ QUICK SETUP CHECKLIST**

Copy and paste this checklist:

### **Environment Variables Added:**
- [ ] `VITE_BOOKING_SCRIPT_URL` (Booking System)
- [ ] `VITE_CONTACT_SCRIPT_URL` (Contact & Inquiry Forms)
- [ ] `VITE_PAYSTACK_PUBLIC_KEY` (Payment Gateway)
- [ ] `VITE_NEWSLETTER_SCRIPT_URL` (Newsletter System)

### **All Variables Set to:**
- [ ] Production ✅
- [ ] Preview ✅
- [ ] Development ✅

### **Post-Deployment:**
- [ ] Redeployed on Vercel
- [ ] Tested booking form (creates calendar event)
- [ ] Tested contact form (sends email to info@graduateconsult.com)
- [ ] Tested organizational inquiry (routes to Organisations tab)
- [ ] Tested payment (Paystack modal opens)
- [ ] Tested newsletter subscription (logs to spreadsheet)

---

## **🧪 TESTING AFTER DEPLOYMENT**

### **1. Test Booking System**
**URL:** https://www.graduateconsult.com/booking

**Test Individual Consultation:**
1. Click "Career Coaching" service
2. Select a date/time (must be 48+ hours in advance)
3. Fill in contact details
4. Complete test payment
5. **Expected:**
   - ✅ Confirmation page shown
   - ✅ Google Calendar invite sent to your email
   - ✅ Admin gets calendar invite
   - ✅ Data logged to "Graduate Consult - Booking System" spreadsheet

### **2. Test Contact Form**
**URL:** https://www.graduateconsult.com/contact

**Test General Inquiry:**
1. Fill out contact form (name, email, message)
2. Click "Send Inquiry"
3. **Expected:**
   - ✅ Success message shown
   - ✅ Email sent to info@graduateconsult.com
   - ✅ Data appears in "General" tab of "Graduate Consult Inquiry" spreadsheet

### **3. Test Organizational Inquiry**
**URL:** https://www.graduateconsult.com/booking

**Test Organisational Form:**
1. Click "Organisational Solutions" tab
2. Fill out organizational inquiry form
3. Submit
4. **Expected:**
   - ✅ Success message shown
   - ✅ Priority email sent to info@graduateconsult.com
   - ✅ Data appears in "Organisations" tab of "Graduate Consult Inquiry" spreadsheet

### **4. Test Payment**
**URL:** https://www.graduateconsult.com/booking

**Test Paystack:**
1. Start booking process
2. Get to payment step
3. Click "Pay Securely"
4. **Expected:**
   - ✅ Paystack modal opens
   - ✅ Can select Card/Bank/Mobile Money
   - ✅ Test payment completes (use test card above)

### **5. Test Newsletter**
**URL:** https://www.graduateconsult.com (footer)

**Test Subscribe:**
1. Enter email in newsletter form
2. Click Subscribe
3. **Expected:**
   - ✅ Success message shown
   - ✅ Email logged to newsletter spreadsheet

---

## **🚨 TROUBLESHOOTING**

### **Issue: Forms not submitting**
**Solution:**
1. Check browser console (F12) for errors
2. Verify environment variables are set correctly
3. Ensure all 3 environments are selected (Production, Preview, Development)
4. Redeploy after adding variables

### **Issue: Payment not working**
**Solution:**
1. Check if Paystack public key is set correctly
2. Verify you're using test credentials in test mode
3. Check Paystack Dashboard for transaction logs
4. Ensure `VITE_PAYSTACK_PUBLIC_KEY` is added to all environments

### **Issue: No emails being sent**
**Solution:**
1. Check Google Apps Script execution logs
2. Verify script URLs are correct and accessible
3. Ensure email permissions are granted in Google Apps Script
4. Check spam folder for test emails

### **Issue: Calendar events not created**
**Solution:**
1. Verify booking script URL is correct
2. Check Google Apps Script has Calendar API permissions
3. Ensure admin calendar is properly configured
4. Check Apps Script execution logs for errors

---

## **📊 GOOGLE APPS SCRIPT URLS - SUMMARY**

| Feature | Script URL | Environment Variable | Status |
|---------|------------|---------------------|--------|
| **Booking System** | `...Ho2aIYMyx01s3lf2RiXZKKsId0ZIjIGnOHA/exec` | `VITE_BOOKING_SCRIPT_URL` | ✅ Updated |
| **Contact/Inquiry** | `...NI3MgEtb1eeyQNFUj1zA/exec` | `VITE_CONTACT_SCRIPT_URL` | ✅ Updated |
| **Newsletter** | `...O3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec` | `VITE_NEWSLETTER_SCRIPT_URL` | ✅ Already done |
| **Payment** | Paystack Test Key | `VITE_PAYSTACK_PUBLIC_KEY` | ✅ Updated |

---

## **🔒 SECURITY NOTES**

### **Why Environment Variables?**
- ✅ Keeps sensitive URLs/keys out of code
- ✅ Easy to update without code changes
- ✅ Different keys for dev/staging/production
- ✅ More secure than hardcoding

### **Public vs Private Keys**
- **Paystack Public Key:** ✅ Safe to expose (used in frontend)
- **Google Apps Script URLs:** ⚠️ Should be protected (use environment variables)

### **Best Practices**
- ✅ Never commit `.env` files to Git
- ✅ Use different keys for test/production
- ✅ Rotate keys if compromised
- ✅ Monitor Google Apps Script execution logs

---

## **📞 SUPPORT CONTACTS**

**Email:** info@graduateconsult.com  
**Phone:** +233 24 796 0067  
**Website:** https://www.graduateconsult.com

---

**Generated:** February 22, 2026  
**Project:** Graduate Consult Phase 2 - Booking & Payment System  
**Budget:** £550  
**Status:** ✅ All forms now use environment variables
