
import React, { useState } from "react";
import React, { useState } from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
import "../../style/Membership.css";

const Membership = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "TREASURE MAKER MEMBERSHIP",
      price: "Rp.367.000",
      image: "./IMG MEMBERSHIP/TREASURE MAKER MEMBERSHIP.png",
    },
    {
      title: "TREASURE MAKER MEMBERSHIP KIT",
      price: "Rp.252.000",
      image: "./IMG MEMBERSHIP/TREASURE MAKER MEMBERSHIP KIT.png",
    },
    {
      title: "MONTIEZ MEMBERSHIP (BABY MONSTER)",
      price: "Rp.324.000",
      image: "./IMG MEMBERSHIP/MONTIEZ MEMBERSHIP_BABYMONSTER.png",
    },
    {
      title: "AKKADEMY MEMBERSHIP",
      price: "Rp.173.000",
      image: "./IMG MEMBERSHIP/member_bp.png",
    },
    {
      title: "BLINK MEMBERSHIP",
      price: "Rp.363.000",
      image: "img/member_winner.png",
    },
    {
      title: "BLINK PREMIUM MEMBERSHIP KIT",
      price: "Rp.790.000",
      image: "./IMG MEMBERSHIP/BLINK PREMIUM MEMBERSHIP KIT.jpg",
    },
    {
      title: "BLINK GENERAL MEMBERSHIP KIT",
      price: "Rp.316.000",
      image: "./IMG MEMBERSHIP/BLINK GENERAL MEMBERSHIP KIT.jpg",
    },
    {
      title: "INNER CIRCLE MEMBERSHIP",
      price: "Rp.363.000",
      image: "./IMG MEMBERSHIP/INNER CIRCLE MEMBERSHIP.png",
    },
    {
      title: "INNER CIRCLE MEMBERSHIP KIT 1",
      price: "Rp.253.000",
      image: "./IMG MEMBERSHIP/INNER CIRCLE MEMBERSHIP KIT 1.png",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavbarWithAuth /> {/* Add the Navbar component */}

      <div className="container">
        <div className="title-container">
          <h1>Membership</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Membership"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Add the Footer component */}
    </>
  );
};

export default Membership;