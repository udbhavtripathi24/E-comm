import React from 'react';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { getProductsByCategory } from '../data/products';

const Belts = () => {
  const belts = getProductsByCategory('belts');

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Belts</h1>
          <p className="page-description">
            Complete your look with our selection of premium leather and designer belts.
          </p>
        </div>
        <ProductGrid products={belts} showControls={true} />
      </div>
    </div>
  );
};

export default Belts;
