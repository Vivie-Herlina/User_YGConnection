import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import {
  FaRegUserCircle,
  FaSearch,
  FaShoppingCart,
  FaCoins,
  FaUser,
} from "react-icons/fa";
import { MdPayment, MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../services/authSlice";
import logo from "/images/img/logo_YG.png";
import Modal from "../Modal";

const NavbarLogged = () => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowAddCategory(false);
  };

  const signout = () => dispatch(logout());
  return (
    <header className="bg-gray-100 p-4 px-14">
      <img src={logo} alt="YG Entertainment Logo" className="logo h-14" />
      <div className="flex items-center justify-between ml-auto">
        <div className="flex items-center space-x-12">
          <nav className="flex space-x-4">
            <div className="relative">
              
            </div>
            <Link to="/HomeLogged" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/Product" className="hover:text-gray-500">
              Product
            </Link>
            <Link to="/Community" className="hover:text-gray-500">
              Community
            </Link>
            <Link to="/aboutus" className="hover:text-gray-500">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              Contact Us
            </Link>
          </nav>

          <div className="relative">
            <Dropdown>
              <Dropdown.Trigger>
                <button className="flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-100 bg-black rounded-full shadow-sm focus:outline-none">
                  <FaRegUserCircle size={20} className="me-2" />
                  <span className="font-bold">
                    {localStorage.getItem("name")}
                  </span>
                </button>
              </Dropdown.Trigger>
              <Dropdown.List to="/cart" className="flex items-center">
                <FaShoppingCart className="me-2" />
                Cart
              </Dropdown.List>
              <Dropdown.List onClick={openModal} className="flex items-center">
                <FaCoins className="me-2" />
                Poin
              </Dropdown.List>
              <Dropdown.List to="/Transaction" className="flex items-center">
                <MdPayment className="me-2" />
                Transaction
              </Dropdown.List>
              <Dropdown.List to="/AccountSetting" className="flex items-center">
                <FaUser className="me-2" />
                Profile
              </Dropdown.List>
              <Dropdown.List
                onClick={signout}
                className="flex items-center text-red-500"
              >
                <MdOutlineLogout className="me-2" />
                Log Out
              </Dropdown.List>
            </Dropdown>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => closeModal}>
        <Modal.Header onClose={closeModal}>Point</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl flex justify-center items-center text-yellow-500">
              <FaCoins className="me-3" />
              350
            </h1>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default NavbarLogged;
