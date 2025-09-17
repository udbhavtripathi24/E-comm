import React, { useState, useEffect } from 'react';

// Custom hook for cart functionality
export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    setCartTotal(total);
  }, [cartItems]);

  return {
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0)
  };
};

// Custom hook for product filtering
export const useProductFilter = (products) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    colors: [],
    brands: [],
    sortBy: 'name',
    searchTerm: ''
  });

  const filteredProducts = products.filter(product => {
    // Price filter
    if (product.currentPrice < filters.priceRange[0] || product.currentPrice > filters.priceRange[1]) {
      return false;
    }

    // Color filter
    if (filters.colors.length > 0 && !filters.colors.some(color => product.colors.includes(color))) {
      return false;
    }

    // Brand filter
    if (filters.brands.length > 0 && !filters.brands.some(brand => product.name.toLowerCase().includes(brand.toLowerCase()))) {
      return false;
    }

    // Search filter
    if (filters.searchTerm && !product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.currentPrice - b.currentPrice;
      case 'price-high':
        return b.currentPrice - a.currentPrice;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return b.discount - a.discount;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      colors: [],
      brands: [],
      sortBy: 'name',
      searchTerm: ''
    });
  };

  return {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters
  };
};

// Custom hook for pagination
export const usePagination = (items, itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
};

// Wishlist functionality
export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    wishlistCount: wishlist.length
  };
};

// Local storage utilities
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Animation utilities
export const useAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.6s ease-out'
  };

  const slideIn = {
    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.5s ease-out'
  };

  return { fadeIn, slideIn, isVisible };
};
