import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Point.css";
import axiosInstance from "../../../axiosInstance";

const Point = () => {
  const [point, setPoint] = React.useState({ points: [], totalPoint: 0 });
  const userId = Number(localStorage.getItem("userId")) || 0;
  const [vouchers, setVouchers] = React.useState([]);

  const copied = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Coupon code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const fetchPoint = async () => {
    try {
      const response = await axiosInstance.get(`/point/${userId}`);
      setPoint(response.data.data || { points: [], totalPoint: 0 });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVouchers = async () => {
    try {
      const vouchers = await axiosInstance.get(`/voucher/${userId}`);
      setVouchers(vouchers.data);
      console.log(vouchers.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatRupiah = (amount) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  React.useEffect(() => {
    fetchPoint();
    fetchVouchers();
  }, []);

  return (
    <>
      <NavbarWithAuth />
      <Dropdown />
      <main className="max-w-4xl mx-auto p-6 space-y-8 space-x-8">
        <div className="main">
          <section className="tier-status">
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-white">Tier Status</h1>
              <div className="flex justify-center items-center">
                <h2 className="text-2xl font-bold text-white">Bronze</h2>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-yellow-400">
                Point Balance
              </h1>
              <div className="flex justify-center items-center">
                <h2 className="text-2xl font-bold text-yellow-400">
                  {point?.totalPoint || 0}
                </h2>
              </div>
            </div>
          </section>
        </div>

        <div className="available-coupons">
          <h1 className="text-2xl">Available Coupons</h1>
          {vouchers.map((voucher, index) => (
            <>
              <div key={index} className="coupon">
                <span>{formatRupiah(voucher.discount)}</span>
                <input type="text" value={voucher.name} readOnly />
                <button
                  className="myButton"
                  onClick={() => copied(voucher.name)}
                >
                  Copy
                </button>
              </div>
              <hr />
            </>
          ))}
        </div>
      </main>
      <main className="max-w-4xl mx-auto">
        <section className="redeem-rewards">
          <h1 className="text-2xl font-bold">Redeem Points For Rewards</h1>
          <div className="reward-images">
            <img src="/images/img/keyring.png" alt="Reward 1" />
            <img src="/images/img/Ballcap.png" alt="Reward 2" />
            <img src="/images/img/Brooch.png" alt="Reward 3" />
          </div>
        </section>
      </main>
      <main className="max-w-4xl mx-auto">
        <h1 className="hidden">Points Activity</h1>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">Date</th>
              <th className="text-start">Activity</th>
              <th className="text-end">Points</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(point.points) && point.points.length > 0 ? (
              point.points.map((point, index) => (
                <tr key={index}>
                  <td>
                    {new Date(point.createAt).toLocaleDateString("id-ID")}
                  </td>
                  <td>Purchase</td>
                  <td className="text-end">+{point.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No points activity available</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default Point;
