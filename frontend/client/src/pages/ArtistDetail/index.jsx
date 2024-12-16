import React, { useState } from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Footer from "../../components/Footer";
// import "../../style/ArtistDetail.css";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const ArtisDetail = () => {
  const { name } = useParams();
  const [artist, setArtist] = React.useState();
  const [products, setProducts] = React.useState([]);

  const url = import.meta.env.VITE_API_URL.replace("/api", "");
  const userId = localStorage.getItem("userId");

  const fetchArtist = async () => {
    try {
      const artist = await axiosInstance.get(`/artist/${name}`);
      setArtist(artist.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const products = await axiosInstance.get(`/products/category/${name}`);
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchArtist();
    fetchProducts();
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
                  <div key={index} className="member-item mb-2">
                    <img src={`${url}/${member.image}`} alt={member.name} />
                    <p className="member-name">{member.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="merch mb-4">
              {products && (
                <>
                  <div className="merch-list grid grid-cols-2 gap-4">
                    {products.map((product, index) => (
                      <Link
                        to={`/ProductDetail/${product.id}`}
                        key={index}
                        className="item mb-2"
                      >
                        <img
                          src={`${url}/${product.image}`}
                          alt={product.name}
                        />
                        <p>
                          {product.name}
                          <br />
                          <span>{product.point} point</span>
                        </p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
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
