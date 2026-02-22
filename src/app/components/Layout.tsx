import { Link, useLocation } from 'react-router';
import { Instagram, Linkedin, Youtube, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import MagneticButton from './MagneticButton';
import TikTokIcon from './TikTokIcon';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    // { path: '/resources', label: 'Resources' }, // Commented out - not going live yet
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* Header - Premium Editorial */}
      <header className="bg-white/80 backdrop-blur-md text-[#1A1A1A] fixed top-0 z-50 w-full border-b border-[#1A1A1A]/5">
        <div className="w-full px-8 md:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo variant="positive" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 hover:text-[#3B82F6] font-medium relative text-sm tracking-wide ${
                      isActive(item.path) ? 'text-[#1A1A1A]' : 'text-[#2B2B2B]/60'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-6 left-0 right-0 h-0.5 bg-[#3B82F6]"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <MagneticButton>
                  <Link
                    to="/booking"
                    className="bg-[#1E3A8A] text-[#FAFAF7] px-6 py-3 text-sm font-medium hover:bg-[#1E40AF] transition-colors duration-300 inline-block"
                  >
                    Book a Consultation
                  </Link>
                </MagneticButton>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#2E5FB5]"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden py-4 space-y-2 border-t border-gray-100 overflow-hidden"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded transition-colors font-medium ${
                        isActive(item.path)
                          ? 'bg-[#2E5FB5]/5 text-[#2E5FB5]'
                          : 'text-[#717171] hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'Gotham, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                >
                  <Link
                    to="/webinar-registration"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 bg-[#2E5FB5] text-white rounded font-bold hover:bg-[#1E3A8A] transition-colors mt-4"
                    style={{ fontFamily: 'Gotham, sans-serif' }}
                  >
                    Register for Webinar
                  </Link>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer - Enhanced with premium spacing */}
      <footer className="bg-[#1E3A8A] text-white mt-32">
        <div className="w-full px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://res.cloudinary.com/drqx8rtbw/image/upload/footer-logo_bvuvex.png" alt="Graduate Consult" className="h-auto w-48 md:w-56 -ml-2" loading="lazy" />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Gotham, sans-serif' }}>Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/80 hover:text-[#C4D600] transition-colors duration-300 inline-block hover:translate-x-1 text-base"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Gotham, sans-serif' }}>Our Services</h3>
              <ul className="space-y-3 text-white/80 text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li>Career Development Webinars</li>
                <li>Consulting for Organisations</li>
                <li>Digital Learning Resources</li>
                <li>One-on-One Coaching</li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Gotham, sans-serif' }}>Stay Connected</h3>
              <p className="text-white/80 mb-6 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Subscribe to our newsletter for career insights and updates.
              </p>
              <Link
                to="/newsletter"
                className="inline-block bg-[#C4D600] text-[#2E5FB5] px-6 py-3 rounded font-medium hover:bg-[#A8B800] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-base"
                style={{ fontFamily: 'Gotham, sans-serif' }}
              >
                Subscribe Now
              </Link>

              {/* Unsubscribe Link */}
              <div className="mt-4">
                <Link
                  to="/unsubscribe"
                  className="text-white/60 hover:text-white/90 transition-colors text-sm underline"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Unsubscribe
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="mt-6">
                <p className="text-white/60 text-sm mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Follow us:
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com/graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-3 rounded-full cursor-pointer transition-colors hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F77737]"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-3 rounded-full cursor-pointer transition-colors hover:bg-[#FF0000]"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-3 rounded-full cursor-pointer transition-colors hover:bg-[#FF0050]"
                    aria-label="TikTok"
                  >
                    <TikTokIcon size={20} className="text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-white/10 mt-12 md:mt-16 pt-10"
          >
            {/* Copyright */}
            <div className="text-center text-white/60">
              <p className="text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                &copy; {new Date().getFullYear()} Graduate Consult. All rights reserved.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm">
                <Link
                  to="/terms"
                  className="text-white/70 hover:text-[#C4D600] transition-colors duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Terms & Conditions
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  to="/privacy"
                  className="text-white/70 hover:text-[#C4D600] transition-colors duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Privacy Policy
                </Link>
              </div>
              <p className="mt-3 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Powered by{' '}
                <a
                  href="https://intellic.co.uk/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4D600] hover:text-[#A8B800] transition-colors duration-300 underline"
                >
                  Intellic
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}