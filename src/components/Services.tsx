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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Expertly curated treatments for every occasion</p>
      </div>

      <div className="services-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All Services' : category}
          </button>
        ))}
      </div>

      <div className="services-list">
        {filteredServices.map((service, index) => (
          <div key={service.id} className="service-item">
            <div className="service-meta">
              <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="service-category">{service.category}</span>
            </div>
            <div className="service-details">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-pricing">
              <div className="service-duration">{service.duration}</div>
              <div className="service-price">{service.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
