import React from "react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Concert.css";

const ConcertLogged = () => {
  return (
    <>
      <Navbar />
      <Dropdown />

      <h2 className="isi">Concerts & Events</h2>
      <main>
        <main className="content">
          <div
            className="event-grid"
            onClick={() => (window.location.href = "DetailConcert")}
          >
            <div className="event">
              <img
                src="/images/img/konser_seventeen.png"
                alt="Konser Seventeen"
              />
              <div className="date">
                <p id="date">Feb 8</p>
                <p>SEVENTEEN - &quot;RIGHT HERE&quot; Tour</p>
              </div>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </main>
        {/* Tambahkan konten lainnya */}
      </main>

      <div className="more-link">
        <a href="#">More</a>
      </div>

      <Footer />
    </>
  );
};

export default ConcertLogged;