// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title">Omnix</h3>
          <p className="footer-tagline">Your one-stop shop for all your needs</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2027 Omnix. All rights reserved.</p>
      </div>
    </footer>
  );
}
