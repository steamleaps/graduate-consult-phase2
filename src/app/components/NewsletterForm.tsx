import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FloatingLabelInput } from './FloatingLabelInput';
import MagneticButton from './MagneticButton';

interface NewsletterFormProps {
  onSuccess?: () => void;
  variant?: 'default' | 'footer';
}

export default function NewsletterForm({ onSuccess, variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.log('Bot detected');
      return;
    }

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
      
      console.log('📧 Newsletter submission starting...');
      console.log('Script URL:', scriptUrl);
      console.log('Email:', email.trim().toLowerCase());
      console.log('Name:', name.trim());
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          name: name.trim(),
          action: 'subscribe',
          timestamp: new Date().toISOString(),
          source: variant === 'footer' ? 'Footer' : 'Newsletter Page',
        }),
      });

      console.log('✅ Newsletter request sent (no-cors mode, cannot verify response)');
      
      // With no-cors mode, we can't read the response, so we assume success
      setStatus('success');
      setEmail('');
      setName('');
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('❌ Newsletter signup error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Compact footer variant
  if (variant === 'footer') {
    return (
      <div className="w-full">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/20 rounded p-4 text-center"
          >
            <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <p className="text-green-700 font-medium">Thanks for subscribing!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-[#C4D600] transition-colors"
                disabled={isSubmitting}
              />
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C4D600] text-[#2E5FB5] px-6 py-3 rounded font-medium hover:bg-[#A8B800] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    );
  }

  // Default page variant
  return (
    <div className="w-full">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 lg:p-16 shadow-2xl text-center"
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
            Thank You for Subscribing!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            You'll start receiving our weekly newsletter with career insights and opportunities.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            You can <a href="/unsubscribe" className="text-[#1E3A8A] underline hover:text-[#1E3A8A]/80">unsubscribe anytime</a>.
          </p>
          <MagneticButton 
            href="/"
            className="inline-flex items-center bg-[#1E3A8A] text-white px-10 py-5 font-semibold hover:bg-[#1E3A8A]/90 transition-colors text-lg"
          >
            Return to Homepage
          </MagneticButton>
        </motion.div>
      ) : (
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
              Join Our Community
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Get weekly career insights, job opportunities, and exclusive resources delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <FloatingLabelInput
                  id="newsletter-name"
                  label="Your Name (Optional)"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <FloatingLabelInput
                  id="newsletter-email"
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

              <div className="pt-4">
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E3A8A] text-white px-8 py-4 font-semibold hover:bg-[#1E3A8A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-6 h-6" />
                      <span>Subscribe to Newsletter</span>
                    </>
                  )}
                </MagneticButton>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By subscribing, you agree to our{' '}
                <a href="/privacy" className="text-[#1E3A8A] underline hover:text-[#1E3A8A]/80">
                  Privacy Policy
                </a>
                . You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}