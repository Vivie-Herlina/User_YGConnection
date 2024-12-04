
import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Product.css";

const Product = () => {
  return (
    <div>
      <NavbarWithAuth /> {/* Add Navbar here */}

      <Dropdown /> {/* Add Dropdown here */}

      {/* Product Grid Section */}
      <div className="container">
        <div className="product-grid">
          <div className="product-item item1" onClick={() => window.location.href = 'light_stick.html'}>
            <h3>Light Stick</h3>
            <img src="img/Lightstick.png" alt="Product 1" />
          </div>
          <div className="product-item item2" onClick={() => window.location.href = 'merch.html'}>
            <h3>Merch</h3>
            <img src="img/Merch.png" alt="Product 2" />
          </div>
          <div className="product-item item3" onClick={() => window.location.href = 'membership.html'}>
            <h3>Membership</h3>
            <img src="img/Membership.png" alt="Product 3" />
          </div>
          <div className="product-item item4">
            <h3>Album</h3>
            <img src="img/Album.png" alt="Product 4" />
          </div>
          <div className="product-item item5">
            <h3>Mini Album</h3>
            <img src="img/Mini Album.png" alt="Product 5" />
          </div>
        </div>
      </div>

      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Product;