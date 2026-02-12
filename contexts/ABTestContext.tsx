'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Variant = 'A' | 'B';

interface ABTestContextType {
  variant: Variant;
  setVariant: (variant: Variant) => void;
  toggleVariant: () => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<Variant>('A');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load variant from localStorage or default to A
    const savedVariant = localStorage.getItem('ab-test-variant') as Variant;
    if (savedVariant === 'A' || savedVariant === 'B') {
      setVariant(savedVariant);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ab-test-variant', variant);
      // Apply variant class to body for CSS targeting
      document.body.setAttribute('data-variant', variant);
    }
  }, [variant, mounted]);

  const toggleVariant = () => {
    setVariant((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ABTestContext.Provider value={{ variant, setVariant, toggleVariant }}>
      {children}
    </ABTestContext.Provider>
  );
}

export function useABTest() {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
}

