import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Sparkles, TrendingUp, Zap, Star, ArrowRight, Camera, Package } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useNavigate } from "react-router-dom";

import './AboutUs2.css';

export default function OminixPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
 const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", email); // handle subscription logic here

    // Reset the input
    setEmail("");
  };


  const handleClick = () => {
    navigate("/customerhome");
  };

  const trendingProducts = [
    { name: 'Retro Windbreaker', price: '$89', trend: 'Hot' },
    { name: 'Vintage Denim', price: '$125', trend: 'New' },
    { name: 'Y2K Mini Bag', price: '$65', trend: 'Trending' },
    { name: 'Platform Sneakers', price: '$110', trend: 'Hot' },
  ];

  return (

  
    
    <div className="ominix-container">
       <Header />
      {/* Retro grain texture overlay */}
      <div className="grain-overlay" />
      
      {/* Animated shapes background */}
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      
      {/* Cursor glow effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

     

      {/* Hero Section - Full Screen with Image */}
      <section className="hero-fullscreen">
        {/* Background Image Layer */}
        <div className="hero-bg">
          <div className="hero-image-wrapper">
            {/* Y2K Styled Fashion Image */}
            <div className="hero-fashion-image">
              <div className="image-layer layer-1" />
              <div className="image-layer layer-2" />
              <div className="image-layer layer-3" />
              <div className="chromatic-aberration" />
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="hero-gradient-overlay" />
          <div className="hero-vignette" />
          
          {/* Scan Lines Effect */}
          <div className="scanlines" />
        </div>

        {/* Content Overlay */}
        <div className="hero-content-overlay">
          {/* Top Corner Badges */}
          <div className="hero-badges">
            <div className="corner-badge">
              <div className="barcode" />
            </div>
            <div className="corner-badge audio-viz">
              <div className="viz-bar" style={{ animationDelay: '0s' }} />
              <div className="viz-bar" style={{ animationDelay: '0.1s' }} />
              <div className="viz-bar" style={{ animationDelay: '0.2s' }} />
              <div className="viz-bar" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>

          {/* Main Hero Text */}
          <div className="hero-text-container">
            <h1 className="hero-massive-text">
              <span className="text-line line-1" data-text="OMNIX">OMNIX</span>
              <span className="text-line line-2" data-text="Shopping">Shopping</span>
            </h1>
            
            <div className="hero-subtext">
              <span className="subtext-label">//  Fashion Updates</span>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="hero-bottom-bar">
            <div className="info-item">
              <div className="info-label">EST.</div>
              <div className="info-value">2024</div>
            </div>
            <div className="info-item">
              <div className="info-label">DROPS</div>
              <div className="info-value">WEEKLY</div>
            </div>
            <div className="info-item">
              <div className="info-label">VIBE</div>
              <div className="info-value">Y2K</div>
            </div>
            <button className="explore-btn"  onClick={handleClick}>
              EXPLORE
              <ArrowRight className="explore-icon" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">SCROLL</div>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="hero-secondary">
        <div className="secondary-content">
          <div className="badge-row">
            <div className="badge">
              <Star className="badge-icon" />
              GEN-Z CERTIFIED
            </div>
            <div className="badge badge-alt">
              <TrendingUp className="badge-icon" />
              TRENDING NOW
            </div>
          </div>
          
          <h2 className="secondary-title">
            YOUR ULTIMATE DESTINATION FOR RETRO-FUTURISTIC FASHION
          </h2>
          
          <p className="secondary-description">
            We blend Y2K nostalgia with modern streetwear to create 
            looks that are absolutely iconic. Express yourself boldly 
            and unapologetically. No cap. 💯
          </p>
          
          <div className="cta-group">
            <button className="btn-primary" onClick={handleClick}>
              Shop The Drop
              <Zap className="btn-icon" />
            </button>
            <button className="btn-secondary">
              <Camera className="btn-icon" />
              Style Inspo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Vibe Tribe</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2K+</div>
              <div className="stat-label">Fresh Fits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Style Support</div>
            </div>
          </div>
        </div>
      </section>

   {/* Marquee Scroll */}
<div className="marquee">
  <div className="marquee-track">
    <div className="marquee-content">
      <span>NEW DROP EVERY WEEK ✨</span>
      <span>FREE SHIPPING ON ORDERS $75+ 🚀</span>
      <span>STUDENT DISCOUNT 15% OFF 🎓</span>
      <span>JOIN THE VIBE TRIBE 💜</span>

      {/* duplicate for seamless loop */}
      <span>NEW DROP EVERY WEEK ✨</span>
      <span>FREE SHIPPING ON ORDERS $75+ 🚀</span>
      <span>STUDENT DISCOUNT 15% OFF 🎓</span>
      <span>JOIN THE VIBE TRIBE 💜</span>
    </div>
  </div>
</div>

      {/* Trending Products */}
      <section className="trending-section">
        <div className="section-header">
          <h2 className="section-title">
            <TrendingUp className="title-icon" />
            TRENDING RN
          </h2>
          <button className="view-all" onClick={handleClick}>
            View All
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
        
          <section className="static-page-section">
            <h2 className="section-title">What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🛍️</div>
                <h3>Wide Selection</h3>
                <p>Browse through thousands of products across multiple categories</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Fast Delivery</h3>
                <p>Quick and reliable shipping to get your orders to you fast</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h3>Secure Payments</h3>
                <p>Safe and secure payment processing for your peace of mind</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality Products</h3>
                <p>Carefully curated products that meet our high standards</p>
              </div>
            </div>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">Why Choose Us?</h2>
            <ul className="benefits-list">
              <li>✨ Modern, user-friendly interface designed for seamless shopping</li>
              <li>🎯 Competitive prices that won't break the bank</li>
              <li>🔒 Secure transactions with industry-leading encryption</li>
              <li>📦 Easy returns and hassle-free exchanges</li>
              <li>💬 24/7 customer support ready to help you</li>
              <li>🎁 Exclusive deals and discounts for our members</li>
            </ul>
          </section>
      </section>


      {/* Style Guide */}
      <section className="style-guide">
        <h2 className="section-title centered">
          STYLE IT YOUR WAY
        </h2>
        
        <div className="style-grid">
          <div className="style-card">
            <div className="style-number">01</div>
            <div className="style-icon-wrapper">
              <Sparkles className="style-icon" />
            </div>
            <h3 className="style-heading">Mix & Match</h3>
            <p className="style-text">
              Combine vintage pieces with modern streetwear. 
              Create your own aesthetic and express yourself boldly.
            </p>
          </div>

          <div className="style-card">
            <div className="style-number">02</div>
            <div className="style-icon-wrapper">
              <Camera className="style-icon" />
            </div>
            <h3 className="style-heading">Gram-Worthy</h3>
            <p className="style-text">
              Every outfit is content-ready. Tag us for a chance 
              to be featured on our page and inspire the community.
            </p>
          </div>

          <div className="style-card">
            <div className="style-number">03</div>
            <div className="style-icon-wrapper">
              <Package className="style-icon" />
            </div>
            <h3 className="style-heading">Fast Delivery</h3>
            <p className="style-text">
              Get your new fits delivered in 2-3 days. Free returns 
              within 30 days because we want you to love your style.
            </p>
          </div>
        </div>
      </section>

      {/* Community/Vibe Tribe Section */}
      <section className="community">
        <div className="community-content">
          <h2 className="community-title">
            JOIN THE <span className="gradient-text">VIBE TRIBE</span>
          </h2>
          <p className="community-text">
            Ominix isn't just a store—it's a movement. We're building a community 
            of trendsetters, style innovators, and fashion enthusiasts who aren't 
            afraid to stand out and express themselves.
          </p>
          <p className="community-text">
            From exclusive drops to styling sessions, early access to sales, 
            and a platform where your voice matters—being part of the tribe 
            means you're always ahead of the curve.
          </p>
          
          <div className="community-features">
            <div className="comm-feature">
              <div className="comm-icon">✨</div>
              <div className="comm-label">Exclusive Drops</div>
            </div>
            <div className="comm-feature">
              <div className="comm-icon">💜</div>
              <div className="comm-label">Style Community</div>
            </div>
            <div className="comm-feature">
              <div className="comm-icon">🎁</div>
              <div className="comm-label">Member Perks</div>
            </div>
            <div className="comm-feature">
              <div className="comm-icon">⚡</div>
              <div className="comm-label">Early Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="newsletter-card">
          <h2 className="newsletter-title">STAY IN THE LOOP</h2>
          <p className="newsletter-text">
            Get the latest drops, exclusive deals, and style inspo straight to your inbox
          </p>
         <div className="newsletter-form">
      <input
        type="email"
        placeholder="your.email@example.com"
        className="email-input"
        value={email}          // controlled input
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-btn" onClick={handleSubscribe}>
        Subscribe
        <Sparkles className="submit-icon" />
      </button>
    </div>

          <p className="newsletter-subtext">
            No spam, just vibes. Unsubscribe anytime.
          </p>
        </div>
      </section>

     <Footer />

     
    </div>
  );
}