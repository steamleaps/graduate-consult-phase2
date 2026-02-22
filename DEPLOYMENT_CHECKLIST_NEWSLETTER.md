# ✅ Newsletter System - Deployment Checklist

Use this checklist to deploy the newsletter subscription system to production.

---

## 📋 Pre-Deployment Steps

### ✅ Step 1: Google Sheet Setup (10 minutes)

- [ ] **Create Google Sheet**
  - Go to https://sheets.google.com
  - Create new spreadsheet
  - Name it: "Graduate Consult Newsletter"

- [ ] **Add Column Headers (Row 1)**
  - A1: `Timestamp`
  - B1: `Email`
  - C1: `Name`
  - D1: `Status`
  - E1: `Unsubscribed Date`
  - F1: `Source`

- [ ] **Format Headers**
  - Bold the header row
  - Add background color
  - Freeze Row 1 (View → Freeze → 1 row)

### ✅ Step 2: Apps Script Setup (5 minutes)

- [ ] **Open Apps Script Editor**
  - In Google Sheet: Extensions → Apps Script
  - Delete any existing code

- [ ] **Paste Script Code**
  - Copy complete script from `GOOGLE_SHEETS_SETUP_GUIDE.md`
  - Paste into editor
  - Verify `SHEET_NAME = 'Sheet1'` matches your sheet name

- [ ] **Save Script**
  - Click Save icon (💾)
  - Name project: "Newsletter Manager"

### ✅ Step 3: Deploy Apps Script (5 minutes)

- [ ] **Create New Deployment**
  - Click Deploy → New deployment
  - Click gear icon ⚙️ → Select "Web app"

- [ ] **Configure Deployment**
  - Description: `Newsletter Subscription Handler`
  - Execute as: `Me (your@email.com)`
  - Who has access: **"Anyone"** ⚠️ Important!

- [ ] **Authorize Script**
  - Click Deploy
  - Click Authorize access
  - Select your Google account
  - Click Advanced → Go to Newsletter Manager (unsafe)
  - Click Allow

- [ ] **Copy Web App URL**
  - Copy the full URL (ends with `/exec`)
  - Save it for next step

---

## 🚀 Production Deployment

### ✅ Step 4: Vercel Configuration (3 minutes)

- [ ] **Add Environment Variable**
  - Go to https://vercel.com/dashboard
  - Select "graduateconsult" project
  - Go to Settings → Environment Variables

- [ ] **Create New Variable**
  - Name: `VITE_NEWSLETTER_SCRIPT_URL`
  - Value: [Paste your Web App URL from Step 3]
  - Environment: Select **all three** (Production, Preview, Development)
  - Click Save

- [ ] **Verify Variable Added**
  - Check it appears in the list
  - Verify name is exactly: `VITE_NEWSLETTER_SCRIPT_URL`

### ✅ Step 5: Redeploy Website (2 minutes)

- [ ] **Trigger Redeployment**
  - Go to Deployments tab
  - Find latest deployment
  - Click "•••" menu
  - Click "Redeploy"
  - Wait for deployment to complete (usually 1-2 minutes)

- [ ] **Verify Deployment Success**
  - Check deployment status is "Ready"
  - Note the deployment URL

---

## 🧪 Testing & Verification

### ✅ Step 6: Test Subscribe Function (5 minutes)

- [ ] **Test Newsletter Page**
  - Visit: https://www.graduateconsult.com/newsletter
  - Page loads without errors ✓
  - Form displays correctly ✓

- [ ] **Test Subscription**
  - Enter test email: `test@example.com`
  - Enter name: `Test User`
  - Click "Subscribe to Newsletter"
  - See loading spinner ✓
  - See success message ✓
  - Success message includes unsubscribe link ✓

- [ ] **Verify in Google Sheet**
  - Open your Google Sheet
  - New row appears ✓
  - Timestamp is correct ✓
  - Email is `test@example.com` ✓
  - Name is `Test User` ✓
  - Status is `Subscribed` ✓
  - Source is `Newsletter Page` ✓

