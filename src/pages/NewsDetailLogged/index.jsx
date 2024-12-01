import React from "react";
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/NewsDetailLogged.css";

const NewsDetailLogged = () => {
  return (
    <>
      <NavbarLogged /> {/* Import Navbar Component */}

      <button className="user-button">
        <img src="/images/img/profile.png" alt="User Icon" className="icon-img" /> Nurzaba
      </button>

      <Dropdown /> {/* Import Dropdown Component */}

      <h3 className="center-heading">BLACKPINK is Comeback!!!</h3>
      <div className="banner-image">
        <img src="/images/img/fullBP.jpeg" alt="BLACKPINK World Tour Banner" />
      </div>

      <div className="content">
        <p>
          YG Entertainment recently announced that BLACKPINK will be making a
          highly anticipated comeback in 2025, accompanied by a world tour.
          This exciting news has thrilled fans who have been eagerly awaiting
          new releases since the group last global activities. Known for hits
          like How You Like That and Kill This Love, BLACKPINK is set to
          bring fresh music to the stage, further solidifying their presence in
          the global music scene. Fans worldwide are looking forward to this
          new era, anticipating both the sound and visual experience that
          BLACKPINK will deliver.
        </p>
        <p>
          The upcoming world tour is expected to be one of BLACKPINK biggest
          to date, featuring grand production and the energetic performances
          they are known for. Returning to international stages, BLACKPINK aims
          not only to captivate long-time fans but also to expand their
          influence in the global K-pop industry. Fans are eagerly awaiting
          more details about concert dates, locations, and ticketing, looking
          forward to experiencing their idols live. This comeback and tour
          promise to be monumental events, showcasing BLACKPINK growth and
          musical evolution.
        </p>
      </div>

      <Footer /> {/* Import Footer Component */}
    </>
  );
};

export default NewsDetailLogged;