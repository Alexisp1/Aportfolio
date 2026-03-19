import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Luxe Nail Studio</h1>
            <p className="hero-subtitle">
              Where Beauty Meets Artistry. Experience premium nail care in a relaxing, luxurious environment.
            </p>
            <div className="hero-buttons">
              <Link to="/booking" className="hero-button primary">
                Book Appointment
              </Link>
              <Link to="/services" className="hero-button secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-links-section">
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/services" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="quick-link-title">Services</h3>
              <p className="quick-link-description">Explore our full range of nail care services</p>
            </Link>

            <Link to="/gallery" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 className="quick-link-title">Gallery</h3>
              <p className="quick-link-description">View our latest nail art and designs</p>
            </Link>

            <Link to="/booking" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="quick-link-title">Book Now</h3>
              <p className="quick-link-description">Schedule your appointment today</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Services</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
