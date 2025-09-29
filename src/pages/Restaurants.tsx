import React from 'react';
import { UtensilsCrossed, Coffee, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BackToTop from '../components/BackToTop';

const Restaurants: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>Home</span>
          </Link>
          <div className="page-icon">
            <UtensilsCrossed size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('home.sections.restaurants.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('home.sections.restaurants.subtitle')}
          </p>
        </div>

        <div className="page-content">
          <div className="placeholder-grid">
            <div className="placeholder-card">
              <Coffee size={32} strokeWidth={1} />
              <h3>Cafés & Casual</h3>
              <p>Local coffee culture & casual dining</p>
              <div className="coming-soon-badge" style={{ backgroundColor: '#FF7F7F', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', marginTop: '8px' }}>
                Coming Soon
              </div>
            </div>
            
            <div className="placeholder-card">
              <Star size={32} strokeWidth={1} />
              <h3>Fine Dining</h3>
              <p>Giratorio restaurant & 360° views</p>
              <div className="coming-soon-badge" style={{ backgroundColor: '#FF7F7F', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', marginTop: '8px' }}>
                Coming Soon
              </div>
            </div>
            
            <div className="placeholder-card">
              <UtensilsCrossed size={32} strokeWidth={1} />
              <h3>Chilean Cuisine</h3>
              <p>Empanadas, seafood & traditional dishes</p>
              <div className="coming-soon-badge" style={{ backgroundColor: '#FF7F7F', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', marginTop: '8px' }}>
                Coming Soon
              </div>
            </div>
          </div>
          
          <div className="coming-soon">
            <p className="vogue-body">
              {t('comingSoon.restaurants')}
            </p>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Restaurants;
