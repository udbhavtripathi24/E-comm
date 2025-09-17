import React from 'react';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { getProductsByCategory } from '../data/products';

const Sneakers = () => {
  const sneakers = getProductsByCategory('sneakers');

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Sneakers</h1>
          <p className="page-description">
            Discover our collection of premium sneakers from top brands like Nike, Adidas, and Vans.
          </p>
        </div>
        <ProductGrid products={sneakers} showControls={true} />
      </div>
    </div>
  );
};

export default Sneakers;
