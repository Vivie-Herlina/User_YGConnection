import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Dropdown from "../Dropdown";

// Navbar for Logged-in Users
const NavbarLogged = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="navbar navbar-logged">
      <div className="logo-container">
        <img
          src="/images/img/logo_YG.png"
          alt="YG Entertainment Logo"
          className="logo"
        />
      </div>
      <nav>
        <Link to="/home_logged">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/community">Community</Link>
        <Link to="/about_us_logged">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <button className="user-button" onClick={toggleDropdown}>
        <img src="img/profile.png" alt="User Icon" className="icon-img" />{" "}
        Nurzaba
      </button>
      {dropdownVisible && <Dropdown />}
    </header>
  );
};

// Navbar for Logged-out Users
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          src="/images/img/logo_YG.png"
          alt="YG Entertainment Logo"
          className="logo"
        />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Login" className="login-button">
          Log In
        </Link>
      </nav>
    </header>
  );
};

// Main Navbar Component with Conditional Rendering (Logged in / Logged out)
const NavbarWithAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example login state

  return <div>{isLoggedIn ? <NavbarLogged /> : <Navbar />}</div>;
};

export default NavbarWithAuth;
