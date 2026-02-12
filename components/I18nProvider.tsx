'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction and language
    const updateDocumentAttributes = () => {
      const lang = i18n.language || 'fa';
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    };

    // Set on mount
    updateDocumentAttributes();

    // Listen for language changes
    i18n.on('languageChanged', updateDocumentAttributes);

    return () => {
      i18n.off('languageChanged', updateDocumentAttributes);
    };
  }, [i18n]);

  return <>{children}</>;
}

