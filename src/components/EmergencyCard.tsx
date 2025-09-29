import React from 'react';
import { Shield, Ambulance, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EmergencyCard: React.FC = () => {
  const { t } = useLanguage();

  const emergencyContacts = [
    {
      icon: Shield,
      service: t('home.emergency.police')
    },
    {
      icon: Ambulance,
      service: t('home.emergency.ambulance')
    },
    {
      icon: Flame,
      service: t('home.emergency.fire')
    }
  ];

  return (
    <div className="emergency-card">
      <h3 className="emergency-title vogue-subtitle">
        {t('home.emergencyInfo')}
      </h3>
      
      <div className="emergency-contacts">
        {emergencyContacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div key={index} className="emergency-contact-item">
              <div className="emergency-contact-icon">
                <Icon size={24} />
              </div>
              <span className="emergency-contact-text">
                {contact.service}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="emergency-note">
        <p className="text-sm">
          {t('home.emergency.note')}
        </p>
      </div>
    </div>
  );
};

export default EmergencyCard;
