// CategoryNavigation.jsx
import React, { useState } from 'react';
import './assets/styles.css';

export function CategoryNavigation({ onCategoryClick, activeCategory = 'Shirts' }) {
  // Static categories list
  const categories = ['Shirts', 'Pants', 'Accessories', 'Mobiles', 'Mobile Accessories'];
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  return (
    <nav className="category-navigation">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
