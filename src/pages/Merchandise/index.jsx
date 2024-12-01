
import React, { useState } from "react";
import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/Merchandise.css";

const Merchandise = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { title: "Light Stick", desc: "A versatile light stick for your performances", image: "./IMG MERCHANDISE/Lightstick.png" },
    { title: "Merch", desc: "Official merchandise to show your support", image: "./IMG MERCHANDISE/Merch.png" },
    { title: "Membership", desc: "Join our community and get exclusive benefits", image: "./IMG MERCHANDISE/Membership.png"},
    { title: "Album", desc: "Get the latest album from your favorite artist", image: "./IMG MERCHANDISE/Album.png"},
    { title: "Mini Album", desc: "Compact version of the latest album release", image: "./IMG MERCHANDISE/Mini Album.png" },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar /> {/* Add Navbar component */}

      <div className="container">
        <div className="title-container">
          <h1>Product</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default Merchandise;