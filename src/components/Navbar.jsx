import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartItemsCount, items, getCartTotal } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Imperial Liquor
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Featured Drinks</Link></li>
          <li><Link to="/special-offers">Special Offers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Get In Touch</Link></li>
        </ul>
        
        <div className="nav-actions">
          <div className="cart-dropdown">
            <Link to="/cart" className="cart-icon">
              <ShoppingCart size={24} />
              {getCartItemsCount() > 0 && (
                <span className="cart-count">{getCartItemsCount()}</span>
              )}
            </Link>
            {getCartItemsCount() > 0 && (
              <button 
                className="cart-buy-now"
                onClick={() => {
                  const phoneNumber = "254791260817";
                  let message = "Hello! I would like to order the following items:\n\n";
                  
                  items.forEach(item => {
                    message += `${item.name}\n`;
                    message += `Quantity: ${item.quantity}\n`;
                    message += `Price: KSh ${item.price.toLocaleString()} each\n`;
                    message += `Subtotal: KSh ${(item.price * item.quantity).toLocaleString()}\n\n`;
                  });
                  
                  message += `Total Amount: KSh ${getCartTotal().toLocaleString()}\n\n`;
                  message += "Please confirm availability and delivery details. Thank you!";
                  
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                Buy Now
              </button>
            )}
          </div>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </div>
      
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
      
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMobileMenu}>Featured Drinks</Link></li>
          <li><Link to="/special-offers" onClick={closeMobileMenu}>Special Offers</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Get In Touch</Link></li>
        </ul>
        

      </div>
    </nav>
  );
};

export default Navbar;