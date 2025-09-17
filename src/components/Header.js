import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useCart } from './InteractiveFeatures';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartTotal, cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <h1>E-Comm</h1>
          </Link>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  to="/bags" 
                  className={`nav-link ${isActive('/bags') ? 'active' : ''}`}
                >
                  BAG
                </Link>
              </li>
              <li>
                <Link 
                  to="/sneakers" 
                  className={`nav-link ${isActive('/sneakers') ? 'active' : ''}`}
                >
                  SNEAKERS
                </Link>
              </li>
              <li>
                <Link 
                  to="/belts" 
                  className={`nav-link ${isActive('/belts') ? 'active' : ''}`}
                >
                  BELT
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side icons */}
          <div className="header-right">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-icon">
                <FaSearch />
              </button>
            </form>
            
            <div className="user-icon">
              <FaUser />
            </div>
            
            <Link to="/cart" className="cart-section">
              <FaShoppingCart className="cart-icon" />
              <span className="cart-text">
                {cartCount > 0 ? `${cartCount} Items` : 'Items'} ${cartTotal.toFixed(2)}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
