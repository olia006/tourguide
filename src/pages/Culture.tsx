import React from 'react';
import { Palette, ArrowLeft, MapPin, Clock, Globe, Car, Eye, Calendar, Telescope, DollarSign, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ExpandableCard from '../components/ExpandableCard';
import ImageSlider from '../components/ImageSlider';
import MapLocationButton from '../components/MapLocationButton';
import BackToTop from '../components/BackToTop';

const Culture: React.FC = () => {
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
            <Palette size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('home.sections.culture.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('home.sections.culture.subtitle')}
          </p>
        </div>

        <div className="page-content">
          {/* Bahá'í Temple Expandable Card */}
          <ExpandableCard
            title={t('culture.bahaiTemple.title')}
            subtitle={t('culture.bahaiTemple.subtitle')}
            coverImage="/bahai/bahaicover.webp"
            distance={t('culture.bahaiTemple.distance')}
            time={t('culture.bahaiTemple.time')}
            location={t('culture.bahaiTemple.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/bahai/bahai-gardens.webp',
                    '/bahai/bahai-andes-view.webp',
                    '/bahai/bahai-reflecting-pools.webp',
                    '/bahai/bahai-panoramic-view.webp'
                  ]}
                  alt="Bahá'í Temple"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.bahaiTemple.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.bahaiTemple.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.bahaiTemple.architectureTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.bahaiTemple.architecture.lotus.title')}</h5>
                        <p>{t('culture.bahaiTemple.architecture.lotus.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.bahaiTemple.architecture.materials.title')}</h5>
                        <p>{t('culture.bahaiTemple.architecture.materials.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.bahaiTemple.architecture.gardens.title')}</h5>
                        <p>{t('culture.bahaiTemple.architecture.gardens.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.bahaiTemple.historicalTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.bahaiTemple.historical.continental.title')}</h5>
                        <p>{t('culture.bahaiTemple.historical.continental.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.bahaiTemple.historical.welcome.title')}</h5>
                        <p>{t('culture.bahaiTemple.historical.welcome.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.bahaiTemple.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.bahaiTemple.visiting.hours')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.bahaiTemple.visiting.address')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.bahaiTemple.visiting.parking')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.bahaiTemple.visiting.tips')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-link-buttons">
                <a 
                  href="https://templo.bahai.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="park-link-button park-link-website"
                >
                  <Globe size={20} strokeWidth={1} />
                </a>
                <a 
                  href="https://maps.app.goo.gl/MP5Q531Nah7zs5P17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="park-link-button park-link-location"
                >
                  <MapPin size={20} strokeWidth={1} />
                </a>
              </div>

            </div>
          </ExpandableCard>

          {/* Russian Orthodox Cathedral Expandable Card */}
          <ExpandableCard
            title={t('culture.orthodoxChurch.title')}
            subtitle={t('culture.orthodoxChurch.subtitle')}
            coverImage="/church/churchcover.webp"
            distance={t('culture.orthodoxChurch.distance')}
            time={t('culture.orthodoxChurch.time')}
            location={t('culture.orthodoxChurch.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/church/russian-orthodox-cathedral-exterior.webp',
                    '/church/russian-orthodox-cathedral-interior.webp',
                    '/church/russian-orthodox-cathedral-dome.webp'
                  ]}
                  alt="Russian Orthodox Cathedral"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.orthodoxChurch.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.orthodoxChurch.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.orthodoxChurch.architectureTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.orthodoxChurch.architecture.byzantine.title')}</h5>
                        <p>{t('culture.orthodoxChurch.architecture.byzantine.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.orthodoxChurch.architecture.interior.title')}</h5>
                        <p>{t('culture.orthodoxChurch.architecture.interior.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.orthodoxChurch.architecture.cultural.title')}</h5>
                        <p>{t('culture.orthodoxChurch.architecture.cultural.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.orthodoxChurch.historicalTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.orthodoxChurch.historical.foundation.title')}</h5>
                        <p>{t('culture.orthodoxChurch.historical.foundation.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.orthodoxChurch.historical.monument.title')}</h5>
                        <p>{t('culture.orthodoxChurch.historical.monument.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.orthodoxChurch.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.orthodoxChurch.visiting.liturgy')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.orthodoxChurch.visiting.address')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Calendar size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.orthodoxChurch.visiting.access')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.orthodoxChurch.visiting.etiquette')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-link-buttons">
                <a 
                  href="https://maps.app.goo.gl/FtU4qCn1qu3YKFjW7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="park-link-button park-link-location"
                >
                  <MapPin size={20} strokeWidth={1} />
                </a>
              </div>

            </div>
          </ExpandableCard>

          {/* Historical Spots in Santiago Centro Expandable Card */}
          <ExpandableCard
            title={t('culture.historicalSpots.title')}
            subtitle={t('culture.historicalSpots.subtitle')}
            coverImage="/historical/historicalcover.webp"
            distance={t('culture.historicalSpots.distance')}
            time={t('culture.historicalSpots.time')}
            location={t('culture.historicalSpots.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/historical/catedral-metropolitana.webp',
                    '/historical/iglesia-san-francisco.webp',
                    '/historical/barrio-lastarria.webp',
                    '/historical/teatro-municipal.webp',
                    '/historical/museo-nacional-historia.webp',
                    '/historical/biblioteca-nacional.webp',
                    '/historical/correo-central.webp',
                    '/historical/casa-central-universidad.webp',
                    '/historical/casa-colorada.webp',
                    '/historical/ex-congreso-nacional.webp',
                    '/historical/iglesia-merced.webp',
                    '/historical/universidad-chile.webp'
                  ]}
                  alt="Historic Santiago Centro"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.historicalSpots.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.historicalSpots.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.historicalSpots.colonialTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.colonial.laMoneda.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/QWVDfmPpCj3ouREH6" />
                        </div>
                        <p>{t('culture.historicalSpots.colonial.laMoneda.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.colonial.plazaArmas.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/LZaJepygVYbGwKbY7" />
                        </div>
                        <p>{t('culture.historicalSpots.colonial.plazaArmas.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.colonial.sanFrancisco.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/JXLnocTqYpTHt1TN7" />
                        </div>
                        <p>{t('culture.historicalSpots.colonial.sanFrancisco.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.historicalSpots.neighborhoodsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.neighborhoods.compania.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/fvXYZfNb9PKojiYPA" />
                        </div>
                        <p>{t('culture.historicalSpots.neighborhoods.compania.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.neighborhoods.salvador.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/AYBhfZHgPFvNGkw87" />
                        </div>
                        <p>{t('culture.historicalSpots.neighborhoods.salvador.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.neighborhoods.parisLondres.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/uTdGopbiEbmqEspP9" />
                        </div>
                        <p>{t('culture.historicalSpots.neighborhoods.parisLondres.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.historicalSpots.neighborhoods.nuevaYork.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/9B5nQTr3BQ9tGt1DA" />
                        </div>
                        <p>{t('culture.historicalSpots.neighborhoods.nuevaYork.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Other Historical Sites</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Catedral Metropolitana</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/t64v5MvdpWjeoTtQ9" />
                        </div>
                        <p>Metropolitan Cathedral - Santiago's main cathedral located at Plaza de Armas</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Teatro Municipal</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/hHdEP1RZscdJMRAr8" />
                        </div>
                        <p>Municipal Theater - Santiago's main opera house and performing arts venue</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Biblioteca Nacional</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/n4m9LSzjcNjswYgw5" />
                        </div>
                        <p>National Library - Chile's main public library and cultural institution</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Casa Colorada</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/SX9CDT93w1RYdZpT9" />
                        </div>
                        <p>Red House - Colonial-era house that serves as the Museum of Santiago</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Ex-Congreso Nacional</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/CULN6tg3zBPwnuHNA" />
                        </div>
                        <p>Former National Congress - Historic building that housed Chile's congress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.historicalSpots.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.historicalSpots.visiting.bestTime')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.historicalSpots.visiting.startingPoint')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.historicalSpots.visiting.parking')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.historicalSpots.visiting.walkingTour')}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ExpandableCard>

          {/* Museums in Santiago Expandable Card */}
          <ExpandableCard
            title={t('culture.museums.title')}
            subtitle={t('culture.museums.subtitle')}
            coverImage="/museums/museumscover.webp"
            distance={t('culture.museums.distance')}
            time={t('culture.museums.time')}
            location={t('culture.museums.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/museums/museo-precolombino-artifacts.webp',
                    '/museums/museo-historico-nacional-hall.webp',
                    '/museums/museo-memoria-exterior.webp',
                    '/museums/museo-la-chascona-exterior.webp',
                    '/museums/museo-la-chascona-interior.webp',
                    '/museums/museo-contemporaneo-mac.webp',
                    '/museums/museo-ciencia-tecnologia.webp',
                    '/museums/museo-ralli-contemporary.webp',
                    '/museums/museo-artequin-exterior.webp',
                    '/museums/museo-artequin-colorful-facade.webp',
                    '/museums/museo-moda-interior.webp',
                    '/museums/museo-moda-fashion-display.webp',
                    '/museums/museo-colonial-san-francisco.webp',
                    '/museums/museo-masonico-interior.webp',
                    '/museums/museo-ferroviario-train.webp',
                    '/museums/museo-interactivo-mirador.webp',
                    '/museums/museo-historia-natural-exhibits.webp',
                    '/museums/barrio-yungay.webp'
                  ]}
                  alt="Santiago Museums"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.museums.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.museums.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.museums.artMuseumsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>{t('culture.museums.historyMuseums.precolombino.title')}</h5>
                            <p>{t('culture.museums.historyMuseums.precolombino.description')}</p>
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.google.com/?q=Museo+Chileno+de+Arte+Precolombino,+Santiago,+Chile" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                            >
                              <MapPin size={20} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>{t('culture.museums.historyMuseums.historico.title')}</h5>
                            <p>{t('culture.museums.historyMuseums.historico.description')}</p>
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.google.com/?q=Museo+Histórico+Nacional,+Santiago,+Chile" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                            >
                              <MapPin size={20} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>{t('culture.museums.specializedMuseums.colonial.title')}</h5>
                            <p>{t('culture.museums.specializedMuseums.colonial.description')}</p>
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.app.goo.gl/pCc6ezgHeQBR3hNv8" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                            >
                              <MapPin size={20} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>{t('culture.museums.specializedMuseums.masónico.title')}</h5>
                            <p>{t('culture.museums.specializedMuseums.masónico.description')}</p>
                          </div>
                          <div className="winery-actions">
                            <a 
                              href="https://maps.google.com/?q=Museo+Masónico,+Santiago,+Chile" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="park-link-button park-link-location"
                            >
                              <MapPin size={20} strokeWidth={1} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.museums.artMuseumsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.artMuseums.bellasArtes.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/nwDBFEZDaBJGtHPH8" />
                        </div>
                        <p>{t('culture.museums.artMuseums.bellasArtes.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.artMuseums.mac.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/RVV5rQmcYBkFYViz8" />
                        </div>
                        <p>{t('culture.museums.artMuseums.mac.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.museums.historyMuseumsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.historiaNatural.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/HjWkii5FaFpuYcoR7" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.historiaNatural.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.cienciaTecnologia.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/7Nv22LrKY95exGJe6" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.cienciaTecnologia.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.historyMuseums.memoria.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/gmHcHGxTLUiVtQQw9" />
                        </div>
                        <p>{t('culture.museums.historyMuseums.memoria.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.ferroviario.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/2FfhV49qb6w4w8pb7" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.ferroviario.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.artequin.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/AopvvKYASbt34jtG6" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.artequin.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.museums.specializedMuseumsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.artMuseums.ralli.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/A6Johtxr4W6nbvrt7" />
                        </div>
                        <p>{t('culture.museums.artMuseums.ralli.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.moda.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/9VFkQHAhfbX5Unkr9" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.moda.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.chascona.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/hVNhSb86wvBs32nG6" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.chascona.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">Southern Santiago & Suburbs</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.interactivoMirador.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/DY2GaVvv3vAWiPhj8" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.interactivoMirador.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.museums.specializedMuseums.carmenMaipu.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/5tuRdc5GnsLg9UzSA" />
                        </div>
                        <p>{t('culture.museums.specializedMuseums.carmenMaipu.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.museums.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.museums.visiting.hours')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.museums.visiting.tickets')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.museums.visiting.tours')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.museums.visiting.photography')}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ExpandableCard>

          {/* Sky Costanera & Space Observatories Expandable Card */}
          <ExpandableCard
            title={t('culture.skyCostanera.title')}
            subtitle={t('culture.skyCostanera.subtitle')}
            coverImage="/sky/skycover.webp"
            distance={t('culture.skyCostanera.distance')}
            time={t('culture.skyCostanera.time')}
            location={t('culture.skyCostanera.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/sky/sky-costanera-exterior.webp',
                    '/sky/santiago-panoramic-view.webp',
                    '/sky/andes-mountains-view.webp',
                    '/sky/sunset-golden-hour-view.webp',
                    '/sky/costanera-center-tower.webp'
                  ]}
                  alt="Sky Costanera"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.skyCostanera.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.skyCostanera.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.skyCostanera.experienceTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <h5>{t('culture.skyCostanera.experience.granTorre.title')}</h5>
                            <p>{t('culture.skyCostanera.experience.granTorre.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.skyCostanera.experience.observationDeck.title')}</h5>
                        <p>{t('culture.skyCostanera.experience.observationDeck.description')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.skyCostanera.experience.views.title')}</h5>
                        <p>{t('culture.skyCostanera.experience.views.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.skyCostanera.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.skyCostanera.visiting.hours')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <DollarSign size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.skyCostanera.visiting.tickets')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.skyCostanera.visiting.bestTime')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.skyCostanera.visiting.accessibility')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-link-buttons">
                <a 
                  href="https://skycostanera.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="park-link-button park-link-website"
                >
                  <Globe size={20} strokeWidth={1} />
                </a>
                <a 
                  href="https://maps.google.com/?q=Sky+Costanera,+Santiago,+Chile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="park-link-button park-link-location"
                >
                  <MapPin size={20} strokeWidth={1} />
                </a>
              </div>

            </div>
          </ExpandableCard>

          <ExpandableCard
            title={t('culture.spaceObservatories.title')}
            subtitle={t('culture.spaceObservatories.subtitle')}
            coverImage="/space/spacecover.webp"
            distance={t('culture.spaceObservatories.distance')}
            time={t('culture.spaceObservatories.time')}
            location={t('culture.spaceObservatories.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/space/pailalen-observatory.webp',
                    '/space/santiago-planetarium.webp',
                    '/space/southern-observatories.webp',
                    '/space/atacama-observatory.webp',
                    '/space/space-exhibition.webp',
                    '/space/astronomical-instruments.webp',
                    '/space/cajon-del-maipo-stars.webp',
                    '/space/observatory-night-tour.webp',
                    '/space/andes-night-sky.webp',
                    '/space/IMG_3764.webp',
                    '/space/IMG_3765_2.webp'
                  ]}
                  alt="Space Observatories"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.spaceObservatories.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.spaceObservatories.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.spaceObservatories.experiencesTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                              <h5>{t('culture.spaceObservatories.experiences.observatoryAndino.title')}</h5>
                              <MapLocationButton href="https://maps.google.com/?q=Observatorio+Astronómico+Andino,+Lo+Barnechea,+Santiago,+Chile" />
                            </div>
                            <p>{t('culture.spaceObservatories.experiences.observatoryAndino.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                              <h5>{t('culture.spaceObservatories.experiences.santiagoPlanetarium.title')}</h5>
                              <MapLocationButton href="https://maps.google.com/?q=Planetario+de+Santiago,+Universidad+de+Santiago,+Chile" />
                            </div>
                            <p>{t('culture.spaceObservatories.experiences.santiagoPlanetarium.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <div className="winery-header">
                          <div className="winery-info">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                              <h5>{t('culture.spaceObservatories.experiences.pailalenObservatory.title')}</h5>
                              <MapLocationButton href="https://maps.google.com/?q=Observatorio+Pailalén,+San+José+de+Maipo,+Chile" />
                            </div>
                            <p>{t('culture.spaceObservatories.experiences.pailalenObservatory.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Cerro Tololo Inter-American Observatory</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/rk1o4kxHU9Ksp2DK8" />
                        </div>
                        <p>World-class research facility 80km from Santiago. Home to 4-meter Blanco Telescope. Public tours on weekends with advance booking required.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>Las Campanas Observatory</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/cotSkrVtzAF5xKyj8" />
                        </div>
                        <p>Carnegie Institution's observatory with Magellan Telescopes. Located in Atacama Desert region. Professional research facility with very limited public access.</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h5>{t('culture.spaceObservatories.professionalObservatories.southernObservatories.title')}</h5>
                          <MapLocationButton href="https://maps.app.goo.gl/MRXf4RcateF97tSv7" />
                        </div>
                        <p>{t('culture.spaceObservatories.professionalObservatories.southernObservatories.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.spaceObservatories.visitingTitle')}</h4>
                  <div className="practical-item">
                    <Eye size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.spaceObservatories.visiting.bestTime')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.spaceObservatories.visiting.weather')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.spaceObservatories.visiting.booking')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Telescope size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.spaceObservatories.visiting.clothing')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title={t('culture.walkingCircuits.title')}
            subtitle={t('culture.walkingCircuits.subtitle')}
            coverImage="/walks/coverwalks.webp"
            distance={t('culture.walkingCircuits.distance')}
            time={t('culture.walkingCircuits.time')}
            location={t('culture.walkingCircuits.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/walks/IMG_0151.webp',
                    '/walks/IMG_0299.webp',
                    '/walks/IMG_0332.webp',
                    '/walks/IMG_0424.webp',
                    '/walks/IMG_0778.webp',
                    '/walks/IMG_0909.webp',
                    '/walks/IMG_2779.webp',
                    '/walks/IMG_3826.webp',
                    '/walks/IMG_3839.webp',
                    '/walks/IMG_7187.webp',
                    '/walks/IMG_7490.webp',
                    '/walks/santiago-skyline-at-araucano-park-and-chemamules-t-2025-03-25-05-08-06-utc.webp'
                  ]}
                  alt="Santiago Walking Circuits"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('culture.walkingCircuits.aboutTitle')}</h4>
                    <p className="section-card-description vogue-body">
                      {t('culture.walkingCircuits.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.walkingCircuits.circuitsTitle')}</h4>
                  
                  <div className="park-features">
                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.providenciaPalace.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.providenciaPalace.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.providenciaPalace.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.providenciaPalace.safety')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.santiagoCentro.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.santiagoCentro.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.santiagoCentro.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.santiagoCentro.safety')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.lastarriaSantaLucia.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.lastarriaSantaLucia.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.lastarriaSantaLucia.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.lastarriaSantaLucia.safety')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.bellavistaSanCristobal.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.bellavistaSanCristobal.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.bellavistaSanCristobal.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.bellavistaSanCristobal.safety')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.parisLondresNuevaYork.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.parisLondresNuevaYork.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.parisLondresNuevaYork.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.parisLondresNuevaYork.safety')}</p>
                      </div>
                    </div>

                    <div className="park-feature">
                      
                      <div>
                        <h5>{t('culture.walkingCircuits.circuits.barrioBrasilBasilica.title')}</h5>
                        <p><strong>Route:</strong> {t('culture.walkingCircuits.circuits.barrioBrasilBasilica.route')}</p>
                        <p><strong>Highlights:</strong> {t('culture.walkingCircuits.circuits.barrioBrasilBasilica.highlights')}</p>
                        <p><strong>Safety:</strong> {t('culture.walkingCircuits.circuits.barrioBrasilBasilica.safety')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-practical">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('culture.walkingCircuits.tipsTitle')}</h4>
                  <div className="practical-item">
                    <Shield size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.walkingCircuits.tips.safety')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Clock size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.walkingCircuits.tips.comfort')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <Car size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.walkingCircuits.tips.timing')}
                    </div>
                  </div>
                  <div className="practical-item">
                    <MapPin size={20} strokeWidth={1} color="var(--color-sea-foam)" />
                    <div>
                      {t('culture.walkingCircuits.tips.maps')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          
          <div className="coming-soon">
            <p className="vogue-body">
              {t('comingSoon.culture')}
            </p>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Culture;
