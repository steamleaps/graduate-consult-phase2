import { Play, FileText, Download, ExternalLink, Clock, Video, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedHeadline from '../components/AnimatedHeadline';
import MagneticButton from '../components/MagneticButton';
import ImageWithFallback from '../components/ImageWithFallback';

export default function ResourcesPage() {
  const videos = [
    {
      title: 'Introduction to Professional Development',
      description: 'Learn the fundamentals of career growth and professional advancement.',
      duration: '15:32',
      category: 'Career Foundations',
    },
    {
      title: 'Building Your Personal Brand',
      description: 'Create a compelling professional identity that stands out.',
      duration: '22:45',
      category: 'Personal Branding',
    },
    {
      title: 'Networking Strategies for Graduates',
      description: 'Effective techniques for building meaningful professional connections.',
      duration: '18:20',
      category: 'Networking',
    },
    {
      title: 'Interview Preparation Masterclass',
      description: 'Comprehensive guide to acing your job interviews.',
      duration: '35:10',
      category: 'Job Search',
    },
  ];

  const downloads = [
    {
      title: 'Resume Template Guide',
      description: 'Professional resume templates with formatting tips.',
      format: 'PDF',
    },
    {
      title: 'Career Planning Worksheet',
      description: 'Strategic planning tool for mapping your career journey.',
      format: 'PDF',
    },
    {
      title: 'Interview Preparation Checklist',
      description: 'Complete checklist to help you prepare for any interview.',
      format: 'PDF',
    },
    {
      title: 'Networking Contact Tracker',
      description: 'Organize and manage your professional connections.',
      format: 'Excel',
    },
  ];

  const externalLinks = [
    {
      title: 'LinkedIn Learning',
      description: 'Free courses on professional skills and career development.',
      url: '#',
    },
    {
      title: 'Coursera Career Resources',
      description: 'Specialized courses for career advancement.',
      url: '#',
    },
    {
      title: 'Ghana Job Portal',
      description: 'Latest job opportunities in Ghana and West Africa.',
      url: '#',
    },
    {
      title: 'Professional Associations Directory',
      description: 'Connect with industry-specific professional groups.',
      url: '#',
    },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section - Editorial */}
      <section className="relative bg-neutral-50 py-20 md:py-32">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Learning & Development
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {`Career\nResources`}
                </AnimatedHeadline>
              </div>
              
              <div className="lg:col-span-4 lg:pt-24">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                >
                  Access our curated collection of webinar recordings, templates, and professional development tools.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex gap-4 text-[#1E3A8A] font-semibold text-lg"
                >
                  <div>
                    <div className="text-5xl mb-2 font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>20+</div>
                    <div className="text-sm opacity-70">Resources</div>
                  </div>
                  <div className="border-l-2 border-[#1E3A8A] mx-4 opacity-30"></div>
                  <div>
                    <div className="text-5xl mb-2 font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Free</div>
                    <div className="text-sm opacity-70">Access</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Webinar Recordings - Magazine Layout */}
      <section className="py-20 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div className="w-12 h-1 bg-[#1E3A8A] mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Past Webinar Recordings
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-4">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Catch up on insights from our expert-led sessions, available on demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                >
                  {/* Video Placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/70 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 text-9xl font-semibold absolute" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 bg-white w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-white/90 transition-colors"
                    >
                      <Play size={36} className="text-[#1E3A8A] ml-1" />
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-[#1E3A8A] px-3 py-1 font-semibold text-xs tracking-wider">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded flex items-center gap-2 text-sm">
                      <Clock size={14} />
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3 group-hover:text-[#1E3A8A]/80 transition-colors leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {video.description}
                    </p>
                    <button className="flex items-center text-[#1E3A8A] font-semibold group-hover:text-[#1E3A8A]/80 transition-colors">
                      <Play size={20} className="mr-2" />
                      Watch Now
                    </button>
                  </div>
                </motion.div>
              ))}
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
              <p className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "The right resources at the right time can transform your entire career trajectory."
              </p>
              <div className="w-24 h-1 bg-white opacity-30 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources - Editorial Grid */}
      <section className="py-24 md:py-32 bg-neutral-50 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-4"
              >
                <div className="lg:sticky lg:top-24">
                  <div className="w-12 h-1 bg-[#1E3A8A] mb-8"></div>
                  <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-6 leading-[0.95]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Downloadable Resources
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Practical templates and tools to accelerate your professional journey.
                  </p>
                </div>
              </motion.div>

              {/* Resources Grid */}
              <div className="lg:col-span-8 space-y-6">
                {downloads.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.3 } }}
                    className="bg-white p-8 shadow-lg border-l-4 border-[#1E3A8A] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-[#1E3A8A] p-4 rounded-lg flex-shrink-0">
                        <FileText size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            {resource.title}
                          </h3>
                          <span className="bg-neutral-100 px-4 py-2 font-semibold text-sm text-gray-600 whitespace-nowrap ml-4">
                            {resource.format}
                          </span>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                          {resource.description}
                        </p>
                        <button className="flex items-center text-[#1E3A8A] font-semibold hover:text-[#1E3A8A]/80 transition-colors text-base">
                          <Download size={20} className="mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources - Editorial Layout */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div className="w-12 h-1 bg-[#1E3A8A] mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    External Resources & Links
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:pt-4">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Curated learning platforms and career development tools we recommend.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {externalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-neutral-50 p-8 shadow-lg border-l-4 border-[#1E3A8A] hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4 group-hover:text-[#1E3A8A]/80 transition-colors leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#1E3A8A] font-semibold group-hover:text-[#1E3A8A]/80 transition-colors text-base"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Visit Resource
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 md:py-32 bg-neutral-50 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-12 h-1 bg-[#1E3A8A] mb-8 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Quick Career Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Follow us on Instagram for bite-sized career advice, resource highlights, and professional development tips
              </p>
            </motion.div>

            {/* Instagram Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group"
              >
                <ImageWithFallback
                  src="https://res.cloudinary.com/drqx8rtbw/image/upload/graduate-girl-cropped_8d05ae.jpg"
                  alt="Career Tips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Professional Development</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group"
              >
                <ImageWithFallback
                  src="https://res.cloudinary.com/drqx8rtbw/image/upload/early-career-guys_lawsbl.jpg"
                  alt="Resource Highlights"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Career Insights</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group"
              >
                <ImageWithFallback
                  src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1737551622/Group_2_f8t4s8.png"
                  alt="Quick Tips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Quick Career Tips</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <a
                href="https://www.instagram.com/graduateconsult/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram size={24} />
                Follow @graduateconsult
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Editorial */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1E3A8A] p-6 sm:p-8 md:p-12 lg:p-16 text-white shadow-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="w-12 h-1 bg-white opacity-30 mb-6"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Stay Updated with New Resources
                </h2>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Get notified when we add new webinar recordings, templates, and career development tools.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <MagneticButton className="w-full bg-white text-[#1E3A8A] hover:bg-white/90 px-10 py-5 font-semibold transition-all duration-300 text-lg">
                  <a href="/newsletter" className="block w-full">
                    Subscribe to Newsletter
                  </a>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}