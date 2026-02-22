# 🌐 DNS Setup Quick Reference Guide

## Simple Copy-Paste DNS Configuration for Vercel

---

## 📋 What DNS Records to Add

When Vercel asks you to configure your domain, you need to add these records in your domain's DNS settings:

### **Record 1: A Record (Root Domain)**

```
Type:  A
Name:  @ (or blank, or your domain name)
Value: 76.76.21.21
TTL:   3600 (or Automatic)
```

**What this does:** Points `graduateconsult.com` to Vercel's servers

---

### **Record 2: CNAME Record (WWW Subdomain)**

```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600 (or Automatic)
```

**What this does:** Points `www.graduateconsult.com` to Vercel's servers

---

## 🔍 Where to Find DNS Settings

### **If Your Domain is on Wix:**

1. Log in to **Wix.com**
2. Click **"Domains"** in the left menu
3. Find your domain
4. Click **"Manage"** or the three dots menu
5. Select **"Manage DNS Records"** or **"Advanced DNS"**
6. Click **"Add Record"** or **"+"**

---

### **If Your Domain is on GoDaddy:**

1. Log in to **GoDaddy.com**
2. Go to **"My Products"**
3. Find **"Domains"**
4. Click your domain name
5. Scroll down to **"DNS"** section
6. Click **"Manage DNS"**
7. Click **"Add"** under DNS Records

---

### **If Your Domain is on Namecheap:**

1. Log in to **Namecheap.com**
2. Click **"Domain List"** (left menu)
3. Click **"Manage"** next to your domain
4. Click **"Advanced DNS"** tab
5. Scroll to **"Host Records"**
6. Click **"Add New Record"**

---

### **If Your Domain is on Google Domains:**

1. Log in to **domains.google.com**
2. Click your domain
3. Click **"DNS"** (left menu)
4. Scroll to **"Custom records"**
5. Click **"Create new record"**

---

## ⚠️ IMPORTANT: Remove Conflicting Records

**Before adding new records, check for and DELETE:**

- Old A record pointing to Wix IP (usually `23.236.62.147` or similar)
- Old CNAME record pointing to `wix.com` or `wix-dns.net`

**Keep these records (don't delete):**
- MX records (for email)
- TXT records (for email verification)
- NS records (nameservers)

---

## ✅ Verification Steps

### **Step 1: Wait for DNS Propagation**
- Minimum: 10 minutes
- Average: 1-2 hours
- Maximum: 48 hours

### **Step 2: Check DNS Propagation**

**Option A: Use Online Tool**
1. Go to **https://dnschecker.org**
2. Enter your domain: `graduateconsult.com`
3. Select **"A"** record type
4. Click **"Search"**
5. ✅ You should see `76.76.21.21` in most locations

**Option B: Use Command Line (Windows)**
```cmd
nslookup graduateconsult.com
```

**Option C: Use Command Line (Mac/Linux)**
```bash
dig graduateconsult.com
```

### **Step 3: Check in Vercel**
1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Look for green checkmark ✅ next to your domain
4. Status should say **"Valid Configuration"**

---

## 🎯 Complete DNS Configuration Example

Here's what your DNS records should look like when finished:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|----------------|-----|
| **A** | @ | 76.76.21.21 | 3600 |
| **CNAME** | www | cname.vercel-dns.com | 3600 |
| MX | @ | (your email server) | 3600 |
| TXT | @ | (email verification) | 3600 |

**Note:** MX and TXT records are for email - don't change these if you have email set up!

---

## 🔧 Common DNS Configuration Mistakes

### ❌ Mistake 1: Wrong A Record Value
**Wrong:** `23.236.62.147` (Wix IP)  
**Correct:** `76.76.21.21` (Vercel IP)

### ❌ Mistake 2: CNAME Pointing to Old Service
**Wrong:** `www.wix.com` or `wix-dns.net`  
**Correct:** `cname.vercel-dns.com`

### ❌ Mistake 3: Both Old and New Records Exist
**Problem:** Conflict between Wix and Vercel records  
**Solution:** Delete old Wix records before adding Vercel records

### ❌ Mistake 4: Using CNAME for Root Domain
**Wrong:** CNAME record with name `@`  
**Correct:** Use A record for `@`, CNAME only for `www`

---

## 🆘 Troubleshooting Checklist

If your domain isn't working after 24 hours:

- [ ] A record exists with name `@` and value `76.76.21.21`
- [ ] CNAME record exists with name `www` and value `cname.vercel-dns.com`
- [ ] Old Wix A record is deleted
- [ ] Old Wix CNAME record is deleted
- [ ] TTL is set to 3600 or lower (not 86400)
- [ ] Checked dnschecker.org and see Vercel's IP globally
- [ ] Vercel shows "Valid Configuration" for domain
- [ ] Waited at least 2 hours since DNS changes

---

## 📱 Mobile App Alternative (Easier!)

Many domain registrars have mobile apps that make DNS management easier:

- **GoDaddy:** Has mobile app with DNS editor
- **Namecheap:** Has mobile app
- **Wix:** DNS editable in Wix Owner app

**These often have simpler interfaces than the desktop version!**

---

## 🎓 DNS Basics (Quick Explanation)

### **What is DNS?**
Think of DNS like a phone book for the internet:
- Your domain (`graduateconsult.com`) = Person's name
- Server IP (`76.76.21.21`) = Phone number
- DNS record = Entry in the phone book

### **What is an A Record?**
Points your domain name to a server's IP address
- `graduateconsult.com` → `76.76.21.21`

### **What is a CNAME Record?**
Points one domain name to another domain name
- `www.graduateconsult.com` → `cname.vercel-dns.com`
- Then `cname.vercel-dns.com` → `76.76.21.21`

### **What is TTL?**
"Time To Live" - How long computers cache the DNS record
- 3600 = 1 hour (good for changes)
- 86400 = 24 hours (slows down propagation)

---

## 📋 Pre-Change Checklist

Before you start changing DNS records:

1. [ ] Write down current DNS settings (take screenshots)
2. [ ] Note any email settings (MX records)
3. [ ] Have Vercel tab open with required DNS values
4. [ ] Have domain registrar login ready
5. [ ] Set aside 15 minutes of uninterrupted time

**Pro tip:** Take a screenshot of current DNS before making changes - safety net!

---

## ⏱️ Timeline Expectations

| Action | Time Required |
|--------|---------------|
| Adding DNS records | 5-10 minutes |
| DNS propagation starts | Immediate |
| First signs of change | 10-30 minutes |
| Partial propagation | 1-2 hours |
| Full global propagation | 2-24 hours |
| SSL certificate issuance | 5-30 minutes after verification |

**Don't panic if it takes a few hours - this is normal!**

---

## 🎉 Success Indicators

You'll know it worked when:

✅ Vercel shows green checkmark for domain  
✅ `graduateconsult.com` loads your website  
✅ `www.graduateconsult.com` loads your website  
✅ Green padlock (HTTPS) appears in browser  
✅ dnschecker.org shows `76.76.21.21` globally  

---

## 💡 Pro Tips

1. **Make changes in the morning** - If something goes wrong, you have all day to fix it
2. **Lower TTL first** - 24 hours before migration, set TTL to 300 (5 minutes)
3. **Keep old site running** - Don't cancel Wix until new site is confirmed working
4. **Test in incognito** - Browser cache can make you see old site
5. **Check on mobile** - Use mobile data (not WiFi) for fresh DNS lookup

---

**Need more help?** Refer to the main **VERCEL_DEPLOYMENT_GUIDE.md** file for detailed troubleshooting.
