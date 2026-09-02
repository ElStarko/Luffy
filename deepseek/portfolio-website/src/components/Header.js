import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            Johnson<span className="highlight">.</span>
          </div>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;