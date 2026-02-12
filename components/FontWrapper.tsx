'use client';

import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

interface FontWrapperProps {
  children: ReactNode;
  className?: string;
}

export function FontWrapper({ children, className = '' }: FontWrapperProps) {
  const { i18n } = useTranslation();
  const isFarsi = i18n.language === 'fa';

  return (
    <div
      className={`${
        isFarsi
          ? 'font-vazir font-farsi'
          : 'font-inter font-english'
      } ${className}`}
    >
      {children}
    </div>
  );
}

