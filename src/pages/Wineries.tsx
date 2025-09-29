import React from 'react';
import { Wine, Grape, MapPin, DollarSign, Globe, MapPin as LocationIcon, Users, Calendar, Award, Car, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ExpandableCard from '../components/ExpandableCard';
import ImageSlider from '../components/ImageSlider';
import BackToTop from '../components/BackToTop';

const Wineries: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>{t('wineries.backHome')}</span>
          </Link>
          <div className="page-icon">
            <Wine size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('home.sections.wineries.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('home.sections.wineries.subtitle')}
          </p>
        </div>

        <div className="page-content">
          {/* Santa Rita Winery Expandable Card */}
          <ExpandableCard
            title="Santa Rita"
            subtitle={t('wineries.cards.santaRita.subtitle')}
            coverImage="/rita/santa-rita-winery-cover.webp"
            distance={t('wineries.cards.santaRita.distance')}
            time={t('wineries.cards.santaRita.time')}
            location={t('wineries.cards.santaRita.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/rita/santa-rita-vineyard-rows.webp',
                    '/rita/santa-rita-tasting-room.webp',
                    '/rita/santa-rita-wine-cellar.webp',
                    '/rita/santa-rita-historic-building.webp',
                    '/rita/santa-rita-barrel-room.webp',
                    '/rita/santa-rita-wine-bottles.webp',
                    '/rita/santa-rita-vineyard-landscape.webp',
                    '/rita/santa-rita-wine-tasting.webp',
                    '/rita/santa-rita-museum-display.webp',
                    '/rita/santa-rita-logo-entrance.webp'
                  ]}
                  alt="Santa Rita Winery"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.santaRita.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.santaRita.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">History & Heritage</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Calendar size={24} strokeWidth={1} />
                      <div>
                        <h5>Founded in 1880</h5>
                        <p>One of Chile's most historic wine estates with over 140 years of winemaking tradition</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>Independence Legacy</h5>
                        <p>120 patriots hid in the cellars after a battle, inspiring the iconic "120" wine series</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Andean Museum</h5>
                        <p>Home to over 3,000 pre-Columbian artifacts and beautiful colonial gardens</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Best-Known Wines</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>"120" Series</h5>
                        <p>Cabernet Sauvignon, Carménère, and Merlot - their most iconic collection</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Casa Real Reserva Especial</h5>
                        <p>Cabernet Sauvignon - one of Chile's most awarded wines</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Tours & Experiences</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <DollarSign size={24} strokeWidth={1} />
                      <div>
                        <h5>Tour Prices</h5>
                        <p>CLP $15,000–40,000 (USD $18–45) per person</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>Tour Options</h5>
                        <p>Classic cellar tours, premium tastings, museum + park tours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-info">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                    
                    <div className="park-link-buttons">
                      <a 
                        href="https://www.santarita.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-website"
                        title="Visit Official Website"
                      >
                        <Globe size={20} strokeWidth={1} />
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/p7cfqxe3AVoYtfuRA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-location"
                        title="View on Google Maps"
                      >
                        <LocationIcon size={20} strokeWidth={1} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ExpandableCard>

          {/* Matetic Winery Expandable Card */}
          <ExpandableCard
            title="Matetic"
            subtitle={t('wineries.cards.matetic.subtitle')}
            coverImage="/matetic/mateticcover.webp"
            distance={t('wineries.cards.matetic.distance')}
            time={t('wineries.cards.matetic.time')}
            location={t('wineries.cards.matetic.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/matetic/matetic4599.webp',
                    '/matetic/matetic4600.webp',
                    '/matetic/matetic4619.webp',
                    '/matetic/matetic4649.webp',
                    '/matetic/matetic4691.webp',
                    '/matetic/matetic4733.webp',
                    '/matetic/matetic4751.webp'
                  ]}
                  alt="Matetic Winery"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.matetic.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.matetic.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">History & Innovation</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Calendar size={24} strokeWidth={1} />
                      <div>
                        <h5>Founded in 1999</h5>
                        <p>Family winery that pioneered biodynamic viticulture in Chile</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Architectural Innovation</h5>
                        <p>Futuristic bodega designed by architect Laurence Odfjell</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <MapPin size={24} />
                      <div>
                        <h5>Massive Estate</h5>
                        <p>9,000 hectares spanning Casablanca & San Antonio valleys</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Best-Known Wines</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>EQ Series</h5>
                        <p>Syrah, Chardonnay, and Sauvignon Blanc - their premium collection</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Grape size={24} strokeWidth={1} />
                      <div>
                        <h5>Corralillo Line</h5>
                        <p>Pinot Noir and Sauvignon Blanc - accessible quality wines</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Tours & Experiences</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <DollarSign size={24} strokeWidth={1} />
                      <div>
                        <h5>Tour Prices</h5>
                        <p>CLP $20,000–50,000 (USD $22–55) per person</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>Unique Experiences</h5>
                        <p>Horseback or bike vineyard tours available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-info">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                    
                    <div className="park-link-buttons">
                      <a 
                        href="https://www.matetic.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-website"
                        title="Visit Official Website"
                      >
                        <Globe size={20} strokeWidth={1} />
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/pS6ZtFdF6SgZzHv68" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-location"
                        title="View on Google Maps"
                      >
                        <LocationIcon size={20} strokeWidth={1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Casas del Bosque Expandable Card */}
          <ExpandableCard
            title="Casas del Bosque"
            subtitle={t('wineries.cards.casasDelBosque.subtitle')}
            coverImage="/elbosque/elbosquecover.webp"
            distance={t('wineries.cards.casasDelBosque.distance')}
            time={t('wineries.cards.casasDelBosque.time')}
            location={t('wineries.cards.casasDelBosque.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/elbosque/elbosque5840.webp',
                    '/elbosque/elbosque5875.webp',
                    '/elbosque/elbosque8197.webp',
                    '/elbosque/elbosque8220.webp',
                    '/elbosque/elbosque8255.webp',
                    '/elbosque/elbosque8261.webp',
                    '/elbosque/elbosque8270.webp'
                  ]}
                  alt="Casas del Bosque Winery"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.casasDelBosque.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.casasDelBosque.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">History & Recognition</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Calendar size={24} strokeWidth={1} />
                      <div>
                        <h5>Founded in 1993</h5>
                        <p>Family-founded by the Cúneo-Solari family</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Pioneer Boutique Winery</h5>
                        <p>Among the first boutique wineries in Casablanca Valley</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>International Recognition</h5>
                        <p>"Best Chilean Wine Producer" (2013, International Wine & Spirit Competition)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Best-Known Wines</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>Gran Reserva Sauvignon Blanc</h5>
                        <p>Their flagship wine - exceptional quality and complexity</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Grape size={24} strokeWidth={1} />
                      <div>
                        <h5>Pequeñas Producciones Pinot Noir</h5>
                        <p>Limited production, premium Pinot Noir</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Tours & Dining</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <DollarSign size={24} strokeWidth={1} />
                      <div>
                        <h5>Tour Prices</h5>
                        <p>CLP $15,000–35,000 (USD $18–40) per person</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>Restaurant "Tanino"</h5>
                        <p>Wine-pairing menus and culinary experiences</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-info">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                    
                    <div className="park-link-buttons">
                      <a 
                        href="https://www.casasdelbosque.cl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-website"
                        title="Visit Official Website"
                      >
                        <Globe size={20} strokeWidth={1} />
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/qvxb7YmXvt2N4PKV6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-location"
                        title="View on Google Maps"
                      >
                        <LocationIcon size={20} strokeWidth={1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Viña VIK Expandable Card */}
          <ExpandableCard
            title="Viña VIK"
            subtitle={t('wineries.cards.vinaVik.subtitle')}
            coverImage="/vik/Vikcover.webp"
            distance={t('wineries.cards.vinaVik.distance')}
            time={t('wineries.cards.vinaVik.time')}
            location={t('wineries.cards.vinaVik.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/vik/vik2.webp',
                    '/vik/IMG_1198 2.webp',
                    '/vik/IMG_1201.webp',
                    '/vik/IMG_1211.webp',
                    '/vik/IMG_1212.webp',
                    '/vik/IMG_1217.webp',
                    '/vik/IMG_1220.webp',
                    '/vik/IMG_1256.webp',
                    '/vik/IMG_1366.webp',
                    '/vik/vik1194.webp',
                    '/vik/vik1222.webp',
                    '/vik/vik1235.webp',
                    '/vik/vik1274.webp',
                    '/vik/vik1292.webp',
                    '/vik/vik1295.webp'
                  ]}
                  alt="Viña VIK Winery"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.vinaVik.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.vinaVik.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Innovation & Luxury</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Calendar size={24} strokeWidth={1} />
                      <div>
                        <h5>Founded in 2004</h5>
                        <p>Norwegian entrepreneur Alexander Vik's visionary project</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Scientific Approach</h5>
                        <p>Created after extensive soil & climate mapping research</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>Luxury Estate</h5>
                        <p>Avant-garde Vik Winery and luxury VIK Hotel & Pavilion</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Best-Known Wines</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>VIK Icon Wine</h5>
                        <p>Cabernet Sauvignon, Carmenère, Syrah, Merlot, Cabernet Franc blend</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Grape size={24} strokeWidth={1} />
                      <div>
                        <h5>Milla Cala Blend</h5>
                        <p>Cabernet Sauvignon, Carmenère, Syrah - premium expression</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Premium Experiences</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <DollarSign size={24} strokeWidth={1} />
                      <div>
                        <h5>Premium Tastings</h5>
                        <p>CLP $40,000–120,000 (USD $45–130) per person</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Luxury Experiences</h5>
                        <p>Wine + art + architecture experiences, luxury retreat stays</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-info">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                    
                    <div className="park-link-buttons">
                      <a 
                        href="https://www.vik.cl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-website"
                        title="Visit Official Website"
                      >
                        <Globe size={20} strokeWidth={1} />
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/f8vHnu2ELbh52T8w6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-location"
                        title="View on Google Maps"
                      >
                        <LocationIcon size={20} strokeWidth={1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Concha y Toro Expandable Card */}
          <ExpandableCard
            title="Concha y Toro"
            subtitle={t('wineries.cards.conchaYToro.subtitle')}
            coverImage="/concha/concha-y-toro-winery.webp"
            distance={t('wineries.cards.conchaYToro.distance')}
            time={t('wineries.cards.conchaYToro.time')}
            location={t('wineries.cards.conchaYToro.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/concha/concha-y-toro-winery.webp',
                    '/concha/concha-y-toro-vineyard-1.webp',
                    '/concha/concha-y-toro-vineyard-2.webp',
                    '/concha/concha-wine-tasting.webp'
                  ]}
                  alt="Concha y Toro Winery"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.conchaYToro.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.conchaYToro.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Historic Value & Legacy</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Calendar size={24} strokeWidth={1} />
                      <div>
                        <h5>Founded in 1883</h5>
                        <p>One of Chile's oldest and most internationally recognized wineries</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Casillero del Diablo Legend</h5>
                        <p>Founder spread rumors of haunted cellars to deter wine thieves</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>2025 Wine Center</h5>
                        <p>New immersive sensory, educational, and gastronomic experience ($17M investment)</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <MapPin size={24} />
                      <div>
                        <h5>Historic Estate</h5>
                        <p>22-hectare park, Don Melchor House (1883), showcasing winery's legacy</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Best-Known Wines</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <h5>Casillero del Diablo</h5>
                        <p>Iconic wine series with many varietals - their most famous collection</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Don Melchor</h5>
                        <p>Premium Cabernet-based blend - their flagship wine</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Grape size={24} strokeWidth={1} />
                      <div>
                        <h5>Marqués de Casa Concha</h5>
                        <p>Premium line showcasing exceptional terroir expression</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Tours & Experiences</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <DollarSign size={24} strokeWidth={1} />
                      <div>
                        <h5>Half-Day Tour</h5>
                        <p>4 hours with transport, cellar visit & tasting: ~USD $87</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Award size={24} strokeWidth={1} />
                      <div>
                        <h5>Premium "New Experience"</h5>
                        <p>Immersive elements, art & sensory rooms: ~USD $128</p>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>Full-Day Combos</h5>
                        <p>Concha y Toro + Santa Rita packages: USD $250+</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-info">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">Visit & Connect</h4>
                    
                    <div className="park-link-buttons">
                      <a 
                        href="https://www.conchaytoro.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-website"
                        title="Visit Official Website"
                      >
                        <Globe size={20} strokeWidth={1} />
                      </a>
                      
                      <a 
                        href="https://maps.app.goo.gl/sbcuYt3Z92hk23PQ8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="park-link-button park-link-location"
                        title="View on Google Maps"
                      >
                        <LocationIcon size={20} strokeWidth={1} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Chilean Wine Valleys Overview Card */}
          <ExpandableCard
            title="Chilean Wine Valleys"
            subtitle={t('wineries.cards.chileWineValleys.subtitle')}
            coverImage="/wineries/wine-harvest-cover.webp"
            distance={t('wineries.cards.chileWineValleys.distance')}
            time={t('wineries.cards.chileWineValleys.time')}
            location={t('wineries.cards.chileWineValleys.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/wineries/chilean-carmeneres.webp'
                  ]}
                  alt="Chilean Wine Valleys"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('wineries.cards.chileWineValleys.aboutTitle')}</h4>
                    <p className="vogue-body">
                      {t('wineries.cards.chileWineValleys.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Casablanca Valley</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Casas del Bosque (1993)</h5>
                          </div>
                        </div>
                        <p>Award-winning boutique winery, "Best Chilean Wine Producer" 2013</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            80km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/qvxb7YmXvt2N4PKV6" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Kingston Family Vineyards (1990s)</h5>
                          </div>
                        </div>
                        <p>Family-owned, sustainable winemaking practices</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            85km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/N2h8oc3CGx4XEAJs6" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Matetic Vineyards (1999)</h5>
                          </div>
                        </div>
                        <p>Biodynamic pioneer, futuristic architecture</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            85km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/n5X2KFYYdsFbeAcWA" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña Emiliana (1986)</h5>
                          </div>
                        </div>
                        <p>Organic and biodynamic wines, sustainability focus</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            70km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/iyUaYH3wE4y6MfRw9" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Maipo Valley</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Concha y Toro (1883)</h5>
                          </div>
                        </div>
                        <p>Chile's most historic winery, Casillero del Diablo legend</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            35km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/sbcuYt3Z92hk23PQ8" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Santa Rita (1880)</h5>
                          </div>
                        </div>
                        <p>Independence legacy, "120" series, Andean Museum</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            45km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/p7cfqxe3AVoYtfuRA" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Undurraga (1885)</h5>
                          </div>
                        </div>
                        <p>One of Chile's first wine exporters</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            40km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/REd7WF1LAyukL2766" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Colchagua Valley</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>MontGras (1993)</h5>
                          </div>
                        </div>
                        <p>Premium wines, sustainable practices</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            150km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/LNfcVswwqcbUyQfG8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Lapostolle Clos Apalta (1994)</h5>
                          </div>
                        </div>
                        <p>Boutique winery, exceptional terroir</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            160km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/Xf4LWYnaSQUKpMou5" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viu Manent (1935)</h5>
                          </div>
                        </div>
                        <p>Malbec revival, historic estate</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            140km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/3CSxSVKg3F4Cn3yT8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Casa Silva (1892)</h5>
                          </div>
                        </div>
                        <p>Colchagua's oldest winery</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            145km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/kDQPf7X9pjdPs7qs7" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña VIK (2004)</h5>
                          </div>
                        </div>
                        <p>Avant-garde project, luxury wine & art experience</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            120km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/f8vHnu2ELbh52T8w6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña Los Vascos (18th c., revived 1988)</h5>
                          </div>
                        </div>
                        <p>Historic estate, premium Cabernet Sauvignon</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            155km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/La1Ema67KVpebP3g6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Aconcagua Valley</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña El Escorial (19th c.)</h5>
                          </div>
                        </div>
                        <p>Historic mountain winery</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            90km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/buNtXdJCNkjvskJW8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Flaherty Wines (2000s)</h5>
                          </div>
                        </div>
                        <p>Modern winemaking, mountain terroir</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            95km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/xoHk1M4kVcjJCADD7" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Errazuriz (1870)</h5>
                          </div>
                        </div>
                        <p>Historic estate, premium wines</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            80km from Santiago
                          </div>
                          <div className="winery-actions">
                          <a 
                            href="https://maps.app.goo.gl/vcyiwKpWUtkAcccc9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="park-link-button park-link-location"
                            title="View on Google Maps"
                          >
                            <MapPin size={16} strokeWidth={1} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Southern Valleys (Itata & Bío Bío)</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Bouchon Family Wines (19th c. origins)</h5>
                          </div>
                        </div>
                        <p>Traditional winemaking, historic roots</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            400km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/a3xJo8DU1MMdcfdi7" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Cacique Maravilla (18th c., revived recently)</h5>
                          </div>
                        </div>
                        <p>Ancient vines, traditional methods</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            450km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/P6Xw12Su7xCjEMn4A" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Wineries with Historical Value</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Santa Rita (1880)</h5>
                          </div>
                        </div>
                        <p>Independence link, "120" series</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            45km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/p7cfqxe3AVoYtfuRA" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Concha y Toro (1883)</h5>
                          </div>
                        </div>
                        <p>Casillero del Diablo legend</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            35km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/sbcuYt3Z92hk23PQ8" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Undurraga (1885)</h5>
                          </div>
                        </div>
                        <p>One of Chile's first wine exporters</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            40km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/REd7WF1LAyukL2766" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Casa Silva (1892)</h5>
                          </div>
                        </div>
                        <p>Colchagua's oldest winery</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            145km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/kDQPf7X9pjdPs7qs7" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña Viu Manent (1935)</h5>
                          </div>
                        </div>
                        <p>Malbec revival pioneers</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            140km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/3CSxSVKg3F4Cn3yT8" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="park-feature">
                      <Wine size={24} strokeWidth={1} />
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>Viña VIK (2004)</h5>
                          </div>
                        </div>
                        <p>Avant-garde project, "Place of Gold"</p>
                        <div className="winery-meta">
                          <div className="distance-badge">
                            <Car size={16} strokeWidth={1} />
                            120km from Santiago
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/f8vHnu2ELbh52T8w6" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                              title="View on Google Maps"
                            >
                              <MapPin size={16} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </ExpandableCard>

          <div className="coming-soon">
            <p className="vogue-body">
              {t('comingSoon.wineries')}
            </p>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Wineries;
