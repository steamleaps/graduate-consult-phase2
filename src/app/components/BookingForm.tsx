import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Building, MessageSquare, AlertCircle } from 'lucide-react';
import { FloatingLabelInput } from './FloatingLabelInput';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  careerStage?: string;
  industry?: string;
  reason: string;
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

const careerStages = [
  'Student',
  'Recent Graduate',
  'Early Career Professional',
  'Mid-Career Professional',
  'Senior Professional',
  'Executive',
  'Career Changer',
  'Other'
];

export default function BookingForm({ onSubmit, onBack, isSubmitting = false }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    careerStage: '',
    industry: '',
    reason: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us about your needs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white border-2 border-gray-200 p-8 md:p-10"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Your Information
        </h3>
        <p className="text-gray-600">Please provide your details to complete the booking</p>
      </div>

      <div className="space-y-6">
        {/* Full Name - Required */}
        <div>
          <FloatingLabelInput
            id="fullName"
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            required
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email - Required */}
        <div>
          <FloatingLabelInput
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone - Required */}
        <div>
          <FloatingLabelInput
            id="phone"
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.phone}
            </p>
          )}
          <p className="mt-2 text-xs text-gray-600">Required for Mobile Money payments</p>
        </div>

        {/* Organization - Optional */}
        <div>
          <FloatingLabelInput
            id="organization"
            label="Company/Organization (Optional)"
            type="text"
            value={formData.organization || ''}
            onChange={(e) => handleChange('organization', e.target.value)}
          />
        </div>

        {/* Career Stage - Optional */}
        <div>
          <label htmlFor="careerStage" className="block text-sm font-medium text-[#1E3A8A] mb-2">
            Career Stage (Optional)
          </label>
          <select
            id="careerStage"
            value={formData.careerStage || ''}
            onChange={(e) => handleChange('careerStage', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none transition-colors text-gray-700"
          >
            <option value="">Select your career stage</option>
            {careerStages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        {/* Industry - Optional */}
        <div>
          <FloatingLabelInput
            id="industry"
            label="Industry/Field (Optional)"
            type="text"
            value={formData.industry || ''}
            onChange={(e) => handleChange('industry', e.target.value)}
          />
        </div>

        {/* Reason for Consultation - Required */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-[#1E3A8A] mb-2 flex items-center gap-2">
            <MessageSquare size={18} />
            <span>What would you like to discuss? *</span>
          </label>
          <textarea
            id="reason"
            value={formData.reason}
            onChange={(e) => handleChange('reason', e.target.value)}
            rows={4}
            className={`w-full px-4 py-3 border-2 focus:outline-none transition-colors resize-none ${
              errors.reason ? 'border-red-500' : 'border-gray-300 focus:border-[#1E3A8A]'
            }`}
            placeholder="Tell us about your goals, challenges, or what you hope to achieve..."
          />
          {errors.reason && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.reason}
            </p>
          )}
        </div>

        {/* Mobile Money Notice */}
        <div className="p-4 bg-blue-50 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Payment Options:</strong> After booking, you'll be directed to Paystack to complete payment via Mobile Money (MTN, Vodafone, AirtelTigo), bank card, or bank transfer.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-gray-50 border border-gray-200">
          <p className="text-xs text-gray-600">
            By submitting this form, you agree to our <a href="/terms" className="text-[#1E3A8A] underline hover:text-[#1E3A8A]/80">Terms of Service</a> and <a href="/privacy" className="text-[#1E3A8A] underline hover:text-[#1E3A8A]/80">Privacy Policy</a>. We will use your information to process your booking and send you relevant communications.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 font-semibold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white py-3 px-6 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <span>Processing...</span>
            </>
          ) : (
            <span>Continue to Payment</span>
          )}
        </button>
      </div>
    </motion.form>
  );
}