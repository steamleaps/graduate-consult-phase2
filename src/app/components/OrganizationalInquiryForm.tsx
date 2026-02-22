import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Mail, Phone, Users, Target, Calendar, MessageSquare, Send } from 'lucide-react';

interface OrganisationalInquiryFormProps {
  onSubmitSuccess?: () => void;
}

export default function OrganisationalInquiryForm({ onSubmitSuccess }: OrganisationalInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationSize: '',
    serviceType: '',
    details: '',
    suggestedDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Google Apps Script Web App URL - Contact & Inquiry Handler
      const scriptURL = import.meta.env.VITE_CONTACT_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz3n-y-KfNw4Ya_B2r7qMPgILDc90sVWSnHv_BowbILdqGUShNI3MgEtb1eeyQNFUj1zA/exec';
      
      // Format the message to include all organizational details
      const formattedMessage = `
SERVICE TYPE: ${formData.serviceType}

ORGANIZATION SIZE: ${formData.organizationSize}

SUGGESTED DATE: ${formData.suggestedDate}

DETAILS:
${formData.details}
      `.trim();

      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: `${formData.organizationSize} | ${formData.serviceType}`,
          message: formattedMessage,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since we're using no-cors mode, assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organizationSize: '',
        serviceType: '',
        details: '',
        suggestedDate: '',
      });

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

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

  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] via-[#2E4A9A] to-[#1E3A8A] py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Organisational Services Inquiry
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tell us about your organisation's needs and we'll get back to you within 24 hours to discuss how we can help.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-lg overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Building2 size={18} className="text-[#1E3A8A]" />
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email & Phone - Side by Side on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Phone size={18} className="text-[#1E3A8A]" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Organization Size */}
                <div>
                  <label htmlFor="organizationSize" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Users size={18} className="text-[#1E3A8A]" />
                    Organisation Size *
                  </label>
                  <select
                    id="organizationSize"
                    name="organizationSize"
                    value={formData.organizationSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Target size={18} className="text-[#1E3A8A]" />
                    What are you looking for? *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  >
                    <option value="">Select service type</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Workshop Facilitation">Workshop Facilitation</option>
                    <option value="Speaking or Panel Engagement">Speaking or Panel Engagement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Suggested Date */}
                <div>
                  <label htmlFor="suggestedDate" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={18} className="text-[#1E3A8A]" />
                    Suggested Date of Engagement *
                  </label>
                  <input
                    type="date"
                    id="suggestedDate"
                    name="suggestedDate"
                    value={formData.suggestedDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  />
                </div>

                {/* Details Field */}
                <div>
                  <label htmlFor="details" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare size={18} className="text-[#1E3A8A]" />
                    Brief Details of Request *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all resize-none"
                    placeholder="Please provide details about your request, goals, and any specific requirements..."
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
                      <h4 className="font-semibold text-green-900 mb-1">Inquiry Submitted Successfully!</h4>
                      <p className="text-sm text-green-700">Thank you for your interest. Our team will review your request and get back to you within 24 hours.</p>
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
                      <p className="text-sm text-red-700">There was an error submitting your inquiry. Please try again or email us directly at info@graduateconsult.com</p>
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
                      : 'bg-[#1E3A8A] hover:bg-[#2E4A9A] text-white hover:shadow-xl'
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
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Inquiry</span>
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

          {/* Trust Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              "Empowering organizations to build stronger teams and achieve lasting impact."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}