import { Link } from 'react-router';
import { motion } from 'motion/react';
import { User, Clock, ArrowRight } from 'lucide-react';
import AnimatedHeadline from '../components/AnimatedHeadline';
import MagneticButton from '../components/MagneticButton';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Navigating Your First Year in the Workplace',
      excerpt: 'Practical advice for making a strong impression, building relationships, and setting yourself up for long-term success.',
      date: 'December 28, 2025',
      author: 'Graduate Consult Team',
      category: 'Workplace Tips',
      internalUrl: '/blog/navigating-first-year-workplace',
      image: 'https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvcmtwbGFjZSUyMG9mZmljZXxlbnwxfHx8fDE3Njg2MDE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Building a Sustainable Talent Pipeline in Africa',
      excerpt: 'How organizations can create inclusive recruitment and development systems that benefit both companies and graduates.',
      date: 'December 20, 2025',
      author: 'Jessica, Founder',
      category: 'For Organizations',
      internalUrl: '/blog/sustainable-talent-pipeline-africa',
      image: 'https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njg1MDU0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Power of Intentional Career Planning',
      excerpt: 'Why leaving your career to chance isn\'t an option and how to take ownership of your professional journey.',
      date: 'December 15, 2025',
      author: 'Jessica, Founder',
      category: 'Career Strategy',
      internalUrl: '/blog/intentional-career-planning',
      image: 'https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwbGFubmluZyUyMGdvYWxzJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzY4NjAxOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Interview Success: Beyond the Basics',
      excerpt: 'Advanced techniques for standing out in job interviews and making lasting impressions on potential employers.',
      date: 'December 10, 2025',
      author: 'Jessica, Founder',
      category: 'For Graduates',
      internalUrl: '/blog/interview-success-beyond-basics',
      image: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY4NjAxOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Your Career Is Not Neutral',
      excerpt: 'Gen Z, the SDGs, and the new rules of impact at work. Understanding how careers shape systems and what you stand behind.',
      date: 'December 5, 2025',
      author: 'Jessica, Founder',
      category: 'Impact & Purpose',
      internalUrl: '/blog/career-not-neutral',
      image: 'https://images.unsplash.com/photo-1760440415591-f5d23cdab608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGRldmVsb3BtZW50JTIwaW1wYWN0fGVufDF8fHx8MTc2ODYwMTk3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Featured post is the first one
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="bg-white relative overflow-hidden">
      <SEO 
        title="Blog & Insights"
        description="Expert career advice, workplace tips, and professional development insights from Graduate Consult. Learn about early career success, talent management, and sustainable development in Africa."
        url="https://www.graduateconsult.com/blog"
      />
      
      {/* Hero Section - Editorial */}
      <section className="relative bg-neutral-50 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Insights & Commentary
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  Career Insights & Commentary
                </AnimatedHeadline>
              </div>
              
              <div className="lg:col-span-4 lg:pt-24">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                >
                  Expert perspectives on career development, workplace trends, and talent management in Africa.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - Magazine Style */}
      <section className="py-20 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1E3A8A] mb-6">Featured Article</div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-neutral-50 p-10 lg:p-16 shadow-xl">
                <div className="lg:col-span-5">
                  <div className="h-full relative overflow-hidden min-h-[400px] group">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-[#1E3A8A]/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 z-10">
                      <div className="text-8xl font-semibold text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        01
                      </div>
                      <div className="w-16 h-1 bg-white opacity-50"></div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="bg-[#1E3A8A] text-white px-4 py-2 font-semibold text-sm tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-8 text-gray-500 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                  </div>
                  <MagneticButton className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 px-8 py-4 font-semibold flex items-center gap-2 w-fit transition-colors">
                    {featuredPost.internalUrl ? (
                      <Link 
                        to={featuredPost.internalUrl} 
                        className="flex items-center gap-2"
                      >
                        Read Full Article
                        <ArrowRight size={20} />
                      </Link>
                    ) : (
                      <>
                        Read Full Article 
                        <ArrowRight size={20} />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts - Editorial Grid */}
      <section className="py-24 md:py-32 bg-neutral-50 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div className="w-12 h-1 bg-[#1E3A8A] mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1E3A8A] mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Recent Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Image Block */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 right-6 z-10">
                      <span className="bg-white text-[#1E3A8A] px-4 py-2 font-semibold text-xs tracking-wider shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="text-6xl font-semibold text-white opacity-80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {String(index + 2).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-semibold text-[#1E3A8A] mb-4 group-hover:text-[#1E3A8A]/80 transition-colors leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    {post.linkedInUrl ? (
                      <a 
                        href={post.linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#1E3A8A] font-semibold flex items-center group-hover:text-[#1E3A8A]/80 transition-colors"
                      >
                        Read on LinkedIn
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </a>
                    ) : post.internalUrl ? (
                      <Link
                        to={post.internalUrl}
                        className="text-[#1E3A8A] font-semibold flex items-center group-hover:text-[#1E3A8A]/80 transition-colors"
                      >
                        Read Full Article
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    ) : (
                      <button className="text-[#1E3A8A] font-semibold flex items-center group-hover:text-[#1E3A8A]/80 transition-colors">
                        Read More 
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.article>
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
                "Knowledge without action is just information. We help you turn insights into impact."
              </p>
              <div className="w-24 h-1 bg-white opacity-30 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Editorial */}
      <section className="py-24 md:py-32 bg-neutral-50 relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-12 lg:p-16 shadow-xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Never Miss an Update
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Subscribe to our newsletter for weekly career insights delivered straight to your inbox.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <MagneticButton className="w-full bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 px-10 py-5 font-semibold transition-all duration-300 text-lg">
                  <a href="/newsletter" className="block w-full">
                    Subscribe Now
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