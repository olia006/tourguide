import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionPreview {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path: string;
  color: string;
}

interface SectionCardProps {
  section: SectionPreview;
  index: number;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, index }) => {
  
  return (
    <Link to={section.path} className="section-card">
      <div className="section-card-content">
        <div className="section-card-number">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        <div className="section-card-text">
          <h3 className="section-card-title vogue-subtitle">
            {section.title}
          </h3>
          <p className="section-card-subtitle">
            {section.subtitle}
          </p>
          <p className="section-card-description vogue-body">
            {section.description}
          </p>
        </div>
        
        <div className="section-card-arrow">
          <ArrowRight size={24} />
        </div>
      </div>
      
      <div className="section-card-accent" />
    </Link>
  );
};

export default SectionCard;
