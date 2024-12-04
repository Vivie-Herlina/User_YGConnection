import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import '../../style/Login.css';  // Assuming you have a CSS file for styling
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log(res.data.message);
                navigate('/HomeLogged'); // Redirect after successful login
            })
            .catch(err => {
                console.error(err.response?.data?.message || "An error occurred");
                setErrorMessage(err.response?.data?.message || "Invalid credentials");
            });
    };
    return (
        <>
            <NavbarLogin />  

            <main>
                <div className="login-container">
                    <h1>YGEntertainment Account</h1>
                    <p>Log in YGEntertainment Account</p>

                    {errorMessage && <p className="error">{errorMessage}</p>}

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="login-button">Log In</button>
                    </form>

                    <div className="links">
                        <p>Forgot Password? <Link to="/Reset" className="Reset">Log In</Link></p>
                        <p>Don't have an account? <Link to="/Regis" className="regis">Sign up</Link></p>
                    </div>
                </div>
            </main>

            <Footer />  
        </>
    );
};

export default Login;
