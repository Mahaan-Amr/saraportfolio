'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'letter' | 'word' | 'line' | 'fade' | 'slide' | 'glitch' | 'gradient' | 'wave' | 'bounce' | 'rotate' | 'scale';
  duration?: number;
  stagger?: number;
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'letter',
  duration = 0.5,
  stagger = 0.02,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Letter-by-letter animation
  if (type === 'letter') {
    const letters = text.split('');
    return (
      <motion.span
        ref={ref}
        className={`${className} text-gray-900 dark:text-white`}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20, rotateX: -90 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="text-gray-900 dark:text-white"
            style={{ display: 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Word-by-word animation
  if (type === 'word') {
    const words = text.split(' ');
    return (
      <motion.span
        ref={ref}
        className={`${className} text-gray-700 dark:text-gray-300`}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="text-gray-700 dark:text-gray-300"
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Fade animation
  if (type === 'fade') {
    return (
      <motion.span
        ref={ref}
        className={`${className} text-inherit`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration, delay }}
      >
        {text}
      </motion.span>
    );
  }

  // Slide animation
  if (type === 'slide') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {text}
      </motion.span>
    );
  }

  // Glitch animation
  if (type === 'glitch') {
    return (
      <motion.span
        ref={ref}
        className={`${className} text-gray-900 dark:text-white`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                x: [0, -2, 2, -2, 2, 0],
                color: [
                  'currentColor',
                  'rgb(239, 68, 68)', // red-500 - visible in both modes
                  'rgb(34, 197, 94)', // green-500 - visible in both modes
                  'rgb(168, 85, 247)', // purple-500 - visible in both modes
                  'currentColor',
                ],
                transition: {
                  duration: 0.3,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                },
              },
            }}
            className="text-gray-900 dark:text-white"
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Wave animation
  if (type === 'wave') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: [0, -20, 0],
                transition: {
                  duration: duration * 2,
                  delay: index * stagger,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              },
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Bounce animation
  if (type === 'bounce') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: [50, -10, 0],
                transition: {
                  duration: duration * 1.5,
                  delay: index * stagger,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Rotate animation
  if (type === 'rotate') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, rotate: -180, scale: 0 },
              visible: {
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                  duration: duration * 1.2,
                  delay: index * stagger,
                  ease: 'easeOut',
                },
              },
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Scale animation
  if (type === 'scale') {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: [0, 1.5, 1],
                transition: {
                  duration: duration * 1.2,
                  delay: index * stagger,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Gradient animation
  if (type === 'gradient') {
    return (
      <motion.span
        ref={ref}
        className={`${className} bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent`}
        initial={{ opacity: 0, backgroundPosition: '0% 50%' }}
        animate={
          isInView
            ? {
                opacity: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : { opacity: 0 }
        }
        transition={{
          duration: duration * 2,
          delay,
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

  // Default: line-by-line
  const lines = text.split('\n');
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration, ease: 'easeOut' },
            },
          }}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}

