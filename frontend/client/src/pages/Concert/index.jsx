import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
import "../../style/Concert.css";
import axiosInstance from "../../../axiosInstance";
import { Link } from "react-router-dom";
axiosInstance;

const Concert = () => {
  const [events, setEvents] = React.useState([]);

  const url = import.meta.env.VITE_API_URL.replace("/api", "");

  const fetchEvents = async () => {
    try {
      const events = await axiosInstance.get("/event");
      setEvents(events.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <NavbarWithAuth />
      <h2 className="isi text-2xl font-bold">Concerts & Events</h2>
      <main>
        {events.map((event, index) => (
          <Link
            to={`/DetailConcert/${event.id}`}
            className="event-grid space-x-5"
          >
            <div className="event">
              <img src={`${url}/${event.image}`} alt={event.title} />
              <div className="date">
                <p id="date">
                  {new Date(event.date).toLocaleDateString("en-US")}
                </p>
                <p>{event.title}</p>
              </div>
              <span>{event.location}</span>
            </div>
          </Link>
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
