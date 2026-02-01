import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="page-layout-static">
      <Header cartCount={0} username="" />
      <main className="static-page-content">
        <div className="static-page-container">
          <h1 className="static-page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="static-page-section">
            <h2 className="section-title">1. Introduction</h2>
            <p className="section-text">
              At Omnix, we are committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">2. Information We Collect</h2>
            <h3 className="subsection-title">Personal Information</h3>
            <p className="section-text">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="terms-list">
              <li>Name and contact information (email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Account credentials (username and password)</li>
            </ul>

            <h3 className="subsection-title">Automatically Collected Information</h3>
            <p className="section-text">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="terms-list">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">3. How We Use Your Information</h2>
            <p className="section-text">We use the information we collect to:</p>
            <ul className="terms-list">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">4. Information Sharing and Disclosure</h2>
            <p className="section-text">
              We do not sell your personal information. We may share your information only in the 
              following circumstances:
            </p>
            <ul className="terms-list">
              <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf</li>
              <li><strong>Payment Processing:</strong> With payment processors to complete transactions</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">5. Data Security</h2>
            <p className="section-text">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, no method of transmission over the Internet or electronic 
              storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">6. Cookies and Tracking Technologies</h2>
            <p className="section-text">
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent. However, if you do not accept cookies, you may 
              not be able to use some portions of our service.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">7. Your Rights</h2>
            <p className="section-text">You have the right to:</p>
            <ul className="terms-list">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">8. Children's Privacy</h2>
            <p className="section-text">
              Our service is not intended for children under the age of 18. We do not knowingly 
              collect personal information from children under 18. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">9. Changes to This Privacy Policy</h2>
            <p className="section-text">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="static-page-section">
            <h2 className="section-title">10. Contact Us</h2>
            <p className="section-text">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="/contact" className="inline-link"> privacy@Omnix.com</a> or visit our 
              <a href="/contact" className="inline-link"> Contact page</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
