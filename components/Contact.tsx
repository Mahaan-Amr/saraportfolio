'use client';

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { GradientText } from './GradientText';
import { RippleButton } from './RippleButton';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-linear-to-br from-purple-50 via-white to-blue-50 dark:bg-none dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText
              text={t('contact.title')}
              gradient="from-purple-600 via-blue-600 to-purple-600"
              animate={true}
              speed={3}
            />
          </h2>
          <p className="text-lg text-slate-800 dark:text-gray-400 max-w-3xl mx-auto font-semibold">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-br from-purple-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 border-2 border-purple-400 dark:border-purple-700/50 shadow-xl dark:shadow-purple-900/20 neon-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-purple-400 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-purple-700 dark:focus:border-purple-400 transition-all shadow-md focus:neon-glow peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-10 top-1/2 transform -translate-y-1/2 text-slate-800 dark:text-gray-300 transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-600 dark:peer-focus:text-purple-400 font-semibold"
                >
                  {t('contact.email')}
                </label>
              </div>
            </div>

            <div>
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-purple-400 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-purple-700 dark:focus:border-purple-400 transition-all resize-none shadow-md focus:neon-glow peer"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-800 dark:text-gray-300 transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-600 dark:peer-focus:text-purple-400 font-semibold"
                >
                  {t('contact.message')}
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <RippleButton
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-purple-400/30 neon-glow hover:neon-glow-pulse"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </>
                )}
              </RippleButton>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('contact.success')}</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{t('contact.error')}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

