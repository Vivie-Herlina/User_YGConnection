
import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import "../../style/Login.css";  // Import your CSS file

const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
};

const RegisNext = () => {
  return (
    <>
      <NavbarLogin />  {/* Include Navbar */}

      <main>
        <div className="login-container">
          <div className="header-with-icon">
            <h1>YGEntertainment Account</h1>
          </div>

          <p>Create your YGEntertainment account</p>
          <form>
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input type="password" id="password" name="password" placeholder="Enter Your Password" required />
              <i className="fas fa-eye toggle-password" onClick={() => togglePassword('password')}></i>
            </div>

            <label htmlFor="confirm-password">Confirmation Password</label>    
            <div className="password-container">
              <input type="password" id="confirm-password" name="confirm_password" placeholder="Enter Your Password" required />
              <i className="fas fa-eye toggle-password" onClick={() => togglePassword('confirm-password')}></i>
            </div>

            <Link to="/VerifikasiEmail" className="login-button">
              Confirm
            </Link>
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

export default RegisNext;