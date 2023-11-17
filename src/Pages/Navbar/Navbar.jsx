// Navbar.js
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Vishesh Tutorial</span>
        </div>
        <div className={`navbar-links ${showMenu ? "active" : ""}`}>
          <Link to="/landing">
            <span>Home</span>
          </Link>
          <Link to="/login">
            <span>Login</span>
          </Link>
          <Link to="/Signup">
            <span>Signup</span>
          </Link>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
