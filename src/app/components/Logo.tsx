import { Link } from 'react-router';
import { motion } from 'motion/react';

interface LogoProps {
  variant?: 'positive' | 'reversed' | 'icon-only';
  className?: string;
}

export default function Logo({ variant = 'positive', className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <motion.img 
        src="https://res.cloudinary.com/drqx8rtbw/image/upload/logo_yrqfhb.png" 
        alt="Graduate Consult" 
        className=""
        style={{ 
          height: '150px',
          width: '300px',
          objectFit: 'contain',
          filter: variant === 'reversed' ? 'brightness(0) invert(1)' : 'none',
          marginLeft: '-64px'
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  );
}