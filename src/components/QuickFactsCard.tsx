import React from 'react';
import { 
  DollarSign, 
  MessageCircle, 
  Cloud, 
  Clock, 
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QuickFactsCard: React.FC = () => {
  const { t } = useLanguage();

  const facts = [
    {
      icon: DollarSign,
      label: t('home.quickFactsLabels.currency'),
      value: t('home.quickFactsData.currency')
    },
    {
      icon: MessageCircle,
      label: t('home.quickFactsLabels.language'),
      value: t('home.quickFactsData.language')
    },
    {
      icon: Cloud,
      label: t('home.quickFactsLabels.climate'),
      value: t('home.quickFactsData.climate')
    },
    {
      icon: Clock,
      label: t('home.quickFactsLabels.timezone'),
      value: t('home.quickFactsData.timezone')
    },
    {
      icon: Calendar,
      label: t('home.quickFactsLabels.bestSeason'),
      value: t('home.quickFactsData.bestSeason')
    }
  ];

  return (
    <div className="quick-facts-card">
      <h3 className="quick-facts-title vogue-subtitle">
        {t('home.quickFacts')}
      </h3>
      
      <div className="quick-facts-grid">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <div key={index} className="quick-fact-row">
              <Icon size={20} className="quick-fact-icon" />
              <span className="quick-fact-label">{fact.label}:</span>
              <span className="quick-fact-value">{fact.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickFactsCard;
