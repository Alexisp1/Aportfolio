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
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="logo-text">Luxe Nail Studio</span>
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
            <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/booking" className={`nav-link ${isActive('/booking')}`} onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
