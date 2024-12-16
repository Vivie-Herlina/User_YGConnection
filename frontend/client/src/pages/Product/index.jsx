import React, { useEffect, useState } from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/Product.css";
import axiosInstance from "../../../axiosInstance";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const products = await axiosInstance.get("/products");
      setProducts(products.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categories = await axiosInstance.get("/category");
      setCategories(categories.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.name === selectedCategory)
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <div>
      <NavbarWithAuth />
      <Dropdown />
      <div className="container">
        <div className="flex space-x-5">
          <input
            type="text"
            className="rounded-full px-3"
            placeholder="Looking for..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border rounded-full h-11 px-3"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <Link
              to={`/ProductDetail/${product.id}`}
              key={index}
              className="product-item"
            >
              <h3>{product.name}</h3>
              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${
                  product.image
                }`}
                alt={product.name}
              />
            </Link>
          ))}

          {/* <div
            className="product-item item2"
            onClick={() => (window.location.href = "merch.html")}
          >
            <h3>Merch</h3>
            <img src="img/Merch.png" alt="Product 2" />
          </div>
          <div
            className="product-item item3"
            onClick={() => (window.location.href = "membership.html")}
          >
            <h3>Membership</h3>
            <img src="img/Membership.png" alt="Product 3" />
          </div>
          <div className="product-item item4">
            <h3>Album</h3>
            <img src="img/Album.png" alt="Product 4" />
          </div>
          <div className="product-item item5">
            <h3>Mini Album</h3>
            <img src="img/Mini Album.png" alt="Product 5" />
          </div> */}
        </div>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Product;
