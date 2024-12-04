
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import '../../style/Login.css';     // Import CSS

const Reset = () => {
    return (
        <>
            <NavbarLogin />  {/* Include Navbar */}

            <main>
                <div className="reset-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Sign Up YGEntertainment Account</p>

                    <form>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            required
                        />
                        <Link to="/ResetNext" className="ResetNext">
                            Reset
                        </Link>
                    </form>

                    <div className="links">
                        <p>
                            Enter your email, so we can send<br />
                            verification to reset your password
                        </p>
                    </div>
                </div>
            </main>

            <Footer />  {/* Include Footer */}
        </>
    );
};

export default Reset;