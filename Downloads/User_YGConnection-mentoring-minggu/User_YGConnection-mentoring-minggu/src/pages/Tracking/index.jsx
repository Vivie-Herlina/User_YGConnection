
import React from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import '../../style/Tracking.css'; // Import your CSS styles

const Tracking = () => {
  return (
    <>
      <NavbarWithAuth />  {/* Use Navbar component */}
      
      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown />  {/* Use Dropdown component */}

      <div className="container">
        <div className="back-title">
          <a href="detail_item.html">
            <img src="/images/img/kembali.png" alt="Back to Transaction" className="back-button" />
          </a>
          <h1>Details Tracking</h1>
        </div>

        <div className="product-header">
          <img src="/images/img/lalisa_album.png" alt="Product Image" className="product-image" />
          <div className="product-title">
            LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-time">2:10<br/>8 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">Order Confirmed</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">22:40<br/>7 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">Shipping from warehouse to Harbour</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">10:13<br/>7 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">Shipping from Korea to Indonesia</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">5 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">Shipping from Harbour to Warehouse</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">4 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-content">Shipping from warehouse to Consumer</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">2 October 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">The order was confirmed to Consumer</div>
          </div>
        </div>
      </div>

      <Footer />  {/* Use Footer component */}
    </>
  );
};

export default Tracking;