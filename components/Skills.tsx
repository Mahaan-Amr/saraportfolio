'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Film,
  Video,
  Layers,
  Paintbrush,
  PenTool,
  Box,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';

export function Skills() {
  const { t } = useTranslation();

  const skills = [
    { icon: Film, key: 'premiere', color: 'purple' },
    { icon: Video, key: 'afterEffects', color: 'blue' },
    { icon: Layers, key: 'moho', color: 'purple' },
    { icon: Paintbrush, key: 'tvPaint', color: 'blue' },
    { icon: PenTool, key: 'pencil2d', color: 'purple' },
    { icon: Box, key: '3dmax', color: 'blue' },
    { icon: ImageIcon, key: 'photoshop', color: 'purple' },
    { icon: Sparkles, key: 'contentCreation', color: 'blue' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 dark:from-gray-950 dark:via-purple-950/30 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText
              text={t('skills.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={4}
            />
          </h2>
          <div className="text-lg text-slate-800 dark:text-gray-400 max-w-3xl mx-auto font-semibold">
            <AnimatedText
              text={t('skills.subtitle')}
              type="word"
              delay={0.3}
              stagger={0.04}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.key}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0], y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={`relative p-6 rounded-2xl bg-white dark:bg-gray-800/90 border-2 ${
                skill.color === 'purple'
                  ? 'border-purple-400 dark:border-purple-700/50 hover:border-purple-600 dark:hover:border-purple-500 neon-border'
                  : 'border-blue-400 dark:border-blue-700/50 hover:border-blue-600 dark:hover:border-blue-500 neon-border'
              } transition-all duration-300 shadow-xl dark:shadow-purple-900/20 hover:shadow-2xl dark:hover:shadow-purple-900/40 hover:scale-105 overflow-hidden group hover:neon-glow`}
            >
              {/* Animated glow effect */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  skill.color === 'purple'
                    ? 'bg-gradient-to-br from-purple-200/20 to-transparent'
                    : 'bg-gradient-to-br from-blue-200/20 to-transparent'
                }`}
                initial={false}
              />
              
              <motion.div
                className={`inline-flex p-3 rounded-xl mb-4 relative z-10 ${
                  skill.color === 'purple'
                    ? 'bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300'
                    : 'bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-sm md:text-base font-bold text-slate-950 dark:text-white relative z-10">
                <AnimatedText
                  text={t(`skills.${skill.key}`)}
                  type="fade"
                  delay={0.1 + index * 0.05}
                />
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

