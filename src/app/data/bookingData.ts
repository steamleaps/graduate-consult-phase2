// Booking Services Data for Graduate Consult

export interface BookingService {
  id: string;
  title: string;
  duration: number; // in minutes
  price: number; // in Ghana Cedis (GHS)
  description: string;
  features: string[];
  isCustomDuration?: boolean;
  durationOptions?: { label: string; hours: number; price: number }[];
  note?: string;
}

export const bookingServices: BookingService[] = [
  {
    id: 'career-coaching',
    title: '1-2-1 Career Clarity Calls',
    duration: 90,
    price: 1650,
    description: 'Personalized career guidance and strategic planning session to help you navigate your professional journey.',
    features: [
      'Career path exploration',
      'Goal setting and action planning',
      'Professional development strategies',
      'Personalized guidance and feedback'
    ]
  },
  {
    id: 'resume-review',
    title: 'Resume Review',
    duration: 45,
    price: 499,
    description: 'Comprehensive review of your resume with actionable feedback to make you stand out to employers.',
    features: [
      'Line-by-line resume analysis',
      'ATS optimization tips',
      'Content and formatting recommendations',
      'Industry-specific insights'
    ]
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    duration: 60,
    price: 750,
    description: 'Intensive interview coaching to build confidence and master common and behavioral interview questions.',
    features: [
      'Mock interview practice',
      'Question and answer strategies',
      'Body language and presentation tips',
      'Follow-up and negotiation guidance'
    ]
  },
  {
    id: 'org-consulting',
    title: 'Organizational Consulting',
    duration: 60,
    price: 1500,
    description: 'Strategic consultation for organizations looking to improve their talent systems and early career programs.',
    features: [
      'Talent system assessment',
      'Program design consultation',
      'Implementation strategies',
      'Best practices and frameworks'
    ]
  },
  {
    id: 'workshop-facilitation',
    title: 'Workshop Facilitation',
    duration: 0, // Custom duration
    price: 1500, // Per hour
    description: 'Customized workshop facilitation for teams and organizations on career development and talent topics.',
    features: [
      'Customized content and agenda',
      'Interactive facilitation',
      'Participant engagement activities',
      'Post-workshop resources'
    ],
    isCustomDuration: true,
    durationOptions: [
      { label: '2 Hours', hours: 2, price: 3000 },
      { label: '4 Hours (Half Day)', hours: 4, price: 6000 },
      { label: 'Full Day (8 Hours)', hours: 8, price: 12000 }
    ],
    note: 'Transportation not included in the price per hour. Full day workshops require booking at least 1 week in advance.'
  }
];

// Availability configuration
export const availability = {
  days: [2, 3, 4], // Tuesday (2), Wednesday (3), Thursday (4)
  startHour: 9,
  endHour: 17, // 5 PM
  bufferMinutes: 15,
  timezone: 'GMT',
  daysOfWeek: ['Tuesday', 'Wednesday', 'Thursday']
};

// Booking policies
export const bookingPolicies = {
  cancellation: {
    allowed: false,
    refundPolicy: 'No cancellations or refunds'
  },
  rescheduling: {
    allowed: true,
    minHoursNotice: 48,
    policy: 'Can reschedule up to 48 hours before the session'
  },
  fullDayWorkshop: {
    minDaysAdvance: 7,
    requiresWeekend: true // Must book during weekend for weekday workshop
  }
};

// Meeting configuration
export const meetingConfig = {
  platform: 'Google Meet',
  autoGenerateLink: true,
  sendLinkHoursBefore: 24
};

// Notification configuration
export const notificationConfig = {
  client: {
    bookingConfirmation: true,
    paymentReceipt: true,
    meetingLink24HoursBefore: true,
    reminder1HourBefore: true,
    followUpThankYou: true
  },
  admin: {
    newBookingNotification: true,
    paymentConfirmation: true
  }
};

// Helper function to format price in Ghana Cedis
export const formatPrice = (price: number): string => {
  return `GH₵${price.toLocaleString()}`;
};

// Helper function to format duration
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = minutes / 60;
  return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
};