'use client';

import { useABTest } from '@/contexts/ABTestContext';
import { TestTube2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ABTestToggle() {
  const [mounted, setMounted] = useState(false);
  let variant: 'A' | 'B' = 'A';
  let toggleVariant: () => void = () => {};

  try {
    const context = useABTest();
    variant = context.variant;
    toggleVariant = context.toggleVariant;
  } catch (e) {
    // Context not available yet, use default
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30" />
    );
  }

  return (
    <motion.button
      onClick={toggleVariant}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-900/50 dark:hover:to-blue-900/50 transition-all duration-300 border border-purple-300 dark:border-purple-700"
      aria-label={`Switch to variant ${variant === 'A' ? 'B' : 'A'}`}
      title={`Current: Variant ${variant} | Click to switch to Variant ${variant === 'A' ? 'B' : 'A'}`}
    >
      <TestTube2 className="w-5 h-5" />
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
        {variant}
      </span>
    </motion.button>
  );
}

