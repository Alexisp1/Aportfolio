import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              Luxe Nail Studio
            </p>
            <p className="footer-text small">
              123 Beauty Boulevard, Suite 100, Los Angeles, CA 90001 | (555) 123-4567
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
