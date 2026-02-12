'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { GradientText } from './GradientText';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export function Timeline() {
  const { t } = useTranslation();

  const years = ['2020', '2021', '2022', '2023', '2024'];
  const timelineData: TimelineItem[] = years.map((year) => ({
    year,
    title: t(`timeline.items.${year}.title`),
    description: t(`timeline.items.${year}.description`),
    location: t('timeline.location'),
  }));

  return (
    <section
      id="timeline"
      className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:bg-none dark:bg-gray-950"
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
              text={t('timeline.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={3}
            />
          </h2>
          <p className="text-lg text-slate-800 dark:text-gray-400 max-w-3xl mx-auto font-semibold">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 dark:from-purple-500 dark:via-blue-500 dark:to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Enhanced Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 z-10 hidden md:block shadow-xl shadow-purple-600/60 dark:shadow-purple-400/50"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-400 dark:bg-purple-300"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-2 border-purple-400 dark:border-purple-700/50 shadow-xl dark:shadow-purple-900/20 hover:shadow-2xl dark:hover:shadow-purple-900/40 hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden group neon-border hover:neon-glow"
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-200/0 to-blue-200/0 group-hover:from-purple-200/20 group-hover:to-blue-200/20 transition-all duration-500"
                      initial={false}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Calendar className="w-5 h-5 text-purple-700 dark:text-purple-300" />
                        </motion.div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent neon-text">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-800 dark:text-gray-400 mb-4 leading-relaxed font-semibold">
                        {item.description}
                      </p>
                      {item.location && (
                        <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-400 font-semibold">
                          <MapPin className="w-4 h-4 text-purple-700 dark:text-purple-300" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for mobile */}
                <div className="w-full md:w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