### ✅ Step 7: Test Unsubscribe Function (5 minutes)

- [ ] **Test Unsubscribe Page**
  - Visit: https://www.graduateconsult.com/unsubscribe
  - Page loads without errors ✓
  - Form displays correctly ✓

- [ ] **Test Unsubscription**
  - Enter the same email: `test@example.com`
  - Click "Unsubscribe"
  - See loading spinner ✓
  - See success message ✓
  - See resubscribe button ✓

- [ ] **Verify in Google Sheet**
  - Open your Google Sheet
  - Find the test email row
  - Status changed to `Unsubscribed` ✓
  - Unsubscribed Date is filled ✓

### ✅ Step 8: Test Resubscribe Function (3 minutes)

- [ ] **Test Resubscribe Button**
  - On unsubscribe success page
  - Click "Resubscribe to Newsletter"
  - See loading spinner ✓
  - See "Welcome Back!" message ✓

- [ ] **Verify in Google Sheet**
  - Status changed back to `Subscribed` ✓
  - Timestamp updated ✓
  - Unsubscribed Date cleared ✓

### ✅ Step 9: Test URL Pre-fill (2 minutes)

- [ ] **Test Email Pre-fill**
  - Visit: `https://www.graduateconsult.com/unsubscribe?email=test@example.com`
  - Email field is pre-filled ✓
  - Can submit without typing ✓

---

## 📱 Mobile Testing

### ✅ Step 10: Mobile Responsiveness (5 minutes)

- [ ] **Test on Mobile Device**
  - Newsletter page displays correctly ✓
  - Form is touch-friendly ✓
  - Buttons are easily tappable (min 44px) ✓
  - Text is readable ✓

- [ ] **Test Unsubscribe on Mobile**
  - Unsubscribe page displays correctly ✓
  - Buttons work properly ✓
  - Success messages are visible ✓

- [ ] **Test Different Browsers**
  - Chrome/Safari on iOS ✓
  - Chrome on Android ✓

---

## 🔍 Edge Cases Testing

### ✅ Step 11: Error Handling (5 minutes)

- [ ] **Test Invalid Email**
  - Enter: `notanemail`
  - Click Subscribe
  - See error: "Please enter a valid email address" ✓

- [ ] **Test Empty Email**
  - Leave email blank
  - Click Subscribe
  - See error: "Please enter your email address" ✓

- [ ] **Test Duplicate Subscription**
  - Subscribe with same email twice
  - Should still work (updates timestamp) ✓
  - Check Google Sheet shows only one entry ✓

---

## 🎨 Visual Verification

### ✅ Step 12: Design Consistency (5 minutes)

