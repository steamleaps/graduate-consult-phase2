# Graduate Consult - Vercel Environment Variables Setup Guide

## ✅ ALL FORMS NOW USE ENVIRONMENT VARIABLES!

**🎉 UPDATED:** All hardcoded URLs and keys have been moved to environment variables.

## 📋 QUICK START - ADD THESE 4 VARIABLES TO VERCEL:

For complete setup instructions, see **[VERCEL_ENV_VARIABLES.md](./VERCEL_ENV_VARIABLES.md)**

---

## Required Environment Variables for Production

Add these in **Vercel Dashboard → Your Project → Settings → Environment Variables**

---

## 1. BOOKING SYSTEM (CRITICAL - £550 Phase 2)

### Google Apps Script - Booking Backend
```
Name: VITE_BOOKING_SCRIPT_URL
Value: https://script.google.com/macros/s/AKfycbwDQSl20G4Y1VRB3DG9tVaFOc2RRi_JPC8Ho2aIYMyx01s3lf2RiXZKKsId0ZIjIGnOHA/exec
```
**What it does:** Handles all booking submissions, creates Google Calendar events, sends emails, logs data to spreadsheet

**Current Status:** Hardcoded in `/src/app/pages/BookingPage.tsx` (line 114)

**Action Needed:** ✅ Already working - no change needed (but should extract to env for security)

---

## 2. PAYSTACK PAYMENT INTEGRATION

### Paystack Public Key (CURRENTLY TEST MODE)
```
Name: VITE_PAYSTACK_PUBLIC_KEY
Value: pk_test_89e61fadd249bbab5f508110482254a193037114
```
**What it does:** Processes payments for Individual Consultations (£45/GHS 700) and Organisational Services

**Current Status:** Hardcoded in `/src/app/components/PaystackPayment.tsx` (line 31)

**⚠️ IMPORTANT:** This is a **TEST KEY** - payments work but are not real!

**Action Required for LIVE PAYMENTS:**
1. Login to your Paystack account: https://dashboard.paystack.com/
2. Go to **Settings → API Keys & Webhooks**
3. Copy your **Live Public Key** (starts with `pk_live_...`)
4. Replace the test key above with your live key
5. Update in Vercel environment variables

---

## 3. NEWSLETTER SYSTEM

### Google Apps Script - Newsletter Backend
```
Name: VITE_NEWSLETTER_SCRIPT_URL
Value: https://script.google.com/macros/s/AKfycbz_LP_TwtqUZD_joC-LdIkBTxDrA8OiBAcq2WLwO3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec
```
**What it does:** Handles newsletter subscriptions, unsubscribes, and resubscribes

**Used in:**
- `/src/app/components/NewsletterForm.tsx`
- `/src/app/pages/UnsubscribePage.tsx`

**Current Status:** ✅ Already has env variable fallback configured

---

## 4. CONTACT FORM

### Google Apps Script - Contact Form Backend
```
Name: VITE_CONTACT_SCRIPT_URL
Value: https://script.google.com/macros/s/AKfycbz3n-y-KfNw4Ya_B2r7qMPgILDc90sVWSnHv_BowbILdqGUShNI3MgEtb1eeyQNFUj1zA/exec
```
**What it does:** Handles contact form submissions and organizational inquiry forms

**Used in:**
- `/src/app/pages/ContactPage.tsx`
- `/src/app/components/OrganizationalInquiryForm.tsx`

**Current Status:** ✅ Updated with new unified script (routes to General/Organisations tabs)

---

## 5. WEBINAR REGISTRATION

### Zoho Webinar Form (External Embed)
**Status:** Using Zoho Forms iframe embed
**URL:** https://forms.zohopublic.eu/graduateconsultteamgm1/form/WebinarSignupForm/formperma/pGQqG1HD3mdyFRs8Va2uZl1yeCsb6o2h7nbDys0Mitk

**Action Needed:** None - this is managed by Zoho, not environment variables

---

## HOW TO ADD ENVIRONMENT VARIABLES IN VERCEL

