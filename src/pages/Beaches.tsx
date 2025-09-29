import React from 'react';
import { Waves, Palmtree, Camera, ArrowLeft, Binoculars, TreePine, MapPin, Users, Clock, Car, DollarSign, Award, Eye, Flower2, Utensils, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ExpandableCard from '../components/ExpandableCard';
import ImageSlider from '../components/ImageSlider';
import BackToTop from '../components/BackToTop';

const Beaches: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>Home</span>
          </Link>
          <div className="page-icon">
            <Waves size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('home.sections.beaches.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('home.sections.beaches.subtitle')}
          </p>
        </div>

        <div className="page-content">
          {/* Zapallar Cachagua Coastal Walk Expandable Card */}
          <ExpandableCard
            title="Zapallar Coastal Walk"
            subtitle="Scenic Coastal Trail & Hidden Beaches"
            coverImage="/zapallar/cover.webp"
            distance="4 km one way"
            time="1-1.5 hours"
            location="Zapallar - Cachagua, Valparaíso"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/zapallar/IMG_5905.webp',
                    '/zapallar/IMG_5906.webp',
                    '/zapallar/IMG_5907.webp',
                    '/zapallar/IMG_5918.webp',
                    '/zapallar/IMG_5926.webp',
                    '/zapallar/IMG_5940.webp',
                    '/zapallar/IMG_6029.webp',
                    '/zapallar/IMG_6085.webp',
                    '/zapallar/IMG_6088.webp',
                    '/zapallar/IMG_6110.webp',
                    '/zapallar/IMG_6115.webp',
                    '/zapallar/IMG_6129.webp',
                    '/zapallar/IMG_6141.webp'
                  ]}
                  alt="Zapallar Cachagua Coastal Walk"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About the Coastal Walk</h4>
                    <p className="vogue-body">
                      The Zapallar to Cachagua coastal trail, known as "La Rambla," is a stunning 4km seaside walk connecting two charming coastal towns. This scenic route combines smooth paths with rocky coastline, offering breathtaking ocean views, hidden beaches, and glimpses of Isla Cachagua's penguin colony.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Trail Highlights & What to Expect</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>Coastal Path & Rock-Hopping</h5>
                        <p>Mix of smooth paths and rocky sections along granite coastline, starting near Mar Bravo/Chiringuito in Zapallar</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>Isla Cachagua Penguin Viewing</h5>
                        <p>Distant views of Penguin Island with opportunities to spot seabirds and penguins through binoculars</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} />
                      <div>
                        <h5>Hidden Beaches & Scenic Views</h5>
                        <p>Discover secluded beaches like Playa Pangue and Las Cujas, plus dramatic granite cliffs and elegant coastal homes</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>Playa Las Cujas - Swimming Spot</h5>
                        <p>Sheltered lagoon with calmer waters ideal for bathing, though watch for sea urchins on the rocky areas</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>Additional Zapallar Trails</h5>
                        <p>Multiple other coastal loops available: Playa Aguas Blancas (6km), El Abanico-La Caleta (7km), and Mirador Cachagua (6km)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=Zapallar+Cachagua+coastal+trail+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="View on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                  </div>
                  
                  <div className="park-info-note">
                    <Users size={16} strokeWidth={1} />
                    <span><strong>Perfect for:</strong> Coastal hikers, photographers, bird watchers, nature lovers</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Trail Tips & Safety
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Essential Preparation</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>Difficulty:</strong> Easy to moderate (rock-hopping sections)
                      </div>
                      <div className="season-hours">
                        <strong>Best time:</strong> Low tide for easier rock navigation
                      </div>
                      <div className="hours-note">
                        <em>Check weather and tide forecasts before departure. Plan return transport or allow time for round trip.</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>Safety Guidelines</h5>
                    <div className="price-range">
                      Wear good hiking shoes - rocky sections can be slippery • Bring water, sun protection, camera, binoculars • Trail may be less defined in places • Navigate mix of paths and rocks carefully
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="San Alfonso del Mar"
            subtitle="World's Largest Swimming Pool Complex"
            coverImage="/pool/COVER.webp"
            distance="1 km length"
            time="Full day"
            location="Algarrobo, Valparaíso Region"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/pool/san-alfonso-aerial-view.webp',
                    '/pool/giant-pool-cover.webp',
                    '/pool/pool-waterfront-view.webp',
                    '/pool/pool-crystal-clear-water.webp',
                    '/pool/resort-lagoon-view.webp',
                    '/pool/pool-beach-access.webp',
                    '/pool/san-alfonso-coastline.webp',
                    '/pool/pool-recreational-area.webp',
                    '/pool/lagoon-water-sports.webp'
                  ]}
                  alt="San Alfonso del Mar"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About San Alfonso del Mar</h4>
                    <p className="section-card-description vogue-body">
                      San Alfonso del Mar is a private resort and residential complex featuring the world's largest swimming pool by area. 
                      This massive artificial lagoon, completed in 2006, stretches over 1 kilometer and uses advanced filtration technology 
                      to maintain crystal-clear seawater drawn from the Pacific Ocean.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Pool Facts & Features</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>World Record Dimensions</h5>
                        <p><strong>Length:</strong> ~1,013 meters (about 1 km) • <strong>Surface area:</strong> ~8 hectares (≈ 20 acres) • <strong>Volume:</strong> ~250 million liters of seawater • <strong>Depth:</strong> Up to 3.5 meters</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Advanced Technology</h5>
                        <p>Uses sophisticated filtration and oxygenation systems to maintain crystal clarity using minimal chemicals. Seawater is drawn from the Pacific, filtered, and treated using Crystal Lagoons technology.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Palmtree size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Water Sports & Activities</h5>
                        <p>Kayaking, paddleboarding, and small sailboats in the lagoon. The pool is designed more for boating and water sports than casual swimming in many areas.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Resort Amenities</h5>
                        <p>Restaurants overlooking the lagoon (e.g., "Peces Gordos"), spa and wellness facilities, heated pools, saunas, and scenic terraces with lagoon views.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Nearby Attractions</h5>
                        <p>Explore Algarrobo's coastal beaches, pine-forest paths, Isla Negra (Pablo Neruda's house), Valparaíso & Viña del Mar. Islote Pájaros Niños sanctuary for penguins and seabirds.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=San+Alfonso+del+Mar,+Algarrobo,+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="View on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                  </div>
                  
                  <div className="park-info-note">
                    <Users size={16} strokeWidth={1} />
                    <span><strong>Perfect for:</strong> Luxury travelers, water sports enthusiasts, families, resort guests</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <DollarSign size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Access & Pricing Information
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Access Policy</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>Primary Access:</strong> Resort residents and registered guests
                      </div>
                      <div className="season-hours">
                        <strong>Day Visits:</strong> Limited external visitor access, often restricted
                      </div>
                      <div className="hours-note">
                        <em>Some tours from Santiago include lunch and lagoon views, but may not guarantee swimming access. Check with resort directly for current policies.</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>Planning Your Visit</h5>
                    <div className="price-range">
                      <strong>Tours Available:</strong> Combined day-trips (Isla Negra + Algarrobo) with lunch and viewing access • <strong>Seasonal Pricing:</strong> High-season rates apply • <strong>Amenities:</strong> Internal resort facilities may have separate charges for non-residents
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Car size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Driving & Parking
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Getting There by Car</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>From Santiago:</strong> ~120 km via Route 68 to Valparaíso, then coastal Route F-90 south to Algarrobo
                      </div>
                      <div className="season-hours">
                        <strong>Driving Time:</strong> Approximately 1.5-2 hours depending on traffic
                      </div>
                      <div className="hours-note">
                        <em>Resort provides secure parking for guests. Public parking available in Algarrobo town center for day visitors.</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Valparaíso"
            subtitle="UNESCO World Heritage Site & Street Art Capital"
            coverImage="/valparaiso/valparaisocover.webp"
            distance="120 km from Santiago"
            time="Full day"
            location="Valparaíso, Valparaíso Region"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/valparaiso/valparaiso-panoramic.webp',
                    '/valparaiso/valparaiso-hillside-view.webp',
                    '/valparaiso/valparaiso-murals.webp',
                    '/valparaiso/valparaiso-street-art.webp',
                    '/valparaiso/barrio-concepcion.webp',
                    '/valparaiso/casas-valparaiso.webp',
                    '/valparaiso/escaleras-valparaiso.webp',
                    '/valparaiso/j.cruz-valparaiso.webp',
                    '/valparaiso/aerial-view-of-valparaiso-with-lutheran-church-fro-2025-03-25-03-00-50-utc.webp',
                    '/valparaiso/colorful-buildings-in-valparaiso-chile-2024-10-14-11-28-03-utc.webp',
                    '/valparaiso/historical-building-in-valparaiso-harbor-2025-02-10-07-07-34-utc.webp',
                    '/valparaiso/colourful-houses-valparaiso-valparaiso-province-2024-09-12-03-45-46-utc.webp',
                    '/valparaiso/noche-en-guanajuato-2024-05-27-03-11-17-utc.webp',
                    '/valparaiso/old-blue-house-facade-in-valparaiso-2025-01-09-03-25-36-utc.webp',
                    '/valparaiso/port-of-the-city-of-valparaiso-2025-01-08-04-01-17-utc.webp',
                    '/valparaiso/valparaiso-2024-10-18-05-55-18-utc.webp',
                    '/valparaiso/valparaiso-900-600.webp'
                  ]}
                  alt="Valparaíso"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About Valparaíso</h4>
                    <p className="section-card-description vogue-body">
                      Known as "La Joya del Pacífico" (The Jewel of the Pacific), Valparaíso is a UNESCO World Heritage Site 
                      since 2003. Once South America's most important port before the Panama Canal, today it's Chile's capital 
                      of street art, music, and alternative culture, featuring colorful hillside neighborhoods and bohemian charm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Highlights & What to See</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Cerro Alegre & Cerro Concepción</h5>
                        <p>Heart of the colorful murals, boutique hotels, and cafés. These hillside neighborhoods showcase the city's artistic soul with stunning street art and panoramic bay views.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Palmtree size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Street Art & Murals</h5>
                        <p>The city is an open-air museum where every corner reveals paintings and graffiti. Valparaíso is internationally recognized as one of the world's street art capitals.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Historic Quarter & Architecture</h5>
                        <p>Cobblestone streets, colonial houses, and old merchant mansions tell the story of Valparaíso's golden age as South America's premier port city.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Eye size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Ascensores (Funiculars)</h5>
                        <p>Century-old elevators connect the lower port with hillside neighborhoods. These historic funiculars are both transportation and tourist attractions.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>La Sebastiana & Plaza Sotomayor</h5>
                        <p>Visit Pablo Neruda's quirky house-museum overlooking the bay, and explore Plaza Sotomayor with its naval memorial and grand buildings.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Port & Waterfront</h5>
                        <p>Take boat tours to see the harbor and sea lions. The working port area offers authentic glimpses of Chile's maritime heritage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=Valparaíso,+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="View on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                  </div>
                  
                  <div className="park-info-note">
                    <Users size={16} strokeWidth={1} />
                    <span><strong>Perfect for:</strong> Art lovers, photographers, culture enthusiasts, history buffs</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Car size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Getting There & Parking
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Driving from Santiago</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>Route:</strong> Only 1.5–2 hours via Ruta 68 (direct highway)
                      </div>
                      <div className="season-hours">
                        <strong>Distance:</strong> Approximately 120 km from Santiago
                      </div>
                      <div className="hours-note">
                        <em>Parking in historic center is limited, but safe lots available near the port. Best explored on foot using funiculars.</em>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <AlertTriangle size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-sea-foam)' }} />
                    Safety Precautions — High Crime Rates
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Important Safety Warnings</h5>
                    <div className="hours-info">
                      <div className="season-hours" style={{ color: 'var(--color-sea-foam)' }}>
                        <strong>High Crime Area:</strong> Valparaíso has elevated crime rates including theft, robbery, and drug-related activity
                      </div>
                      <div className="season-hours">
                        <strong>Daytime Only:</strong> Visit during daylight hours, avoid evening and night exploration
                      </div>
                      <div className="season-hours">
                        <strong>Tourist Areas:</strong> Stick to main tourist zones (Cerro Alegre, Cerro Concepción), avoid isolated areas
                      </div>
                      <div className="hours-note">
                        <em>Keep valuables secure, don't display expensive items, stay aware of surroundings, and consider guided tours for safer exploration.</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>Practical Safety Tips</h5>
                    <div className="price-range">
                      <strong>Footwear:</strong> Wear good walking shoes for hills and stairs • <strong>Valuables:</strong> Keep minimal cash, secure bags • <strong>Port Area:</strong> Extra caution in busy port zones • <strong>Combine Trip:</strong> Visit nearby Viña del Mar (beaches & gardens) for a complete coastal experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Viña del Mar & Coast"
            subtitle="Garden City, Surf Beaches & Seafood Capital"
            coverImage="/vina/cover_umbrellas-at-renaca-beach-vina-del-mar-chile-2025-03-27-02-28-12-utc.webp"
            distance="120 km from Santiago"
            time="Full day"
            location="Valparaíso Region"
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/vina/vina-del-mar-skyline-vina-del-mar-chile-2025-03-24-12-36-34-utc.webp',
                    '/vina/brunet-castle-castillo-brunet-vina-del-mar-ch-2025-03-27-00-09-23-utc.webp',
                    '/vina/carrasco-palace-vina-del-mar-chile-2025-03-26-21-19-25-utc.webp',
                    '/vina/ross-castle-castillo-ross-vina-del-mar-chile-2025-03-24-12-36-34-utc.webp',
                    '/vina/wullf-castle-castillo-wulff-vina-del-mar-chil-2025-03-24-14-52-05-utc.webp',
                    '/vina/nuestra-senora-de-dolores-parish-church-vina-del-2025-03-25-13-51-23-utc.webp',
                    '/vina/cover_umbrellas-at-renaca-beach-vina-del-mar-chile-2025-03-27-02-28-12-utc.webp'
                  ]}
                  alt="Viña del Mar"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">About the Coastal Triangle</h4>
                    <p className="section-card-description vogue-body">
                      The coastal triangle of Viña del Mar, Concón, and Reñaca offers Chile's most diverse beach experience. From the elegant gardens and cultural festivals of "La Ciudad Jardín" to the surf breaks of Reñaca and the gastronomic delights of Concón, this coastal region combines natural beauty with vibrant culture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Coastal Destinations</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <Flower2 size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Viña del Mar – "La Ciudad Jardín"</h5>
                        <p><strong>Highlights:</strong> Famous Flower Clock (Reloj de Flores), fairytale Castillo Wulff on the coast, Museo Fonck with Moai statue. <strong>Beaches:</strong> Playa Acapulco, Playa Caleta Abarca, Las Salinas. <strong>Events:</strong> International Song Festival every February.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Reñaca – Surf & Nightlife Hub</h5>
                        <p><strong>Beach:</strong> Playa Reñaca with golden sand and strong waves (great for surfers, caution for swimmers). <strong>Nightlife:</strong> Lively bars, clubs, and restaurants. <strong>Wildlife:</strong> Spot sea lions sunbathing on nearby rocks from the beach.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Utensils size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Concón – Dunes & Seafood Capital</h5>
                        <p><strong>Gastronomy:</strong> Chile's seafood capital with must-try ceviche and empanadas. <strong>Beaches:</strong> Family-friendly Playa Amarilla, surf-friendly Playa La Boca. <strong>Adventure:</strong> Giant sand dunes perfect for sandboarding and sunset views.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} color="var(--color-sea-foam)" />
                      <div>
                        <h5>Coastal Drive & Views</h5>
                        <p>The scenic coastal drive from Concón to Viña del Mar offers spectacular Pacific Ocean views. Perfect for a day trip loop connecting all three destinations with stunning photo opportunities along the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=Viña+del+Mar,+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="Viña del Mar on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                    <a 
                      href="https://maps.google.com/?q=Concón,+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="Concón on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                    <a 
                      href="https://maps.google.com/?q=Reñaca,+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="Reñaca on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                  </div>
                  
                  <div className="park-info-note">
                    <Users size={16} strokeWidth={1} />
                    <span><strong>Perfect for:</strong> Beach lovers, surfers, food enthusiasts, culture seekers, festival goers</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Car size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Getting There & Parking
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Driving from Santiago</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>Route:</strong> 1.5–2 hours via Ruta 68 (same route as Valparaíso)
                      </div>
                      <div className="season-hours">
                        <strong>Distance:</strong> Approximately 120 km from Santiago
                      </div>
                      <div className="hours-note">
                        <em>Viña, Reñaca, and Concón are connected along the coast - perfect for a day trip loop. Parking can be tight in Reñaca during summer weekends; arrive early.</em>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Travel Tips & Best Times
                  </h4>
                  
                  <div className="hours-section">
                    <h5>Seasonal Recommendations</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        <strong>Summer (Dec-Mar):</strong> Peak beach season, warm weather, festival season (February)
                      </div>
                      <div className="season-hours">
                        <strong>Shoulder Season:</strong> Spring/Fall offer fewer crowds, pleasant weather for sightseeing
                      </div>
                      <div className="hours-note">
                        <em>Each destination offers different experiences: Viña for culture and gardens, Reñaca for nightlife and surfing, Concón for gastronomy and adventure sports.</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          
          <div className="coming-soon">
            <p className="vogue-body">
              {t('comingSoon.beaches')}
            </p>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Beaches;
