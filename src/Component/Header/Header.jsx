import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
    setActiveDropdown(null); // Close dropdown when navigating
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="deib-nav-container">
      {/* Logo */}
      <div className="deib-nav-logo">
        <img src="/images/Logo.png" alt="Logo" />
        <span>DEIB Innovation</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="deib-nav-mobile-menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`deib-nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/methodology" onClick={handleLinkClick}>Methodology</Link>
        </li>
        <li className="deib-nav-dropdown">
          <div className="deib-nav-dropdown-title" onClick={() => handleDropdownToggle("services")}>
            Services
          </div>
          <div className={`deib-nav-dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
            <Link to="/service" onClick={handleLinkClick}>Diversity</Link>
            <Link to="/service" onClick={handleLinkClick}>Equity</Link>
            <Link to="/service" onClick={handleLinkClick}>Inclusion</Link>
            <Link to="/service" onClick={handleLinkClick}>Belonging</Link>
          </div>
        </li>
        <li>
          <Link to="/resources" onClick={handleLinkClick}>Resources</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={handleLinkClick}>About us</Link>
        </li>
        <li>
          <Link to="/contact" className="deib-nav-contact-btn" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
