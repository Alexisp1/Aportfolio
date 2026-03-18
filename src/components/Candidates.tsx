import { useEffect, useState } from 'react';
import { supabase, Candidate } from '../lib/supabase';

export function Candidates() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCandidates() {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .order('order', { ascending: true });

      if (error) {
        console.error('Error fetching candidates:', error);
      } else {
        setCandidates(data || []);
      }
      setLoading(false);
    }

    fetchCandidates();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="candidates-section">
      <div className="container">
        <h1 className="section-title">Democratic Runoff Candidates</h1>
        <p className="section-subtitle">
          Choose our Democratic nominees for Texas Lieutenant Governor and Attorney General
        </p>

        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <div className="candidate-image-wrapper">
                {candidate.image_url ? (
                  <img
                    src={candidate.image_url}
                    alt={candidate.name}
                    className="candidate-image"
                  />
                ) : (
                  <div className="candidate-placeholder">
                    <span className="candidate-initials">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              <div className="candidate-content">
                <h2 className="candidate-name">{candidate.name}</h2>
                <p className="candidate-bio">{candidate.bio}</p>

                {candidate.platform && (
                  <div className="candidate-platform">
                    <h3 className="platform-title">Platform</h3>
                    <p className="platform-text">{candidate.platform}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
