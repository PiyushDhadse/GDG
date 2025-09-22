import React from 'react';
import './footer.css'; // Make sure to create this CSS file
import Location from './assets/location-icon.png'; // Example path, adjust as needed
import Email from './assets/email-icon.png'; // Example path, adjust as needed
import Instagram from './assets/insta-icon.png'; // Example path, adjust as needed
import LinkedIn from './assets/linkedin-icon.png';
import Twitter from './assets/twitter-icon.png'; // Example path, adjust as needed
// Assuming you have the Google Developer Groups logo image.
// You might need to adjust the path based on your project structure.
import gdgLogo from './assets/gdg-logo.png'; // Example path, adjust as needed
import Footerbg from './assets/footer.png'; // Example path, adjust as needed
const Footer = () => {
  return (
    <footer className="footer-container" id="contact">
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
              <img src={Location} alt="Location Icon" className="location-icon" />
              <p>
                Shri Ramdeobaba College of Engineering and Management, <br />
                Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
              </p>
            </div>
            <div className="contact-item">
              <img src={Email} alt="Email Icon" className="email-icon" />
              <p>dsc.rknec@gmail.com</p>
            </div>
          </div>

          <div className="social-media">
            <p>Follow Us:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/gdg_rbu/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram Icon" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/gdg-rbu/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn Icon" className="social-icon" />
              </a>
              <a href="https://x.com/gdsc_rcoem" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter Icon" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img style={{ width: '100%', height: 'auto', maxWidth: '1200px', maxHeight: '1200px' }} src={Footerbg} alt="Footer Background" className="footer-bg" />
    </footer>
  );
};

export default Footer;