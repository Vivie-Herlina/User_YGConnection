import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import axiosInstance from "../../axiosInstance";
import "./style.css";

const ArtistProfile = () => {
  const { artistName } = useParams();
  const [artistData, setArtistData] = React.useState(null);

  const fetchArtistData = async () => {
    try {
      const response = await axiosInstance.get(`/artist/${artistName}`);
      setArtistData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchArtistData();
  }, []);

  const artist =
    artistData && artistData.name.toLowerCase() === artistName.toLowerCase()
      ? artistData
      : null;

  if (!artist) {
    return <div>Artist not found!</div>;
  }

  return (
    <Layout>
      <div className="artist-profile">
        {/* Artist Main Section */}
        <div className="artist-main">
          <div className="artist-img-container">
            <img
              src={`http://localhost:3000/${artist.image}`}
              alt={artist.name}
              className="artist-img"
            />
          </div>
          <div className="artist-info">
            <div className="form-group">
              <label>Artist Name</label>
              <input type="text" value={artist.name} readOnly />
            </div>
            <div className="form-group">
              <label>Artist Member</label>
              <input type="number" value={artist.member.length} readOnly />
            </div>
            <div className="form-group">
              <label>Debut Date</label>
              <input
                type="text"
                value={moment(artist.debutDate).format("MMMM D YYYY")}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="artist-description">
          <label>Artist Description (optional)</label>
          <textarea value={artist.description} readOnly />
        </div>

        <div className="add-member">
          {artist.member.map((member, index) => (
            <div className="member-row" key={index}>
              <div className="member-img-container">
                <img
                  src={`http://localhost:3000/${member.image}`}
                  alt={member.name}
                  className="member-img"
                />
              </div>
              <div className="member-info">
                <div className="form-group">
                  <label>Member Name</label>
                  <input type="text" value={member.name} readOnly />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="text"
                    value={moment(member.birthDate).format("MMMM D YYYY")}
                    readOnly
                  />
                </div>
                <div className="form-group description">
                  <label>Member Description (optional)</label>
                  <textarea value={member.description} readOnly />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArtistProfile;
