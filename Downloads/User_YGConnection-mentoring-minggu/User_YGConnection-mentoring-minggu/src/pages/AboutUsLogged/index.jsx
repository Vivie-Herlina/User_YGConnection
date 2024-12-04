// src/pages/AboutUs/AboutUs.js
import React from 'react';
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from '../../components/Footer';
import '../../style/AboutUs.css';

const AboutUsLogged = () => {
  return (
    <>
      <NavbarWithAuth />
      <main>
        <section className="about">
          <h1 className="isi">About YGEntertainment.id</h1>
          <div className="content">
            <div className="mission">
              <h2>Mission</h2>
              <p>
                Become a trusted platform for YG Entertainment fans in Indonesia to get official merchandise and the
                latest information about concerts, in order to bring fans closer to their favorite artists.
              </p>
            </div>
            <div className="vision">
              <h2>Vision</h2>
              <p>
                Providing easy and safe access for YG Entertainment fans in Indonesia to get quality official
                merchandise, while providing the latest information about YG concert schedules, events, and artist
                news. We are committed to establishing a solid fan community in Indonesia, offering a satisfying
                shopping experience and presenting exclusive products that can strengthen the relationship between fans
                and their favorite artists.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsLogged;
