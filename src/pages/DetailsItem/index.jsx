
import React from "react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import '../../style/DetailConcert.css';

const DetailsItem = () => {
  return (
    <>
      <header>
        <Navbar />
        <button className="user-button">
          <img
            src="/images/img/profile.png"
            alt="User Icon"
            className="icon-img"
          />{" "}
          Nurzaba
        </button>
        <Dropdown />
      </header>

      <main>
        <div className="order-section">
          <h3>Your Order</h3>
          <div className="order-item">
            <img src="/images/img/lalisa_album.png" alt="LALISA- PHOTOBOOK [SPECIAL EDITION]" />
            <div className="order-details">
              <p><strong>LISA -LALISA- PHOTOBOOK [SPECIAL EDITION]</strong></p>
              <p>Quantity: 1</p>
            </div>
            <p className="price">Rp615.000</p>
          </div>
        </div>
      </main>

      <main>
        <div className="total-price">
          <p>Total (1 Item)</p>
          <p>Rp615.000</p>
        </div>
      </main>

      <main>
        <div className="info-section">
          <div className="info-block">
            <h4>Customer</h4>
            <p>Muchamad Nurza Bayu Dhantono</p>
            <p>muchamadnurzaba24@gmail.com</p>
            <p>+62 895-3965-90113</p>
          </div>
          <div className="info-block">
            <h4>Address</h4>
            <p>Jl. R. Aspia, Karadenan, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16913</p>
          </div>
          <div className="info-block">
            <h4>Shipping Option</h4>
            <p>Reguler</p>
          </div>
        </div>
      </main>

      <main>
        <table className="details-table">
          <tbody>
            <tr>
              <td>Status</td>
              <td>Shipping</td>
              <td><Link to="/Tracking" className="details-link">Details &gt;&gt;</Link></td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>Bank (Virtual Account)</td>
            </tr>
            <tr>
              <td>Payment Status</td>
              <td>Paid Off</td>
            </tr>
            <tr>
              <td>Order Created</td>
              <td>9/12/2024</td>
            </tr>
          </tbody>
        </table>
      </main>

      <main>
        <div className="order-summary">
          <h4>Order Summary</h4>
          <p>Subtotal (1 item) <span>Rp615.000</span></p>
          <p>Shipping Fee <span>Rp15.000</span></p>
          <p>Discount <span>-</span></p>
        </div>
      </main>

      <main>
        <div className="cart-total">
          <p className="grand-total">Grand Total:</p>
          <p className="grand-total-amount">Rp630.000</p>
        </div>
      </main>

      <main>
        <div className="buttons">
          <Link to="/Product"><button className="buy-again">buy again</button></Link>
          <Link to="/Review"><button className="review">Review</button></Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetailsItem;