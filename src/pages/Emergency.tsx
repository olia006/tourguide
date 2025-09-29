import React, { useState } from 'react';
import { Phone, Shield, AlertTriangle, MapPin, ArrowLeft, Eye, Clock, Car, Ambulance, Flame, Mountain, Anchor, Globe, Wrench, FileText, Scale, CreditCard, Navigation, Fuel, Truck, ChevronDown, ChevronUp, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BackToTop from '../components/BackToTop';
import Timeline from '../components/Timeline';
import SantiagoComunasMapEnhanced from '../components/SantiagoComunasMapEnhanced';

const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const [showRoadAssistance, setShowRoadAssistance] = useState(false);
  const [showDrivingGuide, setShowDrivingGuide] = useState(false);
  const [showSafetyGuide, setShowSafetyGuide] = useState(false);

  // Timeline data for toll routes
  const tollRoutes = [
    {
      title: "Ruta 68",
      stops: [
        {
          id: "santiago-1",
          location: "Santiago",
          route: "",
          isDestination: false
        },
        {
          id: "valparaiso-1",
          location: "Valparaíso / Viña del Mar",
          route: "Ruta 68",
          distance: "120 km",
          price: "CLP 8,000–12,000",
          priceUSD: "≈ USD 8–12",
          isDestination: true
        }
      ]
    },
    {
      title: "Ruta 5 Sur (Concepción)",
      stops: [
        {
          id: "santiago-2",
          location: "Santiago",
          route: "",
          isDestination: false
        },
        {
          id: "concepcion-2",
          location: "Concepción",
          route: "Ruta 5 Sur",
          distance: "500 km",
          price: "CLP 25,000–35,000",
          priceUSD: "≈ USD 25–35",
          isDestination: true
        }
      ]
    },
    {
      title: "Ruta 5 Norte",
      stops: [
        {
          id: "santiago-3",
          location: "Santiago",
          route: "",
          isDestination: false
        },
        {
          id: "laserena-3",
          location: "La Serena",
          route: "Ruta 5 Norte",
          distance: "470 km",
          price: "CLP 20,000–30,000",
          priceUSD: "≈ USD 20–30",
          isDestination: true
        }
      ]
    },
    {
      title: "Ruta 5 Sur (Puerto Montt)",
      stops: [
        {
          id: "santiago-4",
          location: "Santiago",
          route: "",
          isDestination: false
        },
        {
          id: "puertomontt-4",
          location: "Puerto Montt",
          route: "Ruta 5 Sur",
          distance: "1,000 km",
          price: "CLP 40,000–60,000",
          priceUSD: "≈ USD 40–60",
          isDestination: true
        }
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-home-link">
            <ArrowLeft size={16} strokeWidth={1} />
            <span>{t('emergency.backHome')}</span>
          </Link>
          <div className="page-icon">
            <Phone size={48} color="var(--color-sea-foam)" strokeWidth={1} />
          </div>
          <h1 className="page-title vogue-title">
            {t('emergency.title')}
          </h1>
          <p className="page-subtitle vogue-subtitle">
            {t('emergency.subtitle')}
          </p>
        </div>

        <div className="page-content">
          
          {/* 1. QUICK NAVIGATION */}
          <div className="emergency-toc">
            <h3 className="toc-title vogue-subtitle">{t('emergency.navigation.title')}</h3>
            <div className="toc-grid">
              <a href="#emergency-contacts" className="toc-item">
                <Phone size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.emergencyContacts')}</span>
              </a>
              <a href="#road-assistance" className="toc-item">
                <Car size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.roadAssistance')}</span>
              </a>
              <a href="#enforcement" className="toc-item">
                <Scale size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.municipalEnforcement')}</span>
              </a>
              <a href="#driving-guide" className="toc-item">
                <CreditCard size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.drivingTolls')}</span>
              </a>
              <a href="#safety-map" className="toc-item">
                <MapPin size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.safetyMap')}</span>
              </a>
              <a href="#safety-guide" className="toc-item">
                <Shield size={20} strokeWidth={1} />
                <span>{t('emergency.navigation.safetyGuide')}</span>
              </a>
            </div>
          </div>

          {/* 2. 24/7 NATIONAL EMERGENCY NUMBERS and ROAD ASSISTANCE */}
          <div id="emergency-contacts" className="comprehensive-emergency">
            <div className="emergency-section">
              <h2 className="emergency-main-title vogue-title">
                <AlertTriangle size={32} color="var(--color-sea-foam)" strokeWidth={1} />
                {t('emergency.comprehensive.title')}
              </h2>
              
              <div className="emergency-subsection">
                <h3 className="emergency-subtitle vogue-subtitle">{t('emergency.comprehensive.nationalNumbers')}</h3>
                <div className="emergency-numbers-grid">
                  <div className="emergency-number-item">
                    <Ambulance size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.ambulance')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Flame size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.fire')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Shield size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.police')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Eye size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.investigative')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Mountain size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.mountain')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Anchor size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.maritime')}</span>
                  </div>
                  <div className="emergency-number-item">
                    <Phone size={20} strokeWidth={1} />
                    <span>{t('emergency.comprehensive.numbers.universal')}</span>
                  </div>
                </div>
              </div>

              <div id="road-assistance" className="emergency-subsection">
                <div className="roadside-header">
                <h3 className="emergency-subtitle vogue-subtitle">
                  {t('emergency.comprehensive.roadAssistance.title')}
                </h3>
                </div>
                
                <p className="assistance-intro">
                  {t('emergency.comprehensive.roadAssistance.intro')}
                </p>

                {showRoadAssistance && (
                <>
                <div className="santiago-providers-section" style={{ marginTop: 'var(--spacing-4)' }}>
                  <h4 className="regional-section-title">
                    <MapPin size={20} strokeWidth={1} />
                    {t('emergency.comprehensive.roadAssistance.santiagoRegion')}
                  </h4>
                  <div className="regional-providers-grid">
                    <div className="regional-provider">
                      <h5>{t('emergency.comprehensive.roadAssistance.providers.urzua.name')}</h5>
                      <p className="provider-services">{t('emergency.comprehensive.roadAssistance.providers.urzua.services')}</p>
                      <div className="contact-info">
                        <Phone size={16} strokeWidth={1} />
                        <a href={`tel:${t('emergency.comprehensive.roadAssistance.providers.urzua.phone')}`}>
                          {t('emergency.comprehensive.roadAssistance.providers.urzua.phone')}
                        </a>
                      </div>
                      <div className="contact-info">
                        <Globe size={16} strokeWidth={1} />
                        <a href={`https://${t('emergency.comprehensive.roadAssistance.providers.urzua.website')}`} target="_blank" rel="noopener noreferrer">
                          {t('emergency.comprehensive.roadAssistance.providers.urzua.website')}
                        </a>
                      </div>
                      <p className="provider-coverage">{t('emergency.comprehensive.roadAssistance.providers.urzua.coverage')}</p>
                    </div>

                    <div className="regional-provider">
                      <h5>{t('emergency.comprehensive.roadAssistance.providers.socorro.name')}</h5>
                      <p className="provider-services">{t('emergency.comprehensive.roadAssistance.providers.socorro.services')}</p>
                      <div className="contact-info">
                        <Phone size={16} strokeWidth={1} />
                        <a href={`tel:${t('emergency.comprehensive.roadAssistance.providers.socorro.phone')}`}>
                          {t('emergency.comprehensive.roadAssistance.providers.socorro.phone')}
                        </a>
                      </div>
                      <div className="contact-info">
                        <Globe size={16} strokeWidth={1} />
                        <a href={`https://${t('emergency.comprehensive.roadAssistance.providers.socorro.website')}`} target="_blank" rel="noopener noreferrer">
                          {t('emergency.comprehensive.roadAssistance.providers.socorro.website')}
                        </a>
                      </div>
                      <p className="provider-pricing">{t('emergency.comprehensive.roadAssistance.providers.socorro.pricing')}</p>
                    </div>

                    <div className="regional-provider">
                      <h5>{t('emergency.comprehensive.roadAssistance.providers.alrescate.name')}</h5>
                      <p className="provider-services">{t('emergency.comprehensive.roadAssistance.providers.alrescate.services')}</p>
                      <div className="contact-info">
                        <Phone size={16} strokeWidth={1} />
                        <a href={`tel:${t('emergency.comprehensive.roadAssistance.providers.alrescate.phone')}`}>
                          {t('emergency.comprehensive.roadAssistance.providers.alrescate.phone')}
                        </a>
                      </div>
                      <div className="contact-info">
                        <Globe size={16} strokeWidth={1} />
                        <a href={`https://${t('emergency.comprehensive.roadAssistance.providers.alrescate.website')}`} target="_blank" rel="noopener noreferrer">
                          {t('emergency.comprehensive.roadAssistance.providers.alrescate.website')}
                        </a>
                      </div>
                      <p className="provider-coverage">{t('emergency.comprehensive.roadAssistance.providers.alrescate.coverage')}</p>
                    </div>
                  </div>
                </div>

                <div className="regional-providers-section">
                  <h4 className="regional-section-title">
                    <Globe size={20} strokeWidth={1} />
                    {t('emergency.comprehensive.roadAssistance.otherRegions')}
                  </h4>
                      {/* Valparaíso Region */}
                      <div className="regional-section">
                        <h4 className="regional-title">
                          <Globe size={20} strokeWidth={1} />
                          {t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.title')}
                        </h4>
                        <div className="regional-providers-grid">
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.asistencia.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.asistencia.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.asistencia.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.asistencia.website')}
                              </a>
                            </div>
                          </div>
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.jofre.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.jofre.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.jofre.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.valparaiso.providers.jofre.website')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Coquimbo Region */}
                      <div className="regional-section">
                        <h4 className="regional-title">
                          <Globe size={20} strokeWidth={1} />
                          {t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.title')}
                        </h4>
                        <div className="regional-providers-grid">
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.cofre.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.cofre.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.cofre.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.cofre.website')}
                              </a>
                            </div>
                          </div>
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.ovalle.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.ovalle.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.ovalle.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.coquimbo.providers.ovalle.website')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bío-Bío Region */}
                      <div className="regional-section">
                        <h4 className="regional-title">
                          <Globe size={20} strokeWidth={1} />
                          {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.title')}
                        </h4>
                        <div className="regional-providers-grid">
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.salinas.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.salinas.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.salinas.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.salinas.website')}
                              </a>
                            </div>
                          </div>
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.website')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* South Region */}
                      <div className="regional-section">
                        <h4 className="regional-title">
                          <Globe size={20} strokeWidth={1} />
                          {t('emergency.comprehensive.roadAssistance.regionalProviders.south.title')}
                        </h4>
                        <div className="regional-providers-grid">
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.delsur.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.delsur.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.delsur.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.website')}
                              </a>
                            </div>
                          </div>
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.puertomontt.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.puertomontt.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.south.providers.puertomontt.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.website')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Nationwide */}
                      <div className="regional-section">
                        <h4 className="regional-title">
                          <Globe size={20} strokeWidth={1} />
                          {t('emergency.comprehensive.roadAssistance.regionalProviders.nationwide.title')}
                        </h4>
                        <div className="regional-providers-grid">
                          <div className="regional-provider">
                            <h5>{t('emergency.comprehensive.roadAssistance.regionalProviders.nationwide.providers.parachile.name')}</h5>
                            <p className="provider-services">{t('emergency.comprehensive.roadAssistance.regionalProviders.nationwide.providers.parachile.services')}</p>
                            <div className="contact-info">
                              <Globe size={16} strokeWidth={1} />
                              <a href={`https://${t('emergency.comprehensive.roadAssistance.regionalProviders.nationwide.providers.parachile.website')}`} target="_blank" rel="noopener noreferrer">
                                {t('emergency.comprehensive.roadAssistance.regionalProviders.biobio.providers.concepcion.website')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div style={{ marginTop: 'var(--spacing-8)', marginBottom: 'var(--spacing-6)' }}>
                    <h4 className="assistance-title">
                      <Wrench size={20} strokeWidth={1} />
                      {t('emergency.comprehensive.roadAssistance.highways.title')}
                    </h4>
                    <p className="assistance-description">
                      {t('emergency.comprehensive.roadAssistance.highways.description')}
                    </p>
                    <div className="assistance-note">
                      <strong>{t('emergency.comprehensive.roadAssistance.highways.note').split(':')[0]}:</strong> {t('emergency.comprehensive.roadAssistance.highways.note').split(': ')[1]}
                    </div>
                  </div>

                  <div style={{ marginTop: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                    <h4 className="tips-title">
                      <Wrench size={20} strokeWidth={1} />
                      {t('emergency.comprehensive.roadAssistance.tips.title')}
                    </h4>
                    <ul className="tips-list">
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.0')}</li>
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.1')}</li>
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.2')}</li>
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.3')}</li>
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.4')}</li>
                      <li>{t('emergency.comprehensive.roadAssistance.tips.items.5')}</li>
                    </ul>
                  </div>
                </>
                )}

                <button 
                  className="roadside-expand-button-bottom"
                  onClick={() => setShowRoadAssistance(!showRoadAssistance)}
                >
              <div className="expand-content">
                <span className="read-more-text">
                  {showRoadAssistance ? t('emergency.common.showLess') : t('emergency.common.detailedInfo')}
                </span>
                <div className="expand-icon">
                  {showRoadAssistance ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
                </button>
              </div>
            </div>
          </div>

          {/* 3. MUNICIPAL & TRAFFIC ENFORCEMENT NOTICE */}
          <div id="enforcement" className="enforcement-standalone-section">
            <div className="enforcement-header">
              <Scale size={32} color="var(--color-sea-foam)" strokeWidth={1} />
              <h2 className="vogue-title">{t('emergency.comprehensive.enforcement.title')}</h2>
              <p className="enforcement-intro">
                {t('emergency.comprehensive.enforcement.intro')}
              </p>
            </div>

            <div className="enforcement-content">
              <div className="enforcement-section">
                <h4 className="enforcement-title">
                  <FileText size={20} strokeWidth={1} />
                  {t('emergency.comprehensive.enforcement.whatTheyCanDo.title')}
                </h4>
                <ul className="enforcement-list">
                  <li>{t('emergency.comprehensive.enforcement.whatTheyCanDo.items.0')}</li>
                  <li>{t('emergency.comprehensive.enforcement.whatTheyCanDo.items.1')}</li>
                  <li>{t('emergency.comprehensive.enforcement.whatTheyCanDo.items.2')}</li>
                </ul>
              </div>

              <div className="enforcement-section">
                <h4 className="enforcement-title">
                  <AlertTriangle size={20} strokeWidth={1} />
                  {t('emergency.comprehensive.enforcement.fines.title')}
                </h4>
                <ul className="enforcement-list">
                  <li>{t('emergency.comprehensive.enforcement.fines.items.0')}</li>
                  <li>{t('emergency.comprehensive.enforcement.fines.items.1')}</li>
                  <li>{t('emergency.comprehensive.enforcement.fines.items.2')}</li>
                </ul>
              </div>

              <div className="enforcement-section">
                <h4 className="enforcement-title">
                  <Shield size={20} strokeWidth={1} />
                  {t('emergency.comprehensive.enforcement.recommendations.title')}
                </h4>
                <ul className="enforcement-list">
                  <li>{t('emergency.comprehensive.enforcement.recommendations.items.0')}</li>
                  <li>{t('emergency.comprehensive.enforcement.recommendations.items.1')}</li>
                  <li>{t('emergency.comprehensive.enforcement.recommendations.items.2')}</li>
                  <li>{t('emergency.comprehensive.enforcement.recommendations.items.3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Driving & Toll System in Chile */}
          <div id="driving-guide" className="driving-guide-section">
            <div className="driving-guide-header">
              <Car size={32} color="var(--color-sea-foam)" strokeWidth={1} />
              <h2 className="vogue-title">{t('emergency.drivingGuide.title')}</h2>
              <p className="vogue-body driving-intro">
                {t('emergency.drivingGuide.intro')}
              </p>
            </div>

            {showDrivingGuide && (

            <div className="driving-content">
              <div className="tag-system-section">
                <h3 className="driving-section-title vogue-subtitle">
                  <Navigation size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                  {t('emergency.drivingGuide.tagInfo.title')}
                </h3>
                <div className="tag-info">
                  <p className="tag-description">{t('emergency.drivingGuide.tagInfo.description')}</p>
                  <p className="tag-without">{t('emergency.drivingGuide.tagInfo.withoutTag')}</p>
                  <p className="tag-outside">{t('emergency.drivingGuide.tagInfo.outsideSantiago')}</p>
                </div>
              </div>

              <div className="toll-costs-section">
                <h3 className="driving-section-title vogue-subtitle">
                  <CreditCard size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                  {t('emergency.drivingGuide.tollCosts.title')}
                </h3>
                
                <div className="toll-timelines">
                  {tollRoutes.map((route, index) => (
                    <Timeline
                      key={index}
                      title={route.title}
                      stops={route.stops}
                    />
                  ))}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
                  <Truck size={20} strokeWidth={1.5} color="#ff6b6b" />
                  <span style={{ color: '#ff6b6b', fontSize: 'var(--font-size-base)', fontWeight: '400' }}>{t('emergency.drivingGuide.tollCosts.truckNote')}</span>
                </div>
              </div>

              <div className="key-info-section">
                <h3 className="driving-section-title vogue-subtitle">
                  <FileText size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                  {t('emergency.drivingGuide.keyInfo.title')}
                </h3>
                <div className="key-info-list">
                  <div className="key-info-item">
                    <Navigation size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.tagMandatory')}</span>
                  </div>
                  <div className="key-info-item">
                    <Clock size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.weekendSurcharge')}</span>
                  </div>
                  <div className="key-info-item">
                    <CreditCard size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.cashPayments')}</span>
                  </div>
                  <div className="key-info-item">
                    <Wrench size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.roadsideHelp')}</span>
                  </div>
                  <div className="key-info-item">
                    <Fuel size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.fuelStops')}</span>
                  </div>
                  <div className="key-info-item">
                    <AlertTriangle size={20} strokeWidth={1} />
                    <span>{t('emergency.drivingGuide.keyInfo.trafficTip')}</span>
                  </div>
                </div>
                
                <div style={{ marginTop: 'var(--spacing-4)', display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)' }}>
                  <div style={{ minWidth: '24px', display: 'flex', justifyContent: 'center', paddingTop: '2px' }}>
                    <Ban size={24} strokeWidth={1.5} color="#ff6b6b" />
                  </div>
                  <span style={{ color: '#ff6b6b', fontSize: 'var(--font-size-sm)', fontWeight: '400', lineHeight: '1.4' }}>
                    {t('emergency.drivingGuide.keyInfo.tagRemovalWarning')}
                  </span>
                </div>
              </div>
            </div>
            )}

            <button 
              className="roadside-expand-button-bottom"
              onClick={() => setShowDrivingGuide(!showDrivingGuide)}
            >
              <div className="expand-content">
                <span className="read-more-text">
                  {showDrivingGuide ? t('emergency.common.showLess') : t('emergency.common.detailedInfo')}
                </span>
                <div className="expand-icon">
                  {showDrivingGuide ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
            </button>
          </div>
          
          {/* 5. Santiago Safety Map */}
          <div id="safety-map" className="safety-map-section">
            <div className="safety-map-header">
              <MapPin size={32} color="var(--color-sea-foam)" strokeWidth={1} />
              <h2 className="vogue-title">
                {t('emergency.safetyMap.title')}
              </h2>
              <p className="vogue-body">
                {t('emergency.safetyMap.intro')}
              </p>
            </div>

            <div className="safety-map-content">
              <SantiagoComunasMapEnhanced />
            </div>
          </div>
          
          {/* 6. Safety Guide: Santiago's High-Risk Areas */}
          <div id="safety-guide" className="safety-guide">
            <div className="safety-guide-header">
              <AlertTriangle size={32} color="var(--color-sea-foam)" strokeWidth={1} />
              <h2 className="vogue-title">{t('emergency.safetyGuide.title')}</h2>
              <p className="vogue-body">
                {t('emergency.safetyGuide.intro')}
              </p>
            </div>

            {showSafetyGuide && (
            <>
            <div className="high-risk-areas">
              <h3 className="safety-section-title">
                <Shield size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                {t('emergency.safetyGuide.highRiskAreas.title')}
              </h3>
              
              <div className="risk-area">
                <h4 className="area-title">{t('emergency.safetyGuide.highRiskAreas.areas.meiggs.title')}</h4>
                <p className="area-description">{t('emergency.safetyGuide.highRiskAreas.areas.meiggs.description')}</p>
                <p className="area-risks"><strong>{t('emergency.safetyGuide.labels.mainRisks')}</strong> {t('emergency.safetyGuide.highRiskAreas.areas.meiggs.risks').replace('Main risks: ', '')}</p>
                <p className="area-factors"><strong>{t('emergency.safetyGuide.labels.contributingFactors')}</strong> {t('emergency.safetyGuide.highRiskAreas.areas.meiggs.factors').replace('Contributing factors: ', '')}</p>
              </div>

              <div className="risk-area">
                <h4 className="area-title">{t('emergency.safetyGuide.highRiskAreas.areas.franklin.title')}</h4>
                <p className="area-description">{t('emergency.safetyGuide.highRiskAreas.areas.franklin.description')}</p>
                <p className="area-risks">{t('emergency.safetyGuide.highRiskAreas.areas.franklin.risks')}</p>
                <p className="area-factors">{t('emergency.safetyGuide.highRiskAreas.areas.franklin.factors')}</p>
              </div>

              <div className="risk-area">
                <h4 className="area-title">{t('emergency.safetyGuide.highRiskAreas.areas.plazaArmas.title')}</h4>
                <p className="area-description">{t('emergency.safetyGuide.highRiskAreas.areas.plazaArmas.description')}</p>
                <p className="area-risks"><strong>{t('emergency.safetyGuide.labels.crimes')}</strong> {t('emergency.safetyGuide.highRiskAreas.areas.plazaArmas.risks').replace('Crimes: ', '')}</p>
                <p className="area-factors">{t('emergency.safetyGuide.highRiskAreas.areas.plazaArmas.factors')}</p>
              </div>

              <div className="risk-area">
                <h4 className="area-title">{t('emergency.safetyGuide.highRiskAreas.areas.forestal.title')}</h4>
                <p className="area-description">{t('emergency.safetyGuide.highRiskAreas.areas.forestal.description')}</p>
                <p className="area-risks">{t('emergency.safetyGuide.highRiskAreas.areas.forestal.risks')}</p>
                <p className="area-factors"><strong>{t('emergency.safetyGuide.labels.crimes')}</strong> {t('emergency.safetyGuide.highRiskAreas.areas.forestal.factors').replace('Crimes: ', '')}</p>
              </div>

              <div className="risk-area">
                <h4 className="area-title">{t('emergency.safetyGuide.highRiskAreas.areas.brasil.title')}</h4>
                <p className="area-description">{t('emergency.safetyGuide.highRiskAreas.areas.brasil.description')}</p>
                <p className="area-risks"><strong>{t('emergency.safetyGuide.labels.risks')}</strong> {t('emergency.safetyGuide.highRiskAreas.areas.brasil.risks').replace('Risks: ', '')}</p>
                <p className="area-factors">{t('emergency.safetyGuide.highRiskAreas.areas.brasil.factors')}</p>
              </div>
            </div>

            <div className="security-measures">
              <h3 className="safety-section-title">
                <Shield size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                {t('emergency.safetyGuide.securityMeasures.title')}
              </h3>
              <ul className="measures-list">
                <li>{t('emergency.safetyGuide.securityMeasures.measures.0')}</li>
                <li>{t('emergency.safetyGuide.securityMeasures.measures.1')}</li>
                <li>{t('emergency.safetyGuide.securityMeasures.measures.2')}</li>
              </ul>
            </div>

            <div className="visitor-tips">
              <h3 className="safety-section-title">
                <Eye size={24} color="var(--color-sea-foam)" strokeWidth={1} />
                {t('emergency.safetyGuide.visitorTips.title')}
              </h3>
              <ul className="tips-list">
                <li>{t('emergency.safetyGuide.visitorTips.tips.0')}</li>
                <li>{t('emergency.safetyGuide.visitorTips.tips.1')}</li>
                <li>{t('emergency.safetyGuide.visitorTips.tips.2')}</li>
                <li>{t('emergency.safetyGuide.visitorTips.tips.3')}</li>
                <li>{t('emergency.safetyGuide.visitorTips.tips.4')}</li>
              </ul>
            </div>

            {/* Map moved to dedicated section above */}

            <div className="safety-conclusion">
              <p className="conclusion-text">
                <strong>{t('emergency.safetyGuide.conclusion').split('.')[0]}.</strong> {t('emergency.safetyGuide.conclusion').split('. ')[1]}
              </p>
            </div>
            </>
            )}

            <button 
              className="roadside-expand-button-bottom"
              onClick={() => setShowSafetyGuide(!showSafetyGuide)}
            >
              <div className="expand-content">
                <span className="read-more-text">
                  {showSafetyGuide ? t('emergency.common.showLess') : t('emergency.common.detailedInfo')}
                </span>
                <div className="expand-icon">
                  {showSafetyGuide ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
};

export default Emergency;
