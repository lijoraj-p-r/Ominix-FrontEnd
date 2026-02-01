# SalesSavvy - Modern E-Commerce Platform

A vibrant, modern full-stack e-commerce application built with React and Spring Boot, featuring a dopamine-themed UI/UX design that delivers an energetic and joyful shopping experience.

![SalesSavvy](https://img.shields.io/badge/SalesSavvy-E-Commerce-6366f1?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)

## 🎨 Project Overview

SalesSavvy is a modern e-commerce platform that combines a powerful Spring Boot backend with a beautifully designed React frontend. The application features a vibrant, Gen-Z inspired "dopamine" theme with smooth animations, glassmorphism effects, and an intuitive user experience.

### Key Features

- 🛍️ **Product Browsing**: Browse products by category with smooth animations
- 🛒 **Shopping Cart**: Add, update, and remove items with real-time updates
- 💳 **Payment Integration**: Secure payment processing with Razorpay
- 📦 **Order Management**: View order history and track purchases
- 👤 **User Authentication**: Secure login and registration system
- 🎯 **Admin Dashboard**: Comprehensive admin panel for managing products
- ✨ **Modern UI/UX**: Vibrant gradients, smooth animations, and micro-interactions

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **Vite 6.0.5** - Fast build tool and dev server
- **React Router DOM 6.28.1** - Client-side routing
- **Axios 1.7.9** - HTTP client for API calls
- **Lucide React 0.469.0** - Beautiful icon library
- **Plain CSS** - Custom styling with CSS variables and modern features

### Backend
- **Spring Boot** - Java-based backend framework
- **RESTful APIs** - Clean API architecture
- **Razorpay Integration** - Payment gateway

## 🎨 UI/UX Improvements

The frontend has been completely modernized with a vibrant, dopamine-themed design:

### Design Features
- ✨ **Vibrant Color Palette**: Modern gradient-based color scheme
- 🎭 **Glassmorphism**: Frosted glass effects on headers and modals
- 🌈 **Gradient Backgrounds**: Animated gradient backgrounds
- 💫 **Smooth Animations**: Fade-in, slide-in, and scale animations
- 🎯 **Micro-interactions**: Hover effects, button ripples, and transitions
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Keyboard navigation and focus states

### Visual Enhancements
- **Product Cards**: Hover effects with elevation and glow
- **Buttons**: Gradient backgrounds with ripple effects
- **Forms**: Modern input fields with focus states
- **Loading States**: Skeleton screens and spinners
- **Empty States**: Beautiful empty state designs with icons
- **Navigation**: Sticky navigation with smooth transitions

## 📁 Project Structure

```
SALESSAVVYFrontEnd-main/
├── public/
│   ├── background.png
│   ├── background1.png
│   └── shipped.jpg
├── src/
│   ├── assets/
│   │   ├── styles.css          # Main component styles
│   │   ├── modalStyles.css      # Modal component styles
│   │   └── styles11.css         # Additional styles
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Footer.jsx            # Footer component
│   │   ├── ProductList.jsx      # Product grid display
│   │   ├── CartIcon.jsx         # Shopping cart icon
│   │   ├── CategoryNavigation.jsx # Category filter
│   │   └── ProfileDropdown.jsx  # User profile menu
│   ├── pages/
│   │   ├── LoginPage.jsx        # User login
│   │   ├── RegistrationPage.jsx # User registration
│   │   ├── CustomerHomePage.jsx # Main shopping page
│   │   ├── CartPage.jsx         # Shopping cart
│   │   ├── OrderPage.jsx        # Order history
│   │   ├── AdminLogin.jsx       # Admin authentication
│   │   └── AdminDashboard.jsx   # Admin panel
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles & CSS variables
│   ├── Routes.jsx               # Route configuration
│   └── main.jsx                 # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Java JDK 11+ (for backend)
- Maven (for backend)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SALESSAVVYFrontEnd-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5174`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd ../SalesSavvyBackend-main
   ```

2. **Build the project**
   ```bash
   ./mvnw clean install
   ```

3. **Run the application**
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend API will be available at `http://localhost:9090`

## 🎯 Features in Detail

### User Features
- **Product Browsing**: Browse products by category (Shirts, Pants, Accessories, Mobiles, Mobile Accessories)
- **Shopping Cart**: Add items, adjust quantities, and remove products
- **Checkout**: Secure payment processing with Razorpay
- **Order History**: View past orders with detailed information
- **User Profile**: Manage account settings and view profile

### Admin Features
- **Dashboard**: Overview of system statistics
- **Product Management**: Add, edit, and manage products
- **Order Management**: View and process customer orders

## 🎨 CSS Architecture

The project uses a modern CSS architecture with:

### CSS Variables
All colors, spacing, and design tokens are defined as CSS variables in `index.css`:
- Color palette (primary, secondary, accent colors)
- Gradient definitions
- Spacing scale
- Border radius values
- Shadow definitions
- Transition timings

### Component Styles
- `index.css`: Global styles and CSS variables
- `App.css`: App-level styles, loading states, empty states
- `assets/styles.css`: Component-specific styles
- `CartPage.css`: Cart page specific styles

### Design Principles
- **Mobile-First**: Responsive design starting from mobile
- **Accessibility**: Keyboard navigation and focus states
- **Performance**: Optimized animations and transitions
- **Consistency**: Unified design system across all components

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1400px+)

## 🔐 API Endpoints

The frontend communicates with the backend API at `http://localhost:9090`:

- `POST /api/auth/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/products` - Get products
- `POST /api/cart/add` - Add to cart
- `GET /api/cart/items` - Get cart items
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/delete` - Remove from cart
- `POST /api/payment/create` - Create payment order
- `POST /api/payment/verify` - Verify payment
- `GET /api/orders` - Get user orders

## 🎬 Screenshots

### Home Page
![Home Page](screenshots/home.png)
*Modern product grid with vibrant cards and smooth animations*

### Shopping Cart
![Shopping Cart](screenshots/cart.png)
*Interactive cart with quantity controls and checkout summary*

### Order History
![Orders](screenshots/orders.png)
*Beautiful order cards with product details*

### Login Page
![Login](screenshots/login.png)
*Glassmorphism login form with gradient background*

*Note: Screenshots are placeholders. Add actual screenshots to the `screenshots/` directory.*

## 🚀 Future Improvements

### Planned Features
- [ ] Dark mode toggle
- [ ] Product search functionality
- [ ] Product filtering and sorting
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) support
- [ ] Advanced analytics dashboard

### Technical Improvements
- [ ] Unit and integration tests
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Error boundary implementation
- [ ] Code splitting and lazy loading
- [ ] Service worker for offline support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Development Team** - Initial work and UI/UX modernization

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing-fast build tool
- Spring Boot for the robust backend
- Razorpay for payment integration
- All open-source contributors

## 📞 Support

For support, email support@salessavvy.com or create an issue in the repository.

---

**Made with ❤️ and lots of ☕**
