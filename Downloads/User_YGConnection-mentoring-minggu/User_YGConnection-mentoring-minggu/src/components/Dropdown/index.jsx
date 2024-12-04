import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Tambahkan file CSS khusus untuk Dropdown

const Dropdown = () => {
  const handleClick = (e) => {
    e.stopPropagation(); // Hentikan event click agar tidak bubble ke document
  };

  return (
    <div className="dropdown" onClick={handleClick}>
      <ul>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/poin">Poin</Link></li>
        <li><Link to="/transaction">Transaction</Link></li>
        <li><Link to="/account">Profile</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
