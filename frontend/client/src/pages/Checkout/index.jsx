import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Checkout.css";
import axiosInstance from "../../../axiosInstance";

const Checkout = () => {
  const userId = parseInt(localStorage.getItem("userId")) || null;
  const [orders, setOrders] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee] = useState(80000); // Biaya pengiriman tetap
  const [discount] = useState(0); // Diskon tetap, ubah jika ada logika diskon dinamis
  const [paymentMethod, setPaymentMethod] = useState(""); // Untuk menyimpan metode pembayaran yang dipilih
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const response = await axiosInstance(`/order/${userId}`);
      setOrders(response.data);

      // Hitung subtotal
      const total = response.data.reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
      }, 0);

      setSubtotal(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const grandTotal = subtotal + shippingFee - discount;

  // Fungsi untuk menangani klik tombol Pay
  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    try {
      // Mengirim data transaksi ke backend
      const response = await axiosInstance.post("/transaction", {
        userId,
        orderId: orders[0]?.id, // Asumsikan hanya ada satu order untuk checkout ini
        amount: grandTotal,
        paymentMethod,
      });

      if (response.data.success) {
        navigate(
          `/payment/${response.data.transactionId}/${response.data.orderId}`
        );
      } else {
        alert("Payment failed, please try again.");
      }
    } catch (error) {
      console.error("Error making payment", error);
      alert("There was an error processing your payment.");
    }
  };

  return (
    <>
      <NavbarWithAuth />
      <Dropdown />

      <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="pre-order-banner">
          <div className="po-icon-container">
            <img src="/images/img/po.png" alt="PO Icon" className="po-icon" />
            <h3>For Pre-Order</h3>
          </div>
          <p>
            <span className="shipping-text">
              Scheduled Shipping Start Date:
            </span>
            <span className="shipping-dates">Nov 21 2024 - Nov 28 2024</span>
          </p>
        </div>

        <div className="order-details">
          <h2>Your Order</h2>
          {orders.map((item, index) => (
            <div className="order-item" key={index}>
              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${
                  item.product.image
                }`}
                alt="BLACKPINK Membership"
              />
              <div className="item-info">
                <h3>{item.product.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p className="item-price">
                  Rp.{item.quantity * item.product.price}
                </p>
              </div>
            </div>
          ))}

          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>
              Subtotal ({orders.length} item{orders.length > 1 ? "s" : ""}):
              <span>Rp{subtotal.toLocaleString()}</span>
            </p>
            <p>
              Shipping Fee: <span>Rp{shippingFee.toLocaleString()}</span>
            </p>
            <p>
              Discount: <span>-Rp{discount.toLocaleString()}</span>
            </p>
          </div>

          <div className="cart-total">
            <p className="grand-total">Grand Total:</p>
            <p className="grand-total-amount">
              Rp{grandTotal.toLocaleString()}
            </p>
          </div>

          <div className="payment-method">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Bank (Virtual Account)"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Bank</span>
                </div>
              </label>
              <hr className="border-gray-300" />
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="ShopeePay"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">ShopeePay</span>
                </div>
              </label>
              <hr className="border-gray-300" />
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="GoPay"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">GoPay</span>
                </div>
              </label>
              <hr className="border-gray-300" />
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Dana"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Dana</span>
                </div>
              </label>
              <hr className="border-gray-300" />
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="LinkAja"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">LinkAja</span>
                </div>
              </label>
              <hr className="border-gray-300" />
            </div>
          </div>

          <button className="pay-button" onClick={handlePayment}>
            Pay
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
