import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Toggle mobile menu when logo is clicked
  const handleLogoClick = () => {
    if (window.innerWidth <= 768) {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  return (
    <header className="header-center fixed-nav">
      <nav className={`nav-capsule ${expanded ? 'expanded' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Logo */}
        <div className="nav-logo" onClick={handleLogoClick}>
          <img src="./assets/cement-logo.png" alt="SteelCem" />
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li style={{ '--delay': 1 }}><a href="#about">About</a></li>
          <li style={{ '--delay': 2 }}><a href="#products">Products</a></li>
          <li style={{ '--delay': 3 }}><a href="#projects">Projects</a></li>
          <li style={{ '--delay': 4 }}><a href="#contact">Contact</a></li>
        </ul>

        {/* Button */}
        <button className="join-btn" style={{ '--delay': 5 }}>
          Join For Free
        </button>
      </nav>
    </header>
  );
};

export default Header;
