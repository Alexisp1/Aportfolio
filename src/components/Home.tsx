import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Texas Democratic Runoff 2026</h1>
            <p className="hero-subtitle">
              Choose our Democratic nominees for Lieutenant Governor and Attorney General. Your vote determines who will face the Republicans in November.
            </p>
            <div className="hero-buttons">
              <Link to="/candidates" className="hero-button primary">
                Meet the Candidates
              </Link>
              <Link to="/voting-locations" className="hero-button secondary">
                Find Your Polling Place
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-links-section">
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/candidates" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="quick-link-title">Candidates</h3>
              <p className="quick-link-description">Meet the Democratic candidates for Lieutenant Governor and Attorney General</p>
            </Link>

            <Link to="/voting-locations" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="quick-link-title">Voting Locations</h3>
              <p className="quick-link-description">Find your nearest polling place</p>
            </Link>

            <Link to="/early-voting" className="quick-link-card">
              <div className="quick-link-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="quick-link-title">Early Voting</h3>
              <p className="quick-link-description">See early voting dates and times</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Candidates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Voting Locations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10</div>
              <div className="stat-label">Early Voting Days</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
