import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedHeadlineProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  animationType?: 'word' | 'letter';
}

export default function AnimatedHeadline({ 
  children, 
  className = '', 
  style = {},
  delay = 0,
  animationType = 'word'
}: AnimatedHeadlineProps) {
  // Convert children to string and handle line breaks
  const textContent = typeof children === 'string' ? children : String(children);
  
  // Split by line breaks that might be in the text
  const lines = textContent.split(/\n/).map(line => line.trim()).filter(Boolean);
  
  // Add responsive text sizing by default, but allow override via className
  const responsiveClasses = className.includes('text-') ? '' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl';
  const combinedClassName = `${responsiveClasses} ${className}`.trim();
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationType === 'word' ? 0.12 : 0.03,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 10,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (animationType === 'letter') {
    return (
      <motion.h1
        className={combinedClassName}
        style={style}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {line.split('').map((char, charIndex) => (
              <motion.span
                key={`${lineIndex}-${charIndex}`}
                variants={itemVariants}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </motion.span>
            ))}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>
    );
  }

  // Word-by-word animation (default)
  return (
    <motion.h1
      className={combinedClassName}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'inline', whiteSpace: 'normal' }}>
          {line.split(' ').map((word, wordIndex) => {
            // Check if word is wrapped in special tags (like italic)
            const isItalic = word.includes('*');
            const cleanWord = word.replace(/\*/g, '');
            
            return (
              <motion.span
                key={`${lineIndex}-${wordIndex}`}
                variants={itemVariants}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
                className={isItalic ? 'italic' : ''}
              >
                {cleanWord}
              </motion.span>
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ))}
    </motion.h1>
  );
}