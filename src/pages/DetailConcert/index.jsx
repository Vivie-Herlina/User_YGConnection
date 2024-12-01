import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../style/DetailConcert.css";

const DetailConcert = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="banner-image">
          <img src="/images/img/konser_seventeen.png" alt="Konser Seventeen" />
        </div>
      </main>

      <main>
        <div className="content">
          <h3>SEVENTEEN</h3>
        </div>
      </main>

      <main>
        <div>
          <p><strong>SEVENTEEN - &apos;RIGHT HERE&apos; Tour</strong><br /></p>
        </div>
      </main>

      <main>
        <div>
          <strong>JIS, Jakarta, Indonesia</strong><br />
        </div>
      </main>

      <main>
        <div>
          February 8, 2025
        </div>
      </main>

      <main>
        <div>
          <p>SEVENTEEN &apos;Right Here&apos; Tour is highly anticipated, showcasing their powerful performances and recent<br />
            hits. Known for their synchronized choreography and engaging stage presence, this tour promises an<br />
            unforgettable experience for fans worldwide</p>
        </div>
      </main>

      <main>
        <div>
          <Link to="" className="beli">Buy Ticket</Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetailConcert;