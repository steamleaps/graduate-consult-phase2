import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Building2, Target, Lightbulb, TrendingUp, Award, CheckCircle2, ArrowRight, Briefcase, BookOpen, Heart, Zap } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import AnimatedHeadline from '../components/AnimatedHeadline';
import SEO from '../components/SEO';

// Services Page - Comprehensive solutions for individuals and organizations
export default function ServicesPage() {
  return (
    <div className="bg-white">
      <SEO 
        title="Our Services"
        description="Professional career development for individuals and organizational talent consulting. Webinars, consultation services, digital resources, and customized talent development programs for early-career excellence."
        url="https://www.graduateconsult.com/services"
      />
      
      {/* Hero Section - Editorial */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A8A]/3 rounded-full blur-3xl"></div>
        
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main heading */}
            <div className="lg:col-span-6 lg:col-start-1">
              <div className="mb-8">
                <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                  What We Offer
                </span>
              </div>
              <AnimatedHeadline
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                delay={0.2}
                animationType="word"
              >
                {`Our\nServices`}
              </AnimatedHeadline>
              
              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#1E3A8A] to-transparent mt-8"
              ></motion.div>
            </div>
            
            {/* Intro text */}
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-[#334155] leading-relaxed">
                  Graduate Consult designs and delivers structured early-career development solutions that support both people and organisations at one of the most critical points in the talent lifecycle.
                </p>
                
                {/* Impact Stats */}
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1K+</div>
                    <div className="text-sm text-gray-600">Trained & Impacted</div>
                  </div>
                  <div className="border-l-2 border-[#1E3A8A]/20"></div>
                  <div>
                    <div className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>7+</div>
                    <div className="text-sm text-gray-600">Partners</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section - Two Core Audiences */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #1E3A8A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <span className="text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                  Our Approach
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Two Core Audiences,<br />One Integrated Offering
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our services are built around a simple belief: <span className="font-semibold text-[#1E3A8A]">early potential thrives when development is intentional, structured, and aligned to real workforce needs.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Individuals Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#1E3A8A] p-3 rounded-full">
                  <Users size={32} className="text-white" />
                </div>
                <div className="h-px bg-gradient-to-r from-[#1E3A8A]/50 to-transparent w-32"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1E3A8A] mb-6 leading-[0.95]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                For Individuals<br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600">(Early-Career Talent)</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
                We support students and early-career professionals to navigate the transition from education to employment with clarity, confidence, and capability.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target size={40} />,
                  number: '01',
                  title: 'Career Readiness & Transition',
                  description: 'We help early-career talent build a strong foundation for the world of work.',
                  details: 'This includes career clarity, professional identity, workplace expectations, and practical preparation for entry-level roles. Our approach goes beyond CVs and interviews to focus on readiness, adaptability, and long-term growth.',
                  outcome: 'Confident early-career professionals who start strong and adapt quickly.',
                  image: 'https://res.cloudinary.com/drqx8rtbw/image/upload/graduate-girl-cropped_8d05ae.jpg',
                },
                {
                  icon: <Zap size={40} />,
                  number: '02',
                  title: 'Early-Career Capability Building',
                  description: 'We develop the core skills employers expect but often assume.',
                  details: 'Our capability-building programs focus on communication, problem-solving, professionalism, client readiness, attention to detail, and performance habits required in real work environments.',
                  outcome: 'Work-ready talent equipped to contribute meaningfully from day one.',
                  image: 'https://res.cloudinary.com/drqx8rtbw/image/upload/early-career-guys_lawsbl.jpg',
                },
                {
                  icon: <Heart size={40} />,
                  number: '03',
                  title: 'Mentorship, Coaching & Guidance',
                  description: 'We provide structured guidance at critical career decision points.',
                  details: 'Through mentorship and coaching, we support early-career talent to reflect, make informed decisions, and navigate challenges with confidence and self-awareness.',
                  outcome: 'Grounded professionals with clearer direction and stronger decision-making skills.',
                  image: 'https://res.cloudinary.com/drqx8rtbw/image/upload/v1770124041/1e04223e-885c-4e2a-91d5-c49cf11e6a01_2_ikaw7a.jpg',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="text-7xl font-bold text-white/90" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {service.number}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 z-10 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-10 border-l-4 border-[#1E3A8A]">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-800 font-medium mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm uppercase tracking-wider text-[#1E3A8A] font-semibold mb-2">
                        Outcomes
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed italic">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA for Individuals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#1E3A8A] text-white px-10 py-5 text-lg font-semibold hover:bg-[#1E3A8A]/90 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/webinar-registration"
                  className="inline-flex items-center justify-center border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                >
                  Join Our Webinar
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Organizations Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#1E3A8A] p-3 rounded-full">
                  <Building2 size={32} className="text-white" />
                </div>
                <div className="h-px bg-gradient-to-r from-[#1E3A8A]/50 to-transparent w-32"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1E3A8A] mb-6 leading-[0.95]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                For Organizations<br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600">(Employers & Institutions)</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
                We partner with organisations to design inclusive, future-ready early-career pathways that strengthen talent pipelines and improve performance.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase size={40} />,
                  number: '01',
                  title: 'Early-Career Program Design',
                  description: 'We design and strengthen structured early-career programs.',
                  details: 'This includes internships, graduate programmes, apprenticeships, and entry-level pathways that are aligned to business needs and organisational capacity.',
                  outcome: 'Intentional programs that develop talent, not just fill roles.',
                  image: 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHByb2dyYW0lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njg2MDUzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                },
                {
                  icon: <TrendingUp size={40} />,
                  number: '02',
                  title: 'Talent Pipeline & Workforce Development Systems Review',
                  description: 'We help organisations build sustainable, demand-driven talent pipelines.',
                  details: 'Our work focuses on reviewing and aligning early-career development teams with workforce planning capability, skills needs, to help achieve their talent pipeline and long-term productivity goals.',
                  outcome: 'Future-ready pipelines that improve retention, capability, and performance.',
                  image: 'https://res.cloudinary.com/drqx8rtbw/image/upload/v1770124042/jessica-running-a-session_njdsla.jpg',
                },
                {
                  icon: <Lightbulb size={40} />,
                  number: '03',
                  title: 'Capability Building & Strategic Partnerships',
                  description: 'We strengthen the systems that support early-career development.',
                  details: 'This includes training for managers and teams, institutional partnerships, and collaborative programmes that improve how organisations develop and support early-career talent.',
                  outcome: 'Stronger organisations equipped to develop talent intentionally and inclusively.',
                  image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODYwNjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="text-7xl font-bold text-white/90" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {service.number}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 z-10 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-10 border-l-4 border-[#1E3A8A]">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-800 font-medium mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm uppercase tracking-wider text-[#1E3A8A] font-semibold mb-2">
                        Outcomes
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed italic">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA for Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#1E3A8A] text-white px-10 py-5 text-lg font-semibold hover:bg-[#1E3A8A]/90 transition-all duration-300 group"
                >
                  Schedule Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-32 bg-[#1E3A8A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                How We Work
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Our approach combines practical methods with intentional design to create lasting impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BookOpen size={40} />,
                  title: 'Practical, Skills-Based Learning',
                },
                {
                  icon: <Target size={40} />,
                  title: 'Structured Program & Pathway Design',
                },
                {
                  icon: <Users size={40} />,
                  title: 'Partnership with Organisations & Institutions',
                },
                {
                  icon: <Award size={40} />,
                  title: 'Focus on Decent Work, Inclusion & Productivity',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 h-full flex flex-col items-center justify-center">
                    <div className="text-white mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                We work across sectors and contexts, adapting our solutions to meet real workforce and talent development needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="w-20 h-1 bg-[#1E3A8A] mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Why Choose Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Target size={48} />,
                  title: 'Context-Driven Expertise',
                  description: 'Grounded in local realities, informed by global standards.',
                },
                {
                  icon: <CheckCircle2 size={48} />,
                  title: 'Proven, Practical Methods',
                  description: 'Evidence-based solutions designed for real-world impact.',
                },
                {
                  icon: <TrendingUp size={48} />,
                  title: 'End-to-End Support',
                  description: 'We work across individuals and organisations to create lasting change.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="text-center"
                >
                  <div className="bg-neutral-50 p-10 border-l-4 border-[#1E3A8A] hover:shadow-lg transition-all duration-300">
                    <div className="text-[#1E3A8A] mb-6 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="w-20 h-1 bg-[#1E3A8A] mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Success Stories
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
                Real results from our partnerships and programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 lg:p-12 border-l-4 border-[#1E3A8A] shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-full">
                    <Award size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Graduate Recruitment Transformation
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Comprehensive redesign of graduate intake process, resulting in improved quality of hire and stronger early-career retention.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>40%</div>
                        <div className="text-sm text-gray-600">Improved Retention</div>
                      </div>
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3x</div>
                        <div className="text-sm text-gray-600">Application Quality</div>
                      </div>
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>85%</div>
                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-10 lg:p-12 border-l-4 border-[#1E3A8A] shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-[#1E3A8A] p-4 rounded-full">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Financial Services Graduate Program
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Designed and delivered a structured onboarding and development program for a leading financial services institution, equipping graduates with essential technical and professional skills.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>120+</div>
                        <div className="text-sm text-gray-600">Graduates Trained</div>
                      </div>
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>90%</div>
                        <div className="text-sm text-gray-600">Program Satisfaction</div>
                      </div>
                      <div className="border-l-2 border-[#1E3A8A] pl-4">
                        <div className="text-3xl font-bold text-[#1E3A8A] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>6 months</div>
                        <div className="text-sm text-gray-600">Program Duration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 text-center"
            >
              <p className="text-lg text-gray-600 italic">
                More success stories coming soon as we continue to gather impact data from our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="w-full px-8 md:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Work With Us
              </h2>
              
              <p className="text-2xl md:text-3xl text-white/90 mb-6 leading-relaxed max-w-4xl mx-auto">
                Whether you are an individual navigating your early career or an organisation building future-ready talent pipelines, Graduate Consult partners with you to design pathways that work.
              </p>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Let's build intentional pathways—from early potential to performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 group shadow-xl"
                  >
                    Get Started Today
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                  >
                    Learn More About Us
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}