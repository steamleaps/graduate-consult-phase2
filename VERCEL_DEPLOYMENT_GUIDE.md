# 🚀 Vercel Deployment Guide for Graduate Consult

## Complete Step-by-Step Guide to Deploy Your React Website to Vercel (FREE)

---

## 📋 **What You'll Need**

- ✅ GitHub account (free)
- ✅ Vercel account (free - sign up with GitHub)
- ✅ Your domain credentials (from Wix or domain registrar)
- ⏱️ **Total time: 20-30 minutes**
- 💰 **Total cost: $0.00**

---

## 🎯 **Overview: The 3-Step Process**

1. **Push code to GitHub** (5 minutes)
2. **Deploy to Vercel** (5 minutes)
3. **Connect your domain** (10 minutes + DNS propagation time)

---

# STEP 1: Push Your Code to GitHub

## 1.1 Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click **"Sign up"**
3. Follow the registration process
4. Verify your email

## 1.2 Create a New Repository

1. Once logged in, click the **"+"** icon (top right)
2. Select **"New repository"**
3. Fill in the details:
   - **Repository name:** `graduate-consult-website`
   - **Description:** "Professional website for Graduate Consult"
   - **Visibility:** Choose "Private" (recommended) or "Public"
   - ❌ **DO NOT** check "Initialize with README"
4. Click **"Create repository"**

## 1.3 Upload Your Code to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. On your repository page, click **"uploading an existing file"**
2. **Drag and drop** your entire project folder into the upload area
3. **IMPORTANT:** Make sure you upload ALL files including:
   - `package.json`
   - `vite.config.ts`
   - `vercel.json` (just created)
   - `src/` folder (entire folder)
   - `index.html`
   - All other config files
4. Scroll down and click **"Commit changes"**

