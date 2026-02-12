'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Mail, Github, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { GradientText } from './GradientText';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:sara@example.com', labelKey: 'email', color: 'text-white hover:text-blue-200 dark:text-blue-400 dark:hover:text-blue-300' },
    { icon: Github, href: 'https://github.com', labelKey: 'github', color: 'text-white hover:text-white dark:text-gray-300 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com', labelKey: 'linkedin', color: 'text-white hover:text-blue-200 dark:text-blue-400 dark:hover:text-blue-300' },
    { icon: Instagram, href: 'https://instagram.com', labelKey: 'instagram', color: 'text-white hover:text-pink-200 dark:text-pink-400 dark:hover:text-pink-300' },
    { icon: Youtube, href: 'https://youtube.com', labelKey: 'youtube', color: 'text-white hover:text-red-200 dark:text-red-400 dark:hover:text-red-300' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-gradient-to-br from-purple-700 via-blue-600 to-purple-800 dark:from-gray-950 dark:via-purple-950/50 dark:to-gray-950 border-t border-purple-500/40 dark:border-purple-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">
              <GradientText
                text="SARA"
                gradient="from-purple-400 via-blue-400 to-purple-400"
                animate={true}
                speed={3}
                className="font-display"
              />
            </h3>
            <p className="text-sm text-white/95 dark:text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold text-white dark:text-purple-300 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <nav className="flex flex-col gap-2">
              {['about', 'skills', 'portfolio', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-sm text-white/80 dark:text-gray-400 hover:text-white dark:hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  {t(`nav.${link}`)}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold text-white dark:text-purple-300 uppercase tracking-wider">
              {t('footer.connect')}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.labelKey}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg bg-white/20 dark:bg-purple-900/40 border-2 border-white/30 dark:border-purple-700/40 hover:border-white/50 dark:hover:border-purple-500 hover:bg-white/30 dark:hover:bg-purple-800/50 transition-all duration-300 backdrop-blur-sm ${social.color} hover:neon-glow`}
                  aria-label={t(`footer.social.${social.labelKey}`)}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 dark:border-purple-700/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80 dark:text-gray-400 font-medium">
              © {currentYear} {t('footer.rights')}
            </p>
            <p className="text-sm flex items-center gap-2 text-white/80 dark:text-gray-400 font-medium">
              {t('footer.madeWith')} 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-pink-300 dark:text-pink-500 fill-pink-300 dark:fill-pink-500" />
              </motion.span>
              {t('footer.by')}
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/20 dark:bg-purple-800/40 text-white dark:text-purple-300 hover:bg-white/30 dark:hover:bg-purple-700/50 border-2 border-white/30 dark:border-purple-600/40 transition-all duration-300 backdrop-blur-sm"
              aria-label={t('footer.scrollToTop')}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

