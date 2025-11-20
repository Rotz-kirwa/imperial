import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p>Your cart is empty. Start shopping to add items!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            <h3>{item.name}</h3>
            <p>KSh {item.price.toLocaleString()} each</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              style={{ background: '#d4af37', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer' }}
            >
              <Minus size={16} />
            </button>
            
            <span>{item.quantity}</span>
            
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={{ background: '#d4af37', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer' }}
            >
              <Plus size={16} />
            </button>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ background: '#dc3545', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer', color: 'white' }}
            >
              <Trash2 size={16} />
            </button>
            
            <span style={{ fontWeight: 'bold', color: '#d4af37' }}>
              KSh {(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        </div>
      ))}
      
      <div className="cart-total">
        <h2>Total: KSh {getCartTotal().toLocaleString()}</h2>
        <button 
          className="checkout-button"
          onClick={() => {
            const phoneNumber = "254991260817";
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
          Proceed to Checkout
        </button>
        <button 
          onClick={clearCart}
          style={{ 
            background: '#dc3545', 
            color: 'white', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;