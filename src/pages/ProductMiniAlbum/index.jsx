// ProductMiniAlbum.js
import React from "react";
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/ProductMiniAlbum.css"; 

const ProductMiniAlbum = () => {
  return (
    <>
      <NavbarLogged /> {/* Use Navbar component */}

      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown /> {/* Use Dropdown component */}

      <main>
        <div className="product-item">
          <img src="/images/img/2022 Welcoming Collection.png" alt="2022 Welcoming Collection" />
          <h3>2022 Welcoming <br />Collection</h3>
          <p>Rp615,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/TREASURE TUMBLER.png" alt="TREASURE TUMBLER" />
          <h3>TREASURE <br />TUMBLER</h3>
          <p>Rp465,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/WINNER 10th ANNIVERSARRY MUG.png" alt="WINNER 10TH ANNIVERSARY MUG" />
          <h3>WINNER 10TH <br />ANNIVERSARY MUG</h3>
          <p>Rp345,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/BABYMONSTER ROOM SLIPPER.png" alt="BABYMONSTER ROOM SLIPPER" />
          <h3>BABYMONSTER <br />ROOM SLIPPER</h3>
          <p>Rp525,000</p>
        </div>
      </main>

      <main>
        <div className="product-item">
          <img src="/images/img/WINNER TEAM VARSITY JACKET.png" alt="WINNER TEAM VARSITY JACKET" />
          <h3>WINNER TEAM <br />VARSITY JACKET</h3>
          <p>Rp1,575,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/BABYMONSTER PHOTOCARD PACKAGE.png" alt="BABYMONSTER PHOTOCARD PACKAGE" />
          <h3>BABYMONSTER <br />PHOTOCARD PACKAGE</h3>
          <p>Rp195,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/JISOO BRACELET.png" alt="DISCO BRACELET" />
          <h3>DISCO <br />BRACELET</h3>
          <p>Rp430,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/TREASURE HOODIE.png" alt="TREASURE HOODIE" />
          <h3>TREASURE <br />HOODIE</h3>
          <p>Rp1,125,000</p>
        </div>
      </main>

      <main>
        <div className="product-item">
          <img src="/images/img/TREASURE SCRUNCHIE SET.png" alt="TREASURE SCRUNCHIE SET" />
          <h3>TREASURE <br />SCRUNCHIE SET</h3>
          <p>Rp375,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/mug.png" alt="BACKPACK RE-CYCLE TOTE BAG" />
          <h3>BABYMONSTER MUG <br />+ COASTER SET</h3>
          <p>Rp250,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/WINNER TRAVEL BAG.png" alt="WINNER TEAM BAG" />
          <h3>WINNER <br />TEAM BAG</h3>
          <p>Rp555,000</p>
        </div>

        <div className="product-item">
          <img src="/images/img/BABYMONSTER HOODIE.png" alt="BABYMONSTER HOODIE" />
          <h3>BABYMONSTER <br />HOODIE</h3>
          <p>Rp1,020,000</p>
        </div>
      </main>

      <main>
        <div className="more-link">
          <a href="#">More</a>
        </div>
      </main>

      <Footer /> {/* Use Footer component */}
    </>
  );
};

export default ProductMiniAlbum;