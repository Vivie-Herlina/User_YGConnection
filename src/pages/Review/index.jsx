
import React from 'react';
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import '../../style/Review.css'; // Import your CSS styles

const Review = () => {
  return (
    <>
      <NavbarLogged />  {/* Include Navbar component */}
      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown />  {/* Include Dropdown component */}

      <div className="container">
        <div className="back-title">
          <a href="Transaction.html">
            <img src="/images/img/kembali.png" alt="Back to Transaction" className="back-button" />
          </a>
          <h1>Review</h1>
        </div>

        <div className="product-review">
          <div className="product-info">
            <img src="/images/img/lalisa_album.png" alt="LISA -LALISA- PHOTOBOOK" className="product-image" />
            <span className="product-title">LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</span>
          </div>

          <div className="rating-section">
            <h3>Give Our Product Rating</h3>
            <div className="stars">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
          </div>

          <div className="review-section">
            <h3>Leave Us Review</h3>
            <textarea placeholder="Write your review here..."></textarea>
          </div>

          <button className="submit-button">Submit</button>
        </div>
      </div>

      <Footer />  {/* Include Footer component */}
    </>
  );
};

export default Review;