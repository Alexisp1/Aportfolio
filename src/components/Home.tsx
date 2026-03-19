import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-image-left">
            <img
              src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nail art"
            />
          </div>
          <div className="hero-content-center">
            <div className="hero-badge">Est. 2014</div>
            <h1>Luxe Nail Studio</h1>
            <p className="hero-tagline">Where artistry meets precision</p>
            <div className="hero-cta">
              <Link to="/booking" className="btn-book">Book Your Session</Link>
              <Link to="/services" className="btn-explore">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image-right">
            <img
              src="https://images.pexels.com/photos/1570693/pexels-photo-1570693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manicure"
            />
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-content">
          <span className="philosophy-label">Our Philosophy</span>
          <h2>Beauty is in the details</h2>
          <p>Every nail tells a story. We believe in creating personalized experiences that reflect your unique style, using only premium products and techniques perfected over a decade of practice.</p>
        </div>
      </section>

      <section className="featured-services">
        <div className="services-header">
          <h2>Signature Services</h2>
        </div>
        <div className="services-showcase">
          <Link to="/services" className="service-feature">
            <div className="service-feature-number">01</div>
            <h3>Luxury Manicure</h3>
            <p>Premium nail care with extended hand massage and paraffin treatment</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link to="/services" className="service-feature">
            <div className="service-feature-number">02</div>
            <h3>Artistic Design</h3>
            <p>Custom nail art created by our award-winning technicians</p>
            <span className="service-arrow">→</span>
          </Link>
          <Link to="/services" className="service-feature">
            <div className="service-feature-number">03</div>
            <h3>Spa Pedicure</h3>
            <p>Therapeutic foot treatment in our signature massage chairs</p>
            <span className="service-arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">The most relaxing and professional nail experience I've ever had. The attention to detail is unmatched.</p>
          <div className="testimonial-author">
            <strong>Sarah Chen</strong>
            <span>Regular Client Since 2019</span>
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-split">
          <div className="visit-info">
            <h2>Visit Our Studio</h2>
            <div className="info-block">
              <div className="info-label">Location</div>
              <div className="info-text">123 Beauty Boulevard, Suite 100<br />Los Angeles, CA 90001</div>
            </div>
            <div className="info-block">
              <div className="info-label">Hours</div>
              <div className="info-text">
                Mon-Fri: 9:00 AM - 8:00 PM<br />
                Sat: 9:00 AM - 6:00 PM<br />
                Sun: 10:00 AM - 5:00 PM
              </div>
            </div>
            <div className="info-block">
              <div className="info-label">Contact</div>
              <div className="info-text">
                (555) 123-4567<br />
                info@luxenailstudio.com
              </div>
            </div>
          </div>
          <div className="visit-image">
            <img
              src="https://images.pexels.com/photos/3997350/pexels-photo-3997350.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Salon interior"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
