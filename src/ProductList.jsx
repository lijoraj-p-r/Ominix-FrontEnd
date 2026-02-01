import React, { useState } from 'react';
import { WishlistButton } from './components/WishlistButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import './assets/styles.css';
import './App.css';

export function ProductList({ products, onAddToCart, isLoading = false, onRemoveFromWishlist, showWishlistButton = true }) {
  const [addingToCart, setAddingToCart] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = async (productId) => {
    setAddingToCart(prev => ({ ...prev, [productId]: true }));
    try {
      await onAddToCart(productId);
    } finally {
      setTimeout(() => {
        setAddingToCart(prev => ({ ...prev, [productId]: false }));
      }, 500);
    }
  };

  if (isLoading) {
    return (
      <div className="product-list">
        <div className="product-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton-card">
              <div className="loading-skeleton skeleton-image"></div>
              <div className="loading-skeleton skeleton-text"></div>
              <div className="loading-skeleton skeleton-text short"></div>
              <div className="loading-skeleton skeleton-text medium"></div>
              <div className="loading-skeleton skeleton-button"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🛍️</div>
        <h3>No Products Available</h3>
        <p>We're currently updating our inventory. Check back soon for amazing products!</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product, index) => (
          <div 
            key={product.product_id} 
            className="product-card"
            style={{ animationDelay: `${index * 0.1}s`, position: 'relative' }}
            onClick={() => {
              setSelectedProductId(product.product_id);
              setIsModalOpen(true);
            }}
          >
            {showWishlistButton && (
              <WishlistButton 
                productId={product.product_id}
                onToggle={(added) => {
                  if (!added && onRemoveFromWishlist) {
                    onRemoveFromWishlist(product.product_id);
                  }
                }}
              />
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product.product_id);
                }}
                disabled={addingToCart[product.product_id]}
              >
                {addingToCart[product.product_id] ? (
                  <>
                    <span className="loading-spinner" style={{ width: '16px', height: '16px', borderWidth: '2px', marginRight: '8px', display: 'inline-block' }}></span>
                    Adding...
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProductId && (
        <ProductDetailModal
          productId={selectedProductId}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProductId(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}