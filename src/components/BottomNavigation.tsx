import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  TreePine, 
  Wine, 
  UtensilsCrossed, 
  Palette, 
  ShoppingBag, 
  Waves,
  Phone
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', path: '/', icon: Home, label: t('nav.home') },
    { id: 'nature', path: '/nature', icon: TreePine, label: t('nav.nature') },
    { id: 'wineries', path: '/wineries', icon: Wine, label: t('nav.wineries') },
    { id: 'restaurants', path: '/restaurants', icon: UtensilsCrossed, label: t('nav.restaurants') },
    { id: 'culture', path: '/culture', icon: Palette, label: t('nav.culture') },
    { id: 'shopping', path: '/shopping', icon: ShoppingBag, label: t('nav.shopping') },
    { id: 'beaches', path: '/beaches', icon: Waves, label: t('nav.beaches') },
    { id: 'emergency', path: '/emergency', icon: Phone, label: t('nav.emergency') }
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        <div className="bottom-nav-grid">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span className="bottom-nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
