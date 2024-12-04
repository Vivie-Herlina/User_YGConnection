// src/pages/AccountSetting/AccountSetting.js
import React from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import '../../style/AccountSetting.css';

const AccountSetting = () => {
  return (
    <div>
    
      <NavbarWithAuth />

      <div className="profile-container">
        <div className="profile-header">
          <img src="/images/img/pp_alun.png" alt="Profile Picture" className="profile-picture" />
          <div className="profile-info">
            <h2>Muchamad Nurza Bayu Dhantono</h2>
            <p>muchamadnurza24@gmail.com</p>
          </div>
          <button className="edit-button">Edit</button>
        </div>

        <div className="profile-details">
          <div className="detail">
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="detail">
            <label>Nick Name</label>
            <input type="text" placeholder="Nick Name" />
          </div>
          <div className="detail">
            <label>Gender</label>
            <input type="text" placeholder="Gender" />
          </div>
          <div className="detail">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
          <div className="detail">
            <label>Language</label>
            <input type="text" placeholder="Language" />
          </div>
          <div className="detail">
            <label>Time Zone</label>
            <input type="text" placeholder="Time Zone" />
          </div>
        </div>

        <div className="email-entry">
          <img src="/images/img/sms.png" alt="Email Icon" className="email-icon" />
          <div className="email-info">
            <p>naufalganteng123@gmail.com</p>
            <small>1 month ago</small>
          </div>
        </div>
        <button className="add-email-button">+Add Email Address</button>
      </div>

      {/* Dropdown */}
      <Dropdown />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountSetting;
