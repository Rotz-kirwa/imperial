import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Truck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    liquorType: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      liquorType: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>Fill out the form below and we'll help you find exactly what you're looking for.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="liquorType">Type of Liquor</label>
            <select
              id="liquorType"
              name="liquorType"
              value={formData.liquorType}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              <option value="whiskey">Whiskey</option>
              <option value="vodka">Vodka</option>
              <option value="rum">Rum</option>
              <option value="wine">Wine</option>
              <option value="beer">Beer</option>
              <option value="gin">Gin</option>
              <option value="tequila">Tequila</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="quantity">Quantity Needed</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 2 bottles, 1 case"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about your specific needs, budget, or any questions you have..."
            ></textarea>
          </div>
          
          <button type="submit" className="cta-button">
            Send Inquiry
          </button>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div className="info-card">
          <MapPin size={32} style={{ color: '#d4af37', marginBottom: '1rem' }} />
          <h3>Visit Our Store</h3>
          <p>The Round Mall (TRM)<br />Roysambu, Nairobi<br />Kenya</p>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#1a1a1a', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              Located on the Ground Floor, Shop G12<br />
              Easy parking available
            </p>
          </div>
        </div>
        
        <div className="info-card">
          <Phone size={32} style={{ color: '#d4af37', marginBottom: '1rem' }} />
          <h3>Call Us</h3>
          <p><strong><a href="tel:+254991260817" style={{ color: '#d4af37', textDecoration: 'none' }}>0991 260 817</a></strong></p>
          <p>For immediate assistance or to place an order over the phone.</p>
        </div>
        
        <div className="info-card">
          <Clock size={32} style={{ color: '#d4af37', marginBottom: '1rem' }} />
          <h3>Store Hours</h3>
          <p>
            Monday - Saturday: 10:00 AM - 10:00 PM<br />
            Sunday: 12:00 PM - 8:00 PM
          </p>
        </div>
        
        <div className="info-card">
          <Truck size={32} style={{ color: '#d4af37', marginBottom: '1rem' }} />
          <h3>Delivery Information</h3>
          <p>Free delivery on orders above KSh 1,000 within Nairobi. Same-day delivery available.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#2c2c2c', borderRadius: '10px' }}>
        <Mail size={48} style={{ color: '#d4af37', marginBottom: '1rem' }} />
        <h2>Have Questions?</h2>
        <p>Our knowledgeable staff is here to help you find the perfect bottle for any occasion. Whether you're looking for a special gift, planning a party, or building your collection, we're here to assist you.</p>
      </div>
    </div>
  );
};

export default Contact;