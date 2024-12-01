// src/pages/AboutUs/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom'; // Jika ada tautan di masa depan
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../style/AboutUs.css';

const AboutUs = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="about-us-container">
        <section className="about">
          <h1 className="about-title">About YGEntertainment.id</h1>

          <div className="about-content">
            {/* Mission Section */}
            <div className="about-section mission">
              <h2 className="section-title">Mission</h2>
              <p className="section-description">
                Become a trusted platform for YG Entertainment fans in Indonesia to get official merchandise and the
                latest information about concerts, in order to bring fans closer to their favorite artists.
              </p>
            </div>

            {/* Vision Section */}
            <div className="about-section vision">
              <h2 className="section-title">Vision</h2>
              <p className="section-description">
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
