import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Instagram, Youtube, Send, ArrowDown, User, Building2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import MagneticButton from '../components/MagneticButton';
import AnimatedHeadline from '../components/AnimatedHeadline';
import TikTokIcon from '../components/TikTokIcon';
import SEO from '../components/SEO';

// Contact Page Component
export default function ContactPage() {
  const navigate = useNavigate();
  const [showBookButton, setShowBookButton] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyLWP-u7FkXsV9uHc-L19i1lgbH8umbSVfm175NW4XPyPC-4YRjsywKB152tQB1ewvNTA/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'N/A',
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since we're using no-cors mode, we can't read the response
      // Assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hide "Get in Touch" button when user scrolls past the contact section
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide button if we've scrolled past the contact section
        if (rect.top < windowHeight * 0.3) {
          setShowBookButton(false);
        } else {
          setShowBookButton(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-white relative overflow-hidden">
      <SEO 
        title="Contact Us"
        description="Get in touch with Graduate Consult. Book a consultation, send an inquiry, or connect with us via email, phone, Instagram, YouTube, or TikTok. Office hours: Monday-Friday 9AM-6PM, Saturday 10AM-2PM GMT."
        url="https://www.graduateconsult.com/contact"
      />
      
      {/* Sticky Floating "Book Now" Button - Only show when above booking section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <MagneticButton
          onClick={() => navigate('/booking')}
          className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-6 py-4 font-semibold transition-all duration-300 shadow-2xl flex items-center gap-3 group"
        >
          <Calendar size={24} />
          <span className="hidden sm:inline">Book Now</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown size={20} className="opacity-70" />
          </motion.div>
        </MagneticButton>
      </motion.div>

      {/* Hero Section - Editorial */}
      <section className="relative bg-neutral-50 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Get in Touch
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {`Let's\nConnect`}
                </AnimatedHeadline>
              </div>
              
              <div className="lg:col-span-7 lg:pt-24 lg:-ml-12">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6"
                >
                  Whether you're an individual looking to accelerate your career or an organization seeking to transform your talent systems, we're here to help.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-3"
                >
                  <motion.a
                    href="mailto:info@graduateconsult.com"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#1E3A8A] p-3 rounded-full cursor-pointer transition-colors"
                  >
                    <Mail size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="tel:+233247960067"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#D97757] p-3 rounded-full cursor-pointer transition-colors"
                  >
                    <Phone size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-br from-[#E1306C] to-[#F77737] p-3 rounded-full cursor-pointer"
                  >
                    <Instagram size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#FF0000] p-3 rounded-full cursor-pointer transition-colors"
                  >
                    <Youtube size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@graduateconsult"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#FF0050] p-3 rounded-full cursor-pointer transition-colors"
                  >
                    <TikTokIcon size={24} className="text-white" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Editorial Layout */}
      <section className="py-20 md:py-32 bg-white relative z-10" id="contact-section">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Side - Booking CTA, Contact Info, Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 flex flex-col gap-8 lg:justify-between"
              >
                {/* Book Consultation CTA Card */}
                <motion.div
                  className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 md:p-10 shadow-2xl rounded-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-full flex-shrink-0">
                      <Calendar className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Ready to Book?
                      </h2>
                      <p className="text-white/90 text-base md:text-lg leading-relaxed">
                        Schedule a personalized consultation with our expert team.
                      </p>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => navigate('/booking')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-[#1E3A8A] py-4 px-8 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Calendar size={24} />
                    <span>Book Your Session Now</span>
                  </motion.button>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                  className="bg-neutral-50 p-6 md:p-8 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-5">
                    <motion.div 
                      className="flex items-start gap-4 pb-5 border-b border-gray-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-[#1E3A8A] p-3 rounded-full flex-shrink-0">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-1 text-base md:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Email</h3>
                        <a href="mailto:info@graduateconsult.com" className="text-gray-600 hover:text-[#1E3A8A] transition-colors text-sm md:text-base">
                          info@graduateconsult.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-4 pb-5 border-b border-gray-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-[#D97757] p-3 rounded-full flex-shrink-0">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-1 text-base md:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Phone</h3>
                        <p className="text-gray-600 text-sm md:text-base">+233 24 796 0067</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-[#E1306C] to-[#F77737] p-3 rounded-full flex-shrink-0">
                        <Instagram className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] mb-1 text-base md:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Instagram</h3>
                        <a 
                          href="https://instagram.com/graduateconsult" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#1E3A8A] transition-colors text-sm md:text-base"
                        >
                          @graduateconsult
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  className="bg-neutral-800 p-6 md:p-8 text-white shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-1 bg-[#D97757] mb-6"></div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Office Hours (GMT)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-white/20 text-sm md:text-base">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-white/90">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-white/20 text-sm md:text-base">
                      <span className="font-medium">Saturday</span>
                      <span className="text-white/90">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm md:text-base">
                      <span className="font-medium">Sunday</span>
                      <span className="text-white/90">Closed</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Inquiry Form Only */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                {/* Inquiry Form Card */}
                <motion.div
                  className="bg-white shadow-2xl rounded-lg overflow-hidden h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-neutral-50 p-6 md:p-8 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Send className="text-[#1E3A8A]" size={28} />
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Have Questions?
                      </h2>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg">
                      Send us an inquiry and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="p-6 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <User size={18} className="text-[#1E3A8A]" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <Mail size={18} className="text-[#1E3A8A]" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Organization Field */}
                      <div>
                        <label htmlFor="organization" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <Building2 size={18} className="text-[#1E3A8A]" />
                          Organization (Optional)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                          placeholder="Your company or organization"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <MessageSquare size={18} className="text-[#1E3A8A]" />
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your inquiry..."
                        />
                      </div>

                      {/* Success Message */}
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3"
                        >
                          <div className="bg-green-500 rounded-full p-1 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h4>
                            <p className="text-sm text-green-700">Thank you for reaching out. We'll respond to your inquiry within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}

                      {/* Error Message */}
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                        >
                          <div className="bg-red-500 rounded-full p-1 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-900 mb-1">Submission Failed</h4>
                            <p className="text-sm text-red-700">There was an error sending your message. Please try again or email us directly at info@graduateconsult.com</p>
                          </div>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white hover:shadow-xl'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Inquiry</span>
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-sm text-gray-500">
                        Or email us directly at{' '}
                        <a href="mailto:info@graduateconsult.com" className="text-[#1E3A8A] hover:underline font-medium">
                          info@graduateconsult.com
                        </a>
                      </p>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="py-20 md:py-32 bg-[#4A5568] relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "Every great partnership starts with a conversation. Let's make yours count."
              </p>
              <div className="w-24 h-1 bg-white opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}