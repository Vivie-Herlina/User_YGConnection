import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/Concert.css";

const Concert = () => {
  const events = [
    {
      img: "/images/img/konser_seventeen.png",
      date: "Feb 8",
      title: "SEVENTEEN - \"RIGHT HERE\" Tour",
      location: "Jakarta, Indonesia",
      link: "DetailConcert",
    },
    {
      img: "/images/img/nct.png",
      date: "May 18",
      title: "NCT DREAM - \"THE DREAM SHOW 3:\" DREAM()SCAPE",
      location: "Jakarta, Indonesia",
      link: "detail_concert_bp.html",
    },
    {
      img: "/images/img/ive.png",
      date: "Jan 13",
      title: "IVE - The 1st World Tour \"Show What I Have\"",
      location: "Jakarta, Indonesia",
      link: "detail_concert_bp.html",
    },
    {
      img: "/images/img/synk.jpg",
      date: "Aug 24",
      title: "aespa - \"SYNK: Parallel Link\" World Tour",
      location: "Jakarta, Indonesia",
      link: "detail_concert_bp.html",
    },
    {
      img: "/images/img/btob.png",
      date: "Jul 13",
      title: "BtoB - \"Out Dream\" - Fan-Con",
      location: "Jakarta, Indonesia",
      link: "detail_concert_bp.html",
    },
    {
      img: "/images/img/zerosabone.png",
      date: "Oct 26",
      title: "ZEROSABONE - The First Tour",
      location: "Jakarta, Indonesia",
      link: "detail_concert_bp.html",
    },
  ];

  return (
    <>
      <Navbar />
      <h2 className="isi">Concerts & Events</h2>
      <main>
        {events.map((event, index) => (
          <div
            className="event-grid"
            key={index}
            onClick={() => (window.location.href = event.link)}
          >
            <div className="event">
              <img src={event.img} alt={event.title} />
              <div className="date">
                <p id="date">{event.date}</p>
                <p>{event.title}</p>
              </div>
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </main>
      <div className="more-link">
        <a href="#">More</a>
      </div>
      <Footer />
    </>
  );
};

export default Concert;
