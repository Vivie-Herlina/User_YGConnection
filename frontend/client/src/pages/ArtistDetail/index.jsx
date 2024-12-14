import React, { useState } from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
// import "../../style/ArtistDetail.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const ArtisDetail = () => {
  const { name } = useParams();
  const [artist, setArtist] = React.useState();

  const url = import.meta.env.VITE_API_URL.replace("/api", "");

  const fetchArtist = async () => {
    try {
      const artist = await axiosInstance.get(`/artist/${name}`);
      setArtist(artist.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <>
      <NavbarWithAuth />

      <h1 className="isi text-2xl font-bold">{artist?.name}</h1>
      <main className="flex flex-col items-center">
        {artist ? (
          <>
            <section className="banner mb-4">
              <img
                className="size-[30rem]"
                src={`${url}/${artist.image}`}
                alt="BABYMONSTER"
              />
              <button>Artist Info</button>
            </section>
            <section className="members mb-4">
              <h2 className="text-xl font-bold mb-6">Members</h2>
              <div className="member-list grid grid-cols-4 gap-4">
                {artist.member.map((member, index) => (
                  <div className="member-item mb-2">
                    <img src={`${url}/${member.image}`} alt={member.name} />
                    <p className="member-name">{member.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="merch mb-4">
              <h2>Merch</h2>
              <div className="merch-list grid grid-cols-2 gap-4">
                <div className="item mb-2">
                  <img src="/images/img/keyring.png" alt="Keyring" />
                  <p>
                    Keyring
                    <br />
                    <span>100 Points</span>
                  </p>
                </div>
                <div className="item mb-2">
                  <img
                    src="/images/img/Signature Ring.png"
                    alt="Signature Ring"
                  />
                  <p>
                    Signature Ring
                    <br />
                    <span>200 Points</span>
                  </p>
                </div>
                <div className="item mb-2">
                  <img src="/images/img/Brooch.png" alt="Brooch" />
                  <p>
                    Brooch
                    <br />
                    <span>150 Points</span>
                  </p>
                </div>
                <div className="item mb-2">
                  <img src="/images/img/necklace.png" alt="Room Slipper" />
                  <p>
                    Necklace
                    <br />
                    <span>250 Points</span>
                  </p>
                </div>
                <div className="item mb-2">
                  <img src="/images/img/Ballcap.png" alt="Ballcap" />
                  <p>
                    Ballcap
                    <br />
                    <span>250 Points</span>
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div>
            <h1 className="text-2xl">No Artist found</h1>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ArtisDetail;
