import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import "../../style/DetailConcert.css";
import axiosInstance from "../../../axiosInstance";

const DetailConcert = () => {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});

  const url = import.meta.env.VITE_API_URL.replace("/api", "");

  const fetchEvent = async () => {
    try {
      const event = await axiosInstance.get(`/event/${id}`);
      setEvent(event.data);
      console.log(event.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      <NavbarWithAuth />

      {event ? (
        <div>
          <main>
            <div className="banner-image">
              <img src={`${url}/${event.image}`} alt="Konser Seventeen" />
            </div>
          </main>

          <main>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">{event.artist?.name}</h1>
            </div>
          </main>

          <main>
            <div>
              <p>
                <strong>
                  {event.artist?.name} - {event.name}
                </strong>
                <br />
              </p>
            </div>
          </main>

          <main>
            <div>
              <strong>{event.location}</strong>
              <br />
            </div>
          </main>

          <main>
            <div>{new Date(event.date).toDateString("en-US")}</div>
          </main>

          <main>
            <div>
              <p>{event.description}</p>
            </div>
          </main>

          <main>
            <div>
              <Link to="" className="beli">
                Buy Ticket
              </Link>
            </div>
          </main>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">No concert found</h1>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DetailConcert;
