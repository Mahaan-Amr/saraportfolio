'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioItems, PortfolioItem } from '@/data/portfolio';
import { GradientText } from './GradientText';
import { RippleButton } from './RippleButton';

type Category = 'all' | 'animation' | 'graphicDesign' | 'videoEditing' | 'content';

export function Portfolio() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: Category[] = ['all', 'animation', 'graphicDesign', 'videoEditing', 'content'];

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const isRTL = i18n.language === 'fa';

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-linear-to-br from-purple-100 via-purple-50 to-blue-100 dark:from-gray-950 dark:via-purple-950/30 dark:to-gray-900"
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
              text={t('portfolio.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={3}
            />
          </h2>
          <p className="text-lg text-slate-800 dark:text-gray-400 max-w-3xl mx-auto font-semibold">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-linear-to-r from-purple-600 via-purple-500 to-blue-500 text-white shadow-2xl border-2 border-purple-400/30 neon-glow neon-glow-pulse'
                  : 'bg-white dark:bg-gray-800 text-slate-800 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-800/50 hover:border-purple-500 dark:hover:border-purple-600 shadow-md hover:shadow-lg neon-border hover:neon-glow'
              }`}
            >
              {t(`portfolio.categories.${category}`)}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <PortfolioCard item={item} index={index} isRTL={isRTL} key={item.id} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index, isRTL }: { item: PortfolioItem; index: number; isRTL: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        rotateY: [0, 5, -5, 0],
        transition: { duration: 0.6 }
      }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/90 shadow-xl dark:shadow-purple-900/20 hover:shadow-2xl dark:hover:shadow-purple-900/30 transition-all duration-300 border-2 border-purple-400 dark:border-purple-900/30 hover:border-purple-600 dark:hover:border-purple-700 neon-border hover:neon-glow"
    >
      {/* Image placeholder with better design */}
      <div className="relative h-64 bg-linear-to-br from-purple-300 via-blue-300 to-purple-400 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-purple-800/40 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 92, 246, 0.1) 10px, rgba(139, 92, 246, 0.1) 20px)`,
          }} />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl font-bold text-purple-800 dark:text-purple-300">
              {item.id}
            </span>
          </div>
          <span className="text-xs font-bold text-purple-800 dark:text-purple-200 uppercase tracking-wider opacity-90">
            {isRTL ? item.titleFa : item.title}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <RippleButton
          className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => console.log('View project:', item.id)}
        >
          <ExternalLink className="w-5 h-5 text-purple-700 dark:text-purple-300" />
        </RippleButton>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-950 dark:text-white">
          {isRTL ? item.titleFa : item.title}
        </h3>
        <p className="text-slate-800 dark:text-gray-400 mb-4 text-sm line-clamp-2 font-semibold">
          {isRTL ? item.descriptionFa : item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-purple-200 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

