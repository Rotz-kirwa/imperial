const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Perfect Whiskey Evening',
      excerpt: 'Creating the ultimate whiskey tasting experience at home with friends and family.',
      date: 'December 20, 2024',
      image: 'https://i.pinimg.com/736x/0e/a2/ad/0ea2ad9fdd65586708627c57fd1312ac.jpg',
      content: 'Transform your living room into a sophisticated whiskey lounge. Learn how to set the perfect ambiance with proper glassware, lighting, and the art of slow sipping...'
    },
    {
      id: 2,
      title: 'Cocktail Culture in Nairobi',
      excerpt: 'Exploring the vibrant cocktail scene and mixology trends taking over Kenya\'s capital.',
      date: 'December 18, 2024',
      image: 'https://i.pinimg.com/1200x/a1/7c/9c/a17c9cea2ec25ddaab69e349d3b334a1.jpg',
      content: 'From rooftop bars to hidden speakeasies, Nairobi\'s cocktail culture is booming. Discover the local ingredients and international techniques shaping our drinks...'
    },
    {
      id: 3,
      title: 'Champagne Celebrations',
      excerpt: 'Why every milestone deserves a bottle of bubbly and how to choose the right one.',
      date: 'December 15, 2024',
      image: 'https://i.pinimg.com/1200x/7f/b9/2c/7fb92c12f7d5981db4d0f25b3cc93dec.jpg',
      content: 'From graduations to promotions, champagne marks life\'s special moments. Learn the difference between Champagne, Prosecco, and Cava, and when to pop each cork...'
    },
    {
      id: 4,
      title: 'The Gentleman\'s Bar Setup',
      excerpt: 'Essential bottles and tools every sophisticated home bar needs for entertaining.',
      date: 'December 12, 2024',
      image: 'https://i.pinimg.com/1200x/51/60/45/5160455d288cae0c60554ff0a73523c0.jpg',
      content: 'Build the perfect home bar with our curated selection of must-have spirits, premium glassware, and professional bartending tools that impress every guest...'
    },
    {
      id: 5,
      title: 'Wine & Dine Experiences',
      excerpt: 'Pairing fine wines with Kenyan cuisine for unforgettable dining moments.',
      date: 'December 10, 2024',
      image: 'https://i.pinimg.com/1200x/58/fd/f9/58fdf97af8f59b59806cdf4bf6960171.jpg',
      content: 'Discover how international wines complement local flavors. From nyama choma to coastal seafood, find the perfect wine pairing for every Kenyan dish...'
    },
    {
      id: 6,
      title: 'Craft Beer Revolution',
      excerpt: 'How local breweries are changing Kenya\'s beer landscape with innovative flavors.',
      date: 'December 8, 2024',
      image: 'https://i.pinimg.com/736x/61/28/4f/61284fae4195db0604ea960b28d8fae6.jpg',
      content: 'Meet the passionate brewers creating unique beers with local ingredients. From honey ales to coffee stouts, explore Kenya\'s exciting craft beer movement...'
    },
    {
      id: 7,
      title: 'Rum Stories from the Caribbean',
      excerpt: 'The rich history and diverse flavors of rum from different Caribbean islands.',
      date: 'December 5, 2024',
      image: 'https://i.pinimg.com/736x/e4/e9/68/e4e968b5e32aed53792acaf32db68c1e.jpg',
      content: 'Journey through the Caribbean islands and discover how each produces distinct rum flavors. From Jamaican spice to Cuban smoothness, taste the tropical heritage...'
    },
    {
      id: 8,
      title: 'Vodka: From Russia with Love',
      excerpt: 'Understanding the purity and craftsmanship behind premium vodka production.',
      date: 'December 3, 2024',
      image: 'https://i.pinimg.com/736x/6e/13/4b/6e134b29c8f88b4eefca55309ab90212.jpg',
      content: 'Explore the meticulous process of vodka distillation and filtration. Learn why water quality, grain selection, and distillation methods create vastly different vodkas...'
    },
    {
      id: 9,
      title: 'Holiday Party Planning',
      excerpt: 'Creating memorable celebrations with the right drinks for every guest preference.',
      date: 'November 30, 2024',
      image: 'https://i.pinimg.com/736x/91/af/03/91af038d5d77cf9da3308f5f35774a0f.jpg',
      content: 'Plan the perfect holiday gathering with our guide to stocking your bar. From signature cocktails to non-alcoholic options, ensure every guest feels celebrated...'
    },
    {
      id: 10,
      title: 'Whiskey Investment Guide',
      excerpt: 'Building a whiskey collection that appreciates in value while bringing joy.',
      date: 'November 28, 2024',
      image: 'https://i.pinimg.com/1200x/d5/13/b7/d513b728c16dc8bc6de8cf95aae69189.jpg',
      content: 'Learn which whiskeys hold their value and appreciate over time. From limited editions to aged single malts, discover the art of collecting liquid gold...'
    },
    {
      id: 11,
      title: 'Luxury Spirits Collection',
      excerpt: 'Exploring the world of ultra-premium spirits and what makes them extraordinary.',
      date: 'November 25, 2024',
      image: 'https://i.pinimg.com/1200x/0f/3d/82/0f3d82963c78c4d9c85792eea284eba0.jpg',
      content: 'Dive into the realm of luxury spirits where craftsmanship meets exclusivity. Discover rare bottles that represent the pinnacle of distillation artistry...'
    },
    {
      id: 12,
      title: 'Tequila & Mezcal Masterclass',
      excerpt: 'Understanding the difference between tequila and mezcal, and how to appreciate both.',
      date: 'November 22, 2024',
      image: 'https://i.pinimg.com/736x/7f/e6/04/7fe604f26198867387b1275a69767c03.jpg',
      content: 'Explore the agave spirits of Mexico, from smooth tequilas to smoky mezcals. Learn about production methods, regional differences, and perfect serving suggestions...'
    }
  ];

  return (
    <div className="blog-container">
      <h1>Blog & Articles</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Discover the world of spirits, wines, and cocktails through our expert articles and guides.
      </p>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <img 
              src={post.image} 
              alt={post.title}
              className="blog-image"
            />
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button 
                className="cta-button" 
                style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#2c2c2c', borderRadius: '10px' }}>
        <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>Want to Contribute?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Have a great cocktail recipe or spirits knowledge to share? We'd love to feature your content on our blog!
        </p>
        <button className="cta-button">Submit Your Article</button>
      </div>
    </div>
  );
};

export default Blog;