import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
}

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('category', { ascending: true });

      if (error) {
        console.error('Error fetching services:', error);
      } else {
        setServices(data || []);
      }
      setLoading(false);
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <section className="services-section">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Premium nail care services tailored to your style and preferences
        </p>

        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="service-category">
            <h2 className="category-title">{category}</h2>
            <div className="services-grid">
              {categoryServices.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-header">
                    <h3 className="service-name">{service.name}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-duration">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {service.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
