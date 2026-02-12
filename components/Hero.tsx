'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';
import { ParticleBackground } from './ParticleBackground';
import { MagneticButton } from './MagneticButton';

interface BackgroundElement {
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface FloatingParticle {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export function Hero() {
  const { t } = useTranslation();
  const [backgroundElements, setBackgroundElements] = useState<BackgroundElement[]>([]);
  const [floatingParticles, setFloatingParticles] = useState<FloatingParticle[]>([]);

  // Generate random values after mount to avoid impure function calls during render
  // Note: ESLint may warn about setState in useEffect, but this is necessary to
  // generate random values after mount and avoid hydration mismatches
  useEffect(() => {
    // These setState calls are necessary to generate random values after mount
    // This ensures consistent behavior and avoids hydration mismatches
    // The random values are generated once on mount and remain stable
    setBackgroundElements(
      Array.from({ length: 20 }, () => ({
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 2,
      }))
    );

    setFloatingParticles(
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 dark:from-gray-950 dark:via-purple-950/30 dark:to-gray-900 pt-20"
    >
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={80}
        minSize={1}
        maxSize={4}
        minSpeed={0.1}
        maxSpeed={0.6}
        color="rgba(139, 92, 246, 0.4)"
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.length > 0 && backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-200/30 dark:bg-purple-500/10"
            style={{
              width: element.width,
              height: element.height,
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 mb-6 backdrop-blur-sm border-2 border-purple-400 dark:border-purple-800/50 shadow-md neon-border"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <AnimatedText
            text={t('hero.subtitle')}
            type="fade"
            className="text-sm font-medium"
            delay={0.1}
          />
        </motion.div>

        {/* Sara's Name with Vanellope Glitch Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <AnimatedText
            text={t('hero.name')}
            type="glitch"
            className="text-3xl md:text-4xl font-bold block mb-2 text-slate-900 dark:text-white"
            delay={0.1}
            stagger={0.05}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-lg md:text-xl text-purple-800 dark:text-purple-300 font-bold"
          >
            aka {t('hero.nickname')} ✨
          </motion.span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <GradientText
            text={t('hero.title')}
            gradient="from-purple-700 via-blue-600 to-purple-700 dark:from-purple-300 dark:via-blue-300 dark:to-purple-300"
            animate={true}
            speed={4}
            className="block"
          />
        </h1>

        <div className="text-xl md:text-2xl text-slate-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
          <AnimatedText
            text={t('hero.description')}
            type="word"
            delay={0.5}
            stagger={0.05}
          />
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 border-2 border-purple-400/30 neon-glow hover:neon-glow-pulse"
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-slate-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors font-semibold"
          >
            <span className="text-sm">{t('nav.about')}</span>
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles.length > 0 && floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 dark:bg-purple-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}

