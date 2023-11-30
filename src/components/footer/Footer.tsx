import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: mohammed@gmail.com</p>
          <p>Phone: (938) 135-761</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
