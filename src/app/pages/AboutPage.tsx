import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, Target, Globe, Users, TrendingUp, Award, Briefcase, Mail, Linkedin, Instagram } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import AnimatedHeadline from '../components/AnimatedHeadline';
import SEO from '../components/SEO';

// About Page - Graduate Consult story and mission
// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us"
        description="Meet Graduate Consult - bridging education and employment through professional development and strategic consulting. Learn about our founder Jessica Sugru Ali, our mission, values, and impact across Africa."
        url="https://www.graduateconsult.com/about"
      />
      
      {/* Hero Section - Editorial */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A8A]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main heading - spans 6 columns, starts at column 1 */}
              <div className="lg:col-span-6 lg:col-start-1">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Our Story
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {`About\nGraduate\nConsult`}
                </AnimatedHeadline>
                
                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '200px' }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-[#1E3A8A] to-transparent mt-8"
                ></motion.div>
              </div>
              
              {/* Intro text - spans 4 columns, offset to the right */}
              <div className="lg:col-span-4 lg:col-start-8 lg:pt-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#1E3A8A] to-transparent"></div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-8">
                    We design intentional pathways that equip early-career talent to thrive and help organisations build inclusive, future-ready talent pipelines.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Graduate Consult Section - Premium Design */}
      <section className="py-28 md:py-40 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="w-full px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Heading Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:col-start-1"
            >
              {/* Decorative accent */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div className="h-px bg-gradient-to-r from-[#1E3A8A]/50 to-transparent w-32"></div>
              </div>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 text-[#1E3A8A] leading-[0.95]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Why Graduate<br />Consult
              </h2>
              
              {/* Large Pull Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-16 hidden lg:block"
              >
                <div className="absolute -left-6 top-0 text-[#1E3A8A] opacity-10">
                  <svg width="80" height="64" viewBox="0 0 60 48" fill="currentColor">
                    <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V48h24V24H12V13.5C12 12.1193 13.1193 11 14.5 11H24V0H13.5zM49.5 0C42.0442 0 36 6.04416 36 13.5V48h24V24H48V13.5C48 12.1193 49.1193 11 50.5 11H60V0H49.5z"/>
                  </svg>
                </div>
                <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E3A8A] leading-tight italic pl-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Talent is everywhere, but opportunity is not
                </p>
              </motion.div>
            </motion.div>
            
            {/* Content Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7 space-y-8"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light"
              >
                Graduate Consult was founded to bridge the gap between education and employment—<span className="font-semibold text-[#1E3A8A]">intentionally, practically, and at scale.</span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-1 bg-[#1E3A8A] mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We exist to ensure that early-career talent is not left to "figure it out" alone, and that organisations are not forced to choose between business performance and inclusive talent development.
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Graduate Consult works at both ends of the pipeline: equipping students and graduates with the skills, clarity, and confidence to succeed, while supporting organisations to design structured, demand-driven pathways that develop future-ready talent.
              </motion.p>
              
              {/* Core Belief Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative mt-12 p-10 lg:p-12 bg-gradient-to-br from-[#1E3A8A]/8 via-[#1E3A8A]/4 to-transparent border-l-4 border-[#1E3A8A]"
              >
                <div className="absolute top-6 right-6 w-24 h-24 bg-[#1E3A8A]/5 rounded-full blur-2xl"></div>
                <p className="text-base uppercase tracking-[0.2em] text-[#1E3A8A] font-semibold mb-4">
                  Our Core Belief
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium relative">
                  With the right systems, <span className="text-[#1E3A8A] font-semibold">both individuals and organisations can win.</span> We build those systems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jessica's Story - Magazine-style layout */}
      <section className="py-28 md:py-40 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Image - spans 5 columns */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative"
              >
                <div className="sticky top-24">
                  <div className="relative group">
                    <img
                      src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865160/jessica-full-length-shot_fvm7ir.jpg"
                      alt="Jessica Sugru Ali - Founder & Lead Consultant"
                      className="w-full h-auto shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Decorative frame elements */}
                    <div className="absolute -bottom-8 -right-8 w-full h-full border-4 border-[#1E3A8A]/20 -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1E3A8A] -z-20 opacity-10"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Content - spans 7 columns */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-10"
              >
                <div>
                  {/* Decorative accent */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-[#1E3A8A] rounded-full"></div>
                    <div className="w-16 h-px bg-gradient-to-r from-[#1E3A8A] to-transparent"></div>
                  </div>
                  
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 text-[#1E3A8A] leading-[0.9]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Meet Jessica
                  </h2>
                  <p className="text-2xl md:text-3xl text-gray-600 font-light mb-6">Founder & Lead Consultant</p>
                </div>
                
                <div className="space-y-8 max-w-3xl">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-800 leading-relaxed"
                  >
                    Jessica is an HR, Talent, and Transformation leader with over a decade of experience designing and delivering people solutions that help individuals and organisations thrive—especially at critical transition points.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    Throughout her career, Jessica has seen a recurring pattern: talented young people struggling not because they lack intelligence, drive, or potential, but because they lack access, guidance, and structured support at the right time. She has lived this reality herself—and has also experienced firsthand how the right mentorship, exposure, and systems can radically accelerate growth.
                  </motion.p>
                  
                  {/* Pull quote - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative my-14 pl-12 py-10 bg-gradient-to-r from-[#1E3A8A]/5 to-transparent"
                  >
                    <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#1E3A8A] to-[#1E3A8A]/30"></div>
                    <div className="absolute -top-6 left-8 text-[#1E3A8A] opacity-20">
                      <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
                        <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V48h24V24H12V13.5C12 12.1193 13.1193 11 14.5 11H24V0H13.5zM49.5 0C42.0442 0 36 6.04416 36 13.5V48h24V24H48V13.5C48 12.1193 49.1193 11 50.5 11H60V0H49.5z"/>
                      </svg>
                    </div>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1E3A8A] leading-snug italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Talent is everywhere, but opportunity is not—and with the right systems, both individuals and organisations can win.
                    </p>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    Her work spans career advising, early-career program design, talent development, and organisational learning across both corporate and development contexts. She has worked with global institutions and complex organisations, supporting talent pipelines, leadership development, and workforce transformation initiatives that balance performance with inclusion.
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    Jessica holds a BSc in Management Information Systems from Ashesi University and has built her career across leading financial services (<span className="font-semibold text-[#1E3A8A]">Bank of America, Morgan Stanley, Absa Ghana</span>), HEI institutions and BPO Industry, where she developed a deep understanding of how talent is identified, developed, and retained—and where the system often fails young people before they even get a fair chance.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Action - Women Changemakers Session */}
      <section className="py-28 md:py-40 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div className="h-px bg-gradient-to-r from-[#1E3A8A]/50 to-transparent w-32"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-[#1E3A8A] leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Impact in Action
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl leading-relaxed">
                Real work with real changemakers building their careers while leading impact initiatives
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-stretch">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 space-y-6"
              >
                {/* 1. SUMMARY - Context & Partnership */}
                <div className="relative bg-white p-8 border-2 border-[#1E3A8A]/20 shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E3A8A]/5 rounded-bl-full"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#1E3A8A]"></div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#1E3A8A]/10 p-3 rounded-full shrink-0">
                      <Briefcase className="text-[#1E3A8A]" size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#1E3A8A] font-semibold">Partnership</span>
                      <h3 className="text-3xl font-semibold text-[#1E3A8A] mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Women Changemakers for Education
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                    Engaging with fellows of the <a href="https://www.change4ed.org" target="_blank" rel="noopener noreferrer" className="text-[#1E3A8A] font-semibold hover:underline border-b-2 border-[#1E3A8A]/30 hover:border-[#1E3A8A] transition-colors">Women Changemakers for Education</a> programme—a cohort of emerging women leaders driving change in education across their communities.
                  </p>
                </div>

                {/* 2. ACTION - What We Did */}
                <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/80 p-8 text-white shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <div className="bg-white/20 p-3 rounded-full shrink-0 backdrop-blur-sm">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">The Session</span>
                      <h4 className="text-2xl font-semibold text-white mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Career Development Workshop
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-lg text-white/95 leading-relaxed relative z-10">
                    Jessica facilitated an interactive session focused on building intentional careers. Through reflection, discussion, and practical frameworks, fellows navigated key decisions while balancing professional roles, passion projects, NGO leadership, and sustainability—gaining clarity on next career steps and aligning growth with purpose and real-life constraints.
                  </p>
                </div>

                {/* 3. IMPACT - Results & Outcomes */}
                <div className="relative bg-neutral-50 p-6 border-l-8 border-[#1E3A8A] shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Decorative accent stripe */}
                  <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A]/50 to-transparent"></div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#1E3A8A] p-3 rounded-full shrink-0">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#1E3A8A] font-semibold">Measured Results</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-3 border-b-2 border-[#1E3A8A]/20">
                      <div className="text-5xl font-bold text-[#1E3A8A] min-w-[90px]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>8</div>
                      <p className="text-base text-gray-700 leading-snug font-medium">Emerging women leaders engaged</p>
                    </div>
                    <div className="flex items-center gap-4 pb-3 border-b-2 border-[#1E3A8A]/20">
                      <div className="text-5xl font-bold text-[#1E3A8A] min-w-[90px]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>87.5%</div>
                      <p className="text-base text-gray-700 leading-snug font-medium">Session satisfaction (4–5★ ratings)</p>
                    </div>
                    <div className="flex items-center gap-4 pb-3 border-b-2 border-[#1E3A8A]/20">
                      <div className="text-5xl font-bold text-[#1E3A8A] min-w-[90px]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>100%</div>
                      <p className="text-base text-gray-700 leading-snug font-medium">Engagement reported</p>
                    </div>
                    <div className="pt-2 bg-white/60 -mx-4 px-4 py-3 rounded-lg">
                      <p className="text-base text-gray-800 leading-relaxed">
                        <span className="font-bold text-[#1E3A8A] text-lg">Key outcomes:</span> Increased career clarity, intentional decision-making, and prioritisation of sustainable growth
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6"
              >
                <div className="relative group h-full">
                  <img
                    src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865321/jessica-talking_cxjpuh.jpg"
                    alt="Jessica facilitating Career Development session at Women Changemakers for Education"
                    className="w-full h-full object-cover shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">Jessica facilitating the Career Development session</p>
                  </div>
                </div>
              </motion.div>
            </div>



            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-20 max-w-4xl mx-auto text-center"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#1E3A8A] opacity-10">
                <svg width="100" height="80" viewBox="0 0 60 48" fill="currentColor">
                  <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V48h24V24H12V13.5C12 12.1193 13.1193 11 14.5 11H24V0H13.5zM49.5 0C42.0442 0 36 6.04416 36 13.5V48h24V24H48V13.5C48 12.1193 49.1193 11 50.5 11H60V0H49.5z"/>
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] leading-tight italic pt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Supporting women leaders who are building impact organizations while navigating their own career journeys
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Collaborative Engagement */}
      <section className="py-28 md:py-40 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/50 to-transparent w-32"></div>
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/50 to-transparent w-32"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-[#1E3A8A] leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Strengthening the Education-to-Employment Ecosystem
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Engaging with Higher Education Institutions and education-sector stakeholders working at the intersection of learning and employability
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-[#1E3A8A]/8 to-transparent p-8 md:p-12 border-l-4 border-[#1E3A8A] mb-12 max-w-5xl mx-auto"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Jessica attended an education collaborative conference to engage with Higher Education Institutions and education-sector stakeholders working at the intersection of learning and employability.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The engagement supported relationship-building with organisations aligned to Graduate Consult's work in talent development, early-career pathways, and career readiness, strengthening opportunities for collaboration across the education-to-employment ecosystem.
              </p>
            </motion.div>

            {/* Photo Gallery - Building Community & Capacity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Building Community & Capacity
              </h3>
              
              {/* Featured Conference Photo */}
              <div className="relative group mb-8 max-w-4xl mx-auto">
                <img
                  src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865323/jessica-with-four-mixed-at-conference_yrdjx2.jpg"
                  alt="Jessica at Education Collaborative Conference"
                  className="w-full h-auto shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                  <p className="text-white text-lg md:text-xl font-medium">Building partnerships across the education-to-employment ecosystem</p>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative aspect-[4/3] overflow-hidden shadow-lg group">
                  <img
                    src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865324/jessica-with-ten-women-at-conference_aykdus.jpg"
                    alt="Jessica with Women Changemakers fellows"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden shadow-lg group">
                  <img
                    src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865325/jessica-with-three-women-at-conference_ai9rzb.jpg"
                    alt="Team building and networking session"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1">
                  <img
                    src="https://res.cloudinary.com/drqx8rtbw/image/upload/v1769865322/jessica-with-big-group-of-women-at-conference_el3oxy.jpg"
                    alt="Women Changemakers for Education fellows meeting"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced spacing */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                  <div className="bg-[#1E3A8A] p-3 sm:p-4 rounded-full mb-4 sm:mb-0 sm:mr-5">
                    <Target size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Mission</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To equip early-career talent with the tools and knowledge to thrive in their careers while fostering meaningful partnerships with organisations to design inclusive, future-ready talent pipelines that drive productivity and decent work.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                  <div className="bg-[#1E3A8A] p-3 sm:p-4 rounded-full mb-4 sm:mb-0 sm:mr-5">
                    <Globe size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Vision</h2>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  A future where early-career talent is intentionally developed, fairly supported, and enabled to contribute meaningfully to organizational performance and sustainable economic growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced design */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="w-20 h-1 bg-[#1E3A8A] mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Our Values
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Intentionality',
                  description: 'We believe careers and talent systems should be designed, not improvised. We prioritise thoughtful decision-making over urgency and noise.',
                },
                {
                  title: 'Agency',
                  description: 'We encourage young people to take ownership of their growth rather than wait to be discovered or rescued. We build confidence, capability, and responsibility in every interaction.',
                },
                {
                  title: 'Excellence with Context',
                  description: 'We uphold global standards while respecting local realities. We reject both mediocrity and copy-paste solutions.',
                },
                {
                  title: 'Systems Thinking',
                  description: 'We look beyond individuals to the structures shaping their outcomes. Sustainable impact comes from fixing pipelines, incentives, and decision frameworks, not just motivation.',
                },
                {
                  title: 'Stewardship',
                  description: 'We take responsibility for the trust placed in us by young people, families, organisations, and partners. We are building for long-term, acting responsibly, and measuring impact honestly.',
                },
                {
                  title: 'Dignity of Work',
                  description: 'We believe work should be meaningful, developmental, and humane, especially at the start of one\'s career. Early-career talent deserves structure, respect, and opportunity, not exploitation.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="bg-neutral-50 p-8 border-l-4 border-[#1E3A8A] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Enhanced */}
      <section className="py-24 md:py-32 bg-[#1E3A8A] text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-semibold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Impact</h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Intentional pathways. Future-ready talent.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: 1000, suffix: '+', label: 'Students & Professionals Impacted', icon: <Users size={48} /> },
                { number: 7, suffix: '+', label: 'Organizations Consulted', icon: <Briefcase size={48} /> },
                { number: 95, suffix: '%', label: 'Satisfaction Score', icon: <TrendingUp size={48} /> },
                { number: 20, suffix: '+', label: 'Webinars Delivered', icon: <Award size={48} /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  className="text-center bg-white/10 backdrop-blur-sm p-10 border border-white/20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white mb-6 flex justify-center opacity-70"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-5xl md:text-6xl font-semibold mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-lg md:text-xl text-white/90">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      {/* TEMPORARILY HIDDEN - Still finalizing team details */}
      {/* <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="w-20 h-1 bg-[#1E3A8A] mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Meet Our Team</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
                Dedicated professionals committed to your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  name: 'Jessica Sugru Ali',
                  role: 'Founder & Lead Consultant',
                  image: 'https://res.cloudinary.com/drqx8rtbw/image/upload/founder-jessica-small_suw0ox.jpg',
                  bio: 'Former HR professional with 8+ years of experience in talent development across multinational organizations in Ghana.',
                  linkedin: 'https://www.linkedin.com/in/jessicasugruali/'
                },
                {
                  name: 'Kwame Mensah',
                  role: 'Career Development Specialist',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NzM3MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  bio: 'Certified career coach specializing in early career transitions and professional skills development for young graduates.',
                  linkedin: '#'
                },
                {
                  name: 'Ama Osei',
                  role: 'Learning & Development Coordinator',
                  image: 'https://images.unsplash.com/photo-1638727295415-286409421143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBibGFjayUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3ODI5NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  bio: 'Experienced training facilitator with expertise in designing and delivering impactful learning programs for diverse audiences.',
                  linkedin: '#'
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <motion.a
                          href={member.linkedin}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-[#1E3A8A] p-3 rounded-full hover:bg-neutral-100 transition-colors duration-300"
                        >
                          <Linkedin size={24} />
                        </motion.a>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {member.name}
                      </h3>
                      <p className="text-gray-500 font-medium mb-4 text-lg">
                        {member.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Instagram Feed Section */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="w-20 h-1 bg-[#1E3A8A] mb-8 mx-auto"></div>
              <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Behind the Scenes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Follow us on social media for team updates, event highlights, and career insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="https://www.instagram.com/graduateconsult/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Instagram size={24} />
                Follow @graduateconsult
              </a>

              <a
                href="https://www.tiktok.com/@graduateconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                Follow on TikTok
              </a>

              <a
                href="https://www.linkedin.com/company/graduate-consult/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-8 py-4 font-semibold hover:bg-[#004182] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Linkedin size={24} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Alignment - Enhanced */}
      <section className="py-24 md:py-32 bg-[#1E3A8A] text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-semibold mb-6 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              SDG Alignment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed text-center max-w-3xl mx-auto"
            >
              Graduate Consult contributes to SDGs 4, 8, 10, and 17 by strengthening education-to-employment transitions, promoting decent work, reducing inequality, and enabling inclusive access to opportunities through partnerships.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '4', title: 'Quality Education' },
                { num: '8', title: 'Decent Work' },
                { num: '10', title: 'Reduced Inequalities' },
                { num: '17', title: 'Partnerships' }
              ].map((sdg, index) => (
                <motion.div
                  key={sdg.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white text-[#1E3A8A] p-6 md:p-8 text-center group cursor-default shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {sdg.num}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#1E3A8A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {sdg.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Join Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Whether you're an early career professional or an organization looking to build better talent systems, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <MagneticButton>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-[#1E3A8A] text-white px-10 py-4 text-lg font-semibold hover:bg-[#1E3A8A]/90 transition-all duration-300 shadow-lg"
                >
                  Explore Our Services
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-4 text-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}