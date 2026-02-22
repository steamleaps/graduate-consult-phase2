import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Check, ArrowLeft } from 'lucide-react';
import AnimatedHeadline from '../components/AnimatedHeadline';
import SEO from '../components/SEO';
import TimeSlotPicker from '../components/TimeSlotPicker';
import BookingForm from '../components/BookingForm';
import PaystackPayment from '../components/PaystackPayment';
import BookingConfirmation from '../components/BookingConfirmation';
import OrganisationalInquiryForm from '../components/OrganizationalInquiryForm';
import { bookingServices, formatPrice, formatDuration, type BookingService } from '../data/bookingData';
import { useNavigate } from 'react-router';

// Main Booking Page Component
export default function BookingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'service' | 'schedule' | 'details' | 'payment' | 'confirmation'>('service');
  const [selectedService, setSelectedService] = useState<BookingService | null>(null);
  const [selectedWorkshopDuration, setSelectedWorkshopDuration] = useState<{ label: string; hours: number; price: number } | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: string } | null>(null);
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentReference, setPaymentReference] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'individual' | 'organizational'>('individual');
  const [workshopDuration, setWorkshopDuration] = useState<{ label: string; hours: number; price: number } | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials with images
  const testimonials = [
    {
      name: 'Adwoa Mensah',
      role: 'Marketing Manager',
      company: 'Tech Solutions Ghana',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI0ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The career coaching session transformed my approach to job searching. Landed my dream role within weeks!'
    },
    {
      name: 'Kwame Osei',
      role: 'Software Engineer',
      company: 'FinTech Innovations',
      image: 'https://images.unsplash.com/photo-1634805211765-4ada7b686dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzEzMzQ5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The interview preparation was exceptional. Felt confident and prepared for every question they asked.'
    },
    {
      name: 'Ama Boateng',
      role: 'HR Director',
      company: 'Global Bank Ltd',
      image: 'https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMGFmcmljYW4lMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzcxMzM0OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Professional resume review helped me stand out. Received 3 interview calls in the first week!'
    },
    {
      name: 'Kofi Asante',
      role: 'Operations Manager',
      company: 'Logistics Corp',
      image: 'https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzM0OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Their organizational consulting elevated our team performance. Results speak for themselves.'
    },
    {
      name: 'Edmond Dartey',
      role: 'Business Analyst',
      company: 'Consulting Group',
      image: 'https://images.unsplash.com/photo-1703059680709-d9554370fff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxMzM0OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Game-changing experience! The strategies I learned continue to benefit my career every day.'
    }
  ];

  // Auto-cycle testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Split services into individual and organizational
  const individualServices = bookingServices.slice(0, 3); // Career coaching, resume, interview
  const organizationalServices = bookingServices.slice(3); // Org consulting, workshop

  const handleSelectService = (service: BookingService, duration?: { label: string; hours: number; price: number }) => {
    setSelectedService(service);
    if (duration) {
      setSelectedWorkshopDuration(duration);
    }
    setCurrentStep('schedule');
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSlot = (date: Date, time: string) => {
    setSelectedSlot({ date, time });
  };

  const handleScheduleNext = () => {
    if (selectedSlot) {
      setCurrentStep('details');
    }
  };

  const handleFormSubmit = (formData: any) => {
    setBookingData(formData);
    // Move to payment step
    setCurrentStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = async (paymentReference: string) => {
    // Save the payment reference
    setPaymentReference(paymentReference);
    
    // Show confirmation immediately - no waiting!
    setCurrentStep('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fire the API call in the background (non-blocking)
    const scriptUrl = import.meta.env.VITE_BOOKING_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwDQSl20G4Y1VRB3DG9tVaFOc2RRi_JPC8Ho2aIYMyx01s3lf2RiXZKKsId0ZIjIGnOHA/exec';
    
    // Don't await - let it run in background
    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create_booking',
        email: bookingData.email,
        name: bookingData.name,
        phone: bookingData.phone,
        service: selectedService?.title,
        date: selectedSlot?.date.toISOString().split('T')[0],
        time: selectedSlot?.time,
        duration: getServiceDuration(),
        price: getFinalPrice(),
        paymentReference: paymentReference,
        timestamp: new Date().toISOString()
      }),
    }).catch(error => {
      // Silently log errors - user already sees confirmation
      console.error('Background booking sync error:', error);
    });
  };

  const handlePaymentClose = () => {
    // User closed payment modal without completing
    // Stay on payment step
  };

  const handleBack = () => {
    if (currentStep === 'schedule') {
      setCurrentStep('service');
      setSelectedService(null);
      setSelectedWorkshopDuration(null);
      setSelectedSlot(null);
    } else if (currentStep === 'details') {
      setCurrentStep('schedule');
    } else if (currentStep === 'payment') {
      setCurrentStep('details');
    }
  };

  // Calculate service duration for time slots
  const getServiceDuration = () => {
    if (!selectedService) return 30;
    if (selectedService.isCustomDuration && selectedWorkshopDuration) {
      return selectedWorkshopDuration.hours * 60;
    }
    return selectedService.duration;
  };

  // Calculate final price
  const getFinalPrice = () => {
    if (!selectedService) return 0;
    if (selectedService.isCustomDuration && selectedWorkshopDuration) {
      return selectedWorkshopDuration.price;
    }
    return selectedService.price;
  };

  // Determine service type for booking requirements
  const getServiceType = (): 'individual' | 'organizational' => {
    if (!selectedService) return 'individual';
    // First 3 services are individual, last 2 are organizational
    const serviceIndex = bookingServices.findIndex(s => s.id === selectedService.id);
    return serviceIndex < 3 ? 'individual' : 'organizational';
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Book a Consultation"
        description="Book your consultation with Graduate Consult. Choose from career coaching, resume review, interview preparation, organizational consulting, or workshop facilitation. Secure online booking with instant confirmation."
        url="https://www.graduateconsult.com/booking"
      />

      {/* Hero Section - Only show on service selection step */}
      {currentStep === 'service' && (
        <div className="relative bg-gradient-to-br from-[#FAFAF7] via-white to-[#F5F3EF] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            {/* Two Column Layout: Content & Testimonial */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Hero Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-[#1E3A8A] font-medium mb-6 border-b border-[#1E3A8A]/20 pb-2">
                    Professional Consultation Services
                  </span>
                </motion.div>

                <AnimatedHeadline
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[0.95] text-[#1E3A8A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  delay={0.2}
                  animationType="word"
                >
                  Invest in Your Career Journey
                </AnimatedHeadline>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Choose from our curated selection of professional services designed to accelerate your growth and unlock new opportunities.
                </motion.p>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Instant Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Flexible Scheduling</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Cycling Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Background Decorative Circle */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-2xl"></div>
                
                {/* Testimonial Card */}
                <div className="relative bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#1E3A8A] to-[#2E4A9A]"></div>
                  
                  {/* Cycling Testimonials */}
                  <div className="relative h-[400px] md:h-[420px]">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: currentTestimonial === index ? 1 : 0,
                          x: currentTestimonial === index ? 0 : 20,
                          display: currentTestimonial === index ? 'block' : 'none'
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0"
                      >
                        {/* Image */}
                        <div className="mb-6 relative">
                          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#1E3A8A]/10 shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Quote Mark Decoration */}
                          <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-3xl font-serif">
                            "
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="mb-6">
                          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            "{testimonial.quote}"
                          </p>
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <p className="font-semibold text-[#1E3A8A] text-lg mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`transition-all duration-300 ${
                          currentTestimonial === index
                            ? 'w-8 h-2 bg-[#1E3A8A]'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 bg-white shadow-xl border border-gray-100 px-6 py-4 whitespace-nowrap"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>500+</p>
                      <p className="text-xs text-gray-600">Happy Clients</p>
                    </div>
                    <div className="w-px h-10 bg-gray-300"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>4.9/5</p>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation - Always visible */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setActiveTab('individual')}
                disabled={currentStep !== 'service'}
                className={`relative px-8 py-6 text-base md:text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'individual'
                    ? 'text-[#1E3A8A]'
                    : 'text-gray-500 hover:text-gray-700'
                } ${currentStep !== 'service' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Individual Consultations
                {activeTab === 'individual' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A8A]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
              
              <div className="w-px h-8 bg-gray-300"></div>
              
              <button
                onClick={() => setActiveTab('organizational')}
                disabled={currentStep !== 'service'}
                className={`relative px-8 py-6 text-base md:text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'organizational'
                    ? 'text-[#1E3A8A]'
                    : 'text-gray-500 hover:text-gray-700'
                } ${currentStep !== 'service' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Organisational Solutions
                {activeTab === 'organizational' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A8A]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area Below Tabs */}
      {currentStep === 'service' && (
        <section className="bg-white">
          {/* Individual Services Tab */}
          {activeTab === 'individual' && (
            <div className="container mx-auto px-6 md:px-8 py-20 md:py-32">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16 text-center"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E3A8A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Individual Consultations
                  </h2>
                  <div className="w-24 h-1 bg-[#1E3A8A] mx-auto mb-6"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    One-on-one sessions tailored to your unique career needs and aspirations
                  </p>
                </motion.div>

                {/* Premium Service Cards - Staggered Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {individualServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`relative group ${index === 1 ? 'lg:mt-12' : ''}`}
                    >
                      {/* Card */}
                      <div className="relative bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#1E3A8A] h-full flex flex-col">
                        {/* Duration Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <div className="bg-[#1E3A8A] text-white px-4 py-2 text-sm font-medium">
                            {formatDuration(service.duration)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 flex-1 flex flex-col">
                          {/* Icon */}
                          <div className="mb-8">
                            <Calendar className="text-[#1E3A8A] group-hover:scale-110 transition-transform duration-500" size={48} strokeWidth={1.5} />
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl md:text-4xl font-semibold text-[#1E3A8A] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-3 mb-8">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                <Check className="text-[#1E3A8A] flex-shrink-0 mt-0.5" size={16} strokeWidth={3} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Price & CTA */}
                          <div className="border-t border-gray-200 pt-6 mt-auto">
                            <div className="flex items-end justify-between mb-6">
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Investment</p>
                                <p className="text-4xl font-bold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                  {formatPrice(service.price)}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleSelectService(service)}
                              className="w-full bg-[#1E3A8A] hover:bg-[#2E4A9A] text-white py-4 px-6 font-medium transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                            >
                              <span>Reserve Your Session</span>
                              <motion.div
                                className="group-hover/btn:translate-x-1 transition-transform"
                              >
                                <ArrowLeft className="rotate-180" size={18} />
                              </motion.div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Organizational Services Tab */}
          {activeTab === 'organizational' && (
            <OrganisationalInquiryForm />
          )}
        </section>
      )}

      {/* Schedule Step - Shows below tabs */}
      {currentStep === 'schedule' && selectedService && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#1E3A8A]/80 mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Services</span>
              </button>

              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Schedule Your {selectedService.title}
                </h2>
                {selectedWorkshopDuration && (
                  <p className="text-lg text-gray-600">
                    Duration: {selectedWorkshopDuration.label} | Price: {formatPrice(selectedWorkshopDuration.price)}
                  </p>
                )}
                {!selectedService.isCustomDuration && (
                  <p className="text-lg text-gray-600">
                    Duration: {formatDuration(selectedService.duration)} | Price: {formatPrice(selectedService.price)}
                  </p>
                )}
              </div>

              {/* Time Slot Picker */}
              <TimeSlotPicker
                duration={getServiceDuration()}
                onSelectSlot={handleSelectSlot}
                selectedSlot={selectedSlot}
                serviceType={getServiceType()}
              />

              {/* Continue Button */}
              {selectedSlot && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center"
                >
                  <button
                    onClick={handleScheduleNext}
                    className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white py-4 px-8 font-semibold transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Continue to Details</span>
                    <ArrowLeft size={20} className="rotate-180" />
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Details Step - Shows below tabs */}
      {currentStep === 'details' && selectedService && selectedSlot && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Back button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#1E3A8A]/80 mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Schedule</span>
              </button>

              {/* Booking Summary */}
              <div className="mb-8 p-6 bg-neutral-50 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Booking Summary
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Service:</strong> {selectedService.title}</p>
                  {selectedWorkshopDuration && (
                    <p><strong>Duration:</strong> {selectedWorkshopDuration.label}</p>
                  )}
                  {!selectedService.isCustomDuration && (
                    <p><strong>Duration:</strong> {formatDuration(selectedService.duration)}</p>
                  )}
                  <p><strong>Date:</strong> {selectedSlot.date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p><strong>Time:</strong> {selectedSlot.time} GMT</p>
                  <p className="text-xl font-bold text-[#1E3A8A] pt-2 border-t border-gray-300 mt-4">
                    <strong>Total:</strong> {formatPrice(getFinalPrice())}
                  </p>
                </div>
              </div>

              {/* Booking Form */}
              <BookingForm
                onSubmit={handleFormSubmit}
                onBack={handleBack}
              />
            </div>
          </div>
        </section>
      )}

      {/* Payment Step - Shows below tabs */}
      {currentStep === 'payment' && selectedService && selectedSlot && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Back button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#1E3A8A]/80 mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Details</span>
              </button>

              {/* Payment Form */}
              <PaystackPayment
                amount={getFinalPrice()}
                email={bookingData.email}
                onSuccess={handlePaymentSuccess}
                onClose={handlePaymentClose}
                metadata={{
                  name: bookingData.name,
                  phone: bookingData.phone,
                  service: selectedService.title,
                  date: selectedSlot.date.toLocaleDateString('en-GB'),
                  time: selectedSlot.time
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Confirmation Step - Shows below tabs */}
      {currentStep === 'confirmation' && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Back button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#1E3A8A]/80 mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Payment</span>
              </button>

              {/* Booking Confirmation */}
              <BookingConfirmation
                paymentReference={paymentReference}
                bookingData={bookingData}
                selectedService={selectedService}
                selectedSlot={selectedSlot}
                finalPrice={getFinalPrice()}
              />
            </div>
          </div>
        </section>
      )}

      {/* Pull Quote Section */}
      <section className="py-20 md:py-32 bg-[#4A5568] relative z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "Investing in your career is the best decision you'll ever make. Let's get started today."
              </p>
              <div className="w-24 h-1 bg-white opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}