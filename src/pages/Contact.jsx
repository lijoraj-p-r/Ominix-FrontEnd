import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ToastContainer } from '../components/Toast';
import { useToast } from '../hooks/useToast';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toasts, removeToast, success, error: showError } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      success('Thank you! Your message has been sent. We\'ll get back to you soon!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="page-layout-static">
      <Header cartCount={0} username="" />
      <main className="static-page-content">
        <div className="static-page-container">
          <h1 className="static-page-title">Contact Us</h1>
          <p className="page-subtitle">
            Have a question or need help? We'd love to hear from you!
          </p>

          <div className="contact-content">
            <div className="contact-info-section">
              <div className="contact-info-card">
                <div className="contact-icon">📧</div>
                <h3>Email Us</h3>
                <p>support@Omnix.com</p>
                <p>info@Omnix.com</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri: 9 AM - 6 PM EST</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">📍</div>
                <h3>Visit Us</h3>
                <p>123 Commerce Street</p>
                <p>New York, NY 10001</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Available 24/7</p>
                <p>Click the chat icon to start</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner" style={{ width: '16px', height: '16px', borderWidth: '2px', marginRight: '8px', display: 'inline-block' }}></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
