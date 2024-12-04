import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import "../../style/Login.css";

const VerifikasiEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verificationCode }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Email verified successfully!");
        navigate("/Login");
      } else {
        alert(data.message || "Verification failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during verification");
    }
  };
  

  return (
    <>
      <NavbarLogin />
      <main>
        <div className="login-container">
          <h1>YGEntertainment Account</h1>
          <p>Enter the verification code sent to your email</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Confirm</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VerifikasiEmail;
