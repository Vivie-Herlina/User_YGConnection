
import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import "../../style/Login.css";  // Import your CSS file

const Regis = () => {
  return (
    <>
      <NavbarLogin />  {/* Include Navbar */}

      <main>
        <div className="login-container">
          <h1>YGEntertainment Account</h1>
          <p>Sign Up YGEntertainment Account</p>

          <form>
            <label htmlFor="name">Fullname</label>
            <input type="name" id="name" placeholder="Enter Fullname" required />

            <label htmlFor="phone number">Phone Number</label>
            <input type="number" id="number" placeholder="Enter Phone Number" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required />

            <Link to="/RegisNext" className="Regis">Next</Link>
          </form>

          <div className="links">
            <p>Already have an account? <Link to="/Login" className="Login">Log In</Link></p>
          </div>
        </div>
      </main>

      <Footer />  {/* Include Footer */}
    </>
  );
};

export default Regis;