import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartItemsCount } = useCart();
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
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/special-offers">Special Offers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {getCartItemsCount() > 0 && (
              <span className="cart-count">{getCartItemsCount()}</span>
            )}
          </Link>
          
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
          <li><Link to="/products" onClick={closeMobileMenu}>Products</Link></li>
          <li><Link to="/special-offers" onClick={closeMobileMenu}>Special Offers</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
        
        <div className="mobile-cart-section">
          <Link to="/cart" className="mobile-cart-icon" onClick={closeMobileMenu}>
            <ShoppingCart size={20} />
            <span>Cart ({getCartItemsCount()})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;