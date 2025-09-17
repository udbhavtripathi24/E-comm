# E-Comm Frontend

A modern, responsive e-commerce frontend built with React, featuring sneakers and accessories. This project replicates the design from the provided image with enhanced functionality and improved user experience.

## 🚀 Features

### 🎨 Design & UI
- **Exact Design Replication**: Faithfully recreates the original design with modern enhancements
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Modern UI Components**: Clean, professional interface with smooth animations
- **CSS-Only Product Images**: Custom CSS illustrations for sneakers, bags, and wallets

### 🛍️ E-commerce Functionality
- **Product Grid**: Display products with ratings, prices, and discounts
- **Advanced Filtering**: Filter by price range, color, brand, and hot deals
- **Sorting Options**: Sort products by name, price, rating, or discount
- **Pagination**: Navigate through product pages
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist**: Save favorite products for later

### 🎯 Interactive Features
- **Real-time Filtering**: Instant product filtering as you adjust criteria
- **Price Range Slider**: Interactive price range selection
- **Color Selection**: Visual color picker with multiple selections
- **Brand Filtering**: Filter products by brand with item counts
- **Search Functionality**: Search products by name
- **Smooth Animations**: Hover effects and transitions throughout

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablet screens
- **Desktop Enhanced**: Rich experience on desktop screens
- **Touch-Friendly**: Optimized for touch interactions

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Advanced CSS with Flexbox, Grid, and animations
- **React Icons**: Beautiful icon library for UI elements
- **Custom Hooks**: Reusable logic for cart, filtering, and pagination
- **Local Storage**: Persistent data storage for cart and preferences

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecomm-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css          # Navigation header
│   ├── Sidebar.js & Sidebar.css        # Filter sidebar
│   ├── Banner.js & Banner.css          # Promotional banner
│   ├── ProductGrid.js & ProductGrid.css # Product display
│   ├── Footer.js & Footer.css          # Site footer
│   └── InteractiveFeatures.js          # Custom hooks
├── App.js & App.css                    # Main app component
├── index.js & index.css                # Entry point
└── README.md                           # This file
```

## 🎨 Component Overview

### Header
- **Logo**: E-Comm branding
- **Navigation**: HOME, BAG, SNEAKERS, BELT, CONTACT
- **Cart**: Shopping cart with item count and total
- **User Actions**: Search and profile icons

### Sidebar
- **Hot Deals**: Brand filters with item counts
- **Price Range**: Interactive slider ($13.99 - $75.99)
- **Color Filter**: Visual color picker with 7 colors
- **Brand Filter**: Nike, Adidas, Siemens with counts
- **More Button**: Expandable additional filters

### Banner
- **Promotional**: Adidas Men Running Sneakers
- **Call-to-Action**: "SHOP NOW" button
- **Visual**: CSS-created sneaker illustration
- **Gradient Background**: Teal gradient design

### Product Grid
- **Product Cards**: Image, name, rating, pricing
- **Hot Labels**: Special "HOT" badges
- **Star Ratings**: Visual 5-star rating system
- **Pricing**: Current price, original price, discount
- **Controls**: Sort by, show options, item count
- **Pagination**: Page navigation (1-5)

### Footer
- **Company Info**: E-Comm branding and description
- **Social Media**: Facebook and Twitter links
- **Contact**: Glasgow address
- **Links**: About Us, Privacy Policy, Terms & Conditions
- **Payment Methods**: Visa, Mastercard, Amex, PayPal icons

## 🎯 Key Features

### Filtering System
- **Price Range**: Dual-handle slider for price filtering
- **Color Selection**: Multiple color selection with visual feedback
- **Brand Filtering**: Checkbox-style brand selection
- **Hot Deals**: Quick access to popular brands
- **Real-time Updates**: Instant filtering without page reload

### Product Management
- **Dynamic Grid**: Responsive product grid layout
- **Sorting**: Multiple sorting options (name, price, rating, discount)
- **Pagination**: Efficient page navigation
- **Item Count**: Real-time item count display
- **Visual Feedback**: Hover effects and animations

### Shopping Experience
- **Cart Functionality**: Add/remove items with quantity management
- **Wishlist**: Save products for later purchase
- **Price Display**: Clear pricing with discounts
- **Rating System**: Visual star ratings
- **Product Images**: Custom CSS illustrations

## 🎨 Design Enhancements

### Visual Improvements
- **Modern Typography**: Inter font family for better readability
- **Color Scheme**: Professional blue and teal color palette
- **Shadows & Depth**: Subtle shadows for visual hierarchy
- **Animations**: Smooth transitions and hover effects
- **Icons**: React Icons for consistent iconography

### User Experience
- **Intuitive Navigation**: Clear navigation structure
- **Visual Feedback**: Hover states and active indicators
- **Responsive Design**: Seamless experience across devices
- **Accessibility**: Focus states and keyboard navigation
- **Performance**: Optimized rendering and smooth animations

## 🚀 Getting Started

1. **Run the application**
   ```bash
   npm start
   ```

2. **Explore the features**
   - Try the price range slider
   - Select different colors
   - Filter by brands
   - Sort products
   - Navigate through pages
   - Add items to cart

3. **Test responsiveness**
   - Resize your browser window
   - Test on mobile devices
   - Check tablet layout

## 🔧 Customization

### Adding New Products
Edit the `products` array in `ProductGrid.js` to add new items:

```javascript
const products = [
  {
    id: 7,
    name: 'New Product Name',
    rating: 4.5,
    currentPrice: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: 'product-image',
    isHot: true,
    colors: ['#000000', '#ffffff']
  }
];
```

### Modifying Colors
Update the color palette in `Sidebar.js`:

```javascript
const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  // Add more colors
];
```

### Styling Changes
- **Colors**: Modify CSS custom properties
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Customize transition durations
- **Typography**: Change font families and sizes

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from the provided e-commerce screenshot
- React community for excellent documentation
- React Icons for beautiful icon library
- Modern CSS techniques for responsive design

---

**Built with ❤️ using React and modern web technologies**
