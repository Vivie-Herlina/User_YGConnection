import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import Footer from "../../components/Footer";
import "../../style/RegisNext.css"; // Pastikan Anda memiliki file CSS ini.
import { Link } from "react-router-dom";



const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
};

function RegisNext ()  {
    const [values, setValues] = useState({
        password:'' 
    })
    const handleChange = (event) =>{
        setValues({...values,[event.target.name]:[event.target.value]})
    }
    const handlesubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/ygentertainment',{values})
        .then(res => console.log("Registered Succesfully"))
        .catch(err => console.log(err));
    }
    return (
        <>
            <NavbarLogin/>

            <main>
                <div className="login-container">
                    <div className="header-with-icon">
                        <h1>YGEntertainment Account</h1>
                    </div>
            
                    <p>Create your YGEntertainment account</p>
                    <form onSubmit={handlesubmit}> 
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input type="password" id="password" name="password" placeholder="Enter Your Password" onChange={handleChange} required />
                            <i className="fas fa-eye toggle-password" onClick={() => togglePassword('password')} ></i>
                        </div>

                        <label htmlFor="confirm-password">Confirmation Password</label>    
                        <div className="password-container">
                            <input type="password" id="confirm-password" name="confirm_password" placeholder="Enter Your Password" onChange={handleChange} required />
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
    
            <Footer />
               
        </>
    );
}

export default RegisNext;
