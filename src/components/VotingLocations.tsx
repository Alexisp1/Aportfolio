import { useEffect, useState } from 'react';
import { supabase, VotingLocation } from '../lib/supabase';

export function VotingLocations() {
  const [locations, setLocations] = useState<VotingLocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      const { data, error } = await supabase
        .from('voting_locations')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching voting locations:', error);
      } else {
        setLocations(data || []);
      }
      setLoading(false);
    }

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="voting-locations-section">
      <div className="container">
        <h1 className="section-title">Voting Locations</h1>
        <p className="section-subtitle">
          Find your nearest polling place
        </p>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h2 className="location-name">{location.name}</h2>
              <div className="location-details">
                <p className="location-address">
                  {location.address}
                  {location.city && <><br />{location.city}</>}
                </p>
                {location.hours && (
                  <p className="location-hours">
                    <strong>Hours:</strong> {location.hours}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
