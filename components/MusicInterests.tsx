'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Music, Headphones, Disc, Film } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { GradientText } from './GradientText';

export function MusicInterests() {
  const { t } = useTranslation();

  const musicCategories = [
    {
      icon: Music,
      title: t('music.metal'),
      description: t('music.metalDesc'),
      color: 'purple',
      favorites: [t('music.symphonicMetal'), t('music.progressiveRock'), t('music.powerMetal')],
    },
    {
      icon: Headphones,
      title: t('music.symphonic'),
      description: t('music.symphonicDesc'),
      color: 'blue',
      favorites: [t('music.epicOrchestrations'), t('music.metalSymphonies')],
    },
    {
      icon: Film,
      title: t('music.soundtracks'),
      description: t('music.soundtracksDesc'),
      color: 'purple',
      favorites: [t('music.coco'), t('music.interstellar'), t('music.animation')],
    },
    {
      icon: Disc,
      title: t('music.animation'),
      description: t('music.animationDesc'),
      color: 'blue',
      favorites: [t('music.pixarScores'), t('music.studioGhibli'), t('music.disneyClassics')],
    },
  ];

  return (
    <section
      id="music"
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
              text={t('music.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={3}
            />
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            <AnimatedText
              text={t('music.subtitle')}
              type="word"
              delay={0.2}
              stagger={0.03}
            />
          </div>
          <p className="text-base text-slate-800 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-semibold">
            {t('music.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative p-8 rounded-2xl bg-white dark:bg-gray-800/90 border-2 ${
                category.color === 'purple'
                  ? 'border-purple-400 dark:border-purple-700/50 hover:border-purple-600 dark:hover:border-purple-500 neon-border'
                  : 'border-blue-400 dark:border-blue-700/50 hover:border-blue-600 dark:hover:border-blue-500 neon-border'
              } transition-all duration-300 shadow-xl dark:shadow-purple-900/20 hover:shadow-2xl dark:hover:shadow-purple-900/40 overflow-hidden group hover:neon-glow`}
            >
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  category.color === 'purple'
                    ? 'bg-gradient-to-br from-purple-200/20 to-transparent'
                    : 'bg-gradient-to-br from-blue-200/20 to-transparent'
                }`}
                initial={false}
              />

              <div className={`inline-flex p-4 rounded-xl mb-4 relative z-10 ${
                category.color === 'purple'
                  ? 'bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300'
                  : 'bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300'
              }`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-8 h-8" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-950 dark:text-white relative z-10">
                {category.title}
              </h3>
              <p className="text-slate-800 dark:text-gray-400 mb-4 relative z-10 font-semibold">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.favorites.map((fav, favIndex) => (
                  <motion.span
                    key={favIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + favIndex * 0.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      category.color === 'purple'
                        ? 'bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300'
                        : 'bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300'
                    }`}
                  >
                    {fav}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

