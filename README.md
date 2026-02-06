# 🛍️ Omnix Frontend

> **Shopping Made Easy** - Modern e-commerce frontend built with React & Vite

[![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-06B6D4.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub](https://img.shields.io/badge/GitHub-lijoraj--p--r-black.svg)](https://github.com/lijoraj-p-r/Ominix-FrontEnd)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Backend Integration](#backend-integration)
- [Available Scripts](#available-scripts)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Omnix Frontend is a modern, responsive e-commerce web application built with React and Vite. It provides a seamless shopping experience with a clean UI, fast performance, and smooth integration with the SalesSavvy backend API.

**Live Demo**: [Coming Soon]

**Backend Repository**: [Omnix-backend](https://github.com/lijoraj-p-r/Omnix-backend)

## ✨ Features

### 🛒 Shopping Experience
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations
- 🔍 **Product Search & Filter** - Easy product discovery
- 🛍️ **Shopping Cart** - Real-time cart updates
- ❤️ **Wishlist** - Save products for later
- ⭐ **Product Reviews** - Read and write product reviews

### 🔐 User Features
- 👤 **User Authentication** - Secure login/registration with JWT
- 📊 **User Dashboard** - Manage orders and profile
- 📝 **Order Tracking** - Real-time order status updates
- 💳 **Secure Checkout** - Razorpay payment integration

### ⚡ Performance
- 🚀 **Lightning Fast** - Built with Vite for optimal performance
- 📦 **Code Splitting** - Lazy loading for faster page loads
- 🔄 **State Management** - Efficient state handling
- 💾 **Local Caching** - Reduced API calls

## 🛠️ Tech Stack

### Core
- **React 18+** - UI library
- **Vite 5+** - Build tool and dev server
- **React Router v6** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling
- **Styled Components** (Optional) - CSS-in-JS

### State Management
- **React Context API** - Global state management
- **Redux Toolkit** (Optional) - Advanced state management
- **React Query** - Server state management

### HTTP & API
- **Axios** - HTTP client
- **REST API** - Backend communication

### UI Components
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **React Toastify** - Toast notifications
- **React Loading Skeleton** - Loading placeholders

### Forms & Validation
- **React Hook Form** - Form handling
- **Yup / Zod** - Schema validation

### Payment
- **Razorpay Checkout** - Payment gateway integration

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** 9.0+ or **yarn** 1.22+
- **Git**
- **Backend API** running on `http://localhost:9090`

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lijoraj-p-r/Ominix-FrontEnd.git
cd Ominix-FrontEnd
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

## ⚙️ Environment Setup

Create a `.env` file with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:9090/api
VITE_API_TIMEOUT=10000

# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID

# App Configuration
VITE_APP_NAME=Omnix
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true

# Image Upload (if applicable)
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

### Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:9090/api` |
| `VITE_RAZORPAY_KEY_ID` | Razorpay test/live key | `rzp_test_xxxxx` |
| `VITE_APP_NAME` | Application name | `Omnix` |
| `VITE_ENABLE_DEBUG` | Enable debug mode | `true/false` |

> ⚠️ **Important**: Never commit `.env` file to Git. Add it to `.gitignore`.

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:5174`

### Preview Production Build

```bash
npm run build
npm run preview
```

### With Backend Running

Make sure the backend is running on `http://localhost:9090` before starting the frontend.

```bash
# Terminal 1 - Start Backend
cd ../Omnix-backend
mvn spring-boot:run

# Terminal 2 - Start Frontend
cd Ominix-FrontEnd
npm run dev
```

## 📁 Project Structure

```
ominix-frontend/
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── api/                     # API integration
│   │   ├── axios.config.js
│   │   ├── authApi.js
│   │   ├── productApi.js
│   │   ├── orderApi.js
│   │   └── paymentApi.js
│   ├── assets/                  # Images, fonts, etc.
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   ├── components/              # Reusable components
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── Navbar/
│   │   ├── product/
│   │   │   ├── ProductCard/
│   │   │   ├── ProductList/
│   │   │   └── ProductFilter/
│   │   ├── cart/
│   │   │   ├── CartItem/
│   │   │   └── CartSummary/
│   │   └── layout/
│   │       ├── Header/
│   │       ├── Footer/
│   │       └── Sidebar/
│   ├── context/                 # React Context
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/                   # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   ├── useDebounce.js
│   │   └── useLocalStorage.js
│   ├── pages/                   # Page components
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── ProductDetail/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Orders/
│   │   ├── Profile/
│   │   ├── Login/
│   │   ├── Register/
│   │   └── NotFound/
│   ├── routes/                  # Route configuration
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── services/                # Business logic
│   │   ├── authService.js
│   │   ├── cartService.js
│   │   ├── orderService.js
│   │   └── paymentService.js
│   ├── utils/                   # Utility functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── .env.example                 # Environment template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

## 🔌 Backend Integration

### API Endpoints Used

The frontend connects to the SalesSavvy backend API:

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh token

#### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product details
- `GET /api/products/search?q={query}` - Search products
- `GET /api/products/category/{category}` - Get by category

#### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/{id}` - Update cart item
- `DELETE /api/cart/remove/{id}` - Remove from cart

#### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/{id}` - Get order details

#### Payment
- `POST /api/payments/create` - Create payment order
- `POST /api/payments/verify` - Verify payment

### Axios Configuration

Example API setup in `src/api/axios.config.js`:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run dev:host     # Start dev server with network access
```

### Build

```bash
npm run build        # Create production build
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking (if using TS)
```

### Testing

```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 🚀 Build & Deployment

### Production Build

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Deployment Options

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t omnix-frontend .
docker run -p 80:80 omnix-frontend
```

### Environment Variables for Production

Update your `.env.production`:

```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
VITE_ENABLE_DEBUG=false
```

## 🎨 Customization

### Tailwind Configuration

Customize `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Vite Configuration

Customize `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true,
      },
    },
  },
});
```

## 🔒 Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use HTTPS in production
- ✅ Implement CSRF protection
- ✅ Sanitize user inputs
- ✅ Use secure cookies for auth tokens
- ✅ Enable Content Security Policy
- ✅ Regular dependency updates
- ✅ Implement rate limiting on API calls

## 🧪 Testing

### Unit Tests (Example with Vitest)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Example test:

```javascript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('renders product name', () => {
    const product = { id: 1, name: 'Test Product', price: 99.99 };
    render(<ProductCard product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository from [Ominix-FrontEnd](https://github.com/lijoraj-p-r/Ominix-FrontEnd)
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Use functional components with hooks
- Follow React best practices
- Write meaningful component and variable names
- Add PropTypes or TypeScript types
- Write comments for complex logic
- Keep components small and focused
- Use consistent file and folder naming

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Lijo Raj P R** - *Full Stack Developer* - [@lijoraj-p-r](https://github.com/lijoraj-p-r)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing fast build tool
- Tailwind CSS for utility-first styling
- Razorpay for payment integration
- All open-source contributors

## 📞 Support

For support, open an issue on [GitHub Issues](https://github.com/lijoraj-p-r/Ominix-FrontEnd/issues) or contact the development team.

### Reporting Issues

When reporting issues, please include:
- Browser and version
- Node.js version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Console errors

## 🗺️ Roadmap

- [ ] Add dark mode support
- [ ] Implement progressive web app (PWA)
- [ ] Add internationalization (i18n)
- [ ] Implement lazy loading for images
- [ ] Add skeleton loaders
- [ ] Implement infinite scroll
- [ ] Add product comparison feature
- [ ] Implement social sharing
- [ ] Add accessibility improvements
- [ ] Performance optimization
- [ ] Add analytics integration
- [ ] Implement push notifications

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📱 Mobile-first design
- 🎯 Core Web Vitals optimized
- 🔄 Optimistic UI updates
- 💾 Service worker caching (PWA)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Made with ❤️ using React + Vite**

**Backend**: [Omnix Backend](https://github.com/lijoraj-p-r/Omnix-backend)
