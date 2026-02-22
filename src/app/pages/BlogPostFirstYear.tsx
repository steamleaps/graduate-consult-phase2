import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPostFirstYear() {
  return (
    <div className="bg-white">
      <SEO 
        title="Navigating Your First Year in the Workplace"
        description="Practical advice for making a strong impression, building relationships, and setting yourself up for long-term success in your first year at work."
        url="https://www.graduateconsult.com/blog/navigating-first-year-workplace"
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
                Workplace Tips
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
              Navigating Your First Year in the Workplace
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Practical advice for making a strong impression, building relationships, and setting yourself up for long-term success.
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
                <span className="text-sm font-medium">Graduate Consult Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm">December 28, 2025</span>
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
                src="https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvcmtwbGFjZSUyMG9mZmljZXxlbnwxfHx8fDE3Njg2MDE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Young professional in workplace"
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
              <p className="text-xl text-gray-700 leading-relaxed mb-6 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The first year of your career stays with you longer than you might expect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It shapes how confident you feel speaking up in meetings, how you respond to feedback, and how you interpret both success and failure. Long after you move on to new roles or organisations, the habits you form in your first year often continue to influence how you show up at work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the last decade, I have worked with organisations to design and support talent development initiatives, with a particular focus on early career professionals, while advising scaling businesses, SMEs across the continent on their evolving talent needs. Alongside this work, I have lived the experience personally, starting my own career in a new country, on a new continent, and learning not just a new role, but an entirely new way of working.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Across industries and geographies, one pattern shows up consistently:
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Early career success is rarely about being exceptional from day one. It is about being intentional.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Moving from learner to contributor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many early career professionals enter the workplace with a mindset shaped by formal education. They focus on instructions, outputs, and doing exactly what is asked. While understandable, this approach often limits impact, particularly in fast growing organisations where roles are fluid.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research on proactive behaviour at work by Grant and Parker shows that employees who take initiative early tend to perform better and are seen as more valuable contributors over time. This matters even more in African workplaces, where resource constraints often mean young professionals are expected to stretch beyond narrow job descriptions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In SMEs across Ghana and Nigeria, for example, I regularly see early career professionals gain trust quickly by taking ownership of small but critical problems. This might be improving a client tracker, documenting a process no one has written down, or anticipating a manager's needs before being asked.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This does not require knowing everything. It requires curiosity, responsibility, and care for outcomes.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                A useful shift is to move from asking what you need to do to asking what problem you are helping to solve.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Understanding the rules no one writes down
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every organisation has a formal structure that is clearly documented. There is also an informal structure that shapes how work really gets done.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A well known study by Bauer and colleagues on organisational socialisation found that new employees who actively observe norms and seek contextual information adapt faster and perform better in their first year.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In many African workplaces, these informal rules are especially important. Hierarchy, seniority, and communication style often matter as much as technical competence. Knowing when to speak, how to escalate issues, and how decisions are influenced can determine whether a young professional is seen as confident or careless.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For those entering workplaces across borders or cultures, this learning curve is even steeper. I experienced this firsthand early in my career, where understanding professional etiquette and expectations was just as important as doing the work itself.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The early months of your career are not only about proving capability. They are about learning how the system works.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Building relationships intentionally
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Strong workplace relationships are one of the most reliable predictors of early career success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research by Chiaburu and Harrison demonstrates that employees with strong peer relationships tend to perform better and experience greater access to learning and support. Over time, trust often matters more than raw talent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In many African organisations, work is deeply relational. Teams rely heavily on collaboration, informal mentorship, and shared problem solving. Early career professionals who invest time in building respectful relationships with peers, supervisors, and support staff often find it easier to navigate challenges and grow faster.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Relationship building is not about being loud or overly familiar. It is about reliability, professionalism, and follow through.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Being dependable consistently is one of the most powerful ways to build credibility early.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Learning to receive and use feedback
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Feedback is one of the most challenging aspects of the first year at work. It is often indirect, inconsistently delivered, and shaped by power dynamics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Research on feedback seeking behaviour by Ashford and Cummings shows that individuals who actively seek feedback learn faster and adapt more effectively, particularly early in their careers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In many local contexts, feedback may be implied rather than explicit. Silence, reassignment of tasks, or reduced access can all signal performance issues. Learning to ask clarifying questions and invite constructive feedback becomes essential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some of the most important growth moments in my career came from feedback that was uncomfortable but honest. Choosing reflection over defensiveness helped build resilience and professional maturity.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Asking what could be done differently next time is often more useful than asking whether something was done well.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Thinking long term while taking the present seriously
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ambition is natural, particularly among young professionals navigating competitive job markets. However, longitudinal career research by Ng and colleagues shows that early career success is strongly linked to building competence and credibility in initial roles rather than rapid movement alone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In many African labour markets, where opportunities can be limited and competition is high, reputation matters. Doing your current role well, showing consistency, and being trusted often leads to opportunities that are not formally advertised.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your first role is not your final destination, but it is where professional habits are formed. It is where judgment, confidence, and credibility are built.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Approaching your current role as a foundation rather than a placeholder creates options that compound over time.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                A note for organisations supporting early career talent
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For organisations across the continent, early career success does not happen by chance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evidence consistently shows that structured onboarding, clear expectations, access to feedback, and supportive supervision significantly improve performance and retention among early career employees. This is particularly important in SMEs, where young professionals are often thrust into responsibility without adequate guidance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organisations that invest intentionally in early career talent development are not simply filling roles. They are building future leadership capacity and strengthening their talent pipelines.
              </p>
            </div>

            {/* Final Reflection */}
            <div className="mb-12 bg-neutral-50 p-8 border-l-4 border-[#1E3A8A]">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Final reflection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The first year of work will stretch you, especially if you are navigating unfamiliar systems, cultures, or expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With intention, curiosity, and a willingness to learn, it can become one of the most formative seasons of your professional life.
              </p>
              <p className="text-2xl font-bold text-[#1E3A8A] italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Remember…..Foundations built well tend to last!
              </p>
            </div>

            {/* References */}
            <div className="mb-12 pt-8 border-t-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                References
              </h3>
              <div className="space-y-3 text-base text-gray-600">
                <p>Ashford, S. J., & Cummings, L. L. (1983). Feedback as an individual resource. <em>Organizational Behavior and Human Performance, 32</em>(3), 370–398.</p>
                <p>Bauer, T. N., Bodner, T., Erdogan, B., Truxillo, D. M., & Tucker, J. S. (2007). Newcomer adjustment during organizational socialization. <em>Journal of Applied Psychology, 92</em>(3), 707–721.</p>
                <p>Chiaburu, D. S., & Harrison, D. A. (2008). Do peers make the place? Conceptual synthesis and meta analysis of coworker effects on perceptions, attitudes, and performance. <em>Journal of Applied Psychology, 93</em>(5), 1082–1103.</p>
                <p>Grant, A. M., & Parker, S. K. (2009). Redesigning work design theories. <em>Academy of Management Annals, 3</em>(1), 317–375.</p>
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
                Ready to Build Your Career Foundation?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Get personalized support and structured guidance for your early career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                >
                  Read More Articles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}