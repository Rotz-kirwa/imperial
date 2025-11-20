import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart, items, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');

  const categories = [
    { id: 'whiskey', name: 'Whiskey', image: 'https://i.pinimg.com/736x/ca/f7/f1/caf7f1c5a49a09019272a1392fa04074.jpg' },
    { id: 'vodka', name: 'Vodka', image: 'https://i.pinimg.com/736x/cc/83/82/cc8382fc4c6a8cc4a29befb55bfee7f5.jpg' },
    { id: 'rum', name: 'Rum', image: 'https://i.pinimg.com/1200x/e4/c2/8a/e4c28a21b7b7038f4e05cb1b0e718039.jpg' },
    { id: 'wine', name: 'Wine', image: 'https://i.pinimg.com/736x/65/8a/4c/658a4c78604d68ce2dd84ecc6b4e42c3.jpg' },
    { id: 'beer', name: 'Beer', image: 'https://i.pinimg.com/1200x/1c/39/01/1c39013280b0864ee8dd95eb46c044e8.jpg' },
    { id: 'softdrinks', name: 'Soft Drinks' }
  ];

  const products = [
    // Whiskey Products
    { id: 1, name: 'Johnnie Walker Black Label', category: 'whiskey', price: 11500, brand: 'Johnnie Walker', image: 'https://i.pinimg.com/736x/7b/4c/ae/7b4caee55b20cf5ed49d37593c1c7f70.jpg', description: '12 years aged, rich and smooth with hints of smoke' },
    { id: 2, name: 'Jameson Irish Whiskey', category: 'whiskey', price: 8900, brand: 'Jameson', image: 'https://i.pinimg.com/1200x/a3/ec/3c/a3ec3c037a1b4b612fc8add34c04c67c.jpg', description: 'Triple distilled Irish whiskey, smooth and balanced' },
    { id: 3, name: 'Jack Daniels Old No.7', category: 'whiskey', price: 9500, brand: 'Jack Daniels', image: 'https://i.pinimg.com/736x/28/30/15/2830151680726628df4d7e62e0170979.jpg', description: 'Tennessee whiskey, charcoal mellowed for smoothness' },
    { id: 4, name: 'Macallan 12 Year', category: 'whiskey', price: 18500, brand: 'Macallan', image: 'https://i.pinimg.com/736x/f0/d2/c0/f0d2c0146b870834541007858168ada4.jpg', description: 'Single malt Scotch, sherry oak casks, rich and fruity' },
    { id: 5, name: 'Glenfiddich 15 Year', category: 'whiskey', price: 15200, brand: 'Glenfiddich', image: 'https://i.pinimg.com/1200x/25/92/9a/25929a8af62777ee4d39c8368651af3e.jpg', description: 'Solera aged single malt, complex and warming' },
    { id: 6, name: 'Chivas Regal 18', category: 'whiskey', price: 22000, brand: 'Chivas Regal', image: 'https://i.pinimg.com/1200x/0f/77/71/0f77719910d15733a9e6bdd0450d44d1.jpg', description: '18 years aged blend, luxurious and sophisticated' },
    { id: 7, name: 'Ballantines Finest', category: 'whiskey', price: 6800, brand: 'Ballantines', image: 'https://i.pinimg.com/736x/83/8d/f6/838df69f55770068096cfc98fc1b3bfd.jpg', description: 'Blended Scotch whisky, smooth and mellow' },
    { id: 8, name: 'Crown Royal', category: 'whiskey', price: 12500, brand: 'Crown Royal', image: 'https://i.pinimg.com/736x/e0/b6/e2/e0b6e2f8f569ed387c95864359d402c7.jpg', description: 'Canadian whisky, smooth and refined with vanilla notes' },
    { id: 9, name: 'Glenlivet 12 Year', category: 'whiskey', price: 14800, brand: 'Glenlivet', image: 'https://i.pinimg.com/736x/39/62/42/396242b657ca1f8abace52cd7a79d577.jpg', description: 'Single malt Scotch, fresh and fruity with honey sweetness' },
    { id: 10, name: 'Hennessy VS', category: 'whiskey', price: 16500, brand: 'Hennessy', image: 'https://i.pinimg.com/1200x/7e/fe/d5/7efed573a5d8bbc9f217b76fb285bd32.jpg', description: 'Cognac blend, bold and fragrant with oak notes' },
    { id: 11, name: 'Dewar\'s White Label', category: 'whiskey', price: 7200, brand: 'Dewars', image: 'https://i.pinimg.com/736x/72/c1/20/72c1209d49ffd21b21c8bf108ae243b7.jpg', description: 'Blended Scotch whisky, light and smooth' },
    { id: 12, name: 'Bushmills Original', category: 'whiskey', price: 8500, brand: 'Bushmills', image: 'https://i.pinimg.com/736x/04/c8/ef/04c8ef3166026966d5db766530872b1a.jpg', description: 'Irish whiskey, triple distilled for exceptional smoothness' },
    { id: 13, name: 'Red Label', category: 'whiskey', price: 5800, brand: 'Johnnie Walker', image: 'https://i.pinimg.com/736x/20/9b/4d/209b4d0818c812b15b22a497a08123a6.jpg', description: 'Blended Scotch whisky, bold and characterful' },
    { id: 14, name: 'Blue Label', category: 'whiskey', price: 35000, brand: 'Johnnie Walker', image: 'https://i.pinimg.com/1200x/3f/51/82/3f5182c52bf35a4b71125e6871687a8b.jpg', description: 'Ultra-premium blend, rare and exceptional quality' },
    
    // Vodka Products
    { id: 15, name: 'Smirnoff Red Label', category: 'vodka', price: 4500, brand: 'Smirnoff', image: 'https://i.pinimg.com/736x/cc/83/82/cc8382fc4c6a8cc4a29befb55bfee7f5.jpg', description: 'Classic premium vodka, smooth and clean' },
    { id: 16, name: 'Absolut Original', category: 'vodka', price: 5200, brand: 'Absolut', image: 'https://i.pinimg.com/736x/0b/04/91/0b0491a22292b0c33beac7b241298a4d.jpg', description: 'Swedish vodka, rich and full-bodied character' },
    { id: 17, name: 'Grey Goose', category: 'vodka', price: 8900, brand: 'Grey Goose', image: 'https://i.pinimg.com/736x/ff/8d/6f/ff8d6f75c03a45e4c82f6746fa7bfba0.jpg', description: 'French premium vodka, exceptionally smooth' },
    { id: 18, name: 'Beluga Noble', category: 'vodka', price: 12500, brand: 'Beluga', image: 'https://i.pinimg.com/1200x/b4/a1/93/b4a1935f497940eb3603ff9b4ca7a65e.jpg', description: 'Russian luxury vodka, crystal clear purity' },
    { id: 19, name: 'Ciroc Ultra Premium', category: 'vodka', price: 7800, brand: 'Ciroc', image: 'https://i.pinimg.com/736x/e9/5a/78/e95a785752d95e6f34956b20c3528791.jpg', description: 'French grape vodka, smooth and refined' },
    { id: 20, name: 'Ketel One', category: 'vodka', price: 6200, brand: 'Ketel One', image: 'https://i.pinimg.com/736x/c0/a6/64/c0a664030e0157f50d9641fac1409e29.jpg', description: 'Dutch vodka, crisp and sophisticated' },
    { id: 21, name: 'Titos Handmade', category: 'vodka', price: 5800, brand: 'Titos', image: 'https://i.pinimg.com/736x/69/25/ee/6925ee4fb2dd933df8585536d46208b3.jpg', description: 'American craft vodka, gluten-free and smooth' },
    { id: 26, name: 'Skyy Vodka', category: 'vodka', price: 4200, brand: 'Skyy', image: 'https://i.pinimg.com/736x/95/cd/5f/95cd5f4e68b8a272c117c41fd5753602.jpg', description: 'American premium vodka, quadruple distilled' },
    { id: 27, name: 'Stolichnaya Elite', category: 'vodka', price: 6800, brand: 'Stolichnaya', image: 'https://i.pinimg.com/736x/4b/d5/1f/4bd51f2c3a556dffc352bf2583888a29.jpg', description: 'Russian premium vodka, freeze-filtered' },
    { id: 28, name: 'Belvedere Pure', category: 'vodka', price: 9500, brand: 'Belvedere', image: 'https://i.pinimg.com/736x/2b/dd/f1/2bddf1f4754c150bac59d91169ec86b3.jpg', description: 'Polish luxury vodka, rye-based smoothness' },
    { id: 29, name: 'Finlandia Classic', category: 'vodka', price: 4800, brand: 'Finlandia', image: 'https://i.pinimg.com/736x/0c/64/de/0c64def9521e4f3b2cc5388f0a31656d.jpg', description: 'Finnish vodka, glacial spring water purity' },
    { id: 30, name: 'Russian Standard', category: 'vodka', price: 3900, brand: 'Russian Standard', image: 'https://i.pinimg.com/736x/70/32/2c/70322c6e466f8a87c06df227c8d39c45.jpg', description: 'Premium Russian vodka, winter wheat base' },
    { id: 31, name: 'Pinnacle Original', category: 'vodka', price: 3500, brand: 'Pinnacle', image: 'https://i.pinimg.com/736x/97/dd/17/97dd1767f3f33d4cb5f5060b004a3f50.jpg', description: 'French vodka, five-times distilled smoothness' },
    
    // Rum Products
    { id: 22, name: 'Captain Morgan Original', category: 'rum', price: 4500, brand: 'Captain Morgan', image: 'https://i.pinimg.com/1200x/e4/c2/8a/e4c28a21b7b7038f4e05cb1b0e718039.jpg', description: 'Spiced rum with vanilla and caramel notes' },
    { id: 32, name: 'Bacardi Superior', category: 'rum', price: 3800, brand: 'Bacardi', image: 'https://i.pinimg.com/1200x/52/f1/91/52f19113f95c8e598a12dd2230b4222c.jpg', description: 'White rum, light and mixable' },
    { id: 33, name: 'Havana Club 7 Year', category: 'rum', price: 6200, brand: 'Havana Club', image: 'https://i.pinimg.com/736x/ef/4b/aa/ef4baaf27f0c39e9c6f5ef9db09fa909.jpg', description: 'Cuban aged rum, rich and complex' },
    { id: 34, name: 'Malibu Coconut', category: 'rum', price: 3200, brand: 'Malibu', image: 'https://i.pinimg.com/736x/eb/a6/41/eba64190fea2a700570802e49143714f.jpg', description: 'Coconut flavored rum, tropical taste' },
    { id: 35, name: 'Kraken Black Spiced', category: 'rum', price: 4800, brand: 'Kraken', image: 'https://i.pinimg.com/736x/86/a6/64/86a664c6ce5ba3875c144ec64ba31ec9.jpg', description: 'Dark spiced rum, bold and intense' },
    { id: 36, name: 'Mount Gay Eclipse', category: 'rum', price: 5500, brand: 'Mount Gay', image: 'https://i.pinimg.com/736x/3c/f6/f4/3cf6f471055867b3cc495977887859a4.jpg', description: 'Barbados rum, smooth and balanced' },
    { id: 37, name: 'Sailor Jerry Spiced', category: 'rum', price: 4200, brand: 'Sailor Jerry', image: 'https://i.pinimg.com/736x/9e/3d/f0/9e3df00f435feadf99c4c7e2ecfff4f6.jpg', description: 'Navy strength spiced rum, bold flavor' },
    { id: 38, name: 'Appleton Estate 12', category: 'rum', price: 7800, brand: 'Appleton Estate', image: 'https://i.pinimg.com/1200x/0f/25/2d/0f252df44d8772812b1f6a54330c750c.jpg', description: 'Jamaican aged rum, premium quality' },
    { id: 39, name: 'Diplomatico Reserva', category: 'rum', price: 8500, brand: 'Diplomatico', image: 'https://i.pinimg.com/736x/67/4f/37/674f378abce8aafde6e045de6c9e6e5f.jpg', description: 'Venezuelan rum, sweet and smooth' },
    { id: 40, name: 'Plantation 3 Stars', category: 'rum', price: 4600, brand: 'Plantation', image: 'https://i.pinimg.com/736x/8a/12/57/8a1257356bbae6247f7ae71acdac2b85.jpg', description: 'White rum blend, crisp and clean' },
    { id: 41, name: 'Zacapa 23', category: 'rum', price: 12500, brand: 'Zacapa', image: 'https://i.pinimg.com/736x/49/e3/a4/49e3a4e70bf95f796a355475aa5027f8.jpg', description: 'Guatemalan premium rum, aged 23 years' },
    { id: 42, name: 'Flor de Cana 12', category: 'rum', price: 6800, brand: 'Flor de Cana', image: 'https://i.pinimg.com/736x/67/b4/66/67b466a045b98975b8073bdfffa573e9.jpg', description: 'Nicaraguan rum, 12 years aged' },
    { id: 43, name: 'Bumbu Original', category: 'rum', price: 5200, brand: 'Bumbu', image: 'https://i.pinimg.com/736x/70/98/75/709875a90a2aa03c2b941b38fc9e2675.jpg', description: 'Barbados craft rum, spiced and smooth' },
    
    // Wine Products
    { id: 44, name: 'Moet & Chandon', category: 'wine', price: 8500, brand: 'Moet & Chandon', image: 'https://i.pinimg.com/736x/65/8a/4c/658a4c78604d68ce2dd84ecc6b4e42c3.jpg', description: 'Premium champagne, elegant and refined' },
    { id: 47, name: 'Dom Perignon', category: 'wine', price: 25000, brand: 'Dom Perignon', image: 'https://i.pinimg.com/1200x/42/66/dc/4266dcc101aba9b36c07452406905b7e.jpg', description: 'Luxury champagne, prestige cuvée' },
    { id: 48, name: 'Hennessy Paradis', category: 'wine', price: 45000, brand: 'Hennessy', image: 'https://i.pinimg.com/736x/0a/3e/7c/0a3e7c03988e01a4f23b666c50ad3a0e.jpg', description: 'Ultra-premium cognac, exceptional blend' },
    { id: 49, name: 'Remy Martin XO', category: 'wine', price: 18500, brand: 'Remy Martin', image: 'https://i.pinimg.com/736x/07/ad/bf/07adbf03f4de9b029209dbf9adac1b54.jpg', description: 'Extra old cognac, rich and complex' },
    { id: 50, name: 'Martell Cordon Bleu', category: 'wine', price: 12000, brand: 'Martell', image: 'https://i.pinimg.com/736x/6d/cf/9a/6dcf9abcfc21b98f6843016a99b1fd0e.jpg', description: 'Premium cognac, smooth and balanced' },
    { id: 51, name: 'Veuve Clicquot', category: 'wine', price: 7200, brand: 'Veuve Clicquot', image: 'https://i.pinimg.com/1200x/d4/a7/63/d4a763c0a588449864be59e0ce156e2f.jpg', description: 'Yellow label champagne, crisp and fresh' },
    { id: 52, name: 'Krug Grande Cuvée', category: 'wine', price: 22000, brand: 'Krug', image: 'https://i.pinimg.com/1200x/ea/05/84/ea05843d6267194d840fed4d89e766c9.jpg', description: 'Prestige champagne, exceptional quality' },
    { id: 53, name: 'Perrier Jouet', category: 'wine', price: 6800, brand: 'Perrier Jouet', image: 'https://i.pinimg.com/736x/12/36/cf/1236cfed7d5f28de44a502fe85467f39.jpg', description: 'Elegant champagne, floral and delicate' },
    { id: 54, name: 'Louis Roederer', category: 'wine', price: 9500, brand: 'Louis Roederer', image: 'https://i.pinimg.com/736x/44/cb/e6/44cbe6ccaf547269811e6eeb18ad495a.jpg', description: 'Premium champagne, refined taste' },
    { id: 55, name: 'Armand de Brignac', category: 'wine', price: 35000, brand: 'Armand de Brignac', image: 'https://i.pinimg.com/1200x/c9/30/09/c930099fa9e13411971b9e6412f49076.jpg', description: 'Luxury champagne, gold bottle prestige' },
    { id: 56, name: 'Bollinger Special', category: 'wine', price: 8200, brand: 'Bollinger', image: 'https://i.pinimg.com/1200x/0b/15/96/0b15965e7e7508cce25c314dea2b426d.jpg', description: 'Special cuvée champagne, rich and full' },
    { id: 59, name: 'Cristal Champagne', category: 'wine', price: 28000, brand: 'Louis Roederer', image: 'https://i.pinimg.com/1200x/40/3f/dd/403fdd187e3365a7e145104383d1b71a.jpg', description: 'Ultra-premium champagne, crystal clear excellence' },
    
    // Beer Products
    { id: 57, name: 'Heineken Lager', category: 'beer', price: 350, brand: 'Heineken', image: 'https://i.pinimg.com/1200x/1c/39/01/1c39013280b0864ee8dd95eb46c044e8.jpg', description: 'Premium Dutch lager, crisp and refreshing' },
    { id: 60, name: 'Corona Extra', category: 'beer', price: 320, brand: 'Corona', image: 'https://i.pinimg.com/736x/e1/72/d1/e172d1f14d71addcbe1369a2e2327906.jpg', description: 'Mexican beer, light and smooth' },
    { id: 61, name: 'Budweiser King', category: 'beer', price: 280, brand: 'Budweiser', image: 'https://i.pinimg.com/736x/e3/6c/24/e36c24b2538e04a6a1120d37a3d58732.jpg', description: 'American lager, classic taste' },
    { id: 62, name: 'Stella Artois', category: 'beer', price: 380, brand: 'Stella Artois', image: 'https://i.pinimg.com/736x/29/25/57/29255756b3bff8ec0417862e5dcfdeda.jpg', description: 'Belgian premium lager, sophisticated' },
    { id: 63, name: 'Carlsberg Pilsner', category: 'beer', price: 300, brand: 'Carlsberg', image: 'https://i.pinimg.com/1200x/4a/00/e9/4a00e932408db5426c2e269d571d3dab.jpg', description: 'Danish pilsner, perfectly balanced' },
    { id: 64, name: 'Guinness Stout', category: 'beer', price: 420, brand: 'Guinness', image: 'https://i.pinimg.com/1200x/45/3e/61/453e615f27cecfb5abee90eee00169a0.jpg', description: 'Irish stout, rich and creamy' },
    { id: 65, name: 'Tusker Lager', category: 'beer', price: 250, brand: 'Tusker', image: 'https://i.pinimg.com/736x/65/84/b8/6584b81a8701f908216bdf6c93636e25.jpg', description: 'Kenyan premium lager, local favorite' },
    { id: 66, name: 'Pilsner Urquell', category: 'beer', price: 400, brand: 'Pilsner Urquell', image: 'https://i.pinimg.com/736x/21/f4/e2/21f4e2c8da8785ec3600dcb700b10853.jpg', description: 'Czech pilsner, original recipe' },
    { id: 67, name: 'Beck\'s Lager', category: 'beer', price: 340, brand: 'Becks', image: 'https://i.pinimg.com/1200x/86/5a/b9/865ab99f2564e6a4a65790b009492670.jpg', description: 'German beer, pure and crisp' },
    { id: 68, name: 'Peroni Nastro', category: 'beer', price: 360, brand: 'Peroni', image: 'https://i.pinimg.com/1200x/26/29/93/2629936843b84340406c0b2031695ab0.jpg', description: 'Italian premium lager, elegant taste' },
    { id: 70, name: 'White Cap Lager', category: 'beer', price: 270, brand: 'White Cap', image: 'https://i.pinimg.com/736x/1d/87/5d/1d875d81ac0437826ab5c15646eb85fe.jpg', description: 'Kenyan lager, smooth and refreshing' },
    { id: 71, name: 'Pilsner Malt', category: 'beer', price: 290, brand: 'Pilsner', image: 'https://i.pinimg.com/736x/98/07/c5/9807c574128e4fda86fd85cad306fca4.jpg', description: 'Kenyan pilsner, crisp and clean' },

    // Soft Drinks Products
    { id: 72, name: 'Coca Cola', category: 'softdrinks', price: 120, brand: 'Coca Cola', image: 'https://i.pinimg.com/736x/35/e8/6a/35e86afbc1b76a9dab4cb3215f3cb0d1.jpg', description: 'Classic cola, refreshing taste' },
    { id: 73, name: 'Pepsi Cola', category: 'softdrinks', price: 110, brand: 'Pepsi', image: 'https://i.pinimg.com/1200x/14/2d/1a/142d1a892a2f6d62fbbb2672d272b2ff.jpg', description: 'Bold cola flavor, crisp and refreshing' },
    { id: 74, name: 'Sprite', category: 'softdrinks', price: 100, brand: 'Sprite', image: 'https://i.pinimg.com/736x/63/a0/07/63a007b4941b619a04af00f86d7f379b.jpg', description: 'Lemon-lime soda, clear and crisp' },
    { id: 75, name: 'Fanta Orange', category: 'softdrinks', price: 100, brand: 'Fanta', image: 'https://i.pinimg.com/736x/fe/06/db/fe06db007bf295afbfaf2874ba4dcf4e.jpg', description: 'Orange flavored soda, fruity and sweet' },
    { id: 76, name: 'Mountain Dew', category: 'softdrinks', price: 130, brand: 'Mountain Dew', image: 'https://i.pinimg.com/1200x/0c/e4/a6/0ce4a694c065d9005150f822467ef573.jpg', description: 'Citrus soda with caffeine, energizing' },
    { id: 77, name: 'Red Bull', category: 'softdrinks', price: 250, brand: 'Red Bull', image: 'https://i.pinimg.com/1200x/e7/b6/ab/e7b6ab528a44270c773cc53e18e4d9f6.jpg', description: 'Energy drink, gives you wings' },
    { id: 78, name: 'Monster Energy', category: 'softdrinks', price: 280, brand: 'Monster', image: 'https://i.pinimg.com/736x/59/36/6f/59366f5aced1151a24d80a1c60d26d97.jpg', description: 'High caffeine energy drink, unleash the beast' },
    { id: 79, name: 'Dasani Water', category: 'softdrinks', price: 80, brand: 'Dasani', image: 'https://i.pinimg.com/736x/e6/ae/e2/e6aee2e9db58e0a46cc1f90316ecd913.jpg', description: 'Purified water, clean and refreshing' },
    { id: 80, name: 'Minute Maid', category: 'softdrinks', price: 150, brand: 'Minute Maid', image: 'https://i.pinimg.com/1200x/ed/92/3e/ed923e5a01f3685bd1e25e789c3bface.jpg', description: 'Fruit juice, natural and delicious' },
    { id: 81, name: '7UP', category: 'softdrinks', price: 100, brand: '7UP', image: 'https://i.pinimg.com/736x/f8/84/ad/f884ad455d4324ddc2eb9c1f78a905c6.jpg', description: 'Lemon-lime soda, crisp and clean' },
    { id: 82, name: 'Lemonade', category: 'softdrinks', price: 120, brand: 'Fresh', image: 'https://i.pinimg.com/736x/b9/b5/8e/b9b58e650966f44bbf652539a07f7bff.jpg', description: 'Fresh lemonade, tangy and refreshing' }

  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = priceFilter === 'all' || 
      (priceFilter === 'under10000' && product.price < 10000) ||
      (priceFilter === '10000to20000' && product.price >= 10000 && product.price <= 20000) ||
      (priceFilter === 'over20000' && product.price > 20000);
    const brandMatch = brandFilter === 'all' || product.brand === brandFilter;
    
    return categoryMatch && priceMatch && brandMatch;
  });

  const brands = [...new Set(products.map(p => p.brand))];

  return (
    <div className="products-container">
      <h1>Featured Drinks</h1>
      
      {/* Filters */}
      <div className="filters">
        <select 
          value={priceFilter} 
          onChange={(e) => setPriceFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Prices</option>
          <option value="under10000">Under KSh 10,000</option>
          <option value="10000to20000">KSh 10,000 - 20,000</option>
          <option value="over20000">Over KSh 20,000</option>
        </select>
        
        <select 
          value={brandFilter} 
          onChange={(e) => setBrandFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div className="categories">
        <div 
          className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          <h3>All Products</h3>
        </div>
        {categories.map(category => (
          <div 
            key={category.id}
            className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <div className="product-price">KSh {product.price.toLocaleString()}</div>
              <div className="product-actions">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(product.id, (items.find(item => item.id === product.id)?.quantity || 0) - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-display">
                    {items.find(item => item.id === product.id)?.quantity || 0}
                  </span>
                  <button 
                    className="quantity-btn"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;