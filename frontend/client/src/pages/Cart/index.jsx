import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Cart.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import axiosInstance from "../../../../admin/src/axiosInstance";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, setCarts] = React.useState([]);
  const [selectedCartItems, setSelectedCartItems] = React.useState([]);
  const [voucher, setVoucher] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [messageVoucher, setMessageVoucher] = React.useState();

  const userId = localStorage.getItem("userId");

  const fetchCarts = async () => {
    try {
      const carts = await axiosInstance.get(`/checkout/${userId}`);
      setCarts(carts.data);
    } catch (error) {
      console.error("Failed to fetch carts", error);
    }
  };

  const handleVoucher = async () => {
    try {
      const checkVoucher = await axiosInstance.get(`/voucher/${userId}`);
      const validVoucher = checkVoucher.data.find(
        (vouchers) => vouchers.name === voucher
      );

      if (validVoucher) {
        const discount = validVoucher.discount;
        setTotal((prevTotal) => prevTotal - discount);
        setMessageVoucher(`You get a discount of Rp.${discount}`);
      } else {
        setMessageVoucher("Voucher is not valid or has expired");
      }
    } catch (error) {
      console.error("Failed to check voucher", error);
    }
  };

  React.useEffect(() => {
    fetchCarts();
  }, []);

  React.useEffect(() => {
    const newTotal = carts.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [carts]);

  const handleCheckboxChange = (cartItem, isChecked) => {
    setSelectedCartItems((prevSelected) =>
      isChecked
        ? [...prevSelected, cartItem]
        : prevSelected.filter((item) => item.id !== cartItem.id)
    );
  };

  const handleSelectAll = (isChecked) => {
    setSelectedCartItems(isChecked ? carts : []);
  };

  const handleQuantityChange = (id, type) => {
    setCarts((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCarts((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = async () => {
    const selectedCartDetails = selectedCartItems.map((item) => {
      const discount =
        item.product.price *
        item.quantity *
        (voucher ? validVoucher.discount / 100 : 0);
      const totalAmount = item.product.price * item.quantity - discount;
      return {
        userId,
        productId: item.product.id,
        quantity: item.quantity,
        totalAmount,
      };
    });

    try {
      await axiosInstance.post("/order", selectedCartDetails);
    } catch (error) {
      console.error("Failed to process checkout", error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div>
      <NavbarWithAuth />
      <Dropdown />
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded focus:ring-2"
            onChange={(e) => handleSelectAll(e.target.checked)}
            checked={
              selectedCartItems.length === carts.length && carts.length > 0
            }
          />
          <label className="ml-2 text-gray-700">Select all items</label>
        </div>
        <hr className="my-4" />

        {carts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                checked={selectedCartItems.includes(item)}
              />
              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${
                  item.product.image
                }`}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.product.name}
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(item.id, "increment")}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex justify-center items-center"
              >
                <FaPlus />
              </button>
              <span className="text-gray-700">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, "decrement")}
                className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex justify-center items-center"
              >
                <FaMinus />
              </button>
              <p className="text-gray-700">
                Rp.{item.product.price.toLocaleString()}
              </p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 font-bold"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        ))}

        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            className="p-2 flex-1"
            value={voucher}
            placeholder="Insert voucher"
            onChange={(e) => setVoucher(e.target.value)}
          />
          <button
            type="button"
            onClick={handleVoucher}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Check
          </button>
        </div>

        {messageVoucher && (
          <div>
            <span>{messageVoucher}</span>
          </div>
        )}

        <div className="flex justify-between items-center mt-6 p-4 bg-black text-white rounded-md">
          <p>
            Total ({carts.length} item{carts.length > 1 && "s"})
          </p>
          <p>Rp{total.toLocaleString()}</p>
          <Link
            to="/checkout"
            type="button"
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-bold"
          >
            Check Out
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
