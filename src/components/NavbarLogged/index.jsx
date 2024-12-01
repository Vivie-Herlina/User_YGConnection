// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import Dropdown from '../Dropdown'; // Import dropdown component

const NavbarLogged = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <div className="navbarlogged">
        <img src="img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
        <nav>
          <Link to="/home_logged">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/community">Community</Link>
          <Link to="/about_us_logged">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
      <button className="user-button" onClick={toggleDropdown}>
        <img src="img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>
      {dropdownVisible && <Dropdown />}
    </header>
  );
};

export default NavbarLogged;
