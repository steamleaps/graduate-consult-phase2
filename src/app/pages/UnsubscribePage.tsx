import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertCircle, Loader2, MailX, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router';
import AnimatedHeadline from '../components/AnimatedHeadline';
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';

export default function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'unsubscribed' | 'resubscribed' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResubscribe, setShowResubscribe] = useState(false);

  // Pre-fill email from URL parameter
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUnsubscribe = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Google Apps Script Web App URL
      const scriptUrl = import.meta.env.VITE_NEWSLETTER_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz_LP_TwtqUZD_joC-LdIkBTxDrA8OiBAcq2WLwO3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec';
      
      const emailToSend = email.trim().toLowerCase();
      const payload = {
        email: emailToSend,
        action: 'unsubscribe',
        timestamp: new Date().toISOString(),
      };
      
      console.log('📧 ========== UNSUBSCRIBE REQUEST ==========');
      console.log('Script URL:', scriptUrl);
      console.log('Email (original):', email);
      console.log('Email (processed):', emailToSend);
      console.log('Payload:', JSON.stringify(payload, null, 2));
      console.log('==========================================');
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('✅ Unsubscribe request sent (no-cors - cannot verify response)');
      console.log('Response type:', response.type);
      console.log('Response status:', response.status);
      
      setStatus('unsubscribed');
      setShowResubscribe(true);
    } catch (error) {
      console.error('❌ Unsubscribe error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResubscribe = async () => {
    if (!email.trim() || !isValidEmail(email)) {
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const scriptUrl = import.meta.env.VITE_NEWSLETTER_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz_LP_TwtqUZD_joC-LdIkBTxDrA8OiBAcq2WLwO3mfYaIadLVsbf4DHPkk1vLN0cfLuQ/exec';
      
      console.log('📧 Resubscribe request starting...');
      console.log('Script URL:', scriptUrl);
      console.log('Email:', email.trim().toLowerCase());
      
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          action: 'resubscribe',
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus('resubscribed');
      setShowResubscribe(false);
    } catch (error) {
      console.error('Resubscribe error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Unsubscribe from Newsletter | Graduate Consult"
        description="Manage your newsletter subscription preferences. Unsubscribe or resubscribe to Graduate Consult's career insights and updates."
        canonicalUrl="https://www.graduateconsult.com/unsubscribe"
        type="website"
        noIndex={true}
      />
      <div className="bg-white relative overflow-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-neutral-50 py-20 md:py-32">
          <div className="w-full px-8 md:px-16">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#1E3A8A] font-medium">
                    Newsletter Preferences
                  </span>
                </div>
                <AnimatedHeadline
                  className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-10 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  {status === 'unsubscribed' 
                    ? "You've Been Unsubscribed" 
                    : status === 'resubscribed'
                    ? "Welcome Back!"
                    : "Unsubscribe from Newsletter"}
                </AnimatedHeadline>
              </div>
            </div>
          </div>
        </section>

        {/* Unsubscribe Form / Success Message */}
        <section className="py-20 md:py-32 bg-white relative z-10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-2xl mx-auto">
              
              {/* Unsubscribed Success State */}
              {status === 'unsubscribed' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-50 p-12 lg:p-16 shadow-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={56} className="text-white" />
                    </div>
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    You've Been Unsubscribed
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    We're sorry to see you go. You won't receive any more emails from us.
                  </p>

                  {showResubscribe && (
                    <div className="mb-8">
                      <p className="text-lg text-gray-700 mb-6">Changed your mind?</p>
                      <MagneticButton
                        onClick={handleResubscribe}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-3 bg-[#1E3A8A] text-white px-10 py-5 font-semibold hover:bg-[#1E3A8A]/90 transition-colors text-lg disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Resubscribing...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-6 h-6" />
                            <span>Resubscribe to Newsletter</span>
                          </>
                        )}
                      </MagneticButton>
                    </div>
                  )}

                  <div className="pt-8 border-t border-gray-200">
                    <MagneticButton
                      href="/"
                      className="inline-flex items-center bg-gray-200 text-[#1E3A8A] px-8 py-4 font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Return to Homepage
                    </MagneticButton>
                  </div>
                </motion.div>
              )}

              {/* Resubscribed Success State */}
              {status === 'resubscribed' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-50 p-12 lg:p-16 shadow-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={56} className="text-white" />
                    </div>
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Welcome Back!
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    You're now resubscribed to our newsletter. We're glad to have you back!
                  </p>

                  <MagneticButton
                    href="/"
                    className="inline-flex items-center bg-[#1E3A8A] text-white px-10 py-5 font-semibold hover:bg-[#1E3A8A]/90 transition-colors text-lg"
                  >
                    Return to Homepage
                  </MagneticButton>
                </motion.div>
              )}

              {/* Unsubscribe Form */}
              {status === 'idle' || status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-neutral-50 p-10 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, #1E3A8A 0%, transparent 50%, #1E3A8A 100%)',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="w-12 h-1 bg-[#1E3A8A] mb-6"></div>
                    <h2 className="text-4xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      We're Sorry to See You Go
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      Enter your email address below to unsubscribe from our newsletter. You can always come back and subscribe again later.
                    </p>

                    <form onSubmit={handleUnsubscribe} className="space-y-6">
                      <div>
                        <FloatingLabelInput
                          id="unsubscribe-email"
                          label="Your Email Address *"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 rounded p-4 flex items-start gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-red-700 text-sm">{errorMessage}</p>
                        </motion.div>
                      )}

                      <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <MagneticButton
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-gray-600 text-white px-8 py-4 font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-6 h-6 animate-spin" />
                              <span>Unsubscribing...</span>
                            </>
                          ) : (
                            <>
                              <MailX className="w-6 h-6" />
                              <span>Unsubscribe</span>
                            </>
                          )}
                        </MagneticButton>

                        <MagneticButton
                          href="/"
                          className="flex-1 bg-[#1E3A8A] text-white px-8 py-4 font-semibold hover:bg-[#1E3A8A]/90 transition-colors flex items-center justify-center gap-3 text-lg text-center"
                        >
                          Cancel
                        </MagneticButton>
                      </div>

                      <p className="text-sm text-gray-500 text-center pt-4">
                        Having issues? Contact us at{' '}
                        <a href="/contact" className="text-[#1E3A8A] underline hover:text-[#1E3A8A]/80">
                          our contact page
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Feedback Section - Only show on initial form view */}
        {(status === 'idle' || status === 'error') && (
          <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  We Value Your Feedback
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Before you go, would you mind telling us why you're unsubscribing? Your feedback helps us improve our content.
                </p>
                <div className="bg-white p-6 rounded shadow-md">
                  <div className="space-y-3 text-left">
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 transition-colors">
                      <input type="radio" name="feedback" className="mt-1" />
                      <span className="text-gray-700">I receive too many emails</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 transition-colors">
                      <input type="radio" name="feedback" className="mt-1" />
                      <span className="text-gray-700">The content isn't relevant to me</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 transition-colors">
                      <input type="radio" name="feedback" className="mt-1" />
                      <span className="text-gray-700">I didn't sign up for this</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded hover:bg-gray-50 transition-colors">
                      <input type="radio" name="feedback" className="mt-1" />
                      <span className="text-gray-700">Other reason</span>
                    </label>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  (Optional - Your feedback is appreciated but not required)
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}