
import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
import "../../style/News.css";

const News = () => {
  return (
    <div>
      <NavbarWithAuth /> {/* Import Navbar Component */}

      {/* BLACKPINK Heading */}
      <h3 className="center-heading">BLACKPINK is Comeback!!!</h3>

      <div className="banner-image">
        <img src="img/fullBP.jpeg" alt="BLACKPINK World Tour Banner" />
      </div>

      {/* Main Content */}
      <div className="content">
        <p>
          YG Entertainment recently announced that BLACKPINK will be making a
          highly anticipated comeback in 2025, accompanied by a world tour.
          This exciting news has thrilled fans who have been eagerly awaiting
          new releases since the group’s last global activities. Known for hits
          like How You Like That and Kill This Love, BLACKPINK is set to
          bring fresh music to the stage, further solidifying their presence in
          the global music scene. Fans worldwide are looking forward to this
          new era, anticipating both the sound and visual experience that
          BLACKPINK will deliver.
        </p>

        <p>
          The upcoming world tour is expected to be one of BLACKPINK’s biggest
          to date, featuring grand production and the energetic performances
          they are known for. Returning to international stages, BLACKPINK aims
          not only to captivate long-time fans but also to expand their
          influence in the global K-pop industry. Fans are eagerly awaiting
          more details about concert dates, locations, and ticketing, looking
          forward to experiencing their idols live. This comeback and tour
          promise to be monumental events, showcasing BLACKPINK's growth and
          musical evolution.
        </p>
      </div>

      <Footer /> {/* Import Footer Component */}
    </div>
  );
};

export default News;