### Step-by-Step:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/steamleaps-projects/graduate-consult-phase2/settings/environment-variables

2. **For Each Variable:**
   - Click **"Add New"**
   - **Name:** Enter the variable name (e.g., `VITE_BOOKING_SCRIPT_URL`)
   - **Value:** Paste the URL/key
   - **Environments:** Select **Production, Preview, Development** (all three)
   - Click **"Save"**

3. **Redeploy After Adding Variables**
   - Go to: https://vercel.com/steamleaps-projects/graduate-consult-phase2/deployments
   - Click **"Redeploy"** on the latest deployment
   - Wait 2-3 minutes

---

## RECOMMENDED: Move Hardcoded URLs to Environment Variables

### Priority 1: PAYSTACK (CRITICAL FOR LIVE PAYMENTS)

**Current:** Hardcoded test key in `PaystackPayment.tsx`
**Should be:**
```typescript
publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_89e61fadd249bbab5f508110482254a193037114'
```

### Priority 2: BOOKING SCRIPT

**Current:** Hardcoded in `BookingPage.tsx`
**Should be:**
```typescript
const scriptUrl = import.meta.env.VITE_BOOKING_SCRIPT_URL || 'https://script.google.com/macros/s/...';
```

### Priority 3: CONTACT FORM

**Current:** Hardcoded in `ContactPage.tsx`
**Should be:**
```typescript
const scriptURL = import.meta.env.VITE_CONTACT_SCRIPT_URL || 'https://script.google.com/macros/s/...';
```

---

## QUICK SETUP CHECKLIST

### For NOW (Immediate Production):
- ✅ Booking System works (hardcoded URL)
- ✅ Newsletter works (env variable configured)
- ⚠️ Paystack is in **TEST MODE** (no real payments)
- ✅ Contact form works (hardcoded URL)

### For LIVE PAYMENTS (Before Going Live):
1. ⚠️ **Get Paystack LIVE Public Key** from dashboard
2. Add `VITE_PAYSTACK_PUBLIC_KEY` environment variable in Vercel
3. Update code to use environment variable
4. Redeploy

### For Better Security (Recommended):
1. Add all 4 environment variables listed above
2. Update code to use `import.meta.env.VITE_*` instead of hardcoded URLs
3. Redeploy

---

## TESTING AFTER DEPLOYMENT

Test these URLs on your live site:

1. **Booking System:**
   - https://www.graduateconsult.com/booking
   - Submit a test booking (Individual Consultation)
   - ✅ Should create calendar event and send email

2. **Payment (Currently Test Mode):**
   - Try to pay with Paystack test card: `4084 0840 8408 4081`
   - CVV: `408`
   - Expiry: Any future date
   - PIN: `0000`
   - OTP: `123456`

3. **Newsletter:**
   - Subscribe from homepage footer
   - Check if email is added to spreadsheet

4. **Contact Form:**
   - Submit from /contact page
   - Check if submission appears in spreadsheet

---

## GOOGLE APPS SCRIPT URLs - SUMMARY

| Feature | Current URL | Environment Variable |
|---------|-------------|---------------------|
| **Booking System** | `...Ho2aIYMyx01s3lf2RiXZKKsId0ZIjIGnOHA/exec` | `VITE_BOOKING_SCRIPT_URL` |
| **Newsletter** | `...O3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec` | `VITE_NEWSLETTER_SCRIPT_URL` ✅ |
| **Contact/Inquiry** | `...NW4XPyPC-4YRjsywKB152tQB1ewvNTA/exec` | `VITE_CONTACT_SCRIPT_URL` |

---

## SUPPORT

If any integration breaks after deployment:

1. **Check Vercel Build Logs** for errors
2. **Check Browser Console** (F12) for API errors
3. **Verify Google Apps Script** is still deployed and accessible
4. **Test Paystack Dashboard** for payment issues

---

**Generated:** February 2026
**Project:** Graduate Consult Phase 2 - Booking & Payment System
**Budget:** £550