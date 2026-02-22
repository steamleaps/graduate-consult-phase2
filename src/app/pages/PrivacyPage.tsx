import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, AlertCircle, Mail } from 'lucide-react';
import AnimatedHeadline from '../components/AnimatedHeadline';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-20 md:py-32">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Your Privacy Matters
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {`Privacy\nPolicy`}
                </AnimatedHeadline>
              </div>
              
              <div className="lg:col-span-4 lg:pt-32">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                >
                  We are committed to protecting your personal information and your right to privacy.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-6 p-4 bg-blue-50 border-l-4 border-[#1E3A8A]"
                >
                  <div className="flex gap-3">
                    <Shield className="text-[#1E3A8A] flex-shrink-0 mt-1" size={20} />
                    <p className="text-sm text-[#1E3A8A]">
                      Last Updated: January 2025
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  At Graduate Consult, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  This policy applies to information we collect through our website (graduateconsult.com), via email, through booking systems, contact forms, and any other related services.
                </p>
                <p>
                  By using our services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our services.
                </p>
              </div>
            </motion.div>

            {/* 1. Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                1. Information We Collect
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1.1 Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Book a consultation or coaching session</li>
                  <li>Register for a webinar or workshop</li>
                  <li>Submit an inquiry through our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request resources or materials</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company/organization name</li>
                  <li>Job title and professional information</li>
                  <li>Career goals and challenges (shared during coaching)</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1.2 Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information (type, operating system)</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website or source</li>
                  <li>Date and time of visits</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1.3 Social Media Information</h3>
                <p>
                  If you interact with us through social media platforms (Instagram, YouTube, TikTok, LinkedIn), we may receive information from those platforms in accordance with their privacy policies.
                </p>
              </div>
            </motion.div>

            {/* 2. How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                2. How We Use Your Information
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provide Services:</strong> Schedule and conduct consultations, coaching sessions, webinars, and workshops</li>
                  <li><strong>Communication:</strong> Respond to inquiries, send booking confirmations, and provide customer support</li>
                  <li><strong>Marketing:</strong> Send newsletters, event invitations, and promotional materials (with your consent)</li>
                  <li><strong>Improvement:</strong> Analyze usage patterns to improve our website and services</li>
                  <li><strong>Compliance:</strong> Fulfill legal obligations and enforce our terms and conditions</li>
                  <li><strong>Payment Processing:</strong> Process payments for services rendered</li>
                  <li><strong>Personalization:</strong> Customize content and service recommendations based on your interests</li>
                </ul>
              </div>
            </motion.div>

            {/* 3. How We Share Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                3. How We Share Your Information
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>We may share your information with:</p>
                
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.1 Service Providers</h3>
                <p>We use trusted third-party service providers to support our operations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Booking Systems:</strong> For scheduling consultations and coaching sessions</li>
                  <li><strong>Contact Forms:</strong> For contact form submissions and inquiries</li>
                  <li><strong>Email Service Providers:</strong> For newsletter distribution and communications</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Website Hosting:</strong> For hosting our website infrastructure</li>
                  <li><strong>Analytics Tools:</strong> For website performance and user experience analysis</li>
                </ul>
                <p>
                  These providers have access to your information only to perform tasks on our behalf and are obligated to protect your data.
                </p>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.2 Legal Requirements</h3>
                <p>We may disclose your information if required by law or in response to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Legal processes or government requests</li>
                  <li>Enforcement of our terms and conditions</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Prevention of fraud or security threats</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.3 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.4 With Your Consent</h3>
                <p>
                  We may share your information with other third parties when you have given explicit consent.
                </p>
              </div>
            </motion.div>

            {/* 4. Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                4. Data Security
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>Security measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit (SSL/TLS)</li>
                  <li>Secure storage of sensitive information</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Use of reputable third-party providers with strong security practices</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </motion.div>

            {/* 5. Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                5. Data Retention
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Client Records:</strong> Retained for the duration of the professional relationship and up to 7 years after for legal and tax purposes</li>
                  <li><strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion</li>
                  <li><strong>Website Analytics:</strong> Retained for up to 2 years for improvement purposes</li>
                  <li><strong>Inquiry Forms:</strong> Retained for up to 1 year unless converted to active clients</li>
                </ul>
              </div>
            </motion.div>

            {/* 6. Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                6. Your Privacy Rights
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at <a href="mailto:info@graduateconsult.com" className="text-[#1E3A8A] hover:underline">info@graduateconsult.com</a>. We will respond within 30 days.
                </p>
              </div>
            </motion.div>

            {/* 7. Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                7. Cookies and Tracking Technologies
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic.
                </p>
                <p><strong>What are cookies?</strong> Small text files stored on your device that help websites remember your preferences and improve functionality.</p>
                <p>Types of cookies we may use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                </p>
              </div>
            </motion.div>

            {/* 8. Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                8. Children's Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our services are designed for professionals and organizations, not children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </motion.div>

            {/* 9. International Data Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                9. International Data Transfers
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Your information may be transferred to and processed in countries other than Ghana, including where our service providers operate. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>
            </motion.div>

            {/* 10. Third-Party Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                10. Third-Party Links
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our website may contain links to third-party websites, including social media platforms and resource providers. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>
            </motion.div>

            {/* 11. Newsletter & Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                11. Newsletter & Marketing Communications
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  If you subscribe to our newsletter or marketing communications, we will use your email address to send you updates about our services, webinars, resources, and career insights.
                </p>
                <p>
                  You can unsubscribe at any time by clicking the "unsubscribe" link in our emails or by contacting us directly. Note that even if you unsubscribe from marketing emails, we may still send you transactional emails related to your bookings or services.
                </p>
              </div>
            </motion.div>

            {/* 12. Updates to This Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                12. Updates to This Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a new "Last Updated" date.
                </p>
                <p>
                  For material changes, we will provide prominent notice on our website or send you an email notification.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Contact Us About Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Privacy Officer:</strong> Jessica Sugru Ali</p>
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@graduateconsult.com" className="text-[#1E3A8A] hover:underline">info@graduateconsult.com</a></p>
                  <p className="mb-2"><strong>Phone:</strong> +233 24 796 0067</p>
                  <p><strong>Website:</strong> <Link to="/contact" className="text-[#1E3A8A] hover:underline">Contact Page</Link></p>
                </div>
              </div>
            </motion.div>

            {/* Ghana Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 border-l-4 border-[#1E3A8A] p-8"
            >
              <div className="flex gap-4">
                <Database className="text-[#1E3A8A] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Ghana Data Protection Act Compliance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Graduate Consult is committed to complying with the Ghana Data Protection Act, 2012 (Act 843). We process personal data lawfully, fairly, and transparently. If you have concerns about how we handle your data under Ghana law, you may contact the Data Protection Commission of Ghana.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-[#1E3A8A] text-white px-10 py-4 text-lg font-semibold hover:bg-[#1E3A8A]/90 transition-all duration-300 shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}