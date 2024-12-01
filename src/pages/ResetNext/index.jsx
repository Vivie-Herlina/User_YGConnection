
import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import "../../style/Login.css";     // Import CSS for styling

const ResetNext = () => {
    const togglePassword = (id) => {
        const passwordInput = document.getElementById(id);
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    };

    return (
        <>
            <NavbarLogin />  {/* Include Navbar */}

            <main>
                <div className="reset-container">
                    <div className="header-with-icon">
                        <h1>YGEntertainment Account</h1>
                    </div>
                    <p>Reset your password</p>
                    <form action="submit_signup.html" method="POST">
                        <label htmlFor="password">New Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                required
                            />
                            <i
                                className="fas fa-eye toggle-password"
                                onClick={() => togglePassword("password")}
                            ></i>
                        </div>

                        <label htmlFor="confirm-password">New Confirmation Password</label>
                        <div className="password-container">
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm_password"
                                placeholder="Enter Your Password"
                                required
                            />
                            <i
                                className="fas fa-eye toggle-password"
                                onClick={() => togglePassword("confirm-password")}
                            ></i>
                        </div>

                        <Link to="/Login" className="ResetNext">
                            Reset
                        </Link>
                    </form>

                    <div className="links">
                        <p>
                            Your old password will be replaced
                            <br />
                            with a new password for future use
                        </p>
                    </div>
                </div>
            </main>

            <Footer />  {/* Include Footer */}
        </>
    );
};

export default ResetNext;