import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-text">
            <h2 className="banner-title">Adidas Men Running Sneakers</h2>
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
          <div className="banner-image">
            <div className="sneaker-image">
              {/* This will be a CSS-created sneaker illustration */}
              <div className="sneaker">
                <div className="sneaker-body"></div>
                <div className="sneaker-sole"></div>
                <div className="sneaker-laces"></div>
                <div className="sneaker-logo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
