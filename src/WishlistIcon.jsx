import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styles.css';

export function WishlistIcon() {
  const navigate = useNavigate();
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    fetchWishlistCount();
    const interval = setInterval(fetchWishlistCount, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchWishlistCount = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/wishlist/count', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setWishlistCount(data.count || 0);
      } else {
        // User might not be logged in, set count to 0
        setWishlistCount(0);
      }
    } catch (err) {
      // Silently fail if user is not logged in or API is unavailable
      setWishlistCount(0);
    }
  };

  const handleClick = () => {
    navigate('/wishlist');
  };

  return (
    <div className="wishlist-icon-header" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="wishlist-icon-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      {wishlistCount > 0 && (
        <span className="wishlist-badge">{wishlistCount}</span>
      )}
    </div>
  );
}
