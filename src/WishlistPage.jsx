import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ProductList } from './ProductList';
import { ToastContainer } from './components/Toast';
import { useToast } from './hooks/useToast';
import './assets/styles.css';
import './App.css';

export default function WishlistPage() {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [username, setUsername] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toasts, removeToast, success, error: showError } = useToast();

  useEffect(() => {
    fetchWishlist();
    fetchCartCount();
  }, []);

  const fetchWishlist = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:9090/api/wishlist', {
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to fetch wishlist');
      const data = await response.json();
      setWishlistProducts(data.products || []);
      setUsername(data.username || 'Guest');
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      showError('Failed to load wishlist');
      setWishlistProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCartCount = async () => {
    try {
      const response = await fetch(`http://localhost:9090/api/cart/items/count?username=${username}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const count = await response.json();
        setCartCount(count);
      }
    } catch (err) {
      console.error('Error fetching cart count:', err);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await fetch('http://localhost:9090/api/wishlist/remove', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        setWishlistProducts(prev => prev.filter(p => p.product_id !== productId));
        success('Product removed from wishlist');
      } else {
        showError('Failed to remove product from wishlist');
      }
    } catch (err) {
      console.error('Error removing from wishlist:', err);
      showError('Failed to remove product from wishlist');
    }
  };

  const handleAddToCart = async (productId) => {
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
        showError('Failed to add product to cart');
      }
    } catch (err) {
      console.error('Error adding product to cart:', err);
      showError('Failed to add product to cart');
    }
  };

  return (
    <div className="customer-homepage">
      <Header cartCount={cartCount} username={username} />
      <main className="main-content">
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">
            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading wishlist...</p>
          </div>
        ) : wishlistProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">❤️</div>
            <h3>Your Wishlist is Empty</h3>
            <p>Start adding products you love to your wishlist!</p>
            <a href="/customerhome" className="empty-state-button" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Browse Products
            </a>
          </div>
        ) : (
          <ProductList 
            products={wishlistProducts} 
            onAddToCart={handleAddToCart}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            showWishlistButton={true}
          />
        )}
      </main>
      <Footer />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
