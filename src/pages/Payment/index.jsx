import React from "react";
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Payment.css";

const Payment = () => {
  return (
    <>
      <NavbarLogged /> {/* Import Navbar Component */}

      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown /> {/* Import Dropdown Component */}

      <main className="payment-content">
        <h2>Payment</h2>
        <div className="payment-box">
          <h3>Virtual Account</h3>
          <div className="account-number">4353-5406-3406-4237-5463</div>
          <p className="validity-info">
            <img
              src="/img/warning.png"
              alt="Warning"
              style={{ width: "16px", verticalAlign: "middle", marginRight: "5px" }}
            />
            Virtual Account is only valid for 1 hour
          </p>
          <div className="button-group">
            <button className="copy-button" onClick={() => window.location.href = 'payment_2.html'}>
              Copy
            </button>
            <button className="close-button">Close</button>
          </div>
        </div>
      </main>

      <Footer /> {/* Import Footer Component */}
    </>
  );
};

export default Payment;