import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Mail, Clock, Download, Home, ArrowRight } from 'lucide-react';
import type { BookingService } from '../data/bookingData';

interface BookingConfirmationProps {
  paymentReference: string;
  bookingData: {
    name: string;
    email: string;
    phone: string;
  };
  selectedService: BookingService;
  selectedSlot: {
    date: Date;
    time: string;
  };
  finalPrice: number;
}

export default function BookingConfirmation({ 
  paymentReference,
  bookingData,
  selectedService,
  selectedSlot,
  finalPrice
}: BookingConfirmationProps) {
  const navigate = useNavigate();

  // Format date to be more readable
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Calculate duration
  const getDuration = () => {
    return selectedService.duration || 60; // Default to 60 minutes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A]/5 via-white to-amber-50/30 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="text-green-600" size={64} strokeWidth={2} />
          </div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Booking Confirmed!
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Thank you, {bookingData.name}! Your consultation has been successfully booked and paid for.
          </motion.p>
        </motion.div>

        {/* Main Confirmation Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-2 border-gray-200 shadow-2xl mb-8 overflow-hidden"
        >
          {/* Header Accent */}
          <div className="h-2 bg-gradient-to-r from-[#1E3A8A] via-amber-500 to-[#1E3A8A]"></div>
          
          <div className="p-8 md:p-12">
            {/* Booking Details */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Your Booking Details
              </h2>
              
              <div className="space-y-5">
                {/* Service */}
                <div className="flex items-start gap-4 p-4 bg-neutral-50 border border-gray-200">
                  <div className="bg-[#1E3A8A]/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#1E3A8A]" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Service</p>
                    <p className="text-lg font-semibold text-gray-900">{selectedService.title}</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 border border-gray-200">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Calendar className="text-amber-700" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <p className="font-semibold text-gray-900">{formatDate(selectedSlot.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 border border-gray-200">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Clock className="text-amber-700" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Time</p>
                      <p className="font-semibold text-gray-900">{selectedSlot.time} GMT</p>
                      <p className="text-sm text-gray-500">{getDuration()} minutes</p>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="flex items-start gap-4 p-4 bg-green-50 border-2 border-green-200">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-green-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-green-800 mb-1">Payment Confirmed</p>
                    <p className="text-2xl font-bold text-green-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      GHS {finalPrice.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-700 mt-2">
                      Reference: <span className="font-mono">{paymentReference}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-amber-50 border-2 border-amber-200 p-6 md:p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-amber-900 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                📧 What Happens Next?
              </h3>
              
              <div className="space-y-3 text-gray-800">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-900 font-bold text-sm">1</span>
                  </div>
                  <p>
                    <strong>Confirmation Email:</strong> Check your inbox at <span className="font-semibold">{bookingData.email}</span> for your booking confirmation.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-900 font-bold text-sm">2</span>
                  </div>
                  <p>
                    <strong>Calendar Invitation:</strong> A Google Calendar invite has been sent. Accept it to add the session to your calendar.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-900 font-bold text-sm">3</span>
                  </div>
                  <p>
                    <strong>Meeting Link:</strong> You'll receive the virtual meeting link 24 hours before your scheduled session.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-900 font-bold text-sm">4</span>
                  </div>
                  <p>
                    <strong>Preparation:</strong> Please be ready 5 minutes early with any relevant documents you'd like to discuss.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Reminders */}
            <div className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 p-6 mb-8">
              <h4 className="font-semibold text-[#1E3A8A] mb-3">📌 Important Reminders</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#1E3A8A]">•</span>
                  <span>Need to reschedule? Contact us at least 24 hours in advance at <a href="mailto:info@graduateconsult.com" className="text-[#1E3A8A] underline">info@graduateconsult.com</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1E3A8A]">•</span>
                  <span>Check your spam/junk folder if you don't see the confirmation email within 5 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1E3A8A]">•</span>
                  <span>Save your payment reference for your records: <span className="font-mono text-xs bg-white px-2 py-1 rounded">{paymentReference}</span></span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#1E3A8A] hover:bg-[#2E4A9A] text-white py-4 px-6 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Home size={20} />
                <span>Back to Home</span>
              </motion.button>

              <motion.button
                onClick={() => navigate('/services')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white hover:bg-neutral-50 text-[#1E3A8A] border-2 border-[#1E3A8A] py-4 px-6 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Explore More Services</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-600"
        >
          <p className="text-lg mb-2">
            Thank you for choosing <span className="font-semibold text-[#1E3A8A]">Graduate Consult</span>
          </p>
          <p className="text-sm">
            We're excited to help you achieve your professional goals! 🚀
          </p>
        </motion.div>

        {/* Floating Confetti Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, times: [0, 0.1, 0.9, 1] }}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: -20, 
                x: Math.random() * window.innerWidth,
                rotate: 0,
                opacity: 1
              }}
              animate={{ 
                y: window.innerHeight + 100,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: 0
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "linear"
              }}
              className="absolute w-3 h-3"
              style={{
                backgroundColor: ['#1E3A8A', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 5)],
                borderRadius: Math.random() > 0.5 ? '50%' : '0%'
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}