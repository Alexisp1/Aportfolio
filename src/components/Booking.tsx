import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
}

export function Booking() {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('id, name, price, duration')
        .order('name', { ascending: true });

      if (!error && data) {
        setServices(data);
      }
    }

    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('bookings')
      .insert([
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          service_id: formData.service,
          appointment_date: formData.date,
          appointment_time: formData.time,
          notes: formData.notes
        }
      ]);

    if (!error) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="booking-section">
      <div className="container">
        <h1 className="section-title">Book Your Appointment</h1>
        <p className="section-subtitle">
          Schedule your visit and let us pamper you
        </p>

        {submitted && (
          <div className="success-message">
            Thank you for booking! We'll contact you shortly to confirm your appointment.
          </div>
        )}

        <div className="booking-container">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jane@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name} - {service.price} ({service.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Special Requests</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Any special requests or preferences?"
              />
            </div>

            <button type="submit" className="submit-button">
              Book Appointment
            </button>
          </form>

          <div className="booking-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> (555) 123-4567<br />
                <strong>Email:</strong> info@luxenailstudio.com
              </p>
            </div>

            <div className="info-card">
              <h3>Hours of Operation</h3>
              <p>
                <strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM<br />
                <strong>Saturday:</strong> 9:00 AM - 6:00 PM<br />
                <strong>Sunday:</strong> 10:00 AM - 5:00 PM
              </p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>
                123 Beauty Boulevard<br />
                Suite 100<br />
                Los Angeles, CA 90001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
