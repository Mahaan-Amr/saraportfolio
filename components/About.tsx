'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';

export function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: '5+', label: t('about.years'), color: 'purple' },
    { icon: Briefcase, value: '50+', label: t('about.projects'), color: 'blue' },
    { icon: Users, value: '30+', label: t('about.clients'), color: 'purple' },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <GradientText
              text={t('about.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={3}
            />
          </h2>
          <p className="text-lg text-purple-800 dark:text-purple-300 mb-6 font-bold">
            {t('about.subtitle')}
          </p>
          <div className="text-lg text-slate-800 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-semibold">
            <AnimatedText
              text={t('about.description')}
              type="word"
              delay={0.2}
              stagger={0.03}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, rotate: [0, -2, 2, -2, 0] }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring', 
                stiffness: 300 
              }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-2 border-purple-400 dark:border-purple-700/50 overflow-hidden group shadow-xl dark:shadow-purple-900/20 hover:shadow-2xl dark:hover:shadow-purple-900/40 hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 neon-border hover:neon-glow"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-200/0 to-blue-200/0 group-hover:from-purple-200/20 group-hover:to-blue-200/20 transition-all duration-500"
                initial={false}
              />
              
              <motion.div
                className={`inline-flex p-4 rounded-xl mb-4 relative z-10 ${
                  stat.color === 'purple'
                    ? 'bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300'
                    : 'bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300'
                }`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-4xl font-bold mb-2 text-slate-950 dark:text-white relative z-10">
                <AnimatedText
                  text={stat.value}
                  type="letter"
                  delay={0.1 + index * 0.1}
                  stagger={0.05}
                />
              </h3>
              <p className="text-slate-800 dark:text-gray-400 font-bold relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

