import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    alert(`Thank ${firstName} ${lastName || null} for contacting us!`);
    event.target.reset();
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-row mb-5">
              <input
                className="p-2"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="p-2 float-end"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <input type="email" placeholder="Your Email" required />
            <input
              className="p-2 mb-5"
              type="tel"
              placeholder="Phone Number"
              required
            />
            <textarea
              className="p-2"
              placeholder="How can we help"
              required
            ></textarea>
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
