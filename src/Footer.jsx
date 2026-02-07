// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Sparkles, TrendingUp, Zap, Star, ArrowRight, Camera, Package, ChevronDown, X, Menu } from 'lucide-react';


export function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo"><ShoppingBag className="footer-logo-icon" />OMINIX</div>
            <p className="footer-tagline">Fashion that speaks your language. Vibes that match your energy.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Shop</h4>
              <a href="/customerhome" className="footer-link">New Arrivals</a>
              <a href="/customerhome" className="footer-link">Trending</a>
              <a href="/customerhome" className="footer-link">Sale</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <a href="/about" className="footer-link">FAQ</a>
              <a href="/about" className="footer-link">Shipping</a>
              <a href="/about" className="footer-link">Returns</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
<a href="https://www.instagram.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
  Instagram
</a>
<a href="https://www.youtube.com" className="footer-link" target="_blank" rel="noopener noreferrer">
  YouTube
</a>
<a href="https://discord.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
  Discord
</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Ominix. All rights reserved.</p>
        </div>
      </footer>

       {/* Styles - See next part */}
      <style jsx>{`
     
         /* Footer */
        .footer { position: relative; z-index: 2; padding: 4rem 8% 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .footer-content { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
        .footer-brand { max-width: 300px; }
        .footer-logo { display: flex; align-items: center; gap: 0.5rem; font-size: 1.8rem; font-weight: 900; letter-spacing: 2px; background: linear-gradient(135deg, #ff6b9d, #ba7bf7); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
        .footer-logo-icon { width: 30px; height: 30px; color: #ff6b9d; }
        .footer-tagline { font-size: 0.95rem; line-height: 1.6; color: rgba(255, 255, 255, 0.6); }
        .footer-column { display: flex; flex-direction: column; gap: 0.8rem; }
        .footer-heading { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
        .footer-link { color: rgba(255, 255, 255, 0.6); text-decoration: none; font-size: 0.95rem; transition: all 0.3s ease; position: relative; display: inline-block; width: fit-content; }
        .footer-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #ff6b9d; transition: width 0.3s ease; }
        .footer-link:hover::after { width: 100%; }
        .footer-link:hover { color: #ff6b9d; transform: translateX(5px); }
        .footer-bottom { padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center; color: rgba(255, 255, 255, 0.5); font-size: 0.9rem; }

        /* Responsive */
        @media (max-width: 1024px) {

          .footer-content { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; }
        }

      `}</style>
      </div>
  );
}
