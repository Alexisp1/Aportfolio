export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Your Voice Matters</h2>
          <p className="cta-subtitle">
            Join us in shaping the future of our community
          </p>

          <div className="cta-buttons">
            <button className="cta-button cta-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Vote Now
            </button>

            <button className="cta-button cta-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Volunteer
            </button>
          </div>
        </div>

        <div className="cta-info-grid">
          <div className="cta-info-card">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="info-title">Early Voting Available</h3>
            <p className="info-text">Skip the lines and vote early at your convenience</p>
          </div>

          <div className="cta-info-card">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="info-title">Multiple Locations</h3>
            <p className="info-text">Find a polling place near you</p>
          </div>

          <div className="cta-info-card">
            <div className="info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3 className="info-title">Make a Difference</h3>
            <p className="info-text">Every vote counts in our community</p>
          </div>
        </div>
      </div>
    </section>
  );
}
