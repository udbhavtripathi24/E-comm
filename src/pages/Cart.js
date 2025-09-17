import React from 'react';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/InteractiveFeatures';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Checkout functionality would be implemented here!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-header">
            <button onClick={() => navigate('/')} className="back-btn">
              <FaArrowLeft /> Continue Shopping
            </button>
            <h1 className="page-title">Shopping Cart</h1>
          </div>
          
          <div className="empty-cart">
            <div className="empty-cart-content">
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <button onClick={() => navigate('/')} className="btn-primary">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <button onClick={() => navigate('/')} className="back-btn">
            <FaArrowLeft /> Continue Shopping
          </button>
          <h1 className="page-title">Shopping Cart</h1>
          <p className="cart-count">{cartItems.length} item(s) in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-brand">{item.brand}</p>
                  {item.selectedSize && (
                    <p className="item-size">Size: {item.selectedSize}</p>
                  )}
                  {item.selectedColor && (
                    <div className="item-color">
                      <span>Color: </span>
                      <div 
                        className="color-swatch"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </div>
                  )}
                </div>

                <div className="item-quantity">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="item-price">
                  <span className="price">${(item.currentPrice * item.quantity).toFixed(2)}</span>
                  {item.quantity > 1 && (
                    <span className="unit-price">${item.currentPrice} each</span>
                  )}
                </div>

                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-btn"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-content">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>

              <button onClick={handleCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>

              <div className="payment-methods">
                <p>We accept:</p>
                <div className="payment-icons">
                  <span>💳</span>
                  <span>🏦</span>
                  <span>📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
