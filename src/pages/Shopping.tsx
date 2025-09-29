import React from 'react';
import { ShoppingBag, Eye, ArrowLeft, Clock, DollarSign, Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExpandableCard from '../components/ExpandableCard';
import ImageSlider from '../components/ImageSlider';
import MapLocationButton from '../components/MapLocationButton';
import BackToTop from '../components/BackToTop';

const Shopping: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>Home</span>
          </Link>
          <div className="page-icon">
            <ShoppingBag size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            Shopping & Modern Life
          </h1>
          <p className="page-subtitle vogue-subtitle">
            Malls & Urban Experiences
          </p>
        </div>

        <div className="page-content">
          {/* Santiago Shopping Centers & Malls Expandable Card */}
          <ExpandableCard
            title="Shopping Centers & Malls"
            subtitle="Major Malls, Luxury Centers & Outlet Shopping"
            coverImage="/malls/mallscover.webp"
            distance="Various"
            time="Full day"
            location="Santiago Metropolitan Area"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/malls/costanera-center-exterior.webp',
                    '/malls/santiago-skyline-costanera.webp',
                    '/malls/mall-interior.webp',
                    '/malls/casa-costanera-mall.webp',
                    '/malls/arauco-premium-outlet.webp',
                    '/malls/mall-shopping-scene.webp'
                  ]}
                  alt="Santiago Shopping Centers"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About Santiago Shopping</h4>
                    <p className="vogue-body">
                      Santiago stands as South America's premier shopping destination, offering an exceptional blend of luxury international brands and distinctive Chilean designers. From expansive shopping centers to exclusive boutiques, the city provides sophisticated retail experiences that satisfy every preference and budget level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Major Shopping Centers</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Costanera Center</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Costanera+Center,+Santiago,+Chile" />
                        </div>
                        <p>South America's largest shopping complex in Providencia, featuring over 350 stores across multiple levels with international flagship stores and Chilean brands</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Parque Arauco</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Parque+Arauco,+Las+Condes,+Santiago,+Chile" />
                        </div>
                        <p>Las Condes' premier luxury destination with exclusive international brands, haute couture boutiques, and sophisticated dining establishments</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Alto Las Condes</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Alto+Las+Condes,+Santiago,+Chile" />
                        </div>
                        <p>Refined shopping environment offering curated boutiques, professional services, and an elevated retail atmosphere in the financial district</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Casa Costanera</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Casa+Costanera,+Vitacura,+Santiago,+Chile" />
                        </div>
                        <p>Vitacura's distinctive open-air concept mall specializing in contemporary fashion, interior design, and artisanal gourmet offerings</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Outlet & Discount Shopping</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Arauco Premium Outlet Buenaventura</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Arauco+Premium+Outlet+Buenaventura,+Chile" />
                        </div>
                        <p>Chile's premier outlet destination featuring designer brands at reduced prices, located strategically outside Santiago for convenient access</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Easton Outlet Mall</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Easton+Outlet+Mall,+Quilicura,+Santiago,+Chile" />
                        </div>
                        <p>Contemporary open-air outlet center in Quilicura offering discounted fashion, athletic wear, and technology from recognized international brands</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Regional Shopping Centers</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Portal La Dehesa</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Portal+La+Dehesa,+Santiago,+Chile" />
                        </div>
                        <p>Innovative hybrid shopping center combining indoor comfort with outdoor terraces, featuring premium cinema complex and diverse dining options</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Mall Florida Center</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Mall+Florida+Center,+Ñuñoa,+Santiago,+Chile" />
                        </div>
                        <p>Comprehensive family-oriented shopping destination in Ñuñoa, offering multiple floors of retail, entertainment, and recreational facilities</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Mallplaza Egaña</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Mallplaza+Egaña,+Santiago,+Chile" />
                        </div>
                        <p>Well-established regional center providing balanced retail mix from everyday essentials to specialty stores, serving eastern Santiago communities</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Mall Plaza Vespucio</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Mall+Plaza+Vespucio,+La+Florida,+Santiago,+Chile" />
                        </div>
                        <p>Expansive regional shopping complex in La Florida featuring comprehensive retail offerings, entertainment venues, and extensive parking facilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Shopping Tips</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Operating Hours:</strong> Shopping centers typically operate 10:00-22:00 daily, with reduced Sunday hours at select locations
                    </div>
                  </div>
                  <div className="practical-item">
                    <DollarSign size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Payment Options:</strong> International credit cards accepted universally. Tourist tax-free shopping available at participating retailers with passport presentation
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Vehicle Access:</strong> Secure parking facilities available at all major shopping destinations with convenient mall access
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Safety Guidelines</h4>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Currency Discretion:</strong> Maintain discretion with cash handling, particularly foreign currency. Secure storage recommended with minimal display during transactions
                    </div>
                  </div>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Personal Security:</strong> Maintain awareness of personal belongings in all environments, including premium establishments. Secure bag positioning essential
                    </div>
                  </div>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Vehicle Security:</strong> Ensure complete concealment of purchases, luxury items, and electronics within vehicles, particularly in parking facilities
                    </div>
                  </div>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Currency Exchange:</strong> Utilize exclusively authorized financial institutions, established hotels, or certified exchange services. Informal exchanges strongly discouraged
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ExpandableCard>

          {/* Best Districts to Stay Expandable Card */}
          <ExpandableCard
            title="Best Districts to Stay"
            subtitle="Premium Neighborhoods & Accommodation Guide"
            coverImage="/placetostay/coverplace.webp"
            distance="Various"
            time="Research"
            location="Santiago Metropolitan Area"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/placetostay/aerial-view-of-downtown-santiago-at-sunset-santi-2025-03-26-21-19-26-utc.webp',
                    '/placetostay/mapocho-river-at-sunset-santiago-chile-2025-03-25-21-22-16-utc.webp',
                    '/placetostay/panoramic-aerial-view-of-santiago-from-san-cristob-2025-03-26-21-19-26-utc.webp',
                    '/placetostay/santiago-aerial-view-with-san-cristobal-hill-and-m-2025-04-01-08-26-40-utc.webp'
                  ]}
                  alt="Santiago Districts"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About Santiago Districts</h4>
                    <p className="section-card-description vogue-body">
                      Santiago offers diverse neighborhoods, each with distinct character and advantages for visitors. From business districts to bohemian quarters, choose your base according to your travel style and preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-features">
                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>1. Providencia (Central–East) <span className="price-badge">$$–$$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=Providencia,+Santiago,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Safe, central, lots of hotels, restaurants, cafés, and shopping.</p>
                    <p><strong>Driving:</strong> 10–20 min to downtown, quick highway access to coast & vineyards.</p>
                    <p><strong>Parking:</strong> Hotels usually provide secure underground parking.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>2. Las Condes (East) <span className="price-badge">$$$–$$$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=Las+Condes,+Santiago,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Modern, business + shopping hub; close to Parque Arauco & Alto Las Condes malls.</p>
                    <p><strong>Driving:</strong> 20–30 min to downtown, 30–40 min to airport, easy road to ski resorts.</p>
                    <p><strong>Parking:</strong> Widely available at hotels & malls.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>3. Vitacura (North-East) <span className="price-badge">$$$–$$$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=Vitacura,+Santiago,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Elegant, quiet, boutique hotels, gourmet dining, Parque Bicentenario.</p>
                    <p><strong>Driving:</strong> 25–35 min to downtown, 30–40 min to airport.</p>
                    <p><strong>Parking:</strong> Easy, most venues have private lots.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>4. Ñuñoa (South-East) <span className="price-badge">$–$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=Ñuñoa,+Santiago,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Trendy, young, nightlife at Plaza Ñuñoa, affordable Airbnb options.</p>
                    <p><strong>Driving:</strong> 20–25 min to downtown, 30–40 min to airport.</p>
                    <p><strong>Parking:</strong> Hotels offer secure parking; nightlife areas more crowded.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>5. Lo Barnechea (Foothills of the Andes) <span className="price-badge">$$$–$$$$</span></h5>
                      <MapLocationButton href="https://maps.app.goo.gl/pEYzK7jRrQ4n4heX6" />
                    </div>
                    <p><strong>Why:</strong> Ski gateway (Valle Nevado, La Parva, El Colorado); mountain views; very safe.</p>
                    <p><strong>Driving:</strong> 40–50 min to downtown, 45–55 min to airport.</p>
                    <p><strong>Parking:</strong> Ample, most accommodations have private garages.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>6. La Reina (East, suburban) <span className="price-badge">$–$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=La+Reina,+Santiago,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Green, quiet, residential; good for families & longer stays.</p>
                    <p><strong>Driving:</strong> 25–35 min to downtown, 35–45 min to airport.</p>
                    <p><strong>Parking:</strong> Easy in residential areas & Airbnbs.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>7. Recoleta (Bellavista sector) (Central–North) <span className="price-badge">$$</span></h5>
                      <MapLocationButton href="https://maps.app.goo.gl/qeBSSwArMnWZVGpz9" />
                    </div>
                    <p><strong>Why:</strong> Bohemian nightlife, restaurants, Cerro San Cristóbal access.</p>
                    <p><strong>Driving:</strong> 10–15 min to downtown, 20–30 min to airport.</p>
                    <p><strong>Parking:</strong> Limited — best to use hotel parking or private lots.</p>
                  </div>
                </div>

                <div className="park-feature">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h5>8. Santiago Centro (select areas: Lastarria / Bellas Artes) <span className="price-badge">$–$$</span></h5>
                      <MapLocationButton href="https://maps.google.com/?q=Santiago+Centro,+Lastarria,+Chile" />
                    </div>
                    <p><strong>Why:</strong> Culture, museums, Plaza de Armas, La Moneda.</p>
                    <p><strong>Driving:</strong> Central but traffic-heavy; 15–25 min to airport via Autopista Central.</p>
                    <p><strong>Parking:</strong> Safer in hotels or private garages; avoid street parking at night.</p>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Quick Comparison</h4>
                  <div className="practical-item">
                    <DollarSign size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Budget–Mid:</strong> Ñuñoa, La Reina, Santiago Centro (Lastarria/Bellas Artes)
                    </div>
                  </div>
                  <div className="practical-item">
                    <DollarSign size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Mid–Upscale:</strong> Providencia, Recoleta (Bellavista)
                    </div>
                  </div>
                  <div className="practical-item">
                    <DollarSign size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Upscale–Luxury:</strong> Las Condes, Vitacura, Lo Barnechea
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ExpandableCard>

          {/* Markets & Local Producers Expandable Card */}
          <ExpandableCard
            title="Markets"
            subtitle="Traditional Markets, Artisan Villages & Local Ferias"
            coverImage="/markets/covermarkets.webp"
            distance="Various"
            time="Half day"
            location="Santiago Metropolitan Area"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/markets/central-market-santiago-interior.webp',
                    '/markets/fresh-seafood-display.webp',
                    '/markets/market-vendors-stalls.webp',
                    '/markets/traditional-chilean-produce.webp',
                    '/markets/local-artisan-crafts.webp',
                    '/markets/market-atmosphere-shoppers.webp',
                    '/markets/traditional-food-stalls.webp',
                    '/markets/market-fresh-vegetables.webp',
                    '/markets/valparaiso-fish-market.webp',
                    '/markets/la-vega-central-8-1024x683.webp',
                    '/markets/mercado-central-santiago-606225.webp'
                  ]}
                  alt="Santiago Markets"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About Santiago Markets & Local Producers</h4>
                    <p className="section-card-description vogue-body">
                      Santiago's markets and local producers offer authentic Chilean experiences, from historic seafood halls to vibrant produce markets and artisan workshops. Each location has its own character and safety considerations for visitors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    Safer Markets & Local Producers
                  </h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>La Vega Central (Recoleta)</h5>
                          <MapLocationButton href="https://maps.google.com/?q=La+Vega+Central,+Recoleta,+Santiago,+Chile" />
                        </div>
                        <p>Santiago's biggest fresh produce market (60,000 m²). Great for fruits, vegetables, cheeses, spices.</p>
                        <p><strong>Safe tip:</strong> Go in the morning, avoid carrying valuables.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Mercado Central (Santiago Centro)</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Mercado+Central,+Santiago+Centro,+Chile" />
                        </div>
                        <p>Historic 1872 iron structure, seafood market & restaurants. Popular with tourists for Chilean seafood (try caldillo de congrio).</p>
                        <p><strong>Safe tip:</strong> Inside the market is fine; outside streets can be crowded with pickpockets.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Pueblito Los Dominicos (Las Condes)</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Pueblito+Los+Dominicos,+Las+Condes,+Santiago,+Chile" />
                        </div>
                        <p>Artisan village with pottery, jewelry, leather, alpaca wool crafts. Safer location in the east, more organized, family-friendly.</p>
                        <p>Great for authentic Chilean souvenirs.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Feria de Providencia / Local Ferias Libres</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Feria+de+Providencia,+Santiago,+Chile" />
                        </div>
                        <p>Weekly open-air farmers' markets in Providencia, Ñuñoa, and Las Condes.</p>
                        <p>Safe, neighborhood vibe.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    Higher-Risk Markets / Use Caution
                  </h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Barrio Meiggs (Estación Central / Santiago Centro)</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Barrio+Meiggs,+Estación+Central,+Santiago,+Chile" />
                        </div>
                        <p>Massive commercial district for clothing, toys, electronics. High crime rates: pickpocketing, theft, counterfeit goods.</p>
                        <p><strong>Best avoided unless with a local.</strong></p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Barrio Franklin (a.k.a. Persa Bio-Bio)</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/K2H5TRvTQoMMuzqC9" />
                        </div>
                        <p>Famous flea market with antiques, secondhand goods, electronics. Fun to explore, but chaotic and risky at night.</p>
                        <p><strong>Safe tip:</strong> Go only during the day, keep belongings close.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Plaza de Armas Surroundings (Santiago Centro)</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Plaza+de+Armas,+Santiago+Centro,+Chile" />
                        </div>
                        <p>Souvenir stands and informal commerce. Very touristy, but also a hotspot for pickpockets and scams.</p>
                        <p><strong>Avoid at night.</strong></p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Bellavista Street Markets (Recoleta/Providencia)</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/WAzckTgQ2zR3FDn68" />
                        </div>
                        <p>Bohemian area with handicrafts, jewelry, art stalls. Safe if sticking to main streets, but caution late at night.</p>
                        <p><strong>Risk:</strong> Theft, drugs near Pío Nono bridge.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Barrio Brasil Street Fairs</h5>
                          <MapLocationButton href="https://maps.google.com/?q=Plaza+Brasil,+Santiago,+Chile" />
                        </div>
                        <p>Some fairs pop up around Plaza Brasil. Interesting crafts, but area less safe at night, with drug activity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Practical Advice for Tourists</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Best Time:</strong> Morning or early afternoon for optimal safety and freshness
                    </div>
                  </div>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Carry:</strong> Small cash, crossbody bag, phone hidden
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Avoid:</strong> Flashy jewelry, backpacks half-open, or going alone at night
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      <strong>Parking:</strong> Use secure paid lots or hotel parking — avoid leaving valuables in the car
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ExpandableCard>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Shopping;
