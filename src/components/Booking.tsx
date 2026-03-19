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
  const [step, setStep] = useState(1);

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
      setStep(1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const today = new Date().toISOString().split('T')[0];
  const canProceed = step === 1
    ? formData.service && formData.date && formData.time
    : formData.name && formData.email && formData.phone;

  return (
    <div className="booking-page">
      <div className="booking-sidebar">
        <h1>Book Your Appointment</h1>
        <p className="booking-intro">Reserve your spot at Luxe Nail Studio. We look forward to serving you.</p>

        <div className="booking-steps">
          <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Choose Date & Service</div>
          </div>
          <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Your Information</div>
          </div>
        </div>

        <div className="booking-contact">
          <h3>Need Help?</h3>
          <p>Call us at (555) 123-4567</p>
          <p className="contact-hours">Mon-Fri 9AM-8PM</p>
        </div>
      </div>

      <div className="booking-main">
        {submitted && (
          <div className="success-banner">
            <h2>Booking Confirmed!</h2>
            <p>We've sent a confirmation email to {formData.email}. See you soon!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="booking-wizard">
          {step === 1 && (
            <div className="wizard-step">
              <h2>Select Your Service & Time</h2>

              <div className="form-field">
                <label>Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose your treatment</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time</option>
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

              <button
                type="button"
                className="btn-continue"
                onClick={() => setStep(2)}
                disabled={!canProceed}
              >
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-step">
              <h2>Your Contact Information</h2>

              <div className="form-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="form-field">
                <label>Special Requests (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any preferences or requirements?"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-back" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button type="submit" className="btn-submit" disabled={!canProceed}>
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
