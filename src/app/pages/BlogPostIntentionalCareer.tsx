import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPostIntentionalCareer() {
  return (
    <div className="bg-white">
      <SEO 
        title="The Power of Intentional Career Planning"
        description="Why leaving your career to chance isn't an option and how to take ownership of your professional journey. A guide to intentional career development."
        url="https://www.graduateconsult.com/blog/intentional-career-planning"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link 
                to="/blog"
                className="inline-flex items-center text-[#1E3A8A] hover:text-[#1E3A8A]/80 transition-colors font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2 font-semibold text-sm tracking-wider">
                <Tag size={16} />
                Career Strategy
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              The Power of Intentional Career Planning
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Why leaving your career to chance isn't an option — and how to take ownership of your professional journey.
            </motion.p>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-gray-500 pb-8 border-b-2 border-[#1E3A8A]/20"
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="text-sm font-medium">Jessica, Founder</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm">December 15, 2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="w-full px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwbGFubmluZyUyMGdvYWxzJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzY4NjAxOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career planning goals notebook"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-8 md:px-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For a long time, careers were framed as something predictable.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-2 italic text-center">
                Work hard.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-2 italic text-center">
                Stay committed.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 italic text-center">
                Progress will follow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But after more than a decade of working in and alongside complex organisations — and intentionally building my own career through pivots, pauses, and moments of reassessment — I've learned that this narrative is no longer sufficient.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not because people lack ambition or capability, but because the world of work has changed faster than the way many of us are taught to think about our careers.
              </p>
              <p className="text-2xl font-bold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Today, leaving your career to chance isn't neutral. It's a decision — and often an expensive one.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The Comfort (and Cost) of Drifting
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One of the most common patterns I've observed across roles, industries, and seniority levels is what I call <strong>career drifting</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                You're busy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                You're learning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You're progressing — at least on paper.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                So you assume things will work themselves out.
              </p>
              <p className="text-xl font-bold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                But momentum is not the same as direction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In high-performing environments, especially those with strong structures and prestige attached to them, it's easy to outsource ownership of your career to job titles, performance ratings, or organisational pathways. Over time, this can lead to misalignment — which is not always loud or dramatic, but quiet and persistent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                You're doing well, but you're not quite sure why you're doing what you're doing anymore.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                A Personal Turning Point
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Early in my career, I almost made a panic decision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On the surface, everything looked right. I was progressing, gaining exposure, and building credibility. But internally, something felt off. Not because I wasn't capable — but because I hadn't paused long enough to intentionally decide what I wanted my career to be in service of.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                That moment forced me to step back and ask harder questions about direction, trade-offs, and long-term alignment. Eventually, it led me to make a move that didn't look obvious at the time: transitioning from a traditional HR trajectory into an operational leadership role.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                It wasn't linear.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                It wasn't comfortable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                But it was intentional.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                That experience fundamentally changed how I think about careers — not as ladders to climb, but as systems to design.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                What Intentional Career Planning Really Means
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Intentional career planning doesn't mean having every step mapped out. In reality, most meaningful careers are shaped through iteration, not certainty.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Intentionality is about:
              </p>
              <ul className="space-y-3 mb-8 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>Choosing direction over default</strong>
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>Making decisions consciously, not reactively</strong>
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>Designing a career that supports the life you want</strong> — not just the status you're chasing
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When intentionality is missing, decisions tend to be driven by fear, fatigue, or external validation. When it's present, even uncertainty becomes easier to navigate.
              </p>
            </div>

            {/* Section 4 - Four Shifts */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Four Shifts That Change Everything
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Based on both lived experience and years of working within complex organisational systems, these are the shifts I've seen make the biggest difference:
              </p>

              {/* Shift 1 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  1. From Roles to Capabilities
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
                  Roles come and go. Capabilities compound.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Instead of focusing only on your next title, ask yourself:
                </p>
                <ul className="space-y-2 mb-4 ml-6 list-disc">
                  <li className="text-lg text-gray-700 leading-relaxed">What capabilities am I deliberately building?</li>
                  <li className="text-lg text-gray-700 leading-relaxed">What experiences will my future self need?</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This mindset creates career resilience — especially in environments that are constantly evolving.
                </p>
              </div>

              {/* Shift 2 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  2. From Waiting to Choosing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Many talented professionals quietly wait to be "chosen" for sponsorship, visibility, or the next opportunity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Intentional career ownership looks like making your aspirations visible, initiating conversations, and advocating for the experiences you need — even when it feels uncomfortable.
                </p>
              </div>

              {/* Shift 3 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  3. From Linear Progression to Career Portfolios
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Modern careers are rarely one-dimensional.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Growth can come through:
                </p>
                <ul className="space-y-2 mb-4 ml-6 list-disc">
                  <li className="text-lg text-gray-700 leading-relaxed">Cross-functional exposure</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Stretch assignments</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Thought leadership</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Advisory or project-based work</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each adds depth and optionality to your professional portfolio.
                </p>
              </div>

              {/* Shift 4 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  4. From Status-Driven to Life-Aligned Decisions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
                  Titles are temporary. Alignment is cumulative.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The most grounded professionals plan with their whole life in mind; energy, wellbeing, values, and season — not just external markers of success.
                </p>
              </div>
            </div>

            {/* Section 5 - Taking Your Power Back */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Taking Your Power Back
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If there's one thing a decade of working inside demanding organisational systems has reinforced, it's this:
              </p>
              <p className="text-2xl font-bold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                No one will take ownership of your career for you — and they're not supposed to.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                That responsibility isn't a burden. It's an invitation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                An invitation to pause.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                To reflect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To choose with clarity rather than drift with momentum.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Because the most costly career decision is not the wrong move. It's the unintentional one.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If this resonates, and you're at a point where your career feels busy but not fully intentional, I invite you to reach out for a <Link to="/contact" className="text-[#1E3A8A] font-semibold underline hover:text-[#1E3A8A]/80 transition-colors">strategic career planning conversation</Link>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not to map every step — but to create space, gain clarity, and make deliberate choices about where you're going next.
              </p>
            </div>

            {/* Final Reflection */}
            <div className="mb-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Intentionality starts with a pause.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white">
        <div className="w-full px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Ready to Take Ownership of Your Career?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Let's create space for clarity and design a career path that truly aligns with your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  Book a Strategy Session
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}