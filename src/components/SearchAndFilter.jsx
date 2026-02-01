import React, { useState, useEffect } from 'react';
import './SearchAndFilter.css';

export function SearchAndFilter({ onSearch, onFilter, onSort, currentCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);
  const [priceError, setPriceError] = useState('');

  /* -------------------- SEARCH -------------------- */
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  /* -------------------- PRICE RANGE -------------------- */
  const applyPriceFilter = () => {
    const min = minPrice !== '' ? Number(minPrice) : null;
    const max = maxPrice !== '' ? Number(maxPrice) : null;

    if (min !== null && max !== null && min > max) {
      setPriceError('Min price cannot be greater than max price');
      return;
    }

    setPriceError('');
    onFilter({ minPrice: min, maxPrice: max });
  };

  useEffect(() => {
    if (minPrice !== '' || maxPrice !== '') {
      applyPriceFilter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice]);

  /* -------------------- SORT (FIXED) -------------------- */
  const handleSort = (e, field, defaultOrder = 'asc') => {
    e.preventDefault();

    let newOrder = defaultOrder;

    // Toggle order if clicking same field again
    if (sortBy === field) {
      newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    }

    setSortBy(field);
    setSortOrder(newOrder);
    onSort(field, newOrder);
  };

  /* -------------------- CLEAR -------------------- */
  const clearFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('');
    setSortOrder('asc');
    setPriceError('');

    onSearch('');
    onFilter({ minPrice: null, maxPrice: null });
    onSort('', 'asc');
  };

  return (
    <div className="search-filter-container">
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </div>
        </form>

        <button
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}{' '}
          {showFilters ? '▲' : '▼'}
        </button>
      </div>

      {showFilters && (
        <div className="filters-section">
          {/* 💰 PRICE RANGE */}
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                min="0"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="price-input"
              />
              <span className="price-separator">–</span>
              <input
                type="number"
                min="0"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="price-input"
              />
            </div>
            {priceError && <p className="price-error">{priceError}</p>}
          </div>

          {/* ↕️ SORT (FIXED) */}
          <div className="sort-section">
            <label>Sort By</label>
            <div className="sort-buttons">
              <button
                type="button"
                className={`sort-btn ${
                  sortBy === 'price' && sortOrder === 'asc' ? 'active' : ''
                }`}
                onClick={(e) => handleSort(e, 'price', 'asc')}
              >
                Price ↑
              </button>

              <button
                type="button"
                className={`sort-btn ${
                  sortBy === 'price' && sortOrder === 'desc' ? 'active' : ''
                }`}
                onClick={(e) => handleSort(e, 'price', 'desc')}
              >
                Price ↓
              </button>

              <button
                type="button"
                className={`sort-btn ${
                  sortBy === 'name' ? 'active' : ''
                }`}
                onClick={(e) => handleSort(e, 'name', 'asc')}
              >
                Name A–Z
              </button>

              <button
                type="button"
                className={`sort-btn ${
                  sortBy === 'date' ? 'active' : ''
                }`}
                onClick={(e) => handleSort(e, 'date', 'desc')}
              >
                Newest
              </button>
            </div>
          </div>

          <button onClick={clearFilters} className="clear-filters-btn">
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
