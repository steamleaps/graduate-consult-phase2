import { motion } from 'motion/react';
import { useState } from 'react';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FloatingLabelInput({
  id,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  value,
  onChange,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-300 z-10"
        animate={{
          top: isActive ? '-10px' : '16px',
          fontSize: isActive ? '12px' : '16px',
          color: isFocused ? '#1E3A8A' : '#6B7280',
        }}
        style={{
          backgroundColor: isActive ? 'white' : 'transparent',
          padding: isActive ? '0 8px' : '0',
        }}
      >
        <span className={isActive ? 'font-semibold' : 'font-normal'}>
          {label} {required && <span className="text-[#1E3A8A]">*</span>}
        </span>
      </motion.label>
      
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
      >
        <input
          id={id}
          type={type}
          placeholder={isFocused ? placeholder : ''}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`w-full h-14 px-4 pt-2 bg-white text-gray-900 text-base transition-all duration-300 focus:outline-none ${
            isFocused 
              ? 'border-2 border-[#1E3A8A] shadow-lg' 
              : 'border-2 border-gray-200'
          }`}
        />
      </motion.div>
    </div>
  );
}

interface FloatingLabelTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export function FloatingLabelTextarea({
  id,
  label,
  placeholder = '',
  required = false,
  value,
  onChange,
  rows = 8,
}: FloatingLabelTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-300 z-10"
        animate={{
          top: isActive ? '-10px' : '16px',
          fontSize: isActive ? '12px' : '16px',
          color: isFocused ? '#1E3A8A' : '#6B7280',
        }}
        style={{
          backgroundColor: isActive ? 'white' : 'transparent',
          padding: isActive ? '0 8px' : '0',
        }}
      >
        <span className={isActive ? 'font-semibold' : 'font-normal'}>
          {label} {required && <span className="text-[#1E3A8A]">*</span>}
        </span>
      </motion.label>
      
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
      >
        <textarea
          id={id}
          placeholder={isFocused ? placeholder : ''}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={rows}
          className={`w-full px-4 pt-6 pb-4 bg-white text-gray-900 text-base transition-all duration-300 focus:outline-none resize-none ${
            isFocused 
              ? 'border-2 border-[#1E3A8A] shadow-lg' 
              : 'border-2 border-gray-200'
          }`}
        />
      </motion.div>
    </div>
  );
}

interface FloatingLabelSelectProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export function FloatingLabelSelect({
  id,
  label,
  required = false,
  value,
  onChange,
  options,
}: FloatingLabelSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-300 z-10"
        animate={{
          top: isActive ? '-10px' : '16px',
          fontSize: isActive ? '12px' : '16px',
          color: isFocused ? '#1E3A8A' : '#6B7280',
        }}
        style={{
          backgroundColor: isActive ? 'white' : 'transparent',
          padding: isActive ? '0 8px' : '0',
        }}
      >
        <span className={isActive ? 'font-semibold' : 'font-normal'}>
          {label} {required && <span className="text-[#1E3A8A]">*</span>}
        </span>
      </motion.label>
      
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
      >
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`w-full h-14 px-4 pt-2 bg-white text-gray-900 text-base transition-all duration-300 focus:outline-none appearance-none cursor-pointer ${
            isFocused 
              ? 'border-2 border-[#1E3A8A] shadow-lg' 
              : 'border-2 border-gray-200'
          }`}
          style={{ color: value ? '#111827' : 'transparent' }}
        >
          <option value="" disabled style={{ color: '#111827' }}>Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} style={{ color: '#111827' }}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Arrow icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
