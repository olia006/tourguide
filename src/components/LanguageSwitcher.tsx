import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Language = 'en' | 'ru';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const handleLanguageSwitch = () => {
    const newLanguage: Language = currentLanguage === 'en' ? 'ru' : 'en';
    switchLanguage(newLanguage);
  };

  return (
    <button 
      onClick={handleLanguageSwitch}
      className="language-switcher"
      aria-label={`Switch to ${currentLanguage === 'en' ? 'Russian' : 'English'}`}
    >
      <Languages size={20} />
      <span className="language-code">{currentLanguage.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
