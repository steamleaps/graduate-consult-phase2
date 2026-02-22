import { Link } from 'react-router';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle } from 'lucide-react';
import AnimatedHeadline from '../components/AnimatedHeadline';

export default function TermsPage() {
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
                    Legal Information
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {`Terms &\nConditions`}
                </AnimatedHeadline>
              </div>
              
              <div className="lg:col-span-4 lg:pt-32">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                >
                  Please read these terms carefully before using our services.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500"
                >
                  <div className="flex gap-3">
                    <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-sm text-amber-800">
                      Last Updated: January 2025
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  Welcome to Graduate Consult. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
                </p>
                <p>
                  Graduate Consult is a professional learning and consulting service provider focused on early career talent development in Ghana and beyond. Our services include organizational consulting, individual career coaching, webinars, workshops, and training programs.
                </p>
              </div>
            </motion.div>

            {/* 1. Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                1. Services Offered
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>Graduate Consult offers the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Organizational Services:</strong> Talent strategy consulting, early career program design, recruitment & selection support, leadership development programs, and custom training solutions.</li>
                  <li><strong>Individual Services:</strong> One-on-one career coaching, career transition support, CV and LinkedIn optimization, interview preparation, and skills development workshops.</li>
                  <li><strong>Webinars & Workshops:</strong> Virtual and in-person training sessions on various professional development topics.</li>
                  <li><strong>Resources:</strong> Career development guides, toolkits, templates, and educational content.</li>
                </ul>
                <p>
                  All services are subject to availability and may be customized based on client needs. Service descriptions on our website are for informational purposes and do not constitute a binding offer.
                </p>
              </div>
            </motion.div>

            {/* 2. Booking & Payment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                2. Booking & Payment Terms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2.1 Booking Process</h3>
                <p>
                  Consultations and coaching sessions can be booked through our online booking system. By booking a session, you agree to provide accurate information and attend at the scheduled time.
                </p>
                
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2.2 Payment</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms will be communicated during the booking or proposal process.</li>
                  <li>For organizational services, payment may be required in full or in installments as specified in the service agreement.</li>
                  <li>Individual coaching sessions may require advance payment or payment at the time of booking.</li>
                  <li>All prices are quoted in the agreed currency and exclude applicable taxes unless stated otherwise.</li>
                  <li>We accept bank transfers, mobile money, and other payment methods as communicated.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2.3 Late Payments</h3>
                <p>
                  Late payments may result in suspension of services until payment is received. We reserve the right to charge interest on overdue amounts.
                </p>
              </div>
            </motion.div>

            {/* 3. Cancellation & Refunds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                3. Cancellation & Refund Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.1 Client Cancellations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Individual Sessions:</strong> Cancellations made at least 24 hours before the scheduled session will receive a full refund or opportunity to reschedule. Cancellations within 24 hours are non-refundable.</li>
                  <li><strong>Organizational Services:</strong> Cancellation terms will be specified in the service agreement. Generally, cancellations after work has commenced may result in partial charges for work completed.</li>
                  <li><strong>Webinars/Workshops:</strong> Cancellations made 7+ days before the event may receive a full refund minus administrative fees. Cancellations within 7 days are non-refundable but may be transferable to another participant.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.2 Graduate Consult Cancellations</h3>
                <p>
                  In the rare event that we need to cancel a session, you will receive a full refund or the opportunity to reschedule at no additional cost.
                </p>

                <h3 className="text-2xl font-semibold text-[#1E3A8A] mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3.3 No-Shows</h3>
                <p>
                  Failure to attend a scheduled session without prior cancellation will be considered a no-show and no refund will be provided.
                </p>
              </div>
            </motion.div>

            {/* 4. Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                4. Intellectual Property Rights
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  All content on our website, including text, graphics, logos, images, videos, and software, is the property of Graduate Consult or its content suppliers and is protected by intellectual property laws.
                </p>
                <p>
                  Training materials, frameworks, templates, and other resources provided during our services remain the intellectual property of Graduate Consult unless otherwise specified in a written agreement.
                </p>
                <p>
                  Clients may not reproduce, distribute, modify, or create derivative works from our materials without express written permission.
                </p>
              </div>
            </motion.div>

            {/* 5. Confidentiality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                5. Confidentiality
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We respect the confidentiality of our clients. Information shared during coaching sessions and consulting engagements will be kept confidential, except where:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disclosure is required by law</li>
                  <li>You provide written consent to share the information</li>
                  <li>The information is already publicly available</li>
                  <li>Disclosure is necessary to protect the safety of individuals</li>
                </ul>
                <p>
                  Organizational clients may request a separate Non-Disclosure Agreement (NDA) for sensitive consulting projects.
                </p>
              </div>
            </motion.div>

            {/* 6. Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                6. Limitation of Liability
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Graduate Consult provides professional consulting and coaching services, but we cannot guarantee specific career outcomes or business results. Our services are advisory in nature.
                </p>
                <p>
                  To the fullest extent permitted by law, Graduate Consult shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services.
                </p>
                <p>
                  Our total liability for any claims arising from our services shall not exceed the amount paid by the client for the specific service giving rise to the claim.
                </p>
              </div>
            </motion.div>

            {/* 7. Client Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                7. Client Responsibilities
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>Clients agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Attend scheduled sessions on time</li>
                  <li>Actively participate in coaching and training activities</li>
                  <li>Implement advice and recommendations at their own discretion and risk</li>
                  <li>Respect the time and expertise of our consultants and coaches</li>
                  <li>Provide timely feedback to help us improve our services</li>
                </ul>
              </div>
            </motion.div>

            {/* 8. Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                8. Termination
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Either party may terminate an ongoing service agreement with written notice as specified in the service agreement. Graduate Consult reserves the right to terminate services immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment obligations are not met</li>
                  <li>The client engages in abusive or inappropriate behavior</li>
                  <li>The client violates these Terms</li>
                  <li>The professional relationship becomes untenable</li>
                </ul>
                <p>
                  Upon termination, clients will be invoiced for services rendered up to the termination date.
                </p>
              </div>
            </motion.div>

            {/* 9. Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                9. Third-Party Services
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our website uses third-party services for scheduling consultations, processing inquiries, and other functionality. Your use of these services is subject to their respective terms and conditions and privacy policies.
                </p>
                <p>
                  We may provide links to external websites and resources. Graduate Consult is not responsible for the content, services, or practices of third-party websites.
                </p>
              </div>
            </motion.div>

            {/* 10. Amendments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                10. Amendments to Terms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Graduate Consult reserves the right to update these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated Terms.
                </p>
              </div>
            </motion.div>

            {/* 11. Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                11. Governing Law
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Ghana. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Ghana.
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
                Contact Us
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@graduateconsult.com" className="text-[#1E3A8A] hover:underline">info@graduateconsult.com</a></p>
                  <p className="mb-2"><strong>Phone:</strong> +233 24 796 0067</p>
                  <p><strong>Website:</strong> <Link to="/contact" className="text-[#1E3A8A] hover:underline">Contact Page</Link></p>
                </div>
              </div>
            </motion.div>

            {/* Legal Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-amber-50 border-l-4 border-amber-500 p-8"
            >
              <div className="flex gap-4">
                <Scale className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Legal Disclaimer
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    These Terms & Conditions are provided as a general framework. For specific legal advice regarding your engagement with Graduate Consult, please consult with a qualified legal professional. Graduate Consult recommends that all parties seek independent legal counsel when entering into service agreements.
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