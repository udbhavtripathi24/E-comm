import React from 'react';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { getProductsByCategory } from '../data/products';

const Bags = () => {
  const bags = getProductsByCategory('bags');

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Bags & Accessories</h1>
          <p className="page-description">
            Explore our curated collection of premium bags, wallets, and accessories for every occasion.
          </p>
        </div>
        <ProductGrid products={bags} showControls={true} />
      </div>
    </div>
  );
};

export default Bags;
