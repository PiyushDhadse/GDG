import React from 'react';
import './footer.css'; // Make sure to create this CSS file

// Assuming you have the Google Developer Groups logo image.
// You might need to adjust the path based on your project structure.
import gdgLogo from './assets/gdg-logo.png'; // Example path, adjust as needed

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Logo and Description */}
        <div className="footer-left">
          <img src={gdgLogo} alt="GDG Logo" className="gdg-logo" />
          <p className="gdg-title">Google Developer Groups</p>
          <p className="gdg-subtitle">
            <span className="on-campus">On Campus</span> • Ramdeobaba University
          </p>
        </div>

        {/* Vertical Separator Line */}
        <div className="vertical-line"></div>

        {/* Right Section: Contact and Social Media */}
        <div className="footer-right">
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">&#x1F4CD;</span> {/* Location icon */}
              <p>
                Shri Ramdeobaba College of Engineering and Management, <br />
                Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
              </p>
            </div>
            <div className="contact-item">
              <span className="icon">&#x2709;</span> {/* Email icon */}
              <p>dsc.rknec@gmail.com</p>
            </div>
          </div>

          <div className="social-media">
            <p>Follow Us:</p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">&#x1F4F7;</span> {/* Instagram icon */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">&#x1F517;</span> {/* Link icon for LinkedIn (or use actual LinkedIn logo) */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">&#x1F426;</span> {/* Bird icon for Twitter (or use actual Twitter logo) */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
