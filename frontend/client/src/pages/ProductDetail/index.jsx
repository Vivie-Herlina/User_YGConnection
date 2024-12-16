import React, { useEffect, useState } from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/ProductDetail.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [usePoints, setUsePoints] = useState(false);
  const [userPoints, setUserPoints] = useState(0);

  const fetchProduct = async () => {
    try {
      const product = await axiosInstance.get(`/products/${id}`);
      setProduct(product.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const addToCart = async (e) => {
    e.preventDefault();

    try {
      const pointsToUse =
        userPoints >= product.point * quantity ? product.point * quantity : 0;

      const checkouts = await axiosInstance.post("/checkout", {
        userId: parseInt(localStorage.getItem("userId")),
        productId: product.id,
        quantity: quantity,
        usePoints: pointsToUse > 0,
        pointsUsed: pointsToUse,
      });

      alert(checkouts.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * product.price);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * product.price);
  };

  return (
    <>
      <NavbarWithAuth />
      <Dropdown />
      {product && product.artist ? (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                className="w-50 h-auto rounded-lg"
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${
                  product.image
                }`}
                alt="BLINK Membership Card"
              />
            </div>
            <main className="md:w-1/2 md:pl-4">
              <div className="product-details">
                <h1 className="text-2xl font-semibold">
                  {product.artist.name}
                </h1>
                <h3 className="text-xl text-start">{product.name}</h3>
                <p className="price text-lg text-green-600">
                  Rp.{product.price}
                </p>
                <p className="status text-sm text-gray-500">For Pre-Order</p>
                <p className="shipping-date">{product.description}</p>

                <div className="points my-4">
                  <span className="text-sm">{product.point} points</span>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-300 p-2"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="quantityInput"
                      value={quantity}
                      readOnly
                      className="mx-2 w-12 text-center border"
                    />
                    <button
                      className="bg-gray-300 p-2"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="total text-lg font-bold" id="total">
                  Total ({quantity} Item{quantity > 1 ? "s" : ""}) Rp.
                  {totalPrice || product.price}
                </p>
                <div className="buttons mt-4">
                  <button
                    className="add-to-cart bg-blue-500 text-white p-2 rounded"
                    onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                  <button className="buy-now bg-green-500 text-white p-2 rounded ml-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div className="text-center">Product not available</div>
      )}
      <section className="information mt-8">
        <h3 className="text-xl font-semibold">Information</h3>
        <table className="min-w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2 px-2">Product Name</td>
              <td className="border border-gray-200 p-2">
                {product && product.name}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Producer or supplier
              </td>
              <td className="border border-gray-200 p-2">
                YG ENTERTAINMENT Inc.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Terms and recommended usage period
              </td>
              <td className="border border-gray-200 p-2">
                You must use the identical account for YGConnect and YGConnect
                Shop to receive Membership benefits.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Product delivery method
              </td>
              <td className="border border-gray-200 p-2">Membership</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Minimum system requirements or required software
              </td>
              <td className="border border-gray-200 p-2">Not Applicable</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Effects of subscription withdrawal, or contract cancellation or
                termination
              </td>
              <td className="border border-gray-200 p-2">
                If you cancel/refund the payment for your Membership, you will
                no longer be able to take advantage of Membership benefits.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">
                Telephone number for consumer consultation
              </td>
              <td className="border border-gray-200 p-2">
                Customer Center: (+62)21-3452-1312
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer /> {/* Add Footer here */}
    </>
  );
};

export default ProductDetail;
