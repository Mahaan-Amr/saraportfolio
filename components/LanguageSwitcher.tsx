'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // i18n is already initialized in I18nProvider
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">{i18n.language === 'fa' ? 'EN' : 'FA'}</span>
    </button>
  );
}

