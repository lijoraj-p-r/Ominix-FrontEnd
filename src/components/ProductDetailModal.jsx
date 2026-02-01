import React, { useState, useEffect } from 'react';
import { WishlistButton } from './WishlistButton';
import './ProductDetailModal.css';

export function ProductDetailModal({ productId, isOpen, onClose, onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    if (isOpen && productId) {
      fetchProductDetails();
    }
  }, [isOpen, productId]);

  const fetchProductDetails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:9090/api/products/${productId}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (err) {
      console.error('Error fetching product details:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async () => {
    setAddingToCart(true);
    try {
      await onAddToCart(productId);
    } finally {
      setAddingToCart(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {isLoading ? (
          <div className="modal-loading">
            <div className="loading-spinner"></div>
            <p>Loading product details...</p>
          </div>
        ) : product ? (
          <div className="product-detail-content">
            <div className="product-detail-images">
              <div className="main-image">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400';
                  }}
                />
              </div>
              {product.images.length > 1 && (
                <div className="thumbnail-images">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className={selectedImageIndex === index ? 'active' : ''}
                      onClick={() => setSelectedImageIndex(index)}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/100';
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="product-detail-info">
              <div className="product-detail-header">
                <h2 className="product-detail-name">{product.name}</h2>
                <WishlistButton productId={product.product_id} />
              </div>
              
              <p className="product-detail-price">₹{product.price}</p>
              
              <div className="product-detail-meta">
                <p><strong>Stock:</strong> {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</p>
                {product.category && <p><strong>Category:</strong> {product.category}</p>}
              </div>

              <div className="product-detail-description">
                <h3>Description</h3>
                <p>{product.description || 'No description available.'}</p>
              </div>

              <div className="product-detail-actions">
                <button
                  className="add-to-cart-btn-modal"
                  onClick={handleAddToCart}
                  disabled={addingToCart || product.stock === 0}
                >
                  {addingToCart ? (
                    <>
                      <span className="loading-spinner" style={{ width: '16px', height: '16px', borderWidth: '2px', marginRight: '8px', display: 'inline-block' }}></span>
                      Adding...
                    </>
                  ) : (
                    product.stock > 0 ? 'Add to Cart' : 'Out of Stock'
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-error">
            <p>Failed to load product details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
