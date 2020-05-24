import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="nav-background">
      <nav className="navbar navbar-expand-sm navbar-shadow">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item nav-item-style">
              <img src={Logo} alt="bluestack-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
