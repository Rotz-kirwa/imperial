import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <MapPin size={16} />
            <span>The Round Mall (TRM), Roysambu, Nairobi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Phone size={16} />
            <a href="tel:+254991260817" style={{ color: 'inherit', textDecoration: 'none' }}>0991 260 817</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} />
            <span>Mon-Sat: 10AM-10PM, Sun: 12PM-8PM</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Imperial Liquor has been serving quality spirits, wines, and beers for over 25 years. We pride ourselves on exceptional customer service and competitive prices.</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Imperial Liquor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;