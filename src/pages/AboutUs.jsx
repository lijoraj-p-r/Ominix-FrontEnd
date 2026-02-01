import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="page-layout-static">
      <Header cartCount={0} username="" />
      <main className="static-page-content">
        <div className="static-page-container">
          <h1 className="static-page-title">About Omnix</h1>
          
          <section className="static-page-section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              Welcome to Omnix, your one-stop destination for all your shopping needs! 
              We're a modern e-commerce platform dedicated to bringing you the best products 
              at unbeatable prices. Founded with a vision to revolutionize online shopping, 
              we combine cutting-edge technology with exceptional customer service.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              At Omnix, our mission is simple: to make shopping easy, enjoyable, and accessible 
              for everyone. We believe that everyone deserves access to quality products at fair prices, 
              delivered with a smile. We're committed to providing an exceptional shopping experience 
              that exceeds your expectations.
            </p>
          </section>

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

          <section className="static-page-section">
            <h2 className="section-title">Join Our Community</h2>
            <p className="section-text">
              We're more than just an online store – we're a community of savvy shoppers who value 
              quality, convenience, and great deals. Join thousands of satisfied customers who trust 
              Omnix for all their shopping needs.
            </p>
            <div className="cta-section">
              <a href="/customerhome" className="cta-button">Start Shopping</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
