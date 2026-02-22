# Graduate Consult Website

Professional learning and consulting website for Graduate Consult, targeting early career talent development in Ghana and beyond.

## 🚀 Deployment Status

This React application is ready to deploy to **Vercel** (free hosting).

**⚠️ Note:** This application is NOT compatible with Wix Editor or Wix hosting. It requires modern hosting platforms like Vercel, Netlify, or Cloudflare Pages.

---

## 📁 Project Structure

```
graduate-consult-website/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Individual page components
│   │   └── App.tsx          # Main application component
│   └── styles/              # CSS and theme files
├── public/                  # Static assets
├── vercel.json             # Vercel deployment configuration
├── package.json            # Dependencies
└── vite.config.ts          # Build configuration
```

---

## 🌟 Features

- **6 Core Pages:** Home, About, Services, Resources, Blog, Contact, Newsletter, Webinar Registration
- **Premium Design System:** Asymmetric layouts, bold typography, neutral colors with strategic accents
- **Typography:** Cormorant Garamond (headings) + Inter (body text)
- **Brand Colors:** #1E3A8A (dark blue) for all headings and CTAs
- **Responsive Design:** Mobile-first approach, works on all devices
- **Performance Optimized:** Lazy loading, code splitting, optimized images
- **Social Media Integration:** Instagram, TikTok, YouTube embeds
- **Interactive Components:**
  - AnimatedHeadline components
  - MagneticButton CTAs
  - Newsletter signup forms
  - Consultation booking
  - Webinar registration

---

## 🎯 Deployment Options

### Option 1: Vercel (Recommended - FREE)

**Cost:** $0/month forever  
**Setup Time:** 20 minutes  
**Performance:** Excellent (global CDN)

**Follow the complete guide:**
📘 **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)**

**Quick reference for DNS:**
📘 **[DNS_SETUP_QUICK_REFERENCE.md](./DNS_SETUP_QUICK_REFERENCE.md)**

**Printable checklist:**
✅ **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)**

### Option 2: Netlify (Alternative - FREE)

**Cost:** $0/month forever  
**Similar to Vercel, drag-and-drop deployment**

### Option 3: Cloudflare Pages (Alternative - FREE)

**Cost:** $0/month forever  
**Excellent for global performance**

---

## 🛠️ Local Development

If you want to run this website on your computer for testing:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📚 Documentation

- **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** - Complete step-by-step deployment guide
- **[DNS_SETUP_QUICK_REFERENCE.md](./DNS_SETUP_QUICK_REFERENCE.md)** - Quick DNS configuration reference
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Printable deployment checklist

---

## 🔧 Technology Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.12
- **Routing:** React Router DOM 7.11.0
- **Animations:** Motion (Framer Motion) 12.23.24
- **UI Components:** Radix UI, Custom components
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Material UI:** @mui/material 7.3.5

---

## 🌐 Custom Domain Setup

You can connect your existing domain (e.g., `graduateconsult.com`) to Vercel:

1. Deploy to Vercel (see deployment guide)
2. Add custom domain in Vercel settings
3. Update DNS records in your domain registrar:
   ```
   A Record:    @ → 76.76.21.21
   CNAME:       www → cname.vercel-dns.com
   ```
4. Wait for DNS propagation (1-24 hours)
5. Vercel automatically provisions SSL certificate

**Detailed instructions in [DNS_SETUP_QUICK_REFERENCE.md](./DNS_SETUP_QUICK_REFERENCE.md)**

---

## 💡 Why Not Wix?

This is a **React single-page application (SPA)** built with modern web technologies:

- ✅ Requires Node.js build process
- ✅ Uses npm package dependencies
- ✅ Compiled with Vite bundler
- ✅ Needs modern hosting infrastructure

**Wix limitations:**
- ❌ Does not support custom React applications
- ❌ Cannot run Node.js build processes
- ❌ Incompatible with npm package imports
- ❌ No support for Vite/webpack builds

**Think of it like:**
- React app = iPhone app
- Wix = Android phone
- They're fundamentally incompatible platforms

---

## 🆓 Hosting Cost Comparison

| Platform | Monthly Cost | Setup Time | Performance |
|----------|--------------|------------|-------------|
| **Vercel** | $0 | 20 min | ⭐⭐⭐⭐⭐ |
| **Netlify** | $0 | 20 min | ⭐⭐⭐⭐⭐ |
| **Cloudflare Pages** | $0 | 25 min | ⭐⭐⭐⭐⭐ |
| **Wix** | $17-32 | N/A | ❌ Not compatible |

**All recommended platforms are free forever** for websites of this size.

---

## 🔄 Updating Your Website

Once deployed to Vercel:

1. Make changes to your code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update homepage content"
   git push
   ```
3. Vercel automatically detects changes and redeploys (2-3 minutes)
4. Changes are live!

**No manual deployment needed** - Vercel watches your GitHub repository.

---

## 📞 Support & Resources

**Deployment Help:**
- See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

**DNS Help:**
- See [DNS_SETUP_QUICK_REFERENCE.md](./DNS_SETUP_QUICK_REFERENCE.md)
- DNS Checker Tool: https://dnschecker.org

**React/Vite Help:**
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is finalized
- [ ] Images are optimized
- [ ] Contact forms point to correct email addresses
- [ ] Social media links are correct
- [ ] All external links work
- [ ] Newsletter signup is configured
- [ ] Domain name is ready (if using custom domain)
- [ ] You have GitHub account
- [ ] You have Vercel account (or will create one)

---

## 🎉 Project Features

### Design System
- ✅ Premium editorial design with intentional asymmetry
- ✅ Bold typography moments
- ✅ Neutral color palette with strategic accent colors
- ✅ Consistent brand identity across all pages

### Interactive Components
- ✅ AnimatedHeadline - Smooth reveal animations for section titles
- ✅ MagneticButton - Magnetic hover effect on CTAs
- ✅ FloatingLabelInput - Modern form inputs with floating labels
- ✅ Smooth page transitions
- ✅ Responsive navigation

### Performance
- ✅ Lazy loading for all page routes
- ✅ Deferred script loading for third-party services
- ✅ Optimized image loading
- ✅ Code splitting
- ✅ Fast page loads

### Integrations
- ✅ YouTube video embeds
- ✅ Instagram feed integration
- ✅ TikTok social links
- ✅ Newsletter signup forms
- ✅ Consultation booking
- ✅ Webinar registration
- ✅ External resource links

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

Private project for Graduate Consult. All rights reserved.

---

## 👥 Credits

**Development:** Built with React, Vite, and Tailwind CSS  
**Fonts:** Cormorant Garamond (Google Fonts), Inter (Google Fonts)  
**Icons:** Lucide React  
**Hosting:** Vercel (free tier)

---

## 🚀 Quick Start Guide

**New to deployment? Start here:**

1. 📖 Read [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) first
2. 📘 Follow [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) step-by-step
3. 🌐 Use [DNS_SETUP_QUICK_REFERENCE.md](./DNS_SETUP_QUICK_REFERENCE.md) for domain connection
4. ✅ Check off items as you complete them
5. 🎉 Celebrate your successful deployment!

**Total time:** 50 minutes active work + 1-24 hours DNS propagation  
**Total cost:** $0.00

---

**Questions?** Refer to the comprehensive guides included in this project.

**Ready to deploy?** Start with [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)!

---

*Last updated: January 2026*
# graduate-consult-phase2
