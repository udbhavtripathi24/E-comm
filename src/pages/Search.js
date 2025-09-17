import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import { searchProducts } from '../data/products';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const searchResults = searchProducts(query);

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Search Results</h1>
          {query ? (
            <p className="page-description">
              Showing results for "{query}" - {searchResults.length} item(s) found
            </p>
          ) : (
            <p className="page-description">
              Please enter a search term to find products
            </p>
          )}
        </div>
        
        {searchResults.length > 0 ? (
          <ProductGrid products={searchResults} showControls={true} />
        ) : query ? (
          <div className="no-results">
            <h2>No products found</h2>
            <p>Try searching with different keywords or browse our categories.</p>
          </div>
        ) : (
          <div className="search-prompt">
            <h2>Search Products</h2>
            <p>Use the search bar in the header to find products by name, brand, or description.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
