import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './TermsOfService.css';

export default function TermsOfService() {
  return (
    <div className="page-layout-static">
      <Header cartCount={0} username="" />
      <main className="static-page-content">
        <div className="static-page-container">
          <h1 className="static-page-title">Terms of Service</h1>
          <p className="page-subtitle">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="static-page-section">
            <h2 className="section-title">1. Acceptance of Terms</h2>
            <p className="section-text">
              By accessing and using SalesSavvy, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">2. Use License</h2>
            <p className="section-text">
              Permission is granted to temporarily download one copy of the materials on SalesSavvy's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="terms-list">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on SalesSavvy's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">3. User Accounts</h2>
            <p className="section-text">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for all activities that occur under your account.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">4. Product Information</h2>
            <p className="section-text">
              We strive to provide accurate product descriptions and pricing. However, we do not 
              warrant that product descriptions or other content on this site is accurate, complete, 
              reliable, current, or error-free. Prices and availability are subject to change without notice.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">5. Payment and Billing</h2>
            <p className="section-text">
              All payments are processed securely through our payment partners. By making a purchase, 
              you agree to pay the price listed for the product and any applicable taxes and shipping fees. 
              We reserve the right to refuse or cancel any order at any time.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">6. Returns and Refunds</h2>
            <p className="section-text">
              We offer returns and refunds in accordance with our Return Policy. Items must be returned 
              within 30 days of purchase in their original condition. Refunds will be processed to the 
              original payment method within 5-10 business days.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">7. Prohibited Uses</h2>
            <p className="section-text">You may not use our service:</p>
            <ul className="terms-list">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material</li>
              <li>To impersonate or attempt to impersonate the company or any employee or affiliate</li>
              <li>In any way that infringes upon the rights of others</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">8. Limitation of Liability</h2>
            <p className="section-text">
              In no event shall SalesSavvy, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">9. Changes to Terms</h2>
            <p className="section-text">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">10. Contact Information</h2>
            <p className="section-text">
              If you have any questions about these Terms of Service, please contact us at 
              <a href="/contact" className="inline-link"> support@salessavvy.com</a> or visit our 
              <a href="/contact" className="inline-link"> Contact page</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
