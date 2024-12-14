import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/AccountSetting.css";
import axiosInstance from "../../../axiosInstance";
import userImg from "/images/img/user.png";

const AccountSetting = () => {
  const [user, setUser] = React.useState({});
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [message, setMessage] = React.useState("");

  const userId = Number(localStorage.getItem("userId"));

  const fetchUser = async () => {
    try {
      const user = await axiosInstance.get(`/profile/${userId}`);
      setUser(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  React.useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        nickname: user.profile?.nickname || "",
        gender: user.profile?.gender || "",
        country: user.profile?.country || "",
        language: user.profile?.language || "",
        timeZone: user.profile?.timeZone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axiosInstance.put(
        `/profile/${user.id}/${userId}`,
        formData
      );
      setMessage(response.data.message);
      setIsEditing(false);
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <NavbarWithAuth />

      <div className="profile-container">
        {message && (
          <div className="bg-green-300 mb-5 p-3 rounded-lg">{message}</div>
        )}
        <div className="profile-header">
          <img
            src={userImg}
            alt="Profile Picture"
            className="profile-picture"
          />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <div className="space-x-3">
            <button
              className={`${
                !isEditing ? "hidden" : ""
              } edit-button bg-blue-500`}
              onClick={handleSave}
            >
              Save
            </button>

            <button className="edit-button" onClick={handleEditToggle}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="detail">
            <label>Nick Name</label>
            <input
              type="text"
              name="nickname"
              placeholder="Nick Name"
              value={formData.nickname}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="detail">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              disabled={!isEditing}
            />
          </div>
          <div className="detail">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              disabled={!isEditing}
            />
          </div>
          <div className="detail">
            <label>Language</label>
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={formData.language}
              disabled={!isEditing}
            />
          </div>
          <div className="detail">
            <label>Time Zone</label>
            <input
              type="text"
              name="timeZone"
              placeholder="Time Zone"
              value={formData.timeZone}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="email-entry">
          <img
            src="/images/img/sms.png"
            alt="Email Icon"
            className="email-icon"
          />
          <div className="email-info">
            <p>{user.email}</p>
            <small>1 month ago</small>
          </div>
        </div>
        <button className="add-email-button">+Add Email Address</button>
      </div>

      {/* Dropdown */}
      <Dropdown />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountSetting;
