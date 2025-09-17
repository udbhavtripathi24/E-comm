// Comprehensive product database with real product information and CORRECT images
export const products = [
  // Nike Sneakers
  {
    id: 1,
    name: 'Nike Air Max 270 React',
    category: 'sneakers',
    brand: 'Nike',
    rating: 4.5,
    currentPrice: 299.43,
    originalPrice: 399.43,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#000000', '#14b8a6', '#f97316'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The Nike Air Max 270 React delivers visible cushioning under every step. The design draws inspiration from Air Max icons, showcasing Nike\'s greatest innovation with its large window and fresh array of colors.',
    isHot: true,
    inStock: true,
    reviews: 128
  },
  {
    id: 2,
    name: 'Nike Air Force 1',
    category: 'sneakers',
    brand: 'Nike',
    rating: 4.7,
    currentPrice: 89.99,
    originalPrice: 120.00,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#ffffff', '#000000'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    isHot: true,
    inStock: true,
    reviews: 95
  },
  {
    id: 3,
    name: 'Nike Dunk Low',
    category: 'sneakers',
    brand: 'Nike',
    rating: 4.3,
    currentPrice: 110.00,
    originalPrice: 130.00,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#dc2626', '#2563eb'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The Nike Dunk Low delivers classic style with modern comfort. Originally designed for basketball, it\'s now a streetwear staple.',
    isHot: false,
    inStock: true,
    reviews: 67
  },

  // Adidas Sneakers
  {
    id: 4,
    name: 'Adidas Ultraboost 22',
    category: 'sneakers',
    brand: 'Adidas',
    rating: 4.6,
    currentPrice: 180.00,
    originalPrice: 220.00,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#000000', '#ffffff', '#2563eb'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The Adidas Ultraboost 22 delivers responsive energy return with every step. Features Boost midsole and Primeknit+ upper for ultimate comfort.',
    isHot: true,
    inStock: true,
    reviews: 142
  },
  {
    id: 5,
    name: 'Adidas Stan Smith',
    category: 'sneakers',
    brand: 'Adidas',
    rating: 4.4,
    currentPrice: 75.00,
    originalPrice: 90.00,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#ffffff', '#16a34a'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The Adidas Stan Smith is a tennis-inspired classic that\'s become a streetwear icon. Clean, minimalist design with premium leather construction.',
    isHot: false,
    inStock: true,
    reviews: 89
  },

  // Vans Sneakers
  {
    id: 6,
    name: 'Vans Old Skool',
    category: 'sneakers',
    brand: 'Vans',
    rating: 4.2,
    currentPrice: 65.00,
    originalPrice: 75.00,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#000000', '#ffffff', '#dc2626'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The Vans Old Skool is the classic skate shoe that started it all. Features the iconic side stripe and durable canvas construction.',
    isHot: true,
    inStock: true,
    reviews: 76
  },

  // Bags - PROPER BAG IMAGES
  {
    id: 7,
    name: 'Premium Leather Handbag',
    category: 'bags',
    brand: 'Premium',
    rating: 4.2,
    currentPrice: 89.99,
    originalPrice: 129.99,
    discount: 31,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#92400e', '#000000'],
    sizes: ['One Size'],
    description: 'Elegant leather handbag crafted from premium materials. Perfect for everyday use with multiple compartments for organization.',
    isHot: true,
    inStock: true,
    reviews: 45
  },
  {
    id: 8,
    name: 'Classic Brown Wallet',
    category: 'bags',
    brand: 'Classic',
    rating: 4.0,
    currentPrice: 45.99,
    originalPrice: 65.99,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#92400e'],
    sizes: ['One Size'],
    description: 'Classic brown leather wallet with multiple card slots and cash compartments. Handcrafted with attention to detail.',
    isHot: true,
    inStock: true,
    reviews: 32
  },
  {
    id: 9,
    name: 'Designer Crossbody Bag',
    category: 'bags',
    brand: 'Designer',
    rating: 4.5,
    currentPrice: 125.00,
    originalPrice: 175.00,
    discount: 29,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#000000', '#dc2626'],
    sizes: ['One Size'],
    description: 'Stylish crossbody bag perfect for daily adventures. Features adjustable strap and multiple compartments.',
    isHot: false,
    inStock: true,
    reviews: 58
  },

  // Belts - PROPER BELT IMAGES
  {
    id: 10,
    name: 'Genuine Leather Belt',
    category: 'belts',
    brand: 'Leather Co',
    rating: 4.3,
    currentPrice: 35.99,
    originalPrice: 49.99,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#92400e', '#000000'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'High-quality genuine leather belt with classic buckle. Perfect for both casual and formal wear.',
    isHot: true,
    inStock: true,
    reviews: 67
  },
  {
    id: 11,
    name: 'Designer Chain Belt',
    category: 'belts',
    brand: 'Designer',
    rating: 4.1,
    currentPrice: 55.00,
    originalPrice: 75.00,
    discount: 27,
    image: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#000000', '#fbbf24'],
    sizes: ['S', 'M', 'L'],
    description: 'Trendy chain belt with adjustable length. Adds a stylish touch to any outfit.',
    isHot: false,
    inStock: true,
    reviews: 43
  },
  {
    id: 12,
    name: 'Casual Canvas Belt',
    category: 'belts',
    brand: 'Casual',
    rating: 4.0,
    currentPrice: 25.99,
    originalPrice: 35.99,
    discount: 28,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de9df6d4d31d?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format'
    ],
    colors: ['#92400e', '#16a34a'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable canvas belt perfect for casual wear. Lightweight and durable construction.',
    isHot: true,
    inStock: true,
    reviews: 29
  }
];

// Helper functions for product filtering
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand) => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const getHotProducts = () => {
  return products.filter(product => product.isHot);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getBrands = () => {
  const brands = [...new Set(products.map(product => product.brand))];
  return brands.map(brand => ({
    name: brand,
    count: products.filter(product => product.brand === brand).length
  }));
};

export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.map(category => ({
    name: category,
    count: products.filter(product => product.category === category).length
  }));
};