**Option B: Using Git Command Line (If you're comfortable with terminal)**

```bash
# Navigate to your project folder
cd path/to/graduate-consult-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Graduate Consult website"

# Connect to GitHub (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/graduate-consult-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Checkpoint:** Your code is now on GitHub! You should see all your files when you refresh the repository page.

---

# STEP 2: Deploy to Vercel

## 2.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest method)
4. Authorize Vercel to access your GitHub account
5. **No credit card required!**

## 2.2 Import Your Repository

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"graduate-consult-website"** and click **"Import"**

## 2.3 Configure Your Project

Vercel will detect it's a Vite project automatically. Verify these settings:

**Framework Preset:** `Vite`

**Build Settings:**
- **Build Command:** `npm run build` ✅ (auto-detected)
- **Output Directory:** `dist` ✅ (auto-detected)
- **Install Command:** `npm install` ✅ (auto-detected)

**Root Directory:** `./` (leave as is)

**Node Version:** 18.x or 20.x (default is fine)

**Environment Variables:** 
- ❌ None needed for now (leave empty)

## 2.4 Deploy!

1. Click **"Deploy"** button
2. Wait 2-5 minutes while Vercel builds your site
3. You'll see a progress screen with build logs
4. ✅ **Success!** When complete, you'll see: 
   - 🎉 Confetti animation
   - Your live site URL: `https://graduate-consult-website.vercel.app`

## 2.5 Test Your Deployment

1. Click **"Visit"** or the generated URL
2. Your website should load fully functional!
3. Test navigation, all pages, forms, etc.
4. ✅ **Checkpoint:** Website works on Vercel's temporary URL

---

# STEP 3: Connect Your Custom Domain

Now let's connect your actual domain (e.g., `graduateconsult.com`) to point to Vercel instead of Wix.

## 3.1 Add Domain in Vercel

1. In your Vercel project dashboard, click **"Settings"** (top menu)
2. Click **"Domains"** (left sidebar)
3. In the domain input field, enter your domain:
   - Type: `graduateconsult.com` (or whatever your domain is)
4. Click **"Add"**

## 3.2 Choose Domain Configuration

Vercel will show you DNS records to add. You'll see something like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**🔴 IMPORTANT:** Keep this Vercel tab open! You'll need these values.

---

## 3.3 Update DNS Settings

**Now you need to add these DNS records. Where you do this depends on where your domain is managed.**

### **Scenario A: Domain Registered Through Wix**

1. **Log in to Wix.com**
2. Go to **"My Domains"** or **"Domains"**
3. Find your domain (`graduateconsult.com`)
4. Click **"Manage DNS"** or **"Advanced DNS Settings"**

5. **Add the A Record:**
   - Click **"Add Record"** or **"+"**
   - Type: `A`
   - Host/Name: `@` (or leave blank)
   - Points to/Value: `76.76.21.21` (from Vercel)
   - TTL: `3600` (or default)
   - Click **"Save"**

6. **Add the CNAME Record:**
   - Click **"Add Record"** again
   - Type: `CNAME`
   - Host/Name: `www`
   - Points to/Value: `cname.vercel-dns.com` (from Vercel)
   - TTL: `3600` (or default)
   - Click **"Save"**

7. **Remove old records (if any):**
   - Look for existing A or CNAME records pointing to Wix
   - Delete them to avoid conflicts

### **Scenario B: Domain Registered Elsewhere (GoDaddy, Namecheap, etc.)**

1. **Log in to your domain registrar** (GoDaddy, Namecheap, Google Domains, etc.)
2. Find **"DNS Management"** or **"DNS Settings"**
3. Look for your domain's DNS records

4. **Update/Add A Record:**
   - Edit existing A record or add new one
   - Type: `A`
   - Host: `@`
   - Points to: `76.76.21.21`
   - TTL: Automatic or 3600
   - Save

5. **Update/Add CNAME Record:**
   - Edit existing CNAME or add new one
   - Type: `CNAME`
   - Host: `www`
   - Points to: `cname.vercel-dns.com`
   - TTL: Automatic or 3600
   - Save

---

## 3.4 Verify Domain Configuration

1. **Go back to Vercel** (the Domains tab)
2. After saving DNS records, Vercel will start verifying
3. You'll see status messages:
   - ⏳ "Pending Verification" (normal - wait)
   - ⚠️ "Invalid Configuration" (check DNS settings)
   - ✅ "Valid Configuration" (success!)

**⏱️ DNS Propagation Time:**
- Minimum: 10 minutes
- Average: 1-2 hours
- Maximum: 48 hours (rare)

**💡 Tip:** You can check DNS propagation at [dnschecker.org](https://dnschecker.org)

---

## 3.5 Enable HTTPS (Automatic)

1. Once domain is verified, Vercel automatically provisions SSL certificate
2. Wait 5-10 minutes
3. Your site will be available at:
   - ✅ `https://graduateconsult.com` (secure)
   - ✅ `https://www.graduateconsult.com` (secure)

---

# ✅ COMPLETION CHECKLIST

Check off each item as you complete it:

- [ ] Code uploaded to GitHub repository
- [ ] Vercel account created
- [ ] Project imported from GitHub to Vercel
- [ ] First deployment successful (visited temporary .vercel.app URL)
- [ ] Domain added in Vercel settings
- [ ] DNS A record updated (@ → 76.76.21.21)
- [ ] DNS CNAME record updated (www → cname.vercel-dns.com)
- [ ] Domain verified in Vercel (green checkmark)
- [ ] HTTPS certificate issued (green padlock in browser)
- [ ] Visited final domain and website loads correctly

---

# 🎉 SUCCESS! Your Website is Live

Your professional Graduate Consult website is now:

✅ **Live** at your custom domain  
✅ **Secure** with HTTPS  
✅ **Fast** with Vercel's global CDN  
✅ **Free** forever (for this tier)  
✅ **Auto-updates** whenever you push to GitHub  

---

# 🔄 How to Update Your Website in the Future

1. **Make changes** to your code locally
2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update homepage content"
   git push
   ```
3. **Automatic deployment:** Vercel detects the change and redeploys (2-3 minutes)
4. **Visit your site** - changes are live!

**No need to manually redeploy!** Vercel watches your GitHub repository.

---

# 🆘 TROUBLESHOOTING

## Problem: "Build Failed" on Vercel

**Solution:**
1. Check the build logs in Vercel
2. Common issues:
   - Missing dependencies → Add to `package.json`
   - Syntax errors → Fix in code
   - Import errors → Check file paths
3. Fix the error, push to GitHub, Vercel will auto-retry

## Problem: "Domain Not Verified" After 24 Hours

**Solution:**
1. Go to [dnschecker.org](https://dnschecker.org)
2. Enter your domain
3. Check if A record shows `76.76.21.21` globally
4. If not, double-check DNS settings in domain registrar
5. Make sure old records are deleted

## Problem: "SSL Certificate Pending" for Hours

**Solution:**
1. Make sure domain is fully verified first
2. Wait up to 24 hours (usually much faster)
3. If stuck, remove domain from Vercel and re-add it

## Problem: Website Shows 404 on Page Refresh

**Solution:**
- ✅ You already have `vercel.json` with rewrites configured
- This should not happen
- If it does, verify `vercel.json` exists in your repository

---

# 📞 SUPPORT RESOURCES

**Vercel Documentation:**
- [Vercel Docs](https://vercel.com/docs)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/domains)
- [Deploying Vite Apps](https://vercel.com/docs/frameworks/vite)

**Community Support:**
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- Vercel Discord (link in their docs)

**DNS Help:**
- [DNS Checker Tool](https://dnschecker.org)
- [What is DNS? (Simple explanation)](https://www.cloudflare.com/learning/dns/what-is-dns/)

---

# 💰 COST BREAKDOWN

| Service | Monthly Cost | Notes |
|---------|--------------|-------|
| Vercel Hosting | **$0** | Hobby plan (free forever) |
| Bandwidth | **$0** | 100GB/month free (more than enough) |
| Build Time | **$0** | 6000 minutes/month free |
| SSL Certificate | **$0** | Automatic and included |
| **TOTAL** | **$0.00** | No credit card required |

**Wix Hosting Status:**
- Paid for but unused
- Cannot be refunded (sunk cost)
- Can let subscription expire or cancel anytime

---

# 🎓 WHAT YOU'VE ACCOMPLISHED

You've successfully:
1. ✅ Deployed a professional React application to production
2. ✅ Connected a custom domain with HTTPS security
3. ✅ Set up automatic deployments from GitHub
4. ✅ Created a modern, professional web presence
5. ✅ Saved thousands of dollars vs. traditional web hosting

**Your client now has a premium website at zero ongoing cost!**

---

# 📧 NEXT STEPS

Optional enhancements for the future:

1. **Add Analytics:**
   - Vercel Analytics (free tier available)
   - Google Analytics
   - Plausible Analytics

2. **Performance Monitoring:**
   - Vercel Speed Insights
   - Lighthouse reports

3. **Form Submissions:**
   - Connect newsletter signup to email service (Mailchimp, ConvertKit)
   - Set up contact form backend (Formspree, Netlify Forms)

4. **Custom Email:**
   - Set up email at your domain (Google Workspace, Zoho Mail)
   - Example: `info@graduateconsult.com`

---

**Need help?** Refer to the troubleshooting section or Vercel's extensive documentation.

**🎉 Congratulations on your successful deployment!**
