import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Contact.css";

const Contact = () => {
  return (
    <div>
      <NavbarWithAuth />
      <Dropdown />

      <div className="container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Email, call, or complete the form to learn how Brand can solve your
            messaging problem
          </p>
          <div className="contact-email">info@brand.com</div>
          <div className="contact-phone">(+62)21-3452-1312</div>

          <div className="contact-sections">
            <div className="section">
              <div className="section-title">Feedback and Suggestions</div>
              <div className="section-content">
                We value your feedback and are continuously working to improve
                Brand. Your input is crucial in shaping the future of Brand.
              </div>
            </div>
            <div className="section">
              <div className="section-title">Media Inquiries</div>
              <div className="section-content">
                For media-related questions or press inquiries, please contact
                us at media@brand.com
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-header">
            <h2>Get in Touch</h2>
            <p>You can reach us anytime</p>
          </div>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="How can we help"></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="form-footer">
              By contacting us, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;