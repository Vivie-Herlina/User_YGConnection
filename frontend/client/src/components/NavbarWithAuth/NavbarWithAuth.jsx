import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar_wa.css";
import NavbarLogged from "../NavbarLogged";

// Navbar for Logged-out Users
const Navbar = () => {
  return (
    <header className="navbar-with">
      <div className="logo-container">
        <img
          src="/images/img/logo_YG.png"
          alt="YG Entertainment Logo"
          className="logo"
        />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/Login" className="login-button">
          Log In
        </Link>
      </nav>
    </header>
  );
};

// Main Navbar Component with Conditional Rendering (Logged in / Logged out)
const NavbarWithAuth = () => {
  const [isLoggedIn] = useState(Boolean(localStorage.getItem("token")));

  return <div>{isLoggedIn ? <NavbarLogged /> : <Navbar />}</div>;
};

export default NavbarWithAuth;
