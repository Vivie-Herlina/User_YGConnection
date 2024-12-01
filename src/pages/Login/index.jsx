import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import '../../style/Login.css';  // Assuming you have a CSS file for styling

const Login = () => {
    return (
        <>
            <NavbarLogin />  {/* Add the Navbar component */}
            
            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Log in YGEntertainment Account</p>
            
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" required />
                        
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" required />
                        
                        <Link to="/HomeLogged" className="login-button">Log In</Link>
                    </form>

                    <div className="links">
                        <p>Forgot Password? <Link to="/Reset" className="Reset">Log In</Link></p>
                        <p>Dont have an account? <Link to="/Regis" className="regis">Sign up</Link></p>
                    </div>

                    <div className="separator">
                        <span>OR</span>
                    </div>

                    <div className="social-login">
                        <button className="social-button facebook">
                            <img src="/images/img/Facebook Button.png" alt="Facebook" /> 
                        </button>
                        <button className="social-button google">
                            <img src="/images/img/Group.png" alt="Google" />
                        </button>
                    </div>
                </div>
            </main>

            <Footer />  {/* Add the Footer component */}
        </>
    );
};

export default Login;