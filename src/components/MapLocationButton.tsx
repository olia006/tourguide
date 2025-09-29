import React from 'react';
import { MapPin } from 'lucide-react';

interface MapLocationButtonProps {
  href: string;
}

const MapLocationButton: React.FC<MapLocationButtonProps> = ({ href }) => {
  return (
    <div className="park-link-buttons">
      <a 
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="park-link-button park-link-location"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          borderRadius: '50%'
        }}
      >
        <MapPin 
          size={20} 
          strokeWidth={1} 
          style={{ 
            margin: 'auto',
            display: 'block'
          }}
        />
      </a>
    </div>
  );
};

export default MapLocationButton;
