// src/pages/Merchandise/Merchandise.js
import React, { useState } from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from '../../components/Dropdown';
import Footer from '../../components/Footer';
import '../../style/Merchandise.css';

const Merchandise = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    { title: "The Game Photocard Collection", price: "Rp500.000", image: "./IMG MERCHANDISE/The Game Photocard Collection.png" },
    { title: "WINNER 4th MINI ALBUM", price: "Rp565.000", image: "./IMG MERCHANDISE/WINNER 4th MINI ALBUM.png" },
    { title: "WINNER 4th MINI ALBUM [HOLIDAY] (PHOTOBOOK ver.)", price: "Rp323.000", image: "./IMG MERCHANDISE/WINNER 4th MINI ALBUM [HOLIDAY] (PHOTOBOOK ver.).png" },
    { title: "4th MINI ALBUM [HOLIDAY] KiT ALBUM", price: "Rp292.000", image: "./IMG MERCHANDISE/4th MINI ALBUM [HOLIDAY] KiT ALBUM.png" },
    { title: "BLACKPINK THE GAME OST [THE GIRLS] Reve ver. (SET)", price: "Rp324.000", image: "./IMG MERCHANDISE/BLACKPINK THE GAME OST [THE GIRLS] Reve ver. (SET).png" },
    { title: "10th ANNIVERSARY FIGURE ALBUM (CUPID VER.)", price: "Rp464.000", image: "./IMG MERCHANDISE/10th ANNIVERSARY FIGURE ALBUM (CUPID VER.).png" },
    { title: "3rd MINI ALBUM [LOVE EPISODE]", price: "Rp648.000", image: "./IMG MERCHANDISE/3rd MINI ALBUM [LOVE EPISODE].png" },
    { title: "1st FULL ALBUM [DRIP] BANDANA Ver. (Limited Edition)", price: "Rp298.000", image: "./IMG MERCHANDISE/1st FULL ALBUM [DRIP] BANDANA Ver. (Limited Edition).png" },
    { title: "1st FULL ALBUM [DRIP] ZIP LOCK Ver.  BINDER Ver. Set", price: "Rp500.000", image: "./IMG MERCHANDISE/1st FULL ALBUM [DRIP] ZIP LOCK Ver.  BINDER Ver. Set.png" },
    { title: "2nd MINI ALBUM THE SECOND STEP CHAPTER TWO DIGIPACK ver. (SET)", price: "Rp1.365.000", image: "./IMG MERCHANDISE/2nd MINI ALBUM THE SECOND STEP CHAPTER TWO DIGIPACK ver. (SET).png" },
    { title: "2ND FULL ALBUM [REBOOT] PHOTOBOOK VER. (Set)", price: "Rp750.000", image: "./IMG MERCHANDISE/2ND FULL ALBUM [REBOOT] PHOTOBOOK VER. (Set).png" },
    { title: "Eun Ji Won - Album Vol. 6 [G1]", price: "Rp235.000", image: "./IMG MERCHANDISE/Eun Ji Won - Album Vol. 6 [G1].jpg" },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     
      <NavbarWithAuth />

      <div className="container">
        <div className="title-container">
          <h1>Album</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search Album"
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

      <Dropdown />

    
      <Footer />
    </>
  );
};

export default Merchandise;
