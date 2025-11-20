import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield } from 'lucide-react';

const Home = () => {
  const heroImages = [
    'https://i.pinimg.com/1200x/06/70/15/067015d74ec333092fd7c1cd78009411.jpg',
    'https://i.pinimg.com/1200x/de/e0/c8/dee0c890097285edb4372be2ae7d57d9.jpg',
    'https://i.pinimg.com/1200x/1b/0c/26/1b0c26c871bbf1f8db6df30fe564df66.jpg',
    'https://i.pinimg.com/1200x/4c/67/72/4c67723515dd2cb9dd21beda891ee8b8.jpg',
    'https://i.pinimg.com/736x/55/93/0c/55930c9f575e165f72e4ee90e10d7774.jpg',
    'https://i.pinimg.com/736x/db/dc/d6/dbdcd6d0d36d0a84d3b4403b0bebb1fc.jpg',
    'https://i.pinimg.com/1200x/a8/ba/f9/a8baf9647d8482980bc3bac2235311fd.jpg'
  ];

  const featuredImages = [
    'https://i.pinimg.com/1200x/a8/ba/f9/a8baf9647d8482980bc3bac2235311fd.jpg',
    'https://i.pinimg.com/736x/f2/e7/fd/f2e7fde54299d7377d1e1675b33cbc26.jpg',
    'https://i.pinimg.com/1200x/6d/59/f2/6d59f2f9b3a067e8fd1cff8e5300c34f.jpg',
    'https://i.pinimg.com/736x/37/a4/af/37a4afa7654e9058ddefeeece1c8b9cd.jpg',
    'https://i.pinimg.com/736x/80/86/15/8086157e08249259c92b8cc9f16000e5.jpg',
    'https://i.pinimg.com/736x/1c/b0/1d/1cb01d71a4e0ce1dc227ed10ffe2de97.jpg',
    'https://i.pinimg.com/736x/8e/ad/f7/8eadf7e94c0e457aeed47197f603c72d.jpg',
    'https://i.pinimg.com/1200x/e4/3b/50/e43b50cfea692cbfce9d0fbe117e62f7.jpg',
    'https://i.pinimg.com/736x/cc/b9/29/ccb92998d66c1845751e9c84179b8236.jpg',
    'https://i.pinimg.com/1200x/1f/c3/ff/1fc3ff60fac95c326efe4e98007324f1.jpg',
    'https://i.pinimg.com/1200x/ff/4f/0e/ff4f0eff406ed6048cf20b6c8c9fbc4c.jpg',
    'https://i.pinimg.com/736x/e5/9c/7f/e59c7f9995542ebdc75a72b7d3bcf71d.jpg',
    'https://i.pinimg.com/1200x/22/ce/04/22ce046f7e19993c6d32b58240572857.jpg',
    'https://i.pinimg.com/1200x/dc/81/9a/dc819a71f28a82d8b073b4453fff6482.jpg',
    'https://i.pinimg.com/1200x/5f/14/d7/5f14d75f8dbd285ca208f6166ddf1355.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    const featuredInterval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) => 
        prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(featuredInterval);
    };
  }, [heroImages.length, featuredImages.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <Link 
          to="/products" 
          className="cta-button"
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            zIndex: 3
          }}
        >
          Shop Now
        </Link>
        
        {/* Slider Indicators */}
        <div className="slider-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="store-info">
        <h2 style={{ textAlign: 'center', color: '#d4af37', marginBottom: '3rem', fontSize: '2.5rem' }}>Featured Products</h2>
        <div className="masonry-grid">
          {featuredImages.map((image, index) => (
            <div key={index} className="masonry-item featured-image" style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>Why Choose Imperial Liquor?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            At Imperial Liquor, we believe that every bottle tells a story. Our carefully curated selection 
            features both time-honored classics and exciting new discoveries from around the world. Whether 
            you're a connoisseur seeking rare vintages or someone looking for the perfect gift, our expert 
            staff is here to guide you to the ideal choice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;