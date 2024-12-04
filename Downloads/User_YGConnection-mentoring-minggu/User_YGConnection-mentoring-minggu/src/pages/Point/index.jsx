import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Point.css";

const Point = () => {
  // Fungsi untuk menyalin teks ke clipboard
  const copied = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Coupon code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <NavbarWithAuth /> {/* Import Navbar Component */}

     
      <Dropdown /> {/* Import Dropdown Component */}

      <main>
        <div className="main">
          <section className="tier-status">
            <div className="status">
              <p>Tier Status</p>
              <h2>Bronze</h2>
            </div>
            <div className="poin">
              <p className="point-balance">Point Balance</p>
              <h3>63</h3>
            </div>
          </section>
        </div>

        <section className="available-coupons">
          <h4>Available Coupons</h4>
          <div className="coupon">
            <span>Rp50.000</span>
            <input type="text" value="rwrd456" readOnly />
            <button 
              className="myButton" 
              onClick={() => copied("rwrd456")}
            >
              Copy
            </button>
          </div>
          <hr />
          <div className="coupon">
            <span>Rp50.000</span>
            <input type="text" value="rwrd456" readOnly />
            <button 
              className="myButton" 
              onClick={() => copied("rwrd456")}
            >
              Copy
            </button>
          </div>
        </section>
      </main>

      <main>
        <section className="redeem-rewards">
          <h4>Redeem Points For Rewards</h4>
          <div className="reward-images">
            <img src="/images/img/keyring.png" alt="Reward 1" />
            <img src="/images/img/Ballcap.png" alt="Reward 2" />
            <img src="/images/img/Brooch.png" alt="Reward 3" />
          </div>
        </section>
      </main>

      <main>
        <section className="points-activity">
          <h4>Points Activity</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10/15/2024</td>
                <td>Purchase</td>
                <td>+30</td>
              </tr>
              <tr>
                <td>10/15/2024</td>
                <td>Purchase</td>
                <td>+33</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <Footer /> {/* Import Footer Component */}
    </>
  );
};

export default Point;