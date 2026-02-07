import React, { useState, useEffect } from 'react';
import { CategoryNavigation } from './CategoryNavigation';
import { ProductList } from './ProductList';
import { Footer } from './Footer';
import { Header } from './Header';
import { SearchAndFilter } from './components/SearchAndFilter';
import { ToastContainer } from './components/Toast';
import { useToast } from './hooks/useToast';

import './assets/styles.css';
import BannerCarousel from './BannerCarousel';
import { Shirt } from 'lucide-react';

export default function CustomerHomePage() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [username, setUsername] = useState('');
  const [cartError, setCartError] = useState(false);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Shirts');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterParams, setFilterParams] = useState({ minPrice: null, maxPrice: null });
  const [sortParams, setSortParams] = useState({ sortBy: '', sortOrder: 'asc' });
  const { toasts, removeToast, success, error: showError } = useToast();

  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    fetchProducts();
    if (username) {
      fetchCartCount();
    }
  }, [username]);

  const buildQueryString = (category, search, filter, sort) => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    if (filter.minPrice !== null) params.append('minPrice', filter.minPrice);
    if (filter.maxPrice !== null) params.append('maxPrice', filter.maxPrice);
    if (sort.sortBy) {
      params.append('sortBy', sort.sortBy);
      params.append('sortOrder', sort.sortOrder);
    }
    return params.toString();
  };

  const fetchProducts = async (category = activeCategory, search = searchTerm, filter = filterParams, sort = sortParams) => {
    setIsProductsLoading(true);
    try {
      const queryString = buildQueryString(category, search, filter, sort);
      const response = await fetch(
        `http://localhost:9090/api/products?${queryString || 'category=Shirts'}`, 
        { credentials: 'include' }
      );
      const data = await response.json();
      if (data) {
        setUsername(data.user?.name || 'Guest');
        setProducts(data.products || []);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
      showError('Failed to load products. Please try again.');
    } finally {
      setIsProductsLoading(false);
    }
  };

  const fetchCartCount = async () => {
    setIsCartLoading(true); // Set loading state
    try {
      const response = await fetch(`http://localhost:9090/api/cart/items/count?username=${username}`, {
        credentials: 'include', // Include authToken as a cookie
      });
      const count = await response.json();
      setCartCount(count);
      setCartError(false); // Reset error state if successful
    } catch (error) {
      console.error('Error fetching cart count:', error);
      setCartError(true); // Set error state
    } finally {
      setIsCartLoading(false); // Remove loading state
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchTerm(''); // Clear search when changing category
    setFilterParams({ minPrice: null, maxPrice: null });
    setSortParams({ sortBy: '', sortOrder: 'asc' });
    fetchProducts(category, '', { minPrice: null, maxPrice: null }, { sortBy: '', sortOrder: 'asc' });
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
    fetchProducts(activeCategory, search, filterParams, sortParams);
  };

  const handleFilter = (filter) => {
    setFilterParams(filter);
    fetchProducts(activeCategory, searchTerm, filter, sortParams);
     setIsFilterActive(true);
  };

  const handleSort = (sortBy, sortOrder) => {
    setSortParams({ sortBy, sortOrder });
    fetchProducts(activeCategory, searchTerm, filterParams, { sortBy, sortOrder });
  };

  const handleAddToCart = async (productId) => {
    if (!username) {
      showError('Please login to add items to cart');
      return;
    }
    try {
      const response = await fetch('http://localhost:9090/api/cart/add', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ username, productId }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        fetchCartCount();
        success('Product added to cart!');
      } else {
        const errorData = await response.json();
        showError(errorData.error || 'Failed to add product to cart');
      }
    } catch (err) {
      console.error('Error adding product to cart:', err);
      showError('Failed to add product to cart. Please try again.');
    }
  };

  return (
    <div className="customer-homepage">
      <Header
        cartCount={isCartLoading ? '...' : cartError ? 'Error' : cartCount}
        username={username}
      />

      <nav className="navigation">
        <CategoryNavigation onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
      </nav>
      
      <main className="main-content">
    {  activeCategory != 'Shirts' && <SearchAndFilter
  onSearch={handleSearch}
  onFilter={handleFilter}
  onSort={handleSort}
  currentCategory={activeCategory}
/>
}

{!isFilterActive && activeCategory === 'Shirts' && <BannerCarousel />}

        <ProductList products={products} onAddToCart={handleAddToCart} isLoading={isProductsLoading} />
      </main>
      <Footer />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
