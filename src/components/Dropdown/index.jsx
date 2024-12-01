// src/components/Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/poin">Poin</Link></li>
        <li><Link to="/transcation">Transaction</Link></li>
        <li><Link to="/account">Profile</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
