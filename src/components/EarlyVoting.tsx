import { useEffect, useState } from 'react';
import { supabase, EarlyVotingDate } from '../lib/supabase';

export function EarlyVoting() {
  const [votingDates, setVotingDates] = useState<EarlyVotingDate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVotingDates() {
      const { data, error } = await supabase
        .from('early_voting_dates')
        .select('*')
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching early voting dates:', error);
      } else {
        setVotingDates(data || []);
      }
      setLoading(false);
    }

    fetchVotingDates();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="early-voting-section">
      <div className="container">
        <h1 className="section-title">Early Voting Dates</h1>
        <p className="section-subtitle">
          Vote early and avoid election day lines
        </p>

        <div className="voting-dates-container">
          {votingDates.map((votingDate) => (
            <div key={votingDate.id} className="voting-date-card">
              <div className="date-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="date-content">
                <h3 className="date-day">{formatDate(votingDate.date)}</h3>
                {votingDate.start_time && votingDate.end_time && (
                  <p className="date-time">
                    {formatTime(votingDate.start_time)} - {formatTime(votingDate.end_time)}
                  </p>
                )}
                {votingDate.notes && (
                  <p className="date-notes">{votingDate.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
