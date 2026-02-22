import { usePaystackPayment } from 'react-paystack';
import { motion } from 'motion/react';
import { CreditCard, Lock, Shield } from 'lucide-react';

interface PaystackPaymentProps {
  email: string;
  amount: number; // in GHS (Ghana Cedis)
  onSuccess: (reference: string) => void;
  onClose: () => void;
  metadata: {
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
  };
}

export default function PaystackPayment({ 
  email, 
  amount, 
  onSuccess, 
  onClose,
  metadata 
}: PaystackPaymentProps) {
  // Paystack configuration
  const config = {
    reference: `GC-${new Date().getTime()}`, // Unique transaction reference
    email: email,
    amount: Math.round(amount * 100), // Paystack expects amount in pesewas (kobo for Nigeria)
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_89e61fadd249bbab5f508110482254a193037114', // Your Paystack public key
    currency: 'GHS', // Ghana Cedis
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: metadata.name
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: metadata.phone
        },
        {
          display_name: "Service",
          variable_name: "service",
          value: metadata.service
        },
        {
          display_name: "Booking Date",
          variable_name: "booking_date",
          value: metadata.date
        },
        {
          display_name: "Booking Time",
          variable_name: "booking_time",
          value: metadata.time
        }
      ]
    },
    channels: ['card', 'bank', 'mobile_money'], // Payment methods
  };

  const initializePayment = usePaystackPayment(config);

  const handleSuccess = (reference: any) => {
    // Payment successful
    console.log('Payment successful:', reference);
    onSuccess(reference.reference);
  };

  const handleClose = () => {
    // User closed payment modal
    console.log('Payment closed');
    onClose();
  };

  const startPayment = () => {
    initializePayment({
      onSuccess: handleSuccess,
      onClose: handleClose,
    });
  };

  return (
    <div className="bg-white border-2 border-gray-200 p-8 md:p-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-[#1E3A8A]/10 p-4 rounded-full">
            <CreditCard className="text-[#1E3A8A]" size={48} />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Complete Your Payment
        </h3>
        <p className="text-gray-600">
          Secure payment powered by Paystack
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-neutral-50 border border-gray-200 p-6 mb-8">
        <h4 className="font-semibold text-[#1E3A8A] mb-4 text-lg">Payment Summary</h4>
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between">
            <span>Service:</span>
            <span className="font-medium">{metadata.service}</span>
          </div>
          <div className="flex justify-between">
            <span>Date & Time:</span>
            <span className="font-medium">{metadata.date} at {metadata.time}</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-3 mt-3">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              GHS {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-4 font-medium">Accepted Payment Methods:</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-gray-200 p-4 text-center hover:border-[#1E3A8A] transition-colors">
            <CreditCard className="mx-auto mb-2 text-[#1E3A8A]" size={24} />
            <p className="text-xs text-gray-600">Card</p>
          </div>
          <div className="border border-gray-200 p-4 text-center hover:border-[#1E3A8A] transition-colors">
            <Shield className="mx-auto mb-2 text-[#1E3A8A]" size={24} />
            <p className="text-xs text-gray-600">Bank</p>
          </div>
          <div className="border border-gray-200 p-4 text-center hover:border-[#1E3A8A] transition-colors">
            <Lock className="mx-auto mb-2 text-[#1E3A8A]" size={24} />
            <p className="text-xs text-gray-600">Mobile Money</p>
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <motion.button
        onClick={startPayment}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#1E3A8A] hover:bg-[#2E4A9A] text-white py-4 px-6 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
      >
        <Lock size={20} />
        <span>Pay GHS {amount.toLocaleString()} Securely</span>
      </motion.button>

      {/* Security Badges */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Shield size={14} />
            <span>Secure Payment</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <Lock size={14} />
            <span>256-bit SSL Encryption</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Powered by Paystack
        </p>
      </div>

      {/* Test Mode Warning (only show in development) */}
      {import.meta.env.DEV && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200">
          <p className="text-xs text-amber-900 text-center">
            <strong>TEST MODE:</strong> Use test card 5060 6666 6666 6666 666 | CVV: 123 | PIN: 1234 | OTP: 123456
          </p>
        </div>
      )}
    </div>
  );
}