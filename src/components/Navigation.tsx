import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="logo-text">TX Runoff 2026</span>
          </Link>

          <button
            className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/candidates" className={`nav-link ${isActive('/candidates')}`} onClick={() => setIsMenuOpen(false)}>
              Candidates
            </Link>
            <Link to="/voting-locations" className={`nav-link ${isActive('/voting-locations')}`} onClick={() => setIsMenuOpen(false)}>
              Voting Locations
            </Link>
            <Link to="/early-voting" className={`nav-link ${isActive('/early-voting')}`} onClick={() => setIsMenuOpen(false)}>
              Early Voting
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
