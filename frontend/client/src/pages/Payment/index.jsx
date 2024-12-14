import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Payment.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const Payment = () => {
  const { transactionId } = useParams();
  const [transactionData, setTransactionData] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axiosInstance.get(
          `/transaction/${transactionId}`
        );
        if (response.data.success) {
          setTransactionData(response.data.transaction);
        } else {
          alert("Failed to fetch transaction data.");
        }
      } catch (error) {
        console.error("Error fetching transaction:", error);
        alert("An error occurred while fetching transaction data.");
      }
    };

    fetchTransaction();
  }, [transactionId]);

  const generateRandomAccount = () => {
    return Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")
    ).join("-");
  };

  const virtualAccount = generateRandomAccount();

  const handleCopy = async () => {
    navigator.clipboard.writeText(virtualAccount);
    alert("Virtual Account copied to clipboard!");

    try {
      await axiosInstance.post("/payment", {
        userId: Number(localStorage.getItem("userId")),
        transactionId: transactionData.id,
        orderId: transactionData.orderId,
        provider: "Virtual Account",
        amount: transactionData.amount,
        currency: "IDR",
        status: "paid",
      });

      navigate("/Payment-success");
    } catch (error) {
      console.error("Error updating payment:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  return (
    <>
      <NavbarWithAuth /> {/* Import Navbar Component */}
      <Dropdown /> {/* Import Dropdown Component */}
      <div className="flex items-baseline justify-center min-h-screen bg-gray-100">
        <div className="bg-white w-[700px] rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Payment</h1>
          <div className="bg-black text-white text-center py-2 rounded-md">
            Virtual Account
          </div>
          <div className="mt-4 text-center text-2xl font-bold text-gray-800">
            {virtualAccount}
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-center text-gray-500 text-sm">
            <i className="fas fa-info-circle"></i> Virtual Account is only valid
            for 1 hour
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleCopy}
              className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Copy
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Close
            </button>
          </div>
        </div>
      </div>
      <Footer /> {/* Import Footer Component */}
    </>
  );
};

export default Payment;
