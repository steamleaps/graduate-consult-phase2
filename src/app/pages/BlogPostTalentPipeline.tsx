import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import SEO from '../components/SEO';

export default function BlogPostTalentPipeline() {
  return (
    <div className="bg-white">
      <SEO 
        title="Building a Sustainable Talent Pipeline in Africa"
        description="How organizations can create inclusive recruitment and development systems that benefit both companies and graduates. Insights from working with Tier 1 organizations."
        url="https://www.graduateconsult.com/blog/sustainable-talent-pipeline-africa"
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
                For Organizations
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
              Building a Sustainable Talent Pipeline in Africa
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              How organizations can create inclusive recruitment and development systems that benefit both companies and graduates.
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
                <span className="text-sm">December 20, 2025</span>
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
                src="https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njg1MDU0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="African business team meeting"
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
                For over a decade, I've worked closely with organisations operating at the highest levels of performance — including Tier 1 investment banks with deep links to the African continent. Across markets, sectors, and talent strategies, one truth has remained consistent:
              </p>
              <p className="text-3xl font-bold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Africa does not have a talent problem. It has a Systems problem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every year, African universities produce thousands of bright, ambitious graduates. At the same time, organisations continue to report skills gaps, talent shortages, and succession risks. Somewhere between education and employment, potential is being lost — not because young people are incapable, but because the pathways into work are fragmented, exclusionary, or poorly designed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If African organisations are serious about long-term competitiveness, resilience, and growth, we must move beyond transactional hiring and begin intentionally building sustainable talent pipelines — pipelines that work for businesses and for graduates.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                What I've learned from working with high-performance organisations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tier 1 investment banks are not perfect institutions — but they are very good at one thing: long-term talent planning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From early-career programmes to leadership pipelines, the most effective organisations I've supported share a few common characteristics:
              </p>
              <ul className="space-y-3 mb-8 ml-6">
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>They recruit for potential, not just polish</strong>
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>They invest early,</strong> before a role is urgently vacant
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>They treat talent development as a business-critical system,</strong> not an HR afterthought
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  <strong>They understand that inclusion is not only a CSR/ESG activity</strong> — it is a performance strategy
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When these principles are applied thoughtfully in African contexts, the results are powerful. When they are copied without localisation, they fail.
              </p>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The opportunity for African organisations lies in designing talent systems that are globally competitive, yet locally grounded.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Why traditional recruitment models are failing African graduates
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many recruitment systems used across the continent unintentionally exclude the very talent organisations claim they cannot find.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Common issues include:
              </p>
              <ul className="space-y-3 mb-8 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">
                  Over-reliance on elite institutions, shutting out capable graduates from less "prestigious" universities
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  Entry-level roles demanding 2–5 years' experience, without offering structured pathways to gain it
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  Selection processes that reward confidence and exposure over competence and learning agility
                </li>
                <li className="text-lg text-gray-700 leading-relaxed">
                  Graduate programmes that exist in name, but lack clear development outcomes
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The result? Graduates feel underprepared and overlooked, while organisations recycle the same small talent pools and struggle with retention.
              </p>
              <p className="text-xl font-bold text-[#1E3A8A] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                This is not sustainable.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                What a sustainable talent pipeline actually looks like
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A sustainable talent pipeline is intentional, inclusive, and long-term by design. It connects education, early exposure, recruitment, development, and progression into one coherent system.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Based on my experience, strong pipelines in African contexts are built on five pillars:
              </p>

              {/* Pillar 1 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  1. Demand-driven talent design
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Start with the business — not generic job descriptions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What skills will your organisation need in 3–5 years? What roles are becoming critical? What capabilities are hardest to replace? Talent pipelines should be reverse-engineered from future business needs, not current vacancies.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  2. Early and equitable access
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Organisations that wait until graduation are already late.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Internships, industrial attachments, work-based learning, case challenges, and project-based exposure allow students to build real capability early — while allowing organisations to observe, shape, and assess talent over time.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Crucially, access must go beyond the usual institutions and networks.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  3. Recruitment for potential, not privilege
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  High-performance organisations are increasingly shifting from "culture fit" to learning agility, problem-solving, and adaptability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  This means:
                </p>
                <ul className="space-y-2 mb-4 ml-6 list-disc">
                  <li className="text-lg text-gray-700 leading-relaxed">Structured interviews over informal conversations</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Skills-based assessments over pedigree</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Clear criteria over gut feel</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  Inclusive recruitment is not about lowering standards. It's about measuring the right things.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  4. Structured development, not sink-or-swim
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Bringing graduates in without support is not development — it's risk transfer.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Effective pipelines include:
                </p>
                <ul className="space-y-2 mb-4 ml-6 list-disc">
                  <li className="text-lg text-gray-700 leading-relaxed">Clear learning pathways in the first 12–24 months</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Coaching and line-manager capability building</li>
                  <li className="text-lg text-gray-700 leading-relaxed">Feedback loops that support growth, not fear</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  When development is intentional, performance follows.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="mb-8 bg-neutral-50 p-6 border-l-4 border-[#1E3A8A]">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  5. Retention through meaning and progression
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  African graduates are not just looking for jobs — they are looking for growth, dignity, and direction.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Clear career pathways, visible progression, and meaningful work dramatically reduce early attrition and protect organisational knowledge.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Why this matters now
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Africa has the youngest population in the world. This is often framed as a "demographic dividend," but dividends are only realised through investment and structure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Organisations that fail to build sustainable pipelines will face:
              </p>
              <ul className="space-y-2 mb-6 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">Rising recruitment costs</li>
                <li className="text-lg text-gray-700 leading-relaxed">Leadership gaps</li>
                <li className="text-lg text-gray-700 leading-relaxed">Declining engagement</li>
                <li className="text-lg text-gray-700 leading-relaxed">Increased dependency on external hires</li>
              </ul>
              <p className="text-xl font-semibold text-[#1E3A8A] mb-8 italic border-l-4 border-[#1E3A8A] pl-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Those that succeed will build future-ready organisations powered by local talent.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 mt-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                A shared responsibility
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Building sustainable talent pipelines is not the responsibility of HR alone. It requires collaboration between:
              </p>
              <ul className="space-y-2 mb-8 ml-6 list-disc">
                <li className="text-lg text-gray-700 leading-relaxed">Business leaders</li>
                <li className="text-lg text-gray-700 leading-relaxed">HR and L&D teams</li>
                <li className="text-lg text-gray-700 leading-relaxed">Educational institutions</li>
                <li className="text-lg text-gray-700 leading-relaxed">Policy and ecosystem partners</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From my work across organisations and geographies, I am convinced that the future of work in Africa will not be defined by who hires the fastest — but by who builds the smartest systems.
              </p>
            </div>

            {/* Final Reflection */}
            <div className="mb-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-8 text-white">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                The talent is already here. The question is whether we are ready to meet them with structures that allow them to thrive.
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
                Ready to Build Your Talent Pipeline?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Let's design a sustainable, inclusive talent system that powers your organization's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-10 py-5 text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 text-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}