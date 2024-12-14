import React from "react";
import Footer from "../../components/Footer";
import "../../style/HomeLogged.css";
import { Link } from "react-router-dom";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import axiosInstance from "../../../axiosInstance";

const Home = () => {
  const [events, setEvents] = React.useState([]);
  const [artists, setArtists] = React.useState([]);

  const url = import.meta.env.VITE_API_URL.replace("/api", "");

  const fetchArtists = async () => {
    try {
      const artists = await axiosInstance.get("/artist");
      setArtists(artists.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvents = async () => {
    try {
      const events = await axiosInstance.get("/event");
      setEvents(events.data.slice(0, 2));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
    fetchArtists();
  }, []);

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
      </main>

      <main>
        <section className="upcoming-news">
          <h2 className="text-2xl font-bold mb-4">Upcoming News</h2>
          <a href="#" className="more-link text-xl float-end">
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
          <h2 className="text-2xl font-bold mb-4">Upcoming Concerts</h2>
          <Link to="/Concert" className="text-xl float-end">
            More
          </Link>
          <div className="concert-grid">
            {events.map((concert, index) => (
              <div className="concert-item" key={index} title={concert.title}>
                <img
                  className="rounded-3xl"
                  src={`${url}/${concert.image}`}
                  alt={concert.title}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <main>
        <section className="artist-section">
          <h1 className="text-2xl font-bold mb-4">Looking for Artists?</h1>
          <div className="artist-grid">
            {artists.map((artist, index) => (
              <Link
                to={`/artist/${artist.name}`}
                key={index}
                className="artist-card"
              >
                <img
                  src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${
                    artist.image
                  }`}
                  alt={artist.name}
                />
                <h3>{artist.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
