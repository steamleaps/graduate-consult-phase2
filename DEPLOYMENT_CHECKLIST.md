# ✅ Graduate Consult Website Deployment Checklist

**Print this page and check off items as you complete them!**

---

## 🎯 PHASE 1: GitHub Setup (15 minutes)

**What you're doing:** Uploading your website code to GitHub

### Steps:

- [ ] **1.1** Go to [github.com](https://github.com) and create account (or log in)
- [ ] **1.2** Click "+" icon → "New repository"
- [ ] **1.3** Name it: `graduate-consult-website`
- [ ] **1.4** Set to Private (recommended)
- [ ] **1.5** Click "Create repository"
- [ ] **1.6** Upload all project files (drag and drop)
- [ ] **1.7** Click "Commit changes"
- [ ] **1.8** ✅ Verify all files visible on GitHub

**🎉 CHECKPOINT:** Your code is safely stored on GitHub!

---

## 🎯 PHASE 2: Vercel Deployment (10 minutes)

**What you're doing:** Deploying your website to free hosting

### Steps:

- [ ] **2.1** Go to [vercel.com](https://vercel.com)
- [ ] **2.2** Click "Sign Up" → "Continue with GitHub"
- [ ] **2.3** Authorize Vercel to access GitHub
- [ ] **2.4** Click "Add New..." → "Project"
- [ ] **2.5** Find and import `graduate-consult-website`
- [ ] **2.6** Verify settings:
  - Framework: Vite ✓
  - Build Command: `npm run build` ✓
  - Output Directory: `dist` ✓
- [ ] **2.7** Click "Deploy" button
- [ ] **2.8** Wait 2-5 minutes for build
- [ ] **2.9** ✅ See success screen with confetti!
- [ ] **2.10** Click "Visit" to test the site
- [ ] **2.11** ✅ Verify all pages work on `.vercel.app` URL

**🎉 CHECKPOINT:** Your website is live on the internet!

**Temporary URL:** `https://graduate-consult-website.vercel.app`

---

## 🎯 PHASE 3: Custom Domain Connection (20 minutes + waiting)

**What you're doing:** Connecting your real domain name to Vercel

### Part A: Add Domain in Vercel

- [ ] **3.1** In Vercel project, click "Settings"
- [ ] **3.2** Click "Domains" (left sidebar)
- [ ] **3.3** Type your domain: `______________________.com`
- [ ] **3.4** Click "Add"
- [ ] **3.5** ✅ Write down the DNS records Vercel shows you:

**Write these values here:**

```
A Record Value:     ______________________
CNAME Record Value: ______________________
```

- [ ] **3.6** Keep this Vercel tab open!

### Part B: Update DNS Settings

**Where is your domain registered?**

- [ ] Wix → Go to Section B1
- [ ] GoDaddy → Go to Section B2  
- [ ] Namecheap → Go to Section B3
- [ ] Other → See DNS_SETUP_QUICK_REFERENCE.md

---

### **B1: If Domain is on Wix**

- [ ] **3.7** Log in to [Wix.com](https://wix.com)
- [ ] **3.8** Click "Domains" (left menu)
- [ ] **3.9** Find your domain, click "Manage"
- [ ] **3.10** Click "Manage DNS Records" or "Advanced DNS"

**Delete old records:**
- [ ] **3.11** Find old A record (if exists) → Delete it
- [ ] **3.12** Find old CNAME for "www" (if exists) → Delete it

**Add new records:**
- [ ] **3.13** Click "Add Record"
- [ ] **3.14** Type: `A`
- [ ] **3.15** Name: `@` (or leave blank)
- [ ] **3.16** Value: `76.76.21.21`
- [ ] **3.17** TTL: `3600`
- [ ] **3.18** Click "Save"

- [ ] **3.19** Click "Add Record" again
- [ ] **3.20** Type: `CNAME`
- [ ] **3.21** Name: `www`
- [ ] **3.22** Value: `cname.vercel-dns.com`
- [ ] **3.23** TTL: `3600`
- [ ] **3.24** Click "Save"

---

### **B2: If Domain is on GoDaddy**

- [ ] **3.7** Log in to [GoDaddy.com](https://godaddy.com)
- [ ] **3.8** Go to "My Products" → "Domains"
- [ ] **3.9** Click your domain name
- [ ] **3.10** Scroll to "DNS" → Click "Manage DNS"

**Update/Add A record:**
- [ ] **3.11** Find existing A record with name `@`
  - If exists → Click "Edit" → Change Value to `76.76.21.21`
  - If not → Click "Add" → Type: A, Name: @, Value: 76.76.21.21
- [ ] **3.12** TTL: `1 Hour`
- [ ] **3.13** Click "Save"

**Update/Add CNAME:**
- [ ] **3.14** Find CNAME with name `www`
  - If exists → Edit → Change Value to `cname.vercel-dns.com`
  - If not → Add → Type: CNAME, Name: www, Value: cname.vercel-dns.com
- [ ] **3.15** TTL: `1 Hour`
- [ ] **3.16** Click "Save"

---

### **B3: If Domain is on Namecheap**

- [ ] **3.7** Log in to [Namecheap.com](https://namecheap.com)
- [ ] **3.8** Click "Domain List"
- [ ] **3.9** Click "Manage" next to your domain
- [ ] **3.10** Click "Advanced DNS" tab

**Add A record:**
- [ ] **3.11** Click "Add New Record"
- [ ] **3.12** Type: `A Record`
- [ ] **3.13** Host: `@`
- [ ] **3.14** Value: `76.76.21.21`
- [ ] **3.15** TTL: `Automatic`
- [ ] **3.16** Click checkmark to save

**Add CNAME:**
- [ ] **3.17** Click "Add New Record"
- [ ] **3.18** Type: `CNAME Record`
- [ ] **3.19** Host: `www`
- [ ] **3.20** Value: `cname.vercel-dns.com`
- [ ] **3.21** TTL: `Automatic`
- [ ] **3.22** Click checkmark to save

---

### Part C: Verify Configuration

- [ ] **3.25** Go back to Vercel "Domains" tab
- [ ] **3.26** Wait and watch for verification status
- [ ] **3.27** Status changes to "Valid Configuration" ✅
  - *If still "Pending" after 10 minutes, that's normal - keep waiting*
  - *Can take up to 24 hours*

**Check DNS propagation:**
- [ ] **3.28** Go to [dnschecker.org](https://dnschecker.org)
- [ ] **3.29** Enter your domain
- [ ] **3.30** Select "A" record type
- [ ] **3.31** ✅ Confirm showing `76.76.21.21` in most locations

**Wait for HTTPS:**
- [ ] **3.32** Wait 5-30 minutes after domain verification
- [ ] **3.33** Visit `https://yourdomain.com`
- [ ] **3.34** ✅ See green padlock in browser

---

## 🎉 FINAL VERIFICATION (5 minutes)

### Test everything works:

- [ ] **4.1** Visit `yourdomain.com` → Website loads ✅
- [ ] **4.2** Visit `www.yourdomain.com` → Website loads ✅
- [ ] **4.3** Green padlock (HTTPS) shows in browser ✅
- [ ] **4.4** Test all pages:
  - [ ] Home page
  - [ ] About page
  - [ ] Services page
  - [ ] Resources page
  - [ ] Blog page
  - [ ] Contact page
  - [ ] Newsletter page
  - [ ] Webinar registration page
- [ ] **4.5** Test on mobile device ✅
- [ ] **4.6** Test forms (newsletter signup, contact) ✅
- [ ] **4.7** Check social media links work ✅

---

## 🏆 SUCCESS!

**Congratulations! Your website is now:**

✅ Live on the internet  
✅ Secured with HTTPS  
✅ Accessible via your custom domain  
✅ Hosted for FREE on Vercel  
✅ Auto-deploying when you update code  

---

## 📝 Save These Important URLs

**Write down for future reference:**

| What | URL |
|------|-----|
| **Live Website** | https://_________________________.com |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **GitHub Repository** | https://github.com/____________/graduate-consult-website |
| **Domain Registrar** | https://_________________________.com |

---

## 🔄 Future Updates (How to Change Website)

When you want to update your website:

1. [ ] Make changes to code files
2. [ ] Upload to GitHub (or push via git)
3. [ ] Vercel automatically deploys (2-3 minutes)
4. [ ] Visit website to see changes live

**No need to manually redeploy!**

---

## 🆘 If Something Goes Wrong

### Website not loading after 24 hours:

1. Check this guide: `DNS_SETUP_QUICK_REFERENCE.md`
2. Verify DNS records are correct
3. Check dnschecker.org
4. Contact Vercel support (free)

### Build failed in Vercel:

1. Click "View Build Logs" in Vercel
2. Look for error message
3. Fix error in code
4. Push to GitHub again
5. Vercel auto-retries

---

## 📊 Time Investment Summary

| Phase | Time Required |
|-------|---------------|
| GitHub setup | 15 minutes |
| Vercel deployment | 10 minutes |
| DNS configuration | 20 minutes |
| DNS propagation (waiting) | 1-24 hours |
| Testing | 5 minutes |
| **Total active work** | **50 minutes** |

---

## 💰 Cost Summary

| Service | Monthly Cost |
|---------|--------------|
| Vercel hosting | $0.00 |
| GitHub | $0.00 |
| SSL certificate | $0.00 |
| Bandwidth | $0.00 |
| **TOTAL** | **$0.00** |

**Wix:** Already paid, sitting unused (sunk cost - not recoverable)

---

## 🎓 What You've Learned

Through this process, you've:

✅ Used version control (GitHub)  
✅ Deployed a production web application  
✅ Configured DNS records  
✅ Set up SSL/HTTPS security  
✅ Used modern cloud hosting  
✅ Created a professional online presence  

**These are valuable technical skills!**

---

**Date completed:** ___________________

**Deployed by:** ___________________

**Domain:** ___________________

**Status:** ___________________

---

**🎉 You did it! Welcome to the world of modern web deployment!**

*Keep this checklist for future reference or when helping others deploy their websites.*
