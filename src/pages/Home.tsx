import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionCard from '../components/SectionCard';
import EmergencyCard from '../components/EmergencyCard';
import DrivingTipsCard from '../components/DrivingTipsCard';
import BackToTop from '../components/BackToTop';
import ImageLoader from '../components/ImageLoader';

interface SectionPreview {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path: string;
  color: string;
}

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isChileInfoExpanded, setIsChileInfoExpanded] = useState(false);

  const sections: SectionPreview[] = [
    {
      id: 'nature',
      title: t('home.sections.nature.title'),
      subtitle: t('home.sections.nature.subtitle'),
      description: t('home.sections.nature.description'),
      image: '/anima/cascadacover.webp',
      path: '/nature',
      color: 'var(--color-sea-foam)'
    },
    {
      id: 'wineries',
      title: t('home.sections.wineries.title'),
      subtitle: t('home.sections.wineries.subtitle'),
      description: t('home.sections.wineries.description'),
      image: '/concha/Concha-y-Toro-2cover.webp',
      path: '/wineries',
      color: '#8B5A3C'
    },
    {
      id: 'restaurants',
      title: t('home.sections.restaurants.title'),
      subtitle: t('home.sections.restaurants.subtitle'),
      description: t('home.sections.restaurants.description'),
      image: '/markets/covermarkets.webp',
      path: '/restaurants',
      color: '#FF8C42'
    },
    {
      id: 'culture',
      title: t('home.sections.culture.title'),
      subtitle: t('home.sections.culture.subtitle'),
      description: t('home.sections.culture.description'),
      image: '/bahai/bahaicover.webp',
      path: '/culture',
      color: 'var(--color-primary)'
    },
    {
      id: 'shopping',
      title: t('home.sections.shopping.title'),
      subtitle: t('home.sections.shopping.subtitle'),
      description: t('home.sections.shopping.description'),
      image: '/malls/mallscover.webp',
      path: '/shopping',
      color: 'var(--color-moss)'
    },
    {
      id: 'beaches',
      title: t('home.sections.beaches.title'),
      subtitle: t('home.sections.beaches.subtitle'),
      description: t('home.sections.beaches.description'),
      image: '/vina/cover_umbrellas-at-renaca-beach-vina-del-mar-chile-2025-03-27-02-28-12-utc.webp',
      path: '/beaches',
      color: '#4A90E2'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge" style={{ backgroundColor: 'var(--color-moss)' }}>
              <span className="vogue-subtitle">Tourist Guide</span>
            </div>
            
            <h1 className="hero-title vogue-title">
              {t('home.title')}
            </h1>
            
            <p className="hero-description vogue-body">
              {t('home.description')}
            </p>
            
            <div className="hero-actions">
              <a 
                href="https://rentcarchile.com/ru/pages/preguntas-frecuentes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline"
              >
                {t('home.cta.learnMore')}
              </a>
              <a 
                href="https://rentcarchile.com/ru/pages/reservar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary"
              >
                {t('home.cta.exploreNow')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="hero-image-section">
        <ImageLoader 
          src="/hero_torres-2025-01-09-06-14-17-utc.webp" 
          alt="Torres del Paine" 
          className="hero-image"
        />
        
        {/* Expandable Chile Info */}
        <div className="chile-info-expandable">
          <button 
            className="chile-info-toggle"
            onClick={() => setIsChileInfoExpanded(!isChileInfoExpanded)}
            aria-label="Learn about Chile"
          >
            <ChevronDown 
              className={`chile-info-arrow ${isChileInfoExpanded ? 'expanded' : ''}`}
              size={24}
              strokeWidth={2}
            />
          </button>
          
          <div className={`chile-info-content ${isChileInfoExpanded ? 'expanded' : ''}`}>
            <div className="container">
              <div className="chile-info-text">
                <p className="vogue-body">
                  {t('home.chileIntro.paragraph1')}
                </p>
                
                <p className="vogue-body">
                  {t('home.chileIntro.paragraph2')}
                </p>
                
                <p className="vogue-body">
                  {t('home.chileIntro.paragraph3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts & Emergency Info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <EmergencyCard />
            <DrivingTipsCard />
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="sections-preview">
        <div className="container">
          <div className="sections-header">
            <h2 className="sections-title vogue-title">
              {t('home.discoverTitle')}
            </h2>
            <p className="sections-subtitle vogue-subtitle">
              {t('home.discoverSubtitle')}
            </p>
          </div>
          
          <div className="sections-grid">
            {sections.map((section, index) => (
              <SectionCard 
                key={section.id} 
                section={section} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <BackToTop />
    </div>
  );
};

export default Home;
