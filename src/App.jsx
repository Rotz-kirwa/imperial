import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import SpecialOffers from './pages/SpecialOffers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import WhatsAppFloat from './components/WhatsAppFloat';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/special-offers" element={<SpecialOffers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;