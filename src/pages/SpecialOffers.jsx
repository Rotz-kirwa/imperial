import { useState } from 'react';
import { Mail, Star } from 'lucide-react';

const SpecialOffers = () => {
  const [email, setEmail] = useState('');

  const offers = [
    {
      id: 1,
      title: 'Premium Whiskey Collection',
      discount: '25% OFF',
      description: 'Exclusive selection of aged whiskeys and single malts',
      validUntil: 'Limited Time Only',
      image: 'https://i.pinimg.com/1200x/95/13/66/951366106af5c0cda1d6b548da9b5b79.jpg',
      badge: 'HOT DEAL'
    },
    {
      id: 2,
      title: 'Luxury Wine & Champagne',
      discount: 'Buy 2 Get 1 Free',
      description: 'Premium champagnes and fine wines from around the world',
      validUntil: 'This Weekend Only',
      image: 'https://i.pinimg.com/1200x/43/75/35/437535263a12bad995de3fc0f5a89f8b.jpg',
      badge: 'WEEKEND SPECIAL'
    },
    {
      id: 3,
      title: 'Craft Beer Bundle',
      discount: '30% OFF',
      description: 'Local and international craft beers variety pack',
      validUntil: 'While Stocks Last',
      image: 'https://i.pinimg.com/736x/53/18/d7/5318d7190899f5a76ec5ab88b626def2.jpg',
      badge: 'BEST VALUE'
    },
    {
      id: 4,
      title: 'Premium Vodka Selection',
      discount: '20% OFF',
      description: 'Top-shelf vodkas from Russia, Poland, and France',
      validUntil: 'New Year Special',
      image: 'https://i.pinimg.com/1200x/f9/69/bb/f969bbb0c54f4a52694a10dce7667a41.jpg',
      badge: 'NEW YEAR'
    },
    {
      id: 5,
      title: 'Rum & Cocktail Kit',
      discount: 'KSh 5,000 OFF',
      description: 'Premium rums with cocktail accessories and mixers',
      validUntil: 'Party Season Deal',
      image: 'https://i.pinimg.com/1200x/16/a9/92/16a9923d47becb6dad204bfe01b22d78.jpg',
      badge: 'PARTY PACK'
    },
    {
      id: 6,
      title: 'Cognac & Brandy Collection',
      discount: '15% OFF',
      description: 'Aged cognacs and premium brandies for connoisseurs',
      validUntil: 'Exclusive Offer',
      image: 'https://i.pinimg.com/1200x/c8/a3/84/c8a38459b916ab070f548eaae2c824a9.jpg',
      badge: 'EXCLUSIVE'
    },
    {
      id: 7,
      title: 'Gin Lovers Paradise',
      discount: 'Buy 1 Get 50% Off 2nd',
      description: 'Artisan gins and premium botanicals collection',
      validUntil: 'Gin & Tonic Season',
      image: 'https://i.pinimg.com/1200x/c4/25/0b/c4250bca9689f9a64d60641e6ab9c05d.jpg',
      badge: 'ARTISAN'
    },
    {
      id: 8,
      title: 'Tequila Fiesta Pack',
      discount: '35% OFF',
      description: 'Premium tequilas and mezcals from Mexico',
      validUntil: 'Fiesta Special',
      image: 'https://i.pinimg.com/736x/77/74/ae/7774ae6aa40810bcf43e8ea03a0f80c5.jpg',
      badge: 'FIESTA'
    },
    {
      id: 9,
      title: 'Sake & Asian Spirits',
      discount: '25% OFF',
      description: 'Authentic Japanese sake and Asian premium spirits',
      validUntil: 'Cultural Collection',
      image: 'https://i.pinimg.com/1200x/46/50/68/465068bc3636e71fcfa90ab64283c767.jpg',
      badge: 'AUTHENTIC'
    },
    {
      id: 10,
      title: 'Vintage Wine Reserve',
      discount: 'KSh 8,000 OFF',
      description: 'Rare vintage wines and collectors editions',
      validUntil: 'Collectors Special',
      image: 'https://i.pinimg.com/1200x/57/fc/2e/57fc2e4d1df8e9e0165fdf541f45c562.jpg',
      badge: 'VINTAGE'
    },
    {
      id: 11,
      title: 'Liqueur & Digestif Set',
      discount: '40% OFF',
      description: 'After-dinner liqueurs and premium digestifs',
      validUntil: 'Dinner Party Special',
      image: 'https://i.pinimg.com/1200x/6b/74/5b/6b745bfc7a5c1c48d1733da6d33a9923.jpg',
      badge: 'DINNER SPECIAL'
    },
    {
      id: 12,
      title: 'Scotch Whisky Masters',
      discount: '30% OFF',
      description: 'Single malt and blended Scotch whisky collection',
      validUntil: 'Highland Special',
      image: 'https://i.pinimg.com/736x/d7/82/d9/d782d967b10f3f65e48f754412c1748e.jpg',
      badge: 'HIGHLAND'
    }
  ];

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div style={{ width: '100%', margin: 0, padding: '2rem 0' }}>
      <h1 style={{ textAlign: 'center', color: '#d4af37', fontSize: '3rem', marginBottom: '1rem', padding: '0 2rem' }}>🔥 EXCLUSIVE DEALS 🔥</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', padding: '0 2rem' }}>Limited time offers you can't resist!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 0, width: '100%' }}>
        {offers.map(offer => (
          <div 
            key={offer.id} 
            style={{
              position: 'relative',
              height: '400px',
              backgroundImage: `url(${offer.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid #d4af37',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              zIndex: 2,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              {offer.badge}
            </div>
            
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
              padding: '3rem 2rem 2rem',
              color: 'white'
            }}>
              <h2 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{offer.title}</h2>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b6b', marginBottom: '0.5rem' }}>{offer.discount}</div>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.9 }}>{offer.description}</p>
              <p style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 'bold' }}>⏰ {offer.validUntil}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default SpecialOffers;