'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
  animate?: boolean;
  speed?: number;
}

export function GradientText({
  text,
  className = '',
  gradient = 'from-purple-600 via-blue-600 to-purple-600',
  animate = true,
  speed = 3,
}: GradientTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split gradient for dark mode support if it contains dark: classes
  const gradientClasses = gradient.includes('dark:')
    ? gradient
    : `${gradient} dark:from-purple-400 dark:via-blue-400 dark:to-purple-400`;

  if (!animate) {
    return (
      <span className={`bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent ${className}`}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={`bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent ${className}`}
      animate={
        isInView
          ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }
          : {}
      }
      transition={{
        duration: speed,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {text}
    </motion.span>
  );
}

