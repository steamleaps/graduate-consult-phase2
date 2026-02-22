import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { availability } from '../data/bookingData';

interface TimeSlot {
  date: Date;
  time: string;
  available: boolean;
}

interface TimeSlotPickerProps {
  duration: number; // in minutes
  onSelectSlot: (date: Date, time: string) => void;
  selectedSlot?: { date: Date; time: string } | null;
  serviceType?: 'individual' | 'organizational'; // Individual: 48hrs, Organizational: 24hrs
}

export default function TimeSlotPicker({ duration, onSelectSlot, selectedSlot, serviceType }: TimeSlotPickerProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // Move to next Tuesday if today is not Tue-Thu or if it's past business hours
    if (dayOfWeek < 2 || dayOfWeek > 4 || today.getHours() >= availability.endHour) {
      const daysUntilNextTuesday = dayOfWeek === 0 ? 2 : (9 - dayOfWeek) % 7;
      const nextTuesday = new Date(today);
      nextTuesday.setDate(today.getDate() + daysUntilNextTuesday);
      nextTuesday.setHours(0, 0, 0, 0);
      return nextTuesday;
    }
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    return monday;
  });

  // Generate time slots for the current week
  const weekSlots = useMemo(() => {
    const slots: TimeSlot[] = [];
    const now = new Date();
    
    // Calculate minimum booking time based on service type
    // Individual: 48 hours advance, Organizational: 24 hours advance
    const advanceHours = serviceType === 'organizational' ? 24 : 48;
    const minimumBookingTime = new Date(now.getTime() + (advanceHours * 60 * 60 * 1000));

    // Generate slots for each available day
    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const currentDate = new Date(currentWeekStart);
      currentDate.setDate(currentWeekStart.getDate() + dayOffset);
      const dayOfWeek = currentDate.getDay();

      // Only include Tuesday (2), Wednesday (3), Thursday (4)
      if (availability.days.includes(dayOfWeek)) {
        // Generate time slots for this day
        const startHour = availability.startHour;
        const endHour = availability.endHour;
        const slotDurationMinutes = duration + availability.bufferMinutes;
        
        for (let hour = startHour; hour < endHour; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const slotTime = hour + minute / 60;
            const slotEndTime = slotTime + slotDurationMinutes / 60;
            
            // Only add slot if it ends before the end hour
            if (slotEndTime <= endHour) {
              const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
              
              // Check if slot meets minimum advance booking requirement
              const slotDateTime = new Date(currentDate);
              slotDateTime.setHours(hour, minute, 0, 0);
              const isAvailable = slotDateTime >= minimumBookingTime;
              
              slots.push({
                date: new Date(currentDate),
                time: timeString,
                available: isAvailable
              });
            }
          }
        }
      }
    }

    return slots;
  }, [currentWeekStart, duration, serviceType]);

  // Group slots by date
  const slotsByDate = useMemo(() => {
    const grouped = new Map<string, TimeSlot[]>();
    weekSlots.forEach(slot => {
      const dateKey = slot.date.toDateString();
      if (!grouped.has(dateKey)) {
        grouped.set(dateKey, []);
      }
      grouped.get(dateKey)!.push(slot);
    });
    return grouped;
  }, [weekSlots]);

  const handlePreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() - 7);
    
    // Don't go before today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (newStart >= today) {
      setCurrentWeekStart(newStart);
    }
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTimeRange = (time: string, durationMinutes: number) => {
    const [hours, minutes] = time.split(':').map(Number);
    const startDate = new Date();
    startDate.setHours(hours, minutes, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + durationMinutes);
    
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    
    return `${formatTime(startDate)} - ${formatTime(endDate)}`;
  };

  const isSlotSelected = (slot: TimeSlot) => {
    if (!selectedSlot) return false;
    return slot.date.toDateString() === selectedSlot.date.toDateString() && 
           slot.time === selectedSlot.time;
  };

  return (
    <div className="bg-white border-2 border-gray-200 p-8">
      {/* Header with Week Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handlePreviousWeek}
          className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentWeekStart <= new Date()}
        >
          <ChevronLeft className="text-[#1E3A8A]" size={24} />
        </button>
        
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center mb-2">
            <Calendar className="text-[#1E3A8A]" size={20} />
            <h3 className="text-xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Select Date & Time
            </h3>
          </div>
          <p className="text-sm text-gray-600">
            Week of {currentWeekStart.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
        
        <button
          onClick={handleNextWeek}
          className="p-2 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="text-[#1E3A8A]" size={24} />
        </button>
      </div>

      {/* Available Days Notice */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200">
        <p className="text-sm text-blue-800 text-center">
          <strong>Available Days:</strong> Tuesdays, Wednesdays & Thursdays | <strong>Hours:</strong> 9:00 AM - 5:00 PM GMT
        </p>
      </div>

      {/* Advance Booking Notice */}
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200">
        <p className="text-sm text-amber-900 text-center">
          <strong>Advance Booking:</strong> {serviceType === 'organizational' ? 'Organizational services' : 'Individual consultations'} require at least <strong>{serviceType === 'organizational' ? '24 hours' : '48 hours'}</strong> advance notice
        </p>
      </div>

      {/* Time Slots by Date */}
      <div className="space-y-6">
        {Array.from(slotsByDate.entries()).map(([dateKey, slots]) => {
          const date = slots[0].date;
          
          return (
            <div key={dateKey} className="border-b border-gray-200 pb-6 last:border-0">
              <h4 className="text-lg font-semibold text-[#1E3A8A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {formatDate(date)}
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {slots.map((slot, index) => (
                  <motion.button
                    key={`${dateKey}-${slot.time}-${index}`}
                    onClick={() => slot.available && onSelectSlot(slot.date, slot.time)}
                    disabled={!slot.available}
                    whileHover={slot.available ? { scale: 1.05 } : {}}
                    whileTap={slot.available ? { scale: 0.95 } : {}}
                    className={`
                      p-3 text-sm font-medium transition-all duration-200
                      ${isSlotSelected(slot)
                        ? 'bg-[#1E3A8A] text-white border-2 border-[#1E3A8A]'
                        : slot.available
                        ? 'bg-white text-[#1E3A8A] border-2 border-gray-300 hover:border-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                      }
                    `}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <Clock size={14} />
                      <span>{formatTimeRange(slot.time, duration)}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}
        
        {slotsByDate.size === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600">No available slots this week</p>
            <p className="text-sm text-gray-500 mt-2">Try selecting a different week</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border-2 border-gray-300"></div>
          <span className="text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#1E3A8A]"></div>
          <span className="text-gray-600">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 border-2 border-gray-200"></div>
          <span className="text-gray-600">Unavailable</span>
        </div>
      </div>
    </div>
  );
}