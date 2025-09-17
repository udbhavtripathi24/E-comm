import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa';
import { getProductById } from '../data/products';
import { useCart } from '../components/InteractiveFeatures';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} className="btn-primary">
          Go Back Home
        </button>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert('Please select a size');
      return;
    }
    
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    
    addToCart(cartItem);
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <FaArrowLeft /> Back
        </button>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="product-main-img"
              />
              {product.isHot && <div className="hot-badge">HOT</div>}
            </div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">({product.rating}) • {product.reviews} reviews</span>
            </div>

            <div className="product-pricing">
              <span className="current-price">${product.currentPrice}</span>
              <span className="original-price">${product.originalPrice}</span>
              <span className="discount-badge">{product.discount}% OFF</span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              {product.colors.length > 1 && (
                <div className="option-group">
                  <label>Color:</label>
                  <div className="color-options">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes.length > 1 && (
                <div className="option-group">
                  <label>Size:</label>
                  <div className="size-options">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="option-group">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              
              <button className="wishlist-btn">
                <FaHeart /> Add to Wishlist
              </button>
              
              <button className="share-btn">
                <FaShare /> Share
              </button>
            </div>

            <div className="product-features">
              <h3>Product Features</h3>
              <ul>
                <li>Premium quality materials</li>
                <li>Free shipping on orders over $50</li>
                <li>30-day return policy</li>
                <li>1-year warranty included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
