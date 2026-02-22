import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPostInterviewSuccess() {
  return (
    <div className="bg-white">
      <SEO 
        title="Interview Success: Beyond the Basics"
        description="Advanced techniques for standing out in interviews and making lasting impressions. Move beyond competence to presence, coherence, and meaning."
        url="https://www.graduateconsult.com/blog/interview-success-beyond-basics"
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
                For Graduates
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
              Interview Success: Beyond the Basics
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Advanced techniques for standing out and making lasting impressions in today's competitive interview landscape.
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
                <span className="text-sm">December 10, 2025</span>
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
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY4NjAxOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Job interview professional handshake"
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
                Most interview advice focuses on the basics:
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                Research the company. Prepare STAR answers. Dress well.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                All important.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Also no longer enough.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Having spent years on both sides of the interview table — as the interviewer and the interviewee — one thing is clear:
              </p>
              <p className="text-2xl font-bold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The candidates who stand out aren't the ones with perfect answers. They're the ones who create clarity and trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In today's world of remote, hybrid, and in-person interviews, interview success has moved beyond competence. It is now about <strong>presence, coherence, and meaning</strong>.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                1. Stop Performing. Start Positioning.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many candidates approach interviews as performances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Strong candidates approach them as opportunities to position their value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research in personnel selection shows that interviewers form impressions early and then subconsciously seek information that confirms those impressions (confirmation bias).
              </p>
              <div className="bg-neutral-50 p-6 mb-6 border-l-4 border-[#1E3A8A]">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Instead of asking: <em>"How do I answer this correctly?"</em>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Ask: <em>"What do I want them to understand about how I think, work, and add value?"</em>
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A useful anchor before any interview is clarity on:
              </p>
              <ul className="space-y-2 mb-6 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">How you solve problems</li>
                <li className="text-lg text-gray-700 leading-relaxed">How you work with others</li>
                <li className="text-lg text-gray-700 leading-relaxed">The value you consistently create</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Every answer should subtly reinforce these themes.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                2. Go Beyond STAR to Narrative Intelligence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The STAR method is useful — but when overused, it produces safe, forgettable answers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What differentiates strong candidates is <strong>narrative intelligence</strong>: the ability to make experience coherent and human.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research on leadership communication shows that stories that include judgment, tension, and reflection are more memorable and credible than outcome-only responses.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Strong candidates don't just explain what they did. They reveal how they made sense of the situation and what they learned.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                3. Make Your CV Make Sense, Not Just Look Impressive
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A common interview problem is not lack of experience, but lack of storyline.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Your interviewer should not have to connect the dots for you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether your career path has been linear or non-linear, your role is to create meaning, not apologise for the journey.
              </p>
              <div className="bg-neutral-50 p-6 mb-6 border-l-4 border-[#1E3A8A]">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  When asked to walk through your CV, avoid listing roles chronologically. Instead, articulate the through-line:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="text-lg text-gray-700 leading-relaxed">Problems you are repeatedly trusted to solve</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Environments where you do your best work</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Impact you naturally gravitate toward</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                4. Demonstrate Self-Awareness, Not Perfection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Interviews do not reward flawlessness. They reward self-awareness and learning agility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research on trust and leader effectiveness shows that candidates who can speak honestly about their development — without self-criticism — are perceived as more credible and mature.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Interviewers listen for:
              </p>
              <ul className="space-y-2 mb-6 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">Awareness of patterns</li>
                <li className="text-lg text-gray-700 leading-relaxed">Evidence of intentional growth</li>
                <li className="text-lg text-gray-700 leading-relaxed">Ownership without defensiveness</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This matters even more in virtual interviews, where tone and reflection carry greater weight.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                5. Presence Still Matters — Even Virtually
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Remote and hybrid interviews have changed <em>how</em> presence is assessed, not <em>whether</em> it matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Research on virtual communication highlights the impact of micro-behaviours such as:
              </p>
              <ul className="space-y-2 mb-6 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">Pausing before responding</li>
                <li className="text-lg text-gray-700 leading-relaxed">Acknowledging questions</li>
                <li className="text-lg text-gray-700 leading-relaxed">Regulating energy rather than over-talking</li>
              </ul>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Calm clarity consistently reads as more credible than forced enthusiasm on screen.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                6. Ask Questions That Signal Readiness
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many candidates ask safe questions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                Strong candidates ask positioning questions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                For example:
              </p>
              <div className="bg-neutral-50 p-6 mb-6 border-l-4 border-[#1E3A8A]">
                <ul className="space-y-4">
                  <li className="text-lg text-gray-700 leading-relaxed italic">
                    "What differentiates someone who does well from someone who truly excels in this role?"
                  </li>
                  <li className="text-lg text-gray-700 leading-relaxed italic">
                    "What challenges is this role expected to solve in the next 6–12 months?"
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These questions subtly reposition you from applicant to potential contributor.
              </p>
            </div>

            {/* Final Thought */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Final Thought
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Interview success today is not about memorising answers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is about showing up as a grounded professional with:
              </p>
              <ul className="space-y-2 mb-6 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">Clarity of thought</li>
                <li className="text-lg text-gray-700 leading-relaxed">Narrative coherence</li>
                <li className="text-lg text-gray-700 leading-relaxed">Strategic self-awareness</li>
              </ul>
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white mb-8">
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  When you stop trying to be the "best candidate" and start being clear, credible, and human, you don't just answer questions — you leave a lasting impression.
                </p>
              </div>
            </div>

            {/* References */}
            <div className="mb-12 bg-neutral-100 p-8">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                References
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Barrick, M. R., Shaffer, J. A., & DeGrassi, S. W. (2009). What you see may not be what you get: Relationships among self-presentation tactics and interview performance. <em>Journal of Applied Psychology, 94</em>(6), 1394–1411.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Campion, M. A., Palmer, D. K., & Campion, J. E. (1997). A review of structure in the selection interview. <em>Personnel Psychology, 50</em>(3), 655–702.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Gioia, D. A., & Chittipeddi, K. (1991). Sensemaking and sensegiving in strategic change. <em>Strategic Management Journal, 12</em>(6), 433–448.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Levashina, J., Hartwell, C. J., Morgeson, F. P., & Campion, M. A. (2014). The structured employment interview: A review. <em>Personnel Psychology, 67</em>(1), 241–293.
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
                Want Expert Interview Coaching?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Get personalized guidance to help you present with clarity, confidence, and strategic self-awareness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  Book a Coaching Session
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}