// Additional Mapbox Protection Utilities

export class MapProtection {
  private static usageCount = 0;
  private static maxDailyUsage = 1000; // Adjust based on your needs
  private static lastResetDate = new Date().toDateString();

  // Monitor usage to prevent abuse
  static trackUsage(): boolean {
    const today = new Date().toDateString();
    
    // Reset counter daily
    if (this.lastResetDate !== today) {
      this.usageCount = 0;
      this.lastResetDate = today;
    }

    this.usageCount++;

    // Block if usage exceeds limit
    if (this.usageCount > this.maxDailyUsage) {
      console.warn('Daily usage limit exceeded');
      return false;
    }

    return true;
  }

  // Disable map interactions for protection
  static restrictMapInteractions(map: any): void {
    if (!map) return;

    // Disable double-click zoom
    map.doubleClickZoom.disable();
    
    // Disable scroll zoom (optional - might hurt UX)
    // map.scrollZoom.disable();
    
    // Disable box zoom
    map.boxZoom.disable();
    
    // Disable keyboard navigation
    map.keyboard.disable();
    
    // Disable touch zoom rotation (mobile)
    map.touchZoomRotate.disable();
  }

  // Add invisible watermark to map
  static addMapWatermark(map: any): void {
    if (!map) return;

    map.on('load', () => {
      // Add a subtle watermark source
      map.addSource('watermark', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-70.6693, -33.4489] // Santiago center
          },
          properties: {}
        }
      });

      // Add invisible layer (for protection tracking)
      map.addLayer({
        id: 'watermark-layer',
        type: 'circle',
        source: 'watermark',
        paint: {
          'circle-radius': 0,
          'circle-opacity': 0
        }
      });
    });
  }

  // Obfuscate console logs in production
  static protectConsole(): void {
    if (import.meta.env.PROD) {
      const originalLog = console.log;
      const originalWarn = console.warn;
      const originalError = console.error;

      console.log = (...args) => {
        // Filter out Mapbox-related logs
        const message = args.join(' ');
        if (!message.includes('mapbox') && !message.includes('Mapbox')) {
          originalLog.apply(console, args);
        }
      };

      console.warn = (...args) => {
        const message = args.join(' ');
        if (!message.includes('mapbox') && !message.includes('Mapbox')) {
          originalWarn.apply(console, args);
        }
      };

      console.error = (...args) => {
        const message = args.join(' ');
        if (!message.includes('mapbox') && !message.includes('Mapbox')) {
          originalError.apply(console, args);
        }
      };
    }
  }

  // Detect if running in iframe (potential scraping)
  static detectIframeUsage(): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true; // Assume iframe if can't access parent
    }
  }

  // Block common scraping user agents
  static detectScraping(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    const scrapingPatterns = [
      'bot', 'crawler', 'spider', 'scraper', 
      'wget', 'curl', 'python', 'requests'
    ];
    
    return scrapingPatterns.some(pattern => userAgent.includes(pattern));
  }
}

export default MapProtection;
