import React from "react";
import "./Footer.css";
import { footerContact } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>{footerContact.email}</p>
          <p>{footerContact.phone}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {footerContact.reservedRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
