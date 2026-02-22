import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPostCareerNotNeutral() {
  return (
    <div className="bg-white">
      <SEO 
        title="Your Career Is Not Neutral"
        description="Gen Z, the SDGs, and the New Rules of Impact at Work. Understanding how careers shape systems, impact, and what you stand behind."
        url="https://www.graduateconsult.com/blog/your-career-is-not-neutral"
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
                Impact & Purpose
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
              Your Career Is Not Neutral
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-semibold"
            >
              Gen Z, the SDGs, and the New Rules of Impact at Work
            </motion.h2>

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
                <span className="text-sm">December 5, 2025</span>
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
                src="https://images.unsplash.com/photo-1760440415591-f5d23cdab608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGRldmVsb3BtZW50JTIwaW1wYWN0fGVufDF8fHx8MTc2ODYwMTk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainable development impact"
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
                For a long time, careers were treated as neutral ground. You chose a role, did your job well, earned a living, and kept your personal values largely separate from your professional life. Success was measured by progression, stability, and visibility, not by consequence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                That idea no longer holds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Work now sits inside systems that shape livelihoods, access, inequality, and the future people get to imagine for themselves. Whether intentional or not, the work we do sustains certain outcomes and sidelines others. In this context, neutrality does not exist. It simply means the status quo goes unchallenged.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gen Z have been in the workforce and the marketplace for a few years now, and they arrived with a fundamentally different lens. They are not especially interested in what organisations say they stand for. They pay closer attention to what decisions are made, who benefits, who is harmed, and what is quietly tolerated. For many of them, work is not just a means of survival or status. It is a statement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a result, careers have moved out of the private sphere and into public accountability. Where you work, what you help build, and what you overlook are increasingly visible and increasingly judged.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                In this environment, the Sustainable Development Goals are no longer distant global aspirations. They have become a shared reference point for how impact, responsibility, and credibility are assessed by individuals and organisations alike.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Gen Z and the rise of impact literacy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gen Z has grown up amid overlapping crises. Climate instability, economic uncertainty, social injustice, and constant digital exposure are not abstract concepts for them. They are lived realities. This has shaped a generation that is unusually fluent in systems thinking and deeply sceptical of surface-level responses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Large-scale workforce studies reflect this shift. Research from organisations like Deloitte shows that Gen Z professionals consistently factor values, ethics, inclusion, and environmental responsibility into how they assess employers, often placing these alongside or even above pay and prestige. Trust research from Edelman points in the same direction. Younger generations are more willing to reward organisations they believe are acting responsibly and to withdraw support when they sense hypocrisy or harm.
              </p>
              <div className="bg-neutral-50 p-6 mb-6 border-l-4 border-[#1E3A8A]">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In Gen Z language, organisations are constantly being "promoted" or "cancelled."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  <strong>Promoted</strong> when actions feel consistent and human.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Cancelled</strong> when there is silence, contradiction, or exploitation, especially when it clashes with stated values.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Careers now unfold inside this visibility, whether people feel ready for it or not.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The SDGs as a signal system
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The SDGs provide something Gen Z intuitively looks for: a way to separate intention from impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                They signal whether an organisation understands its role in society, whether leadership decisions consider long-term consequences, and whether purpose is embedded in everyday practice or confined to polished messaging.
              </p>
              <div className="bg-neutral-50 p-6 mb-6 border-l-4 border-[#1E3A8A]">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  For individuals, aligning a career with SDG principles is less about labels and more about reflection. It is a way of asking:
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-semibold italic">
                  If someone followed the trail of my work, what would it show about what I care about?
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This reframing shifts career development away from simply asking what role comes next, and towards asking what problems your skills are helping to solve or sustain.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                It's not cancel culture. It's a credibility test.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Much of this shift gets dismissed as cancel culture. But that framing misses the deeper issue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                What Gen Z is really doing is testing credibility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                They want to know whether internal practices match public values. Whether organisations are genuinely addressing social and environmental challenges or simply finding ways to profit from them. Whether growth creates shared value or concentrates harm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From a career perspective, this matters. Research in organisational psychology has long shown that when people experience sustained misalignment between their values and the systems they work within, disengagement follows. Over time, this shows up as burnout, withdrawal, or exit. Younger professionals tend to reach that breaking point faster because they place a higher premium on coherence between who they are and what they contribute to.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                In this context, silence, neutrality, or "just doing my job" increasingly reads as a position in itself.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Careers as platforms, not just paychecks
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One of the most important shifts Gen Z has normalised is the idea that careers are platforms for influence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your employer's policies, partnerships, and public stances reflect on you. At the same time, your labour, expertise, and compliance help sustain those systems. This does not mean every professional needs to be an activist. But it does mean that where and how you work shapes your credibility, your identity, and your long-term relevance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The SDGs help move this conversation out of vague intention and into clearer alignment. They offer a way to think about careers as tools for expanding access, dignity, opportunity, and sustainability, rather than as isolated ladders of personal success.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                This is bigger than Gen Z
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While Gen Z may be the most vocal about these expectations, the implications extend far beyond one generation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organisations that ignore impact literacy struggle to attract and retain talent, build trust with communities, and maintain legitimacy in a world of constant scrutiny. Professionals who ignore it may continue to progress on paper, but often find themselves questioning the meaning, sustainability, or cost of that success.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                A different measure of career success
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The SDGs invite a different way of thinking about success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not just how far you went, but what your work moved forward.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not just what you earned, but what systems you reinforced or reshaped along the way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In a world where organisations are constantly being promoted or cancelled, the most resilient careers will belong to people who are clear about their values, conscious about their impact, and willing to engage with the consequences of their work.
              </p>
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  Because whether we like it or not, your career is not neutral.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  It shapes lives, sustains systems, and signals what you are willing to stand behind.
                </p>
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  The real choice is not whether your work is impactful. It is whether that impact is intentional.
                </p>
              </div>
            </div>

            {/* References */}
            <div className="mb-12 bg-neutral-100 p-8">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                References & Further Reading
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Deloitte. <em>Global Gen Z and Millennial Survey</em>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Edelman. <em>Trust Barometer</em>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  World Economic Forum. <em>Future of Jobs Reports</em>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Rosso, B. D., Dekas, K. H., & Wrzesniewski, A. (2010). On the Meaning of Work
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Wrzesniewski, A., et al. (2013). Calling and Vocation at Work
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Harvard Business Review. <em>The Power of Purpose at Work</em>
                </p>
              </div>
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
                Align Your Career With Your Values
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Get strategic guidance on building a career that creates intentional impact and reflects what you stand for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}