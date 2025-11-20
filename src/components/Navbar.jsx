import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartItemsCount } = useCart();

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;