import React from 'react';
import { MapPin, Clock, Car, ArrowRight } from 'lucide-react';

interface TimelineStop {
  id: string;
  location: string;
  time?: string;
  distance?: string;
  price?: string;
  priceUSD?: string;
  route?: string;
  isDestination?: boolean;
}

interface TimelineProps {
  title: string;
  stops: TimelineStop[];
}

const Timeline: React.FC<TimelineProps> = ({ title, stops }) => {
  const origin = stops.find(stop => !stop.isDestination);
  const destination = stops.find(stop => stop.isDestination);

  return (
    <div className="timeline-container">
      <h3 className="timeline-title">{title}</h3>
      
      <div className="timeline-content">
        {/* First line: Origin → Destination */}
        <div className="timeline-horizontal">
          {/* Origin */}
          {origin && (
            <div className="timeline-stop origin">
              <div className="timeline-dot origin">
                <MapPin size={16} strokeWidth={2} />
              </div>
              <div className="timeline-location">
                <h4>{origin.location}</h4>
              </div>
            </div>
          )}

          {/* Connection line */}
          <div className="timeline-connection">
            <div className="timeline-line-horizontal" />
            <ArrowRight size={20} className="timeline-arrow" strokeWidth={1.5} />
          </div>

          {/* Destination */}
          {destination && (
            <div className="timeline-stop destination">
              <div className="timeline-dot destination">
                <MapPin size={16} strokeWidth={2} />
              </div>
              <div className="timeline-location">
                <h4>{destination.location}</h4>
              </div>
            </div>
          )}
        </div>

        {/* Second line: Distance */}
        {destination && destination.distance && (
          <div className="timeline-distance-line">
            <Clock size={14} strokeWidth={1.5} />
            <span>{destination.distance}</span>
          </div>
        )}

        {/* Third line: Price */}
        {destination && destination.price && (
          <div className="timeline-price-line">
            <Car size={14} strokeWidth={1.5} />
            <span className="price-clp">{destination.price}</span>
            {destination.priceUSD && <span className="price-usd">{destination.priceUSD}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
