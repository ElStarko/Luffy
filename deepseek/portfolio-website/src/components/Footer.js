import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Johnson<span className="highlight">.</span></h3>
            <p>Backend Developer & Data Analyst</p>
          </div>
          
          <div className="footer-social">
            <a href="http://linkedin.com/in/iloabuchi-johnson-22042b253" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ElStarko" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/Hendrix112" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Johnson Iloabuchi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;