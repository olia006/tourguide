// Mapbox Configuration with Protection
class MapboxConfig {
  private static instance: MapboxConfig;
  private token: string;
  private allowedDomains: string[];
  private isInitialized: boolean = false;

  private constructor() {
    // Obfuscated token parts (split to make it harder to extract)
    const tokenParts = [
      'pk.eyJ1Ijoib2xpYTAwNyIsImEiOiJjbWczemtwd2MwcW5pMnFxMDZ4azJkZm1rIn0',
      'qEeH6C0VULFS6z4Tavfg6A'
    ];
    
    this.token = tokenParts.join('.');
    
    // Allowed domains for production
    this.allowedDomains = [
      'localhost',
      '127.0.0.1',
      'tourguide.vercel.app',
      'rentcarchile.club',
      'www.rentcarchile.club',
      // Add your production domains here
    ];
  }

  public static getInstance(): MapboxConfig {
    if (!MapboxConfig.instance) {
      MapboxConfig.instance = new MapboxConfig();
    }
    return MapboxConfig.instance;
  }

  public getToken(): string {
    if (!this.isInitialized) {
      this.validateDomain();
      this.isInitialized = true;
    }
    return this.token;
  }

  private validateDomain(): void {
    const currentDomain = window.location.hostname;
    const isDevelopment = import.meta.env.DEV;
    
    // Allow in development mode
    if (isDevelopment) {
      return;
    }

    // Check if current domain is allowed
    const isAllowed = this.allowedDomains.some(domain => 
      currentDomain === domain || currentDomain.endsWith('.' + domain)
    );

    if (!isAllowed) {
      console.warn('Unauthorized domain detected');
      // In production, you might want to redirect or disable the map
      throw new Error('Map access not authorized for this domain');
    }
  }

  public addAllowedDomain(domain: string): void {
    if (!this.allowedDomains.includes(domain)) {
      this.allowedDomains.push(domain);
    }
  }

  // Usage monitoring
  public logUsage(component: string): void {
    if (import.meta.env.PROD) {
      // In production, you could send usage data to your analytics
      console.log(`Mapbox used in: ${component} at ${new Date().toISOString()}`);
    }
  }
}

export default MapboxConfig;
