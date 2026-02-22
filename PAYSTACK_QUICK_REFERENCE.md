# 💳 Paystack Quick Reference Card

## 🔑 YOUR TEST CREDENTIALS

### Public Key (Frontend - Safe to use in React)
```
pk_test_89e61fadd249bbab5f508110482254a193037114
```
✅ Already configured in `.env` file

### Secret Key (Backend - Google Apps Script ONLY)
```
sk_test_e1fe435438a0b7c805817207f934903d484b26e4
```
⚠️ **NEVER** use in frontend code!  
✅ Already configured in `/GOOGLE_APPS_SCRIPT_CODE.js`

---

## 🧪 TEST CARDS

### ✅ Successful Payment
- **Card:** `5060 6666 6666 6666 666`
- **CVV:** `123`
- **Expiry:** `12/25` (any future date)
- **PIN:** `1234`
- **OTP:** `123456`

### ❌ Declined Payment (for testing error handling)
- **Card:** `5060 6666 6666 6666 664`
- **CVV:** `123`
- **Expiry:** `12/25`
- **PIN:** `1234`

---

## 🔗 IMPORTANT LINKS

- **Dashboard:** https://dashboard.paystack.com
- **Transactions:** https://dashboard.paystack.com/#/transactions
- **Settings:** https://dashboard.paystack.com/#/settings
- **API Keys:** https://dashboard.paystack.com/#/settings/developer
- **Documentation:** https://paystack.com/docs
- **Support:** support@paystack.com

---

## 📊 WHERE TO FIND THINGS

### In Paystack Dashboard:
- **Test/Live Mode Toggle:** Bottom left corner (switch to see test transactions)
- **All Transactions:** Transactions tab
- **Payment Links:** Payments → Payment Pages
- **Webhooks:** Settings → API Keys & Webhooks
- **Settlement Account:** Settings → Bank Accounts

### In Your Code:
- **Payment Component:** `/src/app/components/PaystackPayment.tsx`
- **Booking Flow:** `/src/app/pages/BookingPage.tsx`
- **Environment Variables:** `/.env` (don't commit!)
- **Google Apps Script:** `/GOOGLE_APPS_SCRIPT_CODE.js`

---

## ⚡ QUICK COMMANDS

### Start Development Server (if needed)
```bash
npm run dev
```

### Check Environment Variables Loaded
```bash
# In your browser console:
console.log(import.meta.env.VITE_PAYSTACK_PUBLIC_KEY)
# Should show: pk_test_89e61fadd249bbab5f508110482254a193037114
```

---

## 🎯 TESTING CHECKLIST

Before going live, test these scenarios:

- [ ] Book individual service (48hr advance booking enforced)
- [ ] Book organizational service (24hr advance booking enforced)
- [ ] Complete payment with test card
- [ ] Verify booking appears in Google Sheets
- [ ] Verify calendar invitation received
- [ ] Verify confirmation email received
- [ ] Test payment decline (use decline test card)
- [ ] Test "back" button navigation
- [ ] Test mobile responsiveness
- [ ] Check all email links work

---

## 💰 PAYSTACK FEES

| Payment Method | Fee |
|----------------|-----|
| Local Cards (Ghana) | 1.95% + GHS 0.50 |
| International Cards | 3.9% + GHS 0.50 |
| Mobile Money | 1.95% (capped at GHS 10) |
| Bank Transfer | 1.95% (capped at GHS 50) |

### Example Calculations:
- **GHS 500:** Fee = GHS 10.25, You get = GHS 489.75
- **GHS 1,500:** Fee = GHS 29.75, You get = GHS 1,470.25
- **GHS 3,000:** Fee = GHS 59.00, You get = GHS 2,941.00

---

## 🚨 TROUBLESHOOTING

### Payment not processing?
1. Check public key in `.env` is correct
2. Verify using test mode in Paystack dashboard
3. Check browser console for errors
4. Test with exact test card number (no spaces)

### Calendar invite not received?
1. Verify CALENDAR_ID in Apps Script is your email
2. Check spam/junk folder
3. View Apps Script execution log for errors

### Booking not saving?
1. Check Apps Script deployment URL in BookingPage.tsx
2. View Apps Script logs (Extensions → Apps Script → Executions)
3. Verify secret key in Apps Script is correct

### Environment variable not found?
1. Ensure `.env` file exists in root directory
2. Restart development server
3. Variable must start with `VITE_`

---

## 🔄 WHEN TO REDEPLOY APPS SCRIPT

You need to redeploy when you change:
- Secret key (test → live)
- Calendar ID
- Email templates
- Payment verification logic

**How to redeploy:**
1. Apps Script → Deploy → Manage deployments
2. Click ✏️ Edit
3. New version
4. Deploy
(URL stays the same - no website update needed!)

---

## 📱 CONTACT

### Paystack Support
- **Email:** support@paystack.com
- **Phone:** +234 1 888 3948
- **Twitter:** @PaystackHQ

### Your Integration Status
- ✅ **Test Mode:** Active
- ⏳ **Live Mode:** Awaiting verification
- 📋 **Next Step:** Complete business verification in Paystack dashboard

---

## 🎉 SUCCESS INDICATORS

✅ You'll know everything is working when:
1. Payment completes successfully
2. Paystack dashboard shows transaction
3. Google Sheet has new row with booking
4. Calendar invitation in email
5. Confirmation email received
6. User sees success message

---

**Last Updated:** February 18, 2026  
**Version:** 1.0 (Test Mode)
