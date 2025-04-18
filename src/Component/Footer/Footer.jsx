import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";

const Footer = () => {
  // Function to scroll to the top of the page
  const handleScrollTop = () => window.scrollTo(2, 0);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="center-message">
          <p className="tagline">Ready to make an</p>
          <p className="impact">
            <span>impact</span>?
          </p>
          
        </div>
       
        <div className="footer-links-container">
          <div className="make-footer-space"> 
            <ul className="footer-links">
              ©2025 DEIB INNOVATION, LLC. All rights reserved. |
             
            </ul>
          </div>
          
          {/* Reordered Navigation Links */}
          <div className="make-footer-space"> 
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={handleScrollTop}>Home</Link>
              </li>
              <li>
                <Link to="/about-us" onClick={handleScrollTop}>About Us</Link>
              </li>
              <li>
                <Link to="/service" onClick={handleScrollTop}>Services</Link>
              </li>
              <li>
                <Link to="/impact" onClick={handleScrollTop}>Impact</Link>
              </li>
              <li>
                <Link to="/career" onClick={handleScrollTop}>Careers</Link>
              </li>
              <li>
                <Link to="/resources" onClick={handleScrollTop}>Resources</Link>
              </li>
            </ul>
          </div>

          {/* Meta Links */}
          <div className="make-footer-space"> 
            <ul className="footer-meta-links">
              <li>
                <Link to="#" onClick={handleScrollTop}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" onClick={handleScrollTop}>Privacy Policy</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
