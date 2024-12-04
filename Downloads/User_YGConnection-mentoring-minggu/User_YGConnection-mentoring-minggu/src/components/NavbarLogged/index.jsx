import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // CSS untuk NavbarLogged
import Dropdown from '../Dropdown'; // Import dropdown component

const NavbarLogged = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (e) => {
    console.log('Clicked element:', e.target);
    console.log('Is dropdown:', e.target.closest('.dropdown') !== null);
    console.log('Is user-button:', e.target.closest('.user-button') !== null);
  
    if (!e.target.closest('.dropdown') && !e.target.closest('.user-button')) {
      setDropdownVisible(false);
    }
  };
  

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header>
      <div className="navbarlogged">
        <img src="images/img/logo_YG.png" alt="YG Entertainment Logo" className="logo" />
        <nav>
          <Link to="/HomeLogged">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Community">Community</Link>
          <Link to="/AboutUsLogged">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </nav>
      </div>
      <button className="user-button" onClick={toggleDropdown}>
        <img src="images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>
      {dropdownVisible && <Dropdown />}
    </header>
  );
};

export default NavbarLogged;
