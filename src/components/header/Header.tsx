import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerNamePage, headerRoute } from "../../constants";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo" style={{ marginLeft: "1rem" }}>
        <span className="logo-icon">YourLogo</span>
        {/* <span className="logo-text">YourWebsite</span> */}
      </div>
      <label
        htmlFor="nav-toggle"
        className="nav-icon "
        onClick={toggleNav}
        style={{ marginRight: "2rem" }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <nav
        className={`navbar ${isNavOpen ? "show" : ""}`}
        style={{ marginRight: "1rem" }}
      >
        <ul>
          <li>
            <Link to={headerRoute.home} onClick={toggleNav}>
              {headerNamePage.home}
            </Link>
          </li>
          <li>
            <Link to={headerRoute.admin} onClick={toggleNav}>
              {headerNamePage.admin}
            </Link>
          </li>
          <li>
            <Link to={headerRoute.users} onClick={toggleNav}>
              {headerNamePage.users}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
