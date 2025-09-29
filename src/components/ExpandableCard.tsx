import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Car } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageLoader from './ImageLoader';

interface ExpandableCardProps {
  title: string;
  subtitle: string;
  coverImage: string;
  distance: string;
  time: string;
  location: string;
  children: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  subtitle,
  coverImage,
  distance,
  time,
  location,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="expandable-card">
      <div className="expandable-card-cover" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="expandable-card-image">
          <ImageLoader src={coverImage} alt={title} />
          <div className="expandable-card-overlay" />
        </div>
        
        <div className="expandable-card-content">
          <div className="expandable-card-header">
            <h3 className="expandable-card-title vogue-subtitle">{title}</h3>
            <p className="expandable-card-subtitle">{subtitle}</p>
          </div>
          
          <div className="expandable-card-info">
            <div className="expandable-card-info-item">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
            <div className="expandable-card-info-item">
              <Car size={16} />
              <span>{distance}</span>
            </div>
            <div className="expandable-card-info-item">
              <Clock size={16} />
              <span>{time}</span>
            </div>
          </div>
          
          <div className="expandable-card-toggle">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="expandable-card-expanded">
          {children}
          
          <div className="expandable-card-divider"></div>
          
          <div className="park-cta-section">
            <a 
              href="https://rentcarchile.com/ru/pages/reservar"
              target="_blank"
              rel="noopener noreferrer"
              className="park-cta-button"
            >
{t('nature.common.foundPerfectCar')}
            </a>
          </div>
          
          <div className="expandable-card-close" onClick={() => setIsExpanded(false)}>
            <ChevronUp size={24} />
            <span>{t('nature.common.close')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
