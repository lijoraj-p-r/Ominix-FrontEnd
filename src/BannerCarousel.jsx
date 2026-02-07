import React, { useState, useEffect, useCallback } from 'react';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/790/image/4740d1bfacccade7.png?q=80',
      link: '#slide-1'
    },
    {
      id: 2,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/790/image/32c3de427d21949f.png?q=80',
      link: '#slide-2'
    },
    {
      id: 3,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/460/224/image/1ff697861aae60a9.png?q=20',
      link: '#slide-3'
    },
    {
      id: 4,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/790/image/e7ecda1c874cfb14.png?q=80',
      link: '#slide-4'
    },
    {
      id: 5,
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1620/790/image/1ac4c3fe27baf7c0.png?q=80',
      link: '#slide-5'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [currentSlide, isHovered, nextSlide]);

  const handleBannerClick = (link) => {
    window.location.href = link;
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.carouselWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button 
          style={{...styles.arrow, ...styles.leftArrow}}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slides Container */}
        <div style={styles.slidesContainer}>
          <div 
            style={{
              ...styles.slidesTrack,
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                style={styles.slide}
                onClick={() => handleBannerClick(slide.link)}
              >
                <img
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          style={{...styles.arrow, ...styles.rightArrow}}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                ...(currentSlide === index ? styles.activeDot : {})
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2px',
    boxSizing: 'border-box',
  },
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    padding: '4px',
  },
  slidesContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '14px',
    backgroundColor: '#fff',
  },
  slidesTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
  },
  slide: {
    minWidth: '100%',
    cursor: 'pointer',
    position: 'relative',
    aspectRatio: '16 / 7',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    color: '#333',
  },
  leftArrow: {
    left: '16px',
  },
  rightArrow: {
    right: '16px',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 10,
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: '24px',
    borderRadius: '5px',
  },
};

// Add hover effects via CSS-in-JS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
  
    @media (max-width: 768px) {
      button[aria-label*="slide"] {
        width: 36px !important;
        height: 36px !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default BannerCarousel;