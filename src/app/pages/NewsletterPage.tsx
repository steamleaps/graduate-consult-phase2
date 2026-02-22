import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedHeadline from '../components/AnimatedHeadline';
import NewsletterForm from '../components/NewsletterForm';
import SEO from '../components/SEO';

// Newsletter Page - Stay connected with career insights and opportunities
export default function NewsletterPage() {
  return (
    <>
      <SEO
        title="Newsletter - Subscribe for Career Insights | Graduate Consult"
        description="Subscribe to Graduate Consult's newsletter for weekly career tips, job opportunities, event invitations, and industry insights. Stay ahead in your career journey."
        canonicalUrl="https://www.graduateconsult.com/newsletter"
        type="website"
      />
      <div className="bg-white relative overflow-hidden">
        {/* Hero Section - Editorial */}
        <section className="relative bg-neutral-50 py-20 md:py-32">
          <div className="w-full px-8 md:px-16">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <div className="mb-8">
                    <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                      Stay Connected
                    </span>
                  </div>
                  <AnimatedHeadline
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    delay={0.2}
                    animationType="word"
                  >
                    Subscribe to Our Newsletter
                  </AnimatedHeadline>
                </div>
                
                <div className="lg:col-span-4 lg:pt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-4 mb-8"
                  >
                    <div className="bg-[#1E3A8A] p-4 rounded-full">
                      <Mail size={32} className="text-white" />
                    </div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                  >
                    Get weekly career insights, job opportunities, and exclusive resources delivered to your inbox.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Form */}
        <section className="py-20 md:py-32 bg-white relative z-10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-2xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-neutral-50 relative z-10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="mb-16">
                <div className="w-12 h-1 bg-[#1E3A8A] mb-8"></div>
                <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  What You'll Get
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Weekly Career Tips',
                    description: 'Practical advice to help you navigate your career journey effectively.',
                  },
                  {
                    title: 'Job Opportunities',
                    description: 'Exclusive access to positions from organizations we work with.',
                  },
                  {
                    title: 'Event Invitations',
                    description: 'Be the first to know about our webinars and workshops.',
                  },
                  {
                    title: 'Industry Insights',
                    description: 'Stay informed about trends affecting the African job market.',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 shadow-lg border-l-4 border-[#1E3A8A]"
                  >
                    <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote Section */}
        <section className="py-20 md:py-32 bg-neutral-800 relative z-10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  "Stay ahead of the curve. Subscribe for insights that transform careers."
                </p>
                <div className="w-24 h-1 bg-white opacity-30"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}