import React, { useState, useEffect } from 'react';
import './WishlistButton.css';

export function WishlistButton({ productId, onToggle }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkWishlistStatus();
  }, [productId]);

  const checkWishlistStatus = async () => {
    try {
      const response = await fetch(`http://localhost:9090/api/wishlist/check/${productId}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setIsInWishlist(data.inWishlist);
      }
    } catch (err) {
      console.error('Error checking wishlist status:', err);
    }
  };

  const handleToggle = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    
    try {
      const endpoint = isInWishlist ? '/remove' : '/add';
      const method = isInWishlist ? 'DELETE' : 'POST';
      
      const response = await fetch(`http://localhost:9090/api/wishlist${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        setIsInWishlist(!isInWishlist);
        if (onToggle) onToggle(!isInWishlist);
      }
    } catch (err) {
      console.error('Error toggling wishlist:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`wishlist-button ${isInWishlist ? 'active' : ''}`}
      onClick={handleToggle}
      disabled={isLoading}
      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {isLoading ? (
        <span className="wishlist-spinner"></span>
      ) : (
        <span className="wishlist-icon">{isInWishlist ? '❤️' : '🤍'}</span>
      )}
    </button>
  );
}
