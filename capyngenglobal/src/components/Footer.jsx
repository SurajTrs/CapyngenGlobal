// src/components/Footer/Footer.jsx
import React, { useState, useEffect } from 'react';
import '../style.css'; // Link to your main stylesheet

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // In a real application, you'd typically include this Footer component
  // in your main App.js or a Layout component.

  return (
    <footer className="capyngen-footer py-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Brand & Description */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading text-white mb-3">Capyngen Private Limited</h5>
            <p className="footer-description text-white-50">
              Recognized as the best digital marketing agency in India, we craft strategic solutions that help each client transform their brand and connect with their target audience.
            </p>
            {/* Optional: Add a logo here if you have one for the footer */}
            {/* <img src="/assets/footer-logo.png" alt="Capyngen Logo" height="50" className="mb-3" /> */}
          </div>

          {/* Column 2: Quick Navigation (Services) */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading text-white mb-3">Quick Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/search-engine-optimization" className="footer-link">Search Engine Optimization</a></li>
              <li><a href="/website-development" className="footer-link">Website design & development</a></li>
              <li><a href="/social-media-marketing" className="footer-link">Social media marketing</a></li>
              <li><a href="/pay-per-click" className="footer-link">Pay per click</a></li>
              <li><a href="/mobile-app-development" className="footer-link">Mobile App Development</a></li>
              <li><a href="/corporate-branding" className="footer-link">Corporate Branding</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links (Company) */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="footer-heading text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/blogs" className="footer-link">Blogs</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/contact-us" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading text-white mb-3">Quick Contact</h5>
            <ul className="list-unstyled footer-contact-list">
              <li className="d-flex mb-2">
                <i className="fas fa-map-marker-alt text-white me-2 mt-1"></i>
                <span className="text-white-50">Tower B3, Spaze I-Tech Park, Sector 49, Gurgaon</span>
              </li>
              <li className="d-flex mb-2">
                <i className="fas fa-clock text-white me-2 mt-1"></i>
                <span className="text-white-50">Mon - Sat: 10.00 AM - 4.00 PM</span>
              </li>
              <li className="d-flex mb-2">
                <i className="fas fa-envelope text-white me-2 mt-1"></i>
                <a href="mailto:sales@capyngen.com" className="footer-link">sales@capyngen.com</a>
              </li>
            </ul>
            {/* Optional: Social Media Icons */}
            <div className="social-icons mt-3">
              <a href="#" className="social-icon-link me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon-link me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon-link me-2"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <div className="text-center text-white-50">
          &copy; {currentYear} Capyngen Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;