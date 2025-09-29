import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import BottomNavigation from './components/BottomNavigation';
import LanguageSwitcher from './components/LanguageSwitcher';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Nature from './pages/Nature';
import Wineries from './pages/Wineries';
import Restaurants from './pages/Restaurants';
import Culture from './pages/Culture';
import Shopping from './pages/Shopping';
import Beaches from './pages/Beaches';
import Emergency from './pages/Emergency';
import CopyProtection from './components/CopyProtection';
import './styles/globals.css';
import './styles/components.css';

function App() {
  useEffect(() => {
    // Copy protection
    const preventCopy = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDevTools = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('paste', preventCopy);
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventDevTools);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('selectstart', preventCopy);

    // Disable text selection
    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Cleanup
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('paste', preventCopy);
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventDevTools);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('selectstart', preventCopy);
    };
  }, []);

  return (
    <LanguageProvider>
      <CopyProtection />
      <Router>
        <ScrollToTop />
        <div className="app">
        {/* Header with Language Switcher */}
        <header className="app-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Link to="/" className="logo-link">
                  <img src="/logo.png" alt="Chile Guide" className="logo-image" />
                </Link>
              </div>
              <div className="header-actions">
                <a 
                  href="https://rentcarchile.com/ru/pages/reservar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rental-button"
                  title="Rent a Car"
                >
                  <img src="/carbutton.png" alt="Rent a Car" className="rental-icon" />
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/wineries" element={<Wineries />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/beaches" element={<Beaches />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </main>

        {/* Mobile Bottom Navigation */}
        <BottomNavigation />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;