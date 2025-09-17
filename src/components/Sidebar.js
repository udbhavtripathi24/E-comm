import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([13.99, 75.99]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const hotDeals = [
    { name: 'Nike', count: null },
    { name: 'Adidas', count: 95 },
    { name: 'Vans', count: null },
    { name: 'All Stars', count: null }
  ];

  const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Green', value: '#16a34a' },
    { name: 'Blue', value: '#2563eb' },
    { name: 'White', value: '#ffffff' }
  ];

  const brands = [
    { name: 'Nike', count: null },
    { name: 'Adidas', count: null },
    { name: 'Siemens', count: null }
  ];

  const handleColorClick = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleBrandClick = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Hot Deals Section */}
        <div className="filter-section">
          <h3 className="filter-title">Hot Deals</h3>
          <ul className="filter-list">
            {hotDeals.map((deal, index) => (
              <li key={index} className="filter-item">
                <span className="filter-name">{deal.name}</span>
                {deal.count && <span className="filter-count">{deal.count}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Section */}
        <div className="filter-section">
          <h3 className="filter-title">Prices</h3>
          <div className="price-range">
            <div className="price-display">
              <span className="price-min">${priceRange[0]}</span>
              <span className="price-separator">-</span>
              <span className="price-max">${priceRange[1]}</span>
            </div>
            <div className="price-slider-container">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
                className="price-slider"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                className="price-slider"
              />
            </div>
          </div>
        </div>

        {/* Color Section */}
        <div className="filter-section">
          <h3 className="filter-title">Color</h3>
          <div className="color-grid">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColors.includes(color.name) ? 'selected' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorClick(color.name)}
              />
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div className="filter-section">
          <h3 className="filter-title">Brand</h3>
          <ul className="filter-list">
            {brands.map((brand, index) => (
              <li 
                key={index} 
                className={`filter-item ${selectedBrands.includes(brand.name) ? 'selected' : ''}`}
                onClick={() => handleBrandClick(brand.name)}
              >
                <span className="filter-name">{brand.name}</span>
                <span className="filter-count">{brand.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* More Button */}
        <button className="more-btn">MORE</button>
      </div>
    </aside>
  );
};

export default Sidebar;
