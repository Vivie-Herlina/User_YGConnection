import React from "react";
import NavbarLogged from "../../components/NavbarLogged";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../style/HomeLogged.css";
import HeroSection from "./HeroSection";

const HomeLogged = () => {
  return (
    <>
     
        <NavbarLogged />
       
        <Dropdown />
     

      <HeroSection />

      <main>
        <section className="upcoming-news">
          <h2 style={{ paddingLeft: "2%" }}>Upcoming News</h2>
          <a href="#" className="more-link">
            More
          </a>
          <div className="news-grid">
            <div className="news-item">
              <img
                src="/images/img/bp.png"
                alt="Blackpink Comeback"
                onClick={() => (window.location.href = "news.html")}
              />
            </div>
            <div className="news-item">
              <img
                src="/images/img/Upcoming.Babymonster.png"
                alt="BabyMonster"
              />
            </div>
          </div>
        </section>
        </main>

      <main>
        <section className="upcoming-concerts">
          <h2 style={{ paddingLeft: "2%" }}>Upcoming Concerts</h2>
          <Link to="/ConcertLogged" className="more-link">
            More
          </Link>
          <div className="concert-grid">
            <div className="concert-item">
              <img
                src="/images/img/Poster Konser Treasure.png"
                alt="TREASURE World Tour Poster"
              />
            </div>
            <div className="concert-item">
              <img
                src="/images/img/Poster Konser BabyMonster.png"
                alt="SE U MARCH Poster"
              />
            </div>
          </div>
        </section>
      </main>

      <main>
        <section className="new-merch">
          <h2 style={{ paddingLeft: "2%" }}>New Merch</h2>
          <Link to="#" className="more-link">
            More
          </Link>
          <div className="merch-grid">
            <div className="merch-item">
              <img src="/images/img/Love Pillow.png" alt="Love Pillow" />
            </div>
            <div className="merch-item">
              <img src="/images/img/My Type Mug.png" alt="My Type Mug" />
            </div>
          </div>
        </section>
      </main>

      <main>
        <section className="artist-section">
          <h2 style={{ paddingLeft: "2%" }}>Looking for artists?</h2>
          <div className="artist-grid">
            <div className="artist-card">
              <img src="/images/img/blackpink.jpg" alt="BLACKPINK" />
              <h3>BLACKPINK</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/treasuree.jpeg" alt="TREASURE" />
              <h3>TREASURE</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/baby.png" alt="BABYMONSTER" />
              <h3>BABYMONSTER</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/win.jpg" alt="WINNER" />
              <h3>WINNER</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/akmu.jpeg" alt="AKMU" />
              <h3>AKMU</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/EUN JIWON.png" alt="Eun Ji-won" />
              <h3>Eun Ji-won</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/lisa.png" alt="Lalisa Manoban" />
              <h3>Lalisa Manoban</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/jenni.png" alt="Jennie Kim" />
              <h3>Jennie Kim</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/jisso.png" alt="Kim Ji-soo" />
              <h3>Kim Ji-soo</h3>
            </div>
            <div className="artist-card">
              <img src="/images/img/rose.png" alt="Roseanne Park" />
              <h3>Roseanne Park</h3>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomeLogged;
