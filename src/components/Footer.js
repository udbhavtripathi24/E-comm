import React from 'react';
import { FaFacebook, FaTwitter, FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    'About Us',
    'Information',
    'Privacy Policy',
    'Terms & Conditions'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* E-Comm Section */}
          <div className="footer-section">
            <h3 className="footer-title">E-Comm</h3>
            <div className="footer-logo">
              <h2>E-Comm</h2>
            </div>
            <p className="footer-description">
              Your premier destination for premium sneakers and accessories. 
              Discover the latest trends in footwear and fashion.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <p className="contact-address">
                E-Comm, Glasgow 104 89
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Info</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Section */}
          <div className="footer-section">
            <h3 className="footer-title">Service</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Section */}
          <div className="footer-section">
            <h3 className="footer-title">My Account</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offers Section */}
          <div className="footer-section">
            <h3 className="footer-title">Our Offers</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-section">
          <div className="payment-methods">
            <FaCcVisa className="payment-icon visa" />
            <FaCcMastercard className="payment-icon mastercard" />
            <FaCcAmex className="payment-icon amex" />
            <FaPaypal className="payment-icon paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
