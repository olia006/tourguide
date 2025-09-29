import React from 'react';
import { TreePine, Mountain, Droplets, Binoculars, Waves, Camera, Globe, Instagram, MapPin, Users, Clock, ArrowLeft, CloudSun, Rabbit, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ExpandableCard from '../components/ExpandableCard';
import ImageSlider from '../components/ImageSlider';
import BackToTop from '../components/BackToTop';

const Nature: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>{t('nature.backHome')}</span>
          </Link>
          <div className="page-icon">
            <TreePine size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('home.sections.nature.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('home.sections.nature.subtitle')}
          </p>
        </div>

        <div className="page-content">
          {/* Nature of Chile Introduction */}
          <div className="nature-introduction">
            <div className="nature-intro-content">
              <p className="nature-intro-description vogue-body">
                {t('nature.introduction.description')}
              </p>
              
              <div className="nature-features">
                <div className="nature-feature-group">
                  <h3 className="feature-title vogue-subtitle">
                    <CloudSun size={20} strokeWidth={1} />
                    {t('nature.introduction.climateDiversity.title')}
                  </h3>
                  <p className="feature-description">
                    {t('nature.introduction.climateDiversity.description')}
                  </p>
                </div>

                <div className="nature-feature-group">
                  <h3 className="feature-title vogue-subtitle">
                    <TreePine size={20} strokeWidth={1} />
                    {t('nature.introduction.ancientTrees.title')}
                  </h3>
                  <p className="feature-description">
                    {t('nature.introduction.ancientTrees.description')}
                  </p>
                </div>

                <div className="nature-feature-group">
                  <h3 className="feature-title vogue-subtitle">
                    <Rabbit size={20} strokeWidth={1} />
                    {t('nature.introduction.endemicWildlife.title')}
                  </h3>
                  <p className="feature-description">
                    {t('nature.introduction.endemicWildlife.description')}
                  </p>
                </div>

                <div className="nature-feature-group">
                  <h3 className="feature-title vogue-subtitle">
                    <Wheat size={20} strokeWidth={1} />
                    {t('nature.introduction.agriculturalOrigins.title')}
                  </h3>
                  <p className="feature-description">
                    {t('nature.introduction.agriculturalOrigins.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parque Tricao Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.tricao.title')}
            subtitle={t('nature.cards.tricao.subtitle')}
            coverImage="/tricao/tricaocover.webp"
            distance={t('nature.cards.tricao.distance')}
            time={t('nature.cards.tricao.time')}
            location={t('nature.cards.tricao.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/tricao/tricao.webp',
                    '/tricao/tricao1.webp',
                    '/tricao/tricao3.webp',
                    '/tricao/tricao4.webp',
                    '/tricao/tricao5.webp'
                  ]}
                  alt="Parque Tricao"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.common.aboutPark')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.tricao.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.mainAttractions')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.tricao.features.aviary.title')}</h5>
                        <p>{t('nature.cards.tricao.features.aviary.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Droplets size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.tricao.features.wetland.title')}</h5>
                        <p>{t('nature.cards.tricao.features.wetland.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Mountain size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.tricao.features.trails.title')}</h5>
                        <p>{t('nature.cards.tricao.features.trails.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.tricao.features.water.title')}</h5>
                        <p>{t('nature.cards.tricao.features.water.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.common.scenicViewpoints')}</h5>
                        <p>{t('nature.common.scenicViewpointsDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.tricaoExtra.picnicAreas.title')}</h5>
                        <p>{t('nature.cards.tricaoExtra.picnicAreas.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://tricao.cl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-website"
                      title="Visit Official Website"
                    >
                      <Globe size={20} strokeWidth={1} />
                    </a>
                    
                    <a 
                      href="https://instagram.com/parquetricao" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-instagram"
                      title="Follow on Instagram"
                    >
                      <Instagram size={20} strokeWidth={1} />
                    </a>
                    
                    <a 
                      href="https://maps.google.com/?q=Parque+Tricao+Santo+Domingo+Valparaíso" 
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
                    <span>{t('nature.cards.tricaoExtra.perfectForTricao')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.cards.tricaoExtra.hoursAndPrices')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.tricaoExtra.hours')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
{t('nature.cards.tricaoExtra.hoursInfo')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.tricaoExtra.hoursNote')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.tricaoExtra.entrancePrices')}</h5>
                    <div className="price-range">
{t('nature.cards.tricaoExtra.priceRange')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Embalse El Yeso Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.elyeso.title')}
            subtitle={t('nature.cards.elyeso.subtitle')}
            coverImage="/cajon/cajondelmaipocover.webp"
            distance={t('nature.cards.elyeso.distance')}
            time={t('nature.cards.elyeso.time')}
            location={t('nature.cards.elyeso.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/cajon/cajon1.webp',
                    '/cajon/cajon2.webp',
                    '/cajon/cajon3.webp',
                    '/cajon/cajon4.webp',
                    '/cajon/cajon23.webp'
                  ]}
                  alt="Embalse El Yeso"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.elyeso.aboutReservoir')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.elyeso.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.elyeso.whatToSee')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Mountain size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.elyeso.features.views.title')}</h5>
                        <p>{t('nature.cards.elyeso.features.views.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.elyeso.features.photography.title')}</h5>
                        <p>{t('nature.cards.elyeso.features.photography.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.elyeso.features.walks.title')}</h5>
                        <p>{t('nature.cards.elyeso.features.walks.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Droplets size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.elyeso.features.protected.title')}</h5>
                        <p>{t('nature.cards.elyeso.features.protected.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=Embalse+El+Yeso+Cajón+del+Maipo" 
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
                    <span>{t('nature.cards.elyeso.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.common.visitingInfoTips')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.elyeso.accessCosts')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
{t('nature.cards.elyeso.freeAccess')}
                      </div>
                      <div className="season-hours">
{t('nature.cards.elyeso.bestSeason')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.elyeso.winterClosed')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.elyeso.importantTips')}</h5>
                    <div className="price-range">
{t('nature.cards.elyeso.tips')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Termas de Colina Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.colina.title')}
            subtitle={t('nature.cards.colina.subtitle')}
            coverImage="/colina/termas3cover.webp"
            distance={t('nature.cards.colina.distance')}
            time={t('nature.cards.colina.time')}
            location={t('nature.cards.colina.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/colina/termas.webp'
                  ]}
                  alt="Termas de Colina"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.colina.aboutHotSprings')}</h4>
                    <p className="vogue-body">
{t('nature.cards.colina.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.colina.featuresExperience')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Droplets size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.colina.features.thermalPools.title')}</h5>
                        <p>{t('nature.cards.colina.features.thermalPools.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Mountain size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.colina.features.mountainViews.title')}</h5>
                        <p>{t('nature.cards.colina.features.mountainViews.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.colina.features.mineralWaters.title')}</h5>
                        <p>{t('nature.cards.colina.features.mineralWaters.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.colina.features.rusticExperience.title')}</h5>
                        <p>{t('nature.cards.colina.features.rusticExperience.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=Termas+Valle+de+Colina+Cajón+del+Maipo" 
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
                    <span>{t('nature.cards.colina.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.common.visitingInfoTips')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.colina.accessSeason')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
{t('nature.cards.colina.openYearRound')}
                      </div>
                      <div className="season-hours">
{t('nature.cards.colina.bestMonths')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.colina.winterAccess')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.colina.essentialTips')}</h5>
                    <div className="price-range">
{t('nature.cards.colina.tips')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Cascada de las Ánimas Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.animas.title')}
            subtitle={t('nature.cards.animas.subtitle')}
            coverImage="/anima/cascadacover.webp"
            distance={t('nature.cards.animas.distance')}
            time={t('nature.cards.animas.time')}
            location={t('nature.cards.animas.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/anima/cascada1.webp',
                    '/anima/cascada2.webp',
                    '/anima/cascada4.webp',
                    '/anima/cascada6.webp',
                    '/anima/cascada7.webp'
                  ]}
                  alt="Cascada de las Ánimas"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.animas.aboutSanctuary')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.animas.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.animas.activitiesFeatures')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.animas.features.waterfallAdventure.title')}</h5>
                        <p>{t('nature.cards.animas.features.waterfallAdventure.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.animas.features.wildlifeCenter.title')}</h5>
                        <p>{t('nature.cards.animas.features.wildlifeCenter.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.animas.features.ecoLodge.title')}</h5>
                        <p>{t('nature.cards.animas.features.ecoLodge.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.animas.features.familyFriendly.title')}</h5>
                        <p>{t('nature.cards.animas.features.familyFriendly.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://cascadadelasanimas.cl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-website"
                      title="Visit Official Website"
                    >
                      <Globe size={20} strokeWidth={1} />
                    </a>
                    
                    <a 
                      href="https://maps.google.com/?q=Cascada+de+las+Ánimas+San+Alfonso+Cajón+del+Maipo" 
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
                    <span>{t('nature.cards.animas.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.common.visitingInfoTips')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.animas.planningVisit')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        {t('nature.cards.animas.prebookActivities')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.animas.familyFriendlyNote')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.animas.guidesProvided')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.animas.safetyAccess')}</h5>
                    <div className="price-range">
                      {t('nature.cards.animas.safetyTips')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Top 10 Treks Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.trekking.title')}
            subtitle={t('nature.cards.trekking.subtitle')}
            coverImage="/trekking/trekkingcover.webp"
            distance={t('nature.cards.trekking.distance')}
            time={t('nature.cards.trekking.time')}
            location={t('nature.cards.trekking.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/trekking/trekking0.webp',
                    '/trekking/trekking1.webp',
                    '/trekking/trekking12.webp',
                    '/trekking/trekking122.webp',
                    '/trekking/trekking13.webp',
                    '/trekking/trekking6.webp',
                    '/trekking/trekking66.webp'
                  ]}
                  alt="Santiago Trekking"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.trekking.aboutTrekking')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.trekking.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.trekking.featuredTreks')}</h4>
                  <div className="trek-list">
                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.manquehuito.name')}</h5>
                        <span className="trek-difficulty beginner">{t('nature.cards.trekking.treks.manquehuito.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.manquehuito.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.palmas.name')}</h5>
                        <span className="trek-difficulty beginner">{t('nature.cards.trekking.treks.palmas.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.palmas.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.roble.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.roble.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.roble.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.manquehue.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.manquehue.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.manquehue.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.pochoco.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.pochoco.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.pochoco.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.aguasRamon.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.aguasRamon.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.aguasRamon.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.laCampana.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.laCampana.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.laCampana.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.glaciarMorado.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.glaciarMorado.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.glaciarMorado.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.cerroCarpa.name')}</h5>
                        <span className="trek-difficulty moderate">{t('nature.cards.trekking.treks.cerroCarpa.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.cerroCarpa.details')}</span>
                      </div>
                    </div>

                    <div className="trek-item">
                      <div className="trek-header">
                        <h5>{t('nature.cards.trekking.treks.provincia.name')}</h5>
                        <span className="trek-difficulty advanced">{t('nature.cards.trekking.treks.provincia.difficulty')}</span>
                      </div>
                      <div className="trek-details">
                        <span>{t('nature.cards.trekking.treks.provincia.details')}</span>
                      </div>
                      <div className="trek-description">
                        <p>{t('nature.cards.trekking.treks.provincia.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.app.goo.gl/7qc3rRXUYsrQ91ob9" 
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
                    <span>{t('nature.cards.trekking.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.cards.trekking.trekkingTips')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.trekking.essentialPreparation')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        {t('nature.cards.trekking.startEarly')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.trekking.bestSeason')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.trekking.checkConditions')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.trekking.safetyGuidelines')}</h5>
                    <div className="price-range">
                      {t('nature.cards.trekking.safetyTips')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Parque Safari Chile Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.safari.title')}
            subtitle={t('nature.cards.safari.subtitle')}
            coverImage="/safary/safari-rancagua-somos-tour-2025-2cover.webp"
            distance={t('nature.cards.safari.distance')}
            time={t('nature.cards.safari.time')}
            location={t('nature.cards.safari.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/safary/safari.webp',
                    '/safary/safari1.webp',
                    '/safary/safari8.webp',
                    '/safary/safari88.webp',
                    '/safary/Parque-Safari-Santiago-2.webp',
                    '/safary/paseos-para-colegios-parque-safari-de-rancagua.webp'
                  ]}
                  alt="Parque Safari Chile"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.safari.aboutSafari')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.safari.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.safari.safariExperiences')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.safari.features.multipleAdventures.title')}</h5>
                        <p>{t('nature.cards.safari.features.multipleAdventures.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.safari.features.safariLodge.title')}</h5>
                        <p>{t('nature.cards.safari.features.safariLodge.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.safari.features.wildlifeCenter.title')}</h5>
                        <p>{t('nature.cards.safari.features.wildlifeCenter.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Waves size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.safari.features.familyActivities.title')}</h5>
                        <p>{t('nature.cards.safari.features.familyActivities.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://www.parquesafari.cl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-website"
                      title="Visit Official Website"
                    >
                      <Globe size={20} strokeWidth={1} />
                    </a>
                    
                    <a 
                      href="https://maps.google.com/?q=Parque+Safari+Chile+Rancagua+Camino+Punta+de+Cortés" 
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
                    <span>{t('nature.cards.safari.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
{t('nature.cards.safari.hoursImportantInfo')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.safari.openingHours')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        {t('nature.cards.safari.monday')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.safari.tuesday')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.safari.wedSun')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.safari.entranceNote')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.safari.importantNotes')}</h5>
                    <div className="price-range">
                      {t('nature.cards.safari.generalNotes')}
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.safari.criticalSafety')}</h5>
                    <div className="price-range" style={{ color: 'var(--color-text-primary)', fontWeight: '500', borderLeft: '3px solid #dc2626', paddingLeft: 'var(--spacing-3)', background: 'rgba(239, 68, 68, 0.1)' }}>
                      {t('nature.cards.safari.safetyWarning')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* BuinZoo Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.buinzoo.title')}
            subtitle={t('nature.cards.buinzoo.subtitle')}
            coverImage="/buinzoo/buinzoocover.webp"
            distance={t('nature.cards.buinzoo.distance')}
            time={t('nature.cards.buinzoo.time')}
            location={t('nature.cards.buinzoo.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/buinzoo/buinzoo.webp',
                    '/buinzoo/buinzoo9.webp',
                    '/buinzoo/buinzoo3663.webp',
                    '/buinzoo/buinzoo3670.webp',
                    '/buinzoo/buinzoo3697.webp',
                    '/buinzoo/buinzoo3713.webp',
                    '/buinzoo/buinzoo3725.webp',
                    '/buinzoo/buinzoo3731.webp'
                  ]}
                  alt="BuinZoo"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.buinzoo.aboutBuinZoo')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.buinzoo.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.buinzoo.exhibitsExperiences')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.buinzoo.features.geographicZones.title')}</h5>
                        <p>{t('nature.cards.buinzoo.features.geographicZones.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.buinzoo.features.masaiMara.title')}</h5>
                        <p>{t('nature.cards.buinzoo.features.masaiMara.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Droplets size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.buinzoo.features.indoorExhibits.title')}</h5>
                        <p>{t('nature.cards.buinzoo.features.indoorExhibits.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.buinzoo.features.conservationEducation.title')}</h5>
                        <p>{t('nature.cards.buinzoo.features.conservationEducation.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://maps.google.com/?q=BuinZoo+Buin+Santiago+Chile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-location"
                      title="View on Google Maps"
                    >
                      <MapPin size={20} strokeWidth={1} />
                    </a>
                    <a 
                      href="https://www.buinzoo.cl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-website"
                      title="Visit Official Website"
                    >
                      <Globe size={20} strokeWidth={1} />
                    </a>
                  </div>
                  
                  <div className="park-info-note">
                    <Users size={16} strokeWidth={1} />
                    <span>{t('nature.cards.buinzoo.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    {t('nature.cards.buinzoo.hoursAdmission')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.buinzoo.openingHours')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        {t('nature.cards.buinzoo.monday')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.buinzoo.tueFri')}
                      </div>
                      <div className="season-hours">
                        {t('nature.cards.buinzoo.satSunHol')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.buinzoo.entryNote')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.buinzoo.admissionPrices')}</h5>
                    <div className="price-range">
                      {t('nature.cards.buinzoo.prices')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          {/* Laberinto San Fernando Expandable Card */}
          <ExpandableCard
            title={t('nature.cards.laberinto.title')}
            subtitle={t('nature.cards.laberinto.subtitle')}
            coverImage="/laberinto/cover.webp"
            distance={t('nature.cards.laberinto.distance')}
            time={t('nature.cards.laberinto.time')}
            location={t('nature.cards.laberinto.location')}
          >
            <div className="park-details">
              <div className="park-top-section">
                <ImageSlider 
                  images={[
                    '/laberinto/2023-01-02.webp',
                    '/laberinto/2023-03-10.webp'
                  ]}
                  alt="Laberinto San Fernando"
                />
                
                <div className="park-about">
                  <div className="park-section">
                    <h4 className="park-section-title vogue-subtitle">{t('nature.cards.laberinto.aboutMaze')}</h4>
                    <p className="vogue-body">
                      {t('nature.cards.laberinto.about')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="park-attractions-section">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.cards.laberinto.activitiesFeatures')}</h4>
                  <div className="park-features">
                    <div className="park-feature">
                      <TreePine size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.laberinto.features.treeMaze.title')}</h5>
                        <p>{t('nature.cards.laberinto.features.treeMaze.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Users size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.laberinto.features.miniFarm.title')}</h5>
                        <p>{t('nature.cards.laberinto.features.miniFarm.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Camera size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.laberinto.features.naturalTrails.title')}</h5>
                        <p>{t('nature.cards.laberinto.features.naturalTrails.description')}</p>
                      </div>
                    </div>
                    
                    <div className="park-feature">
                      <Binoculars size={24} strokeWidth={1} />
                      <div>
                        <h5>{t('nature.cards.laberinto.features.familyActivities.title')}</h5>
                        <p>{t('nature.cards.laberinto.features.familyActivities.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="park-info">
                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">{t('nature.common.practicalInfo')}</h4>
                  
                  <div className="park-link-buttons">
                    <a 
                      href="https://www.laberintosanfernando.cl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="park-link-button park-link-website"
                      title="Visit Official Website"
                    >
                      <Globe size={20} strokeWidth={1} />
                    </a>
                    
                    <a 
                      href="https://maps.google.com/?q=Laberinto+San+Fernando+O'Higgins+Chile" 
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
                    <span>{t('nature.cards.laberinto.perfectFor')}</span>
                  </div>
                </div>

                <div className="park-section">
                  <h4 className="park-section-title vogue-subtitle">
                    <Clock size={20} strokeWidth={1} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    {t('nature.cards.laberinto.hoursAdmission')}
                  </h4>
                  
                  <div className="hours-section">
                    <h5>{t('nature.cards.laberinto.openingHours')}</h5>
                    <div className="hours-info">
                      <div className="season-hours">
                        {t('nature.cards.laberinto.daily')}
                      </div>
                      <div className="hours-note">
                        <em>{t('nature.cards.laberinto.entryNote')}</em>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.laberinto.admissionSafety')}</h5>
                    <div className="price-range">
                      {t('nature.cards.laberinto.admissionInfo')}
                    </div>
                  </div>
                  
                  <div className="prices-section">
                    <h5>{t('nature.cards.laberinto.safetyNotice')}</h5>
                    <div className="price-range" style={{ color: 'var(--color-text-primary)', fontWeight: '500', borderLeft: '3px solid #dc2626', paddingLeft: 'var(--spacing-3)', background: 'rgba(239, 68, 68, 0.1)' }}>
                      {t('nature.cards.laberinto.safetyWarning')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          
          <div className="coming-soon">
            <p className="vogue-body">
              {t('comingSoon.nature')}
            </p>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Nature;
