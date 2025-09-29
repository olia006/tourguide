import React, { useState, useRef, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  onLoad,
  onError 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => {
      setIsLoading(false);
      setIsLoaded(true);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    // If image is already cached
    if (img.complete && img.naturalHeight !== 0) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, onLoad, onError]);

  return (
    <div className={`image-loader-container ${className}`} style={style}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="image-error">
          <div className="error-icon">📷</div>
          <span>Image failed to load</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`image-loaded ${isLoaded ? 'loaded' : ''}`}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
};

export default ImageLoader;
