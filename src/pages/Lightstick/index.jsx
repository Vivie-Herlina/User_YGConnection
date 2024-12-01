import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Lightstick.css";

const Lightstick = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "Treasure Official Light Stick",
      price: "Rp.505.575",
      image: "./IMG LIGHTSTICK/Treasure Official Light Stick.jpg",
    },
    {
      title: "BABYMONSTER OFFICIAL LIGHT STICK",
      price: "Rp.583.356",
      image: "./IMG LIGHTSTICK/BABYMONSTER OFFICIAL LIGHT STICK.png",
    },
    {
      title: "AKMU LIGHT STICK",
      price: "Rp.337.050",
      image: "./IMG LIGHTSTICK/[10VE] AKMU LIGHT STICK.png",
    },
    {
      title: "Black Pink OFFICIAL LIGHT STICK ver.2",
      price: "Rp.505.575",
      image: "./IMG LIGHTSTICK/OFFICIAL LIGHT STICK ver.2.png",
    },
    {
      title: "WINNER OFFICIAL LIGHT STICK (VER.2)",
      price: "Rp.259.269",
      image: "./IMG LIGHTSTICK/[WINNER] OFFICIAL LIGHT STICK (VER.2).png",
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <Navbar />
        <button
          className="user-button btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="./IMG LIGHTSTICK/icon.png"
            alt="User Icon"
            className="icon-img"
          />
          Nurzaba
        </button>
        <Dropdown />
      </header>

      <div className="container">
        <div className="title-container">
          <h1>Lightstick</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Merch"
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

      <Footer />
    </>
  );
};

export default Lightstick;