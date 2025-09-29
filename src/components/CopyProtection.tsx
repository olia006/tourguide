import React, { useEffect } from 'react';

const CopyProtection: React.FC = () => {
  useEffect(() => {
    // Additional copy protection measures
    const preventImageSave = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventPrint = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable image context menu
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('contextmenu', preventImageSave);
      img.addEventListener('dragstart', preventImageSave);
    });

    // Disable print functionality
    document.addEventListener('beforeprint', preventPrint);
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
    });

    // Disable save as
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    });

    // Watermark removed for cleaner appearance

    // Cleanup
    return () => {
      images.forEach(img => {
        img.removeEventListener('contextmenu', preventImageSave);
        img.removeEventListener('dragstart', preventImageSave);
      });
      document.removeEventListener('beforeprint', preventPrint);
    };
  }, []);

  return null;
};

export default CopyProtection;
