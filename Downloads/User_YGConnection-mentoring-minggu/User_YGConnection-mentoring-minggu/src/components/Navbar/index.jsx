import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

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

export default Navbar;
