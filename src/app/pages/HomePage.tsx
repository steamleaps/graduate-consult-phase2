import { Link } from 'react-router';
import { ArrowRight, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import MagneticButton from '../components/MagneticButton';
import AnimatedHeadline from '../components/AnimatedHeadline';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import TikTokIcon from '../components/TikTokIcon';
import SEO from '../components/SEO';

export default function HomePage() {
  const socialSectionRef = useRef<HTMLDivElement>(null);
  const [tiktokScriptLoaded, setTiktokScriptLoaded] = useState(false);

  // Defer TikTok embed script loading until section is visible
  useEffect(() => {
    if (!socialSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tiktokScriptLoaded) {
            // Load TikTok script only when section becomes visible
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
            setTiktokScriptLoaded(true);
            
            // Stop observing after loading
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '1500px', // Load when user is midway before section
        threshold: 0.1,
      }
    );

    observer.observe(socialSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [tiktokScriptLoaded]);

  return (
    <div className="bg-[#F8F9FA]">
      <SEO 
        title="Graduate Consult"
        description="Empowering early career excellence through professional development and strategic consulting for young talent across Africa and beyond. Expert-led webinars, organizational consulting, and digital learning resources."
        url="https://www.graduateconsult.com"
      />
      
      {/* Hero Section - Editorial Asymmetric */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-16 items-center">
            {/* Content - Offset left */}
            <div className="lg:col-span-6 lg:col-start-1 relative z-10">
              <div className="mb-6 sm:mb-8">
                <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                  Est. 2024
                </span>
              </div>
              
              <AnimatedHeadline
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-8 sm:mb-10 leading-[0.95] text-[#1E3A8A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                delay={0.2}
                animationType="word"
              >
                {`Empowering\nEarly Career\nExcellence`}
              </AnimatedHeadline>
              
              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#1E3A8A] to-transparent mt-6 sm:mt-8"
              ></motion.div>
              
              <div className="max-w-md mb-10 sm:mb-12 mt-6 sm:mt-8">
                <p className="text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Professional development and strategic consulting for young talent across Africa and beyond
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#1E40AF] transition-colors duration-300"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-3" size={20} />
                  </Link>
                </MagneticButton>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border border-[#1E3A8A]/30 text-[#1E3A8A] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:border-[#1E3A8A] hover:bg-[#EFF6FF] transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            {/* Image - Offset right with overlap */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7 relative"
            >
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/drqx8rtbw/image/upload/header-banner_xlcf44.jpg" 
                  alt="Graduate Consult - Professional development" 
                  className="w-full h-auto"
                />
                {/* Accent overlay element */}
                <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-full h-full border border-[#3B82F6]/30 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Statement - Full Width */}
      <section className="py-16 sm:py-20 md:py-32 bg-[#0F172A]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight italic px-4" style={{ fontFamily: 'DM Serif Display, serif' }}>
              "We believe talent development should be intentional, equitable, and transformative"
            </p>
            <div className="mt-8 sm:mt-12 w-24 h-0.5 bg-[#3B82F6] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Editorial Grid */}
      <section className="py-16 sm:py-24 md:py-40">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Section Header - Asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                What We Offer
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#1E3A8A] leading-[0.95]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Strategic<br />
                Services
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 lg:col-start-7 flex items-end"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#475569] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tailored solutions for early career talent and organizations building inclusive talent pipelines
              </p>
            </motion.div>
          </div>

          {/* Services Grid - Custom Layout */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                number: '01',
                title: 'Career Development Webinars',
                description: 'Expert-led sessions on job search strategies, professional skills, and workplace readiness'
              },
              {
                number: '02',
                title: 'Organizational Consulting',
                description: 'Strategic talent pipeline design, recruitment optimization, and inclusive hiring practices'
              },
              {
                number: '03',
                title: 'Digital Learning Resources',
                description: 'Curated templates, guides, and tools to accelerate professional growth'
              },
              {
                number: '04',
                title: 'One-on-One Coaching',
                description: 'Personalized career guidance and mentorship for early career professionals'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link to="/services" className="block bg-white border border-[#E2E8F0] hover:border-[#1E3A8A]/40 transition-all duration-300">
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1E3A8A]/20 group-hover:text-[#1E3A8A]/40 transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1E3A8A] mb-3 sm:mb-4 group-hover:text-[#1E40AF] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                          {service.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {service.description}
                        </p>
                        <div className="flex items-center text-[#1E3A8A] font-medium group-hover:translate-x-2 transition-transform text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Learn more
                          <ArrowRight className="ml-2" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Split Layout */}
      <section className="py-16 sm:py-24 md:py-40 bg-[#EFF6FF]">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our Impact
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Transforming Careers Across Africa and Beyond
              </h2>
              <p className="text-base sm:text-lg md:text-xl italic text-[#1E3A8A]/80 mb-6 sm:mb-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Intentional pathways. Future-ready talent.
              </p>
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-8 sm:mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                Even before our official launch, we have supported hundreds of young professionals and partnered with organisations to strengthen inclusive, effective early-career talent systems—and we are excited to continue this work.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#1E3A8A] font-medium hover:text-[#1E40AF] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Read our story
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              {[
                { number: '1,000+', label: 'Students & Professionals Impacted' },
                { number: '20+', label: 'Webinars Delivered' },
                { number: '7+', label: 'Organizations Consulted/Advised' },
                { number: '95–98%', label: 'Satisfaction Score' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 md:p-8 border border-[#DBEAFE]">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] mb-2 sm:mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[#475569] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed - Editorial Treatment */}
      <section className="py-16 sm:py-24 md:py-40">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Follow Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-4 sm:mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Connect With Us
            </h2>
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our community on Instagram for career tips, insights, and inspiration
            </p>
          </motion.div>

          {/* Instagram Feed Section */}
          <div ref={socialSectionRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Social Media Updates
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* TikTok Embed 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-[400px] h-[600px] sm:h-[740px]">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@graduateconsult/video/7578291274499820856" 
                    data-video-id="7578291274499820856"
                    style={{ maxWidth: '605px', minWidth: '325px', height: '100%' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title="@graduateconsult" 
                        href="https://www.tiktok.com/@graduateconsult/video/7578291274499820856"
                        rel="noopener noreferrer"
                      >
                        @graduateconsult
                      </a>
                    </section>
                  </blockquote>
                </div>
              </motion.div>

              {/* TikTok Embed 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-[400px] h-[600px] sm:h-[740px]">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@graduateconsult/video/7585254786392444216" 
                    data-video-id="7585254786392444216"
                    style={{ maxWidth: '605px', minWidth: '325px', height: '100%' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title="@graduateconsult" 
                        href="https://www.tiktok.com/@graduateconsult/video/7585254786392444216"
                        rel="noopener noreferrer"
                      >
                        @graduateconsult
                      </a>
                    </section>
                  </blockquote>
                </div>
              </motion.div>

              {/* TikTok Embed 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-[400px] h-[600px] sm:h-[740px]">
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@graduateconsult/video/7582575530575596820" 
                    data-video-id="7582575530575596820"
                    style={{ maxWidth: '605px', minWidth: '325px', height: '100%' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title="@graduateconsult" 
                        href="https://www.tiktok.com/@graduateconsult/video/7582575530575596820"
                        rel="noopener noreferrer"
                      >
                        @graduateconsult
                      </a>
                    </section>
                  </blockquote>
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <a
                  href="https://www.tiktok.com/@graduateconsult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-[#1E40AF] transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <TikTokIcon size={20} />
                  Follow on TikTok
                </a>
                <a
                  href="https://www.instagram.com/graduateconsult/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-[#1E40AF] transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
                <a
                  href="https://www.youtube.com/@GraduateConsult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-[#1E40AF] transition-colors duration-300 text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Youtube size={20} />
                  Follow on YouTube
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Editorial */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#0F172A] relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white mb-8 sm:mb-12 leading-tight px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Ready to Take the<br />
              <span className="italic">Next Step?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our upcoming webinar or schedule a consultation to learn how we can support your career development journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                to="/webinar-registration"
                className="inline-flex items-center justify-center bg-[#3B82F6] text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-[#2563EB] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Register for Webinar
              </Link>
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDG Alignment - Subtle Footer Banner */}
      <section className="py-8 bg-[#F8F9FA] border-t border-gray-200">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Graduate Consult is aligned to Sustainable Development Goals 4 (Quality Education), 8 (Decent Work and Economic Growth), and 10 (Reduced Inequalities)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}