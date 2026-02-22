import { Calendar, Clock, Users, Video, Award, BookOpen, Target } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedHeadline from '../components/AnimatedHeadline';

export default function WebinarRegistrationPage() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section - Editorial */}
      <section className="relative bg-neutral-50 py-20 md:py-32">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1E3A8A] p-3 rounded-full">
                      <Video size={36} className="text-white" />
                    </div>
                    <span className="text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">Upcoming Webinar</span>
                  </div>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  NSP Career Check-In
                </AnimatedHeadline>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Starting National Service — or already a few months in — can feel confusing, underwhelming, or overwhelming, especially when expectations don't match reality.
                </motion.p>
              </div>
              
              <div className="lg:col-span-4 lg:pt-24">
                {/* Quick Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="space-y-4"
                >
                  <div className="bg-[#1E3A8A] p-6 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar size={24} />
                      <span className="font-semibold text-sm tracking-wider uppercase">Date</span>
                    </div>
                    <p className="text-xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>7 February, 2026</p>
                  </div>
                  <div className="bg-[#1E3A8A]/80 p-6 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={24} />
                      <span className="font-semibold text-sm tracking-wider uppercase">Time</span>
                    </div>
                    <p className="text-xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>10:00 AM - 11:30 AM</p>
                  </div>
                  <div className="bg-neutral-100 p-6 text-[#1E3A8A] shadow-lg border-l-4 border-[#1E3A8A]">
                    <div className="flex items-center gap-3 mb-2">
                      <Users size={24} />
                      <span className="font-semibold text-sm tracking-wider uppercase">Cost</span>
                    </div>
                    <p className="text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>FREE</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Details & Registration - Editorial Layout */}
      <section className="py-20 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Webinar Details - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/drqx8rtbw/image/upload/webinar-hero_eeghdf.jpg"
                    alt="Professional holding tablet in office"
                    className="w-full h-[450px] object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1E3A8A] opacity-10 -z-10"></div>
                </div>

                {/* What You'll Learn */}
                <div className="bg-neutral-50 p-6 sm:p-8 lg:p-10 shadow-lg">
                  <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E3A8A] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    About This Session
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This 90-minute live check-in is designed for National Service Personnel who want to pause, reflect, and think intentionally about how to make the most of their service year.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    We'll discuss common challenges, unspoken expectations, and practical ways to approach NSP as a career-building opportunity, not just a requirement.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium text-[#1E3A8A]">
                    There will be space to submit questions in advance and engage during the session.
                  </p>
                </div>

                {/* Why Attend - Horizontal Cards */}
                <div>
                  <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                  <h2 className="text-4xl font-semibold text-[#1E3A8A] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Why Attend This Webinar?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <Award size={32} />,
                        title: 'Expert Insights',
                        description: 'Learn from experienced professionals who understand the African job market.',
                      },
                      {
                        icon: <Users size={32} />,
                        title: 'Interactive Session',
                        description: 'Ask questions and get personalized advice during the Q&A segment.',
                      },
                      {
                        icon: <BookOpen size={32} />,
                        title: 'Practical Tools',
                        description: 'Receive downloadable resources and templates to apply immediately.',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#1E3A8A]"
                      >
                        <div className="text-[#1E3A8A] flex justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Registration Form - Right Side (Sticky) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <div className="lg:sticky lg:top-24">
                  <div className="bg-neutral-50 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        background: 'linear-gradient(45deg, #1E3A8A 0%, transparent 50%, #1E3A8A 100%)',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E3A8A] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Register Now
                      </h3>
                      <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        Secure your spot for this free webinar. Limited spaces available.
                      </p>
                      
                      {/* Zoho Forms Embed */}
                      <iframe 
                        aria-label="Webinar Signup Form" 
                        frameBorder="0" 
                        style={{ height: '800px', width: '100%', border: 'none' }} 
                        src="https://forms.zohopublic.eu/graduateconsultteamgm1/form/WebinarSignupForm/formperma/pGQqG1HD3mdyFRs8Va2uZl1yeCsb6o2h7nbDys0Mitk"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="py-20 md:py-32 bg-[#1E3A8A] relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "National Service is not just a requirement—it's a career-building opportunity."
              </p>
              <div className="w-24 h-1 bg-white opacity-30 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Webinar Details Grid */}
      <section className="py-24 md:py-32 bg-neutral-50 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 sm:p-8 shadow-lg border-l-4 border-[#1E3A8A]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Video className="text-[#1E3A8A]" size={32} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Platform</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  The webinar will be hosted on Zoom. You'll receive the meeting link via email after registration. No special software required – just click and join!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 sm:p-8 shadow-lg border-l-4 border-[#1E3A8A]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-[#1E3A8A]" size={32} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Who Should Attend</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Current National Service Personnel, recent NSP graduates, or anyone approaching their service year who wants to maximize this experience for career growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}