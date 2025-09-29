import React from 'react';
import { Car, AlertTriangle, CreditCard, Fuel, Mountain, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const DrivingTipsCard: React.FC = () => {
  const { t } = useLanguage();

  const tips = [
    {
      icon: AlertTriangle,
      text: t('home.drivingTips.zeroTolerance')
    },
    {
      icon: CreditCard,
      text: t('home.drivingTips.tollRoads')
    },
    {
      icon: Fuel,
      text: t('home.drivingTips.gasStations')
    },
    {
      icon: Mountain,
      text: t('home.drivingTips.winterAndes')
    }
  ];

  return (
    <div className="driving-tips-card">
      <h3 className="driving-tips-title vogue-subtitle">
        <Car size={24} strokeWidth={1} />
        {t('home.drivingTips.title')}
      </h3>
      
      <div className="driving-tips-list">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="driving-tip-row">
              <Icon size={18} strokeWidth={1} className="driving-tip-icon" />
              <span className="driving-tip-text">{tip.text}</span>
            </div>
          );
        })}
      </div>
      
      {/* Emergency link - desktop only */}
      <div className="driving-tips-emergency desktop-only">
        <Link to="/emergency" className="emergency-link">
          <Phone size={18} strokeWidth={1} />
          <span>{t('home.drivingTips.emergencyInfo')}</span>
        </Link>
      </div>
    </div>
  );
};

export default DrivingTipsCard;
