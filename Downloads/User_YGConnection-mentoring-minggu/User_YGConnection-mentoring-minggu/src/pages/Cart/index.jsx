import React from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Cart.css";

const Cart = () => {
  const updateQuantity = (event, change) => {
    // Implementasi logika update quantity
  };

  const removeItem = (event) => {
    // Implementasi logika remove item
  };

  return (
    <div>
      <NavbarWithAuth/>
      <Dropdown />
      <main className="cart">
        <h1>Cart</h1>
        <p className="cart-info">
          <img src="img/warning.png" alt="Info Icon" />
          Products in carts will be deleted after 90 days (Removed sold out).
        </p>
        <div className="cart-items">
          <label className="select-all">
            <input type="checkbox" id="selectAll" />
            <span>Select all items</span>
          </label>

          {/* Item 1 */}
          <div className="cart-item" data-price="350000">
            <input type="checkbox" className="item-select" />
            <img
              src="img/BLIK MEMBERSHIP.png"
              alt="BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP"
            />
            <div className="item-details">
              <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB MEMBERSHIP</h3>
              <p className="pre-order">Pre-Order</p>
            </div>
            <div className="item-controls">
              <button
                onClick={(e) => updateQuantity(e, -1)}
                className="minus-btn"
              >
                -
              </button>
              <span className="quantity">1</span>
              <button
                onClick={(e) => updateQuantity(e, 1)}
                className="plus-btn"
              >
                +
              </button>
              <span className="item-price">Rp350.000</span>
              <button onClick={(e) => removeItem(e)} className="remove-btn">
                X
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="cart-item" data-price="300000">
            <input type="checkbox" className="item-select" />
            <img src="img/Brooch.png" alt="Brooch By BabyMonster" />
            <div className="item-details">
              <h3>Brooch By BabyMonster</h3>
              <p className="pre-order">Pre-Order</p>
            </div>
            <div className="item-controls">
              <button
                onClick={(e) => updateQuantity(e, -1)}
                className="minus-btn"
              >
                -
              </button>
              <span className="quantity">1</span>
              <button
                onClick={(e) => updateQuantity(e, 1)}
                className="plus-btn"
              >
                +
              </button>
              <span className="item-price">Rp300.000</span>
              <button onClick={(e) => removeItem(e)} className="remove-btn">
                X
              </button>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <span>Total</span>
          <span id="total-price">Rp0</span>
          <a href="detail_product.html" className="checkout-btn">
            Check Out
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
