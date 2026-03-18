import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Candidates } from './components/Candidates';
import { VotingLocations } from './components/VotingLocations';
import { EarlyVoting } from './components/EarlyVoting';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/voting-locations" element={<VotingLocations />} />
            <Route path="/early-voting" element={<EarlyVoting />} />
          </Routes>
          <CallToAction />
        </main>
        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              Texas Democratic Runoff 2026
            </p>
            <p className="footer-text small">
              Runoff Election Day: May 27, 2026
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
