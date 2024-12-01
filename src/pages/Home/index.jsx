import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/Home.css";
import { Link } from "react-router-dom";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";

const Home = () => {
  return (
    <>
      <NavbarWithAuth />

      <main>
        <section className="hero">
          <img src="/images/img/Introduction.png" alt="Introduction" />
          <div className="center">
            <h1>What is YGentertainment.id?</h1>
            <p>
              Official platform provides original YG Entertainment merchandise
              from Korea for fans in Indonesia. Find exclusive products and the
              latest concert schedules for YG artists here!
            </p>
          </div>
        </section>

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

        <section className="upcoming-concerts">
          <h2 style={{ paddingLeft: "2%" }}>Upcoming Concerts</h2>
          <Link to="/Concert" className="more-link">
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

        <section className="artist-section">
          <h2 style={{ paddingLeft: "2%" }}>Looking for artists?</h2>
          <div className="artist-grid">
            {[
              { img: "blackpink.jpg", name: "BLACKPINK" },
              { img: "treasuree.jpeg", name: "TREASURE" },
              { img: "baby.png", name: "BABYMONSTER" },
              { img: "win.jpg", name: "WINNER" },
              { img: "akmu.jpeg", name: "AKMU" },
              { img: "EUN JIWON.png", name: "Eun Ji-won" },
              { img: "lisa.png", name: "Lalisa Manoban" },
              { img: "jenni.png", name: "Jennie Kim" },
              { img: "jisoo.png", name: "Kim Ji-soo" },
              { img: "rose.png", name: "Roseanne Park" },
            ].map((artist, index) => (
              <div className="artist-card" key={index}>
                <img src={`/images/img/${artist.img}`} alt={artist.name} />
                <h3>{artist.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
