import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations } from '../i18n/translations';


type Language = 'en' | 'ru';

interface LanguageContextType {
  currentLanguage: Language;
  switchLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const switchLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
  }, []);

  // Update document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
