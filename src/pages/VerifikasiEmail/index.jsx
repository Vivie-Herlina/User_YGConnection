
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import '../../style/Login.css';

const VerifikasiEmail = () => {
  return (
    <>
      <NavbarLogin/>
      
      <main>
        <div className="login-container">
          <div className="header-with-icon">
            <h1>YGEntertainment Account</h1>
          </div>

          <p>Create your YGEntertainment account</p>

          <CodeInput /> {/* Use CodeInput component */}

          <p className="change-email-text">
            Want to Change Your Email Address?{" "}
            <Link to="/Login">Change here</Link>
          </p>

          <form>
            <Link to="/Login" className="login-button">
              Confirm
            </Link>
          </form>

          <div className="links">
            <p>Resend Code</p>
          </div>
        </div>
      </main>

      <Footer /> {/* Use Footer component */}
    </>
  );
};

export default VerifikasiEmail;