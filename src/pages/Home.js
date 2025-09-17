import React from 'react';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { getHotProducts } from '../data/products';

const Home = () => {
  const hotProducts = getHotProducts();

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Banner />
        <ProductGrid products={hotProducts} showControls={true} />
      </div>
    </div>
  );
};

export default Home;
