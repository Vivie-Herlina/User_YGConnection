import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Community.css";

const Community = () => {
  return (
    <>
    
        <NavbarWithAuth />
        <Dropdown />
      

      <div className="main-container">
        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="sidebar-section">
              <h3>Popular Topics</h3>
              <ul>
                <li>
                  <a href="#">Latest News About BabyMonster</a>
                </li>
                <li>
                  <a href="#">Concert Schedule</a>
                </li>
                <li>
                  <a href="#">BLACKPINK Comeback</a>
                </li>
                <li>
                  <a href="#">The Next Merchandise</a>
                </li>
                <li>
                  <a href="#">Newest Album</a>
                </li>
              </ul>
              <div className="sidebar-section">
                <h3>Suggest Topics</h3>
                <ul>
                  <li>
                    <a href="#">Fashion and Style Lisa Manoban</a>
                  </li>
                  <li>
                    <a href="#">New Artist Debut...</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-card">
            <h3>Upcoming Event</h3>
            <ul>
              <li>
                <a href="#">Fan Meeting WINNER</a>
              </li>
              <li>
                <a href="#">BIGBANG Anniversary Event</a>
              </li>
              <li>
                <a href="#">Korean BLACKPINK World Tour</a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="feed">
          <div className="create-post">
            <textarea placeholder="What's on your mind?"></textarea>
            <div className="post-actions">
              <label htmlFor="photo-upload">
                <img src="/images/img/img.png" alt="Photo Icon" />
              </label>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                style={{ display: "none" }}
              />

              <label htmlFor="video-upload">
                <img src="/images/img/vid.png" alt="Video Icon" />
              </label>
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                style={{ display: "none" }}
              />

              <label htmlFor="file-upload">
                <img src="/images/img/file.png" alt="File Icon" />
              </label>
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
              />

              <label htmlFor="emoji">
                <img src="/images/img/emot.png" alt="Emoji Icon" />
              </label>
              <input type="emoji" id="emoji" style={{ display: "none" }} />
            </div>
          </div>

          <div className="post">
            <div className="post-header">
              <img
                src="/images/img/pp1.png"
                alt="User Icon"
                className="profile-icon"
              />
              <span className="post-username">Vivie Nurzaba</span>
              <span className="post-time">2h ago</span>
            </div>
            <p>BLACKPINK will comeback at 2025</p>
            <img
              src="/images/img/com_bp.png"
              alt="Post Image"
              className="post-image"
            />
            <div className="post-footer">
              <button className="footer-button">
                <img
                  src="/images/img/like.png"
                  alt="Like Icon"
                  className="footer-icon"
                />{" "}
                Like
              </button>
              <button className="footer-button">
                <img
                  src="/images/img/comment.png"
                  alt="Comment Icon"
                  className="footer-icon"
                />{" "}
                Comment
              </button>
              <button className="footer-button">
                <img
                  src="/images/img/share.png"
                  alt="Share Icon"
                  className="footer-icon"
                />{" "}
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Community;