- [ ] **Newsletter Page**
  - Colors match brand (#1E3A8A) ✓
  - Typography: Cormorant Garamond for headings ✓
  - Typography: Inter for body text ✓
  - Animations work smoothly ✓
  - No layout shifts ✓

- [ ] **Unsubscribe Page**
  - Design matches newsletter page ✓
  - Icons display correctly ✓
  - Success states are clear ✓

- [ ] **Footer Link**
  - "Unsubscribe" link visible in footer ✓
  - Link goes to correct page ✓
  - Styling matches footer design ✓

---

## 📊 SEO Verification

### ✅ Step 13: SEO & Meta Tags (3 minutes)

- [ ] **Newsletter Page SEO**
  - View page source
  - Check title tag is correct ✓
  - Check meta description exists ✓
  - Check canonical URL is correct ✓

- [ ] **Unsubscribe Page SEO**
  - View page source
  - Check noindex tag exists ✓
  - (We don't want unsubscribe page indexed)

- [ ] **Sitemap Update**
  - Visit: https://www.graduateconsult.com/sitemap.xml
  - Check `/newsletter` is listed ✓
  - Check `/unsubscribe` is listed ✓

---

## 🔐 Security Verification

### ✅ Step 14: Security Checks (3 minutes)

- [ ] **Environment Variables**
  - Script URL not visible in browser console ✓
  - No sensitive data exposed in network tab ✓

- [ ] **Spam Protection**
  - Honeypot field is hidden ✓
  - Honeypot field has no autocomplete ✓

- [ ] **Data Privacy**
  - Privacy policy link works ✓
  - Privacy policy mentions newsletter ✓
  - GDPR compliance statement present ✓

---

## 📈 Analytics Setup (Optional)

### ✅ Step 15: Tracking (5 minutes)

- [ ] **Google Analytics Events** (if using GA)
  - Newsletter subscription tracked
  - Unsubscribe tracked
  - Resubscribe tracked

- [ ] **Google Sheet Monitoring**
  - Set up Google Sheets notification for new rows
  - Or check sheet daily for new subscribers

---

## 🎉 Launch Verification

### ✅ Step 16: Final Checks (5 minutes)

- [ ] **All Systems Go**
  - Google Sheet is collecting data ✓
  - Newsletter form works ✓
  - Unsubscribe works ✓
  - Resubscribe works ✓
  - Mobile responsive ✓
  - Design matches brand ✓
  - SEO optimized ✓
  - No console errors ✓

- [ ] **Clean Up Test Data**
  - Delete test entries from Google Sheet
  - Or mark them clearly as "TEST"

- [ ] **Document Completion**
  - Save Google Sheet URL
  - Save Apps Script URL
  - Note deployment date
  - Update project documentation

---

## 📣 Post-Launch

### ✅ Step 17: Announcement (Optional)

- [ ] **Promote Newsletter**
  - Add call-to-action on homepage
  - Mention in blog posts
  - Share on social media
  - Add to email signature

- [ ] **Monitor First Week**
  - Check Google Sheet daily
  - Verify subscriptions are working
  - Monitor unsubscribe rate
  - Fix any issues quickly

---

## 🆘 Troubleshooting

### Common Issues & Solutions

**Issue: Form submits but no data in sheet**
- [ ] Check `VITE_NEWSLETTER_SCRIPT_URL` in Vercel
- [ ] Verify Apps Script is deployed to "Anyone"
- [ ] Check Apps Script Executions log for errors
- [ ] Redeploy Vercel after adding environment variable

**Issue: "Authorization required" error**
- [ ] Redeploy Apps Script
- [ ] Ensure "Execute as: Me" is selected
- [ ] Ensure "Who has access: Anyone" is selected

**Issue: Email not pre-filling on unsubscribe page**
- [ ] Check URL format: `/unsubscribe?email=user@example.com`
- [ ] Ensure email is URL encoded
- [ ] Clear browser cache and try again

**Issue: Unsubscribe doesn't update sheet**
- [ ] Check Apps Script `findEmailRow` function
- [ ] Verify email exists in sheet
- [ ] Check Apps Script Executions log

---

## 📞 Support Resources

**Documentation:**
- `GOOGLE_SHEETS_SETUP_GUIDE.md` - Complete setup guide
- `NEWSLETTER_QUICK_START.md` - Quick reference
- `PHASE_2_NEWSLETTER_COMPLETE.md` - Feature summary

**External Resources:**
- Google Apps Script Docs: https://developers.google.com/apps-script
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
- Google Sheets API: https://developers.google.com/sheets/api

---

## ✅ Sign-Off

**Deployment Completed By:** ___________________

**Date:** ___________________

**Verified By:** ___________________

**Notes:**
_______________________________________________________
_______________________________________________________
_______________________________________________________

---

## 🎊 Congratulations!

Your newsletter subscription system is now live! 🚀

**Next Steps:**
1. Start promoting your newsletter
2. Monitor subscriber growth
3. Plan your first newsletter campaign
4. Set up email marketing platform (Mailchimp, ConvertKit, etc.)
5. Export subscribers and start sending valuable content!

---

**System Status:** ✅ DEPLOYED & OPERATIONAL

**Live URLs:**
- Newsletter: https://www.graduateconsult.com/newsletter
- Unsubscribe: https://www.graduateconsult.com/unsubscribe

**Google Sheet:** [Link to your sheet]

**Last Updated:** February 17, 2026
