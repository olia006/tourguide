import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageLoader from './ImageLoader';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="image-slider-container">
        <div className="image-slider-main">
          <ImageLoader 
            src={images[currentIndex]} 
            alt={`${alt} ${currentIndex + 1}`}
            className="image-slider-image"
          />
          
          {images.length > 1 && (
            <>
              <button 
                className="image-slider-nav image-slider-prev" 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="image-slider-nav image-slider-next" 
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="image-slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`image-slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="image-slider-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;
