import React from "react";
import Layout from "../../components/Layout";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import Modal from "../../components/Modal";
import { FaTimes, FaPlus } from "react-icons/fa";

function Productpage() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [showAddCatergory, setShowAddCategory] = React.useState(false);

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

  const handleSubmitCategory = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/category", { name: categoryName });
      fetchCategories();
      setCategoryName("");
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/category/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleAddProductClick = () => {
    navigate("/AddProduct");
  };

  const handleRowClick = (productId) => {
    navigate(`/ProductDetail/${productId}`);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowAddCategory(false);
  };

  // const mockData = [
  //   {
  //     id: "BLINK-MEMBERSHIP",
  //     name: "BLINK MEMBERSHIP",
  //     price: "Rp.350.000",
  //     sales: "1.200 sold",
  //     image: "/product/BLINK MEMBERSHIP.png",
  //   },
  //   {
  //     id: "LALISA-PHOTOBOOK",
  //     name: "LALISA- PHOTOBOOK [SPECIAL EDITION]",
  //     price: "Rp.615.000",
  //     sales: "437 sold",
  //     image: "/product/LALISA- PHOTOBOOK [SPECIAL EDITION].jpg",
  //   },
  //   {
  //     id: "TREASURE-HOODIE",
  //     name: "TREASURE HOODIE",
  //     price: "Rp.1.125.000",
  //     sales: "154 sold",
  //     image: "/product/TREASURE HOODIE.png",
  //   },
  //   {
  //     id: "JISOO-BRACELET",
  //     name: "JISOO BRACELET",
  //     price: "Rp.430.000",
  //     sales: "273 sold",
  //     image: "/product/JISOO BRACELET.png",
  //   },
  //   {
  //     id: "2022-WELCOMING",
  //     name: "2022 Welcoming Collection",
  //     price: "Rp.615.000",
  //     sales: "846 sold",
  //     image: "/product/2022 Welcoming Collection.png",
  //   },
  //   {
  //     id: "TREASURE-TUMBLER",
  //     name: "TREASURE TUMBLER",
  //     price: "Rp.465.000",
  //     sales: "591 sold",
  //     image: "/product/TREASURE TUMBLER.png",
  //   },
  //   {
  //     id: "WINNER-MUG",
  //     name: "WINNER 10TH ANNIVERSARY MUG",
  //     price: "Rp.345.000",
  //     sales: "926 sold",
  //     image: "/product/WINNER 10th ANNIVERSARRY MUG.png",
  //   },
  //   {
  //     id: "WINNER-BAG",
  //     name: "WINNER TRAVEL BAG",
  //     price: "Rp.555.000",
  //     sales: "172 sold",
  //     image: "/product/WINNER TRAVEL BAG.png",
  //   },
  //   {
  //     id: "TREASURE-SCRUNCHIE",
  //     name: "TREASURE SCRUNCHIE SET",
  //     price: "Rp.375.000",
  //     sales: "726 sold",
  //     image: "/product/TREASURE SCRUNCHIE SET.png",
  //   },
  // ];

  return (
    <>
      <Layout>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Product</h1>
          <div className="space-x-3">
            <button
              onClick={openModal}
              className="bg-[#333] text-white p-2 px-3 rounded-lg"
            >
              Category
            </button>
            <button
              className="bg-[#333] text-white p-2 px-3 rounded-lg"
              onClick={handleAddProductClick}
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRowClick(product.id)}
                >
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={`http://localhost:3000/${product.image}`}
                        alt={product.name}
                        className="w-16 h-16 object-cover mr-2"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b align-middle">
                    {product.price}
                  </td>
                  <td className="py-2 px-4 border-b align-middle">
                    {product.sales[0]?.soldOut}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
      <Modal show={showModal} onClose={() => closeModal}>
        <Modal.Header onClose={closeModal}>
          <button
            onClick={() => setShowAddCategory(!showAddCatergory)}
            className="bg-[#333] p-1 px-3 rounded-lg font-medium text-sm text-white"
          >
            Add Category
          </button>
        </Modal.Header>
        <Modal.Body>
          {showAddCatergory && (
            <>
              <form
                className="grid grid-cols-12 gap-5 mb-4 mt-0 border border-b"
                onSubmit={handleSubmitCategory}
              >
                <div className="col-span-8">
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Category name"
                    required
                  />
                </div>
                <div className="col-span-4 space-x-2 flex justify-end">
                  <button
                    type="submit"
                    className="p-2 px-2 rounded-full text-white bg-green-500 cursor-pointer"
                  >
                    <FaPlus />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddCategory(false)}
                    className="p-2 px-2 rounded-full text-white bg-red-500 cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                </div>
              </form>
            </>
          )}
          <div>
            <h3 className=" text-sm font-bold italic">Categories</h3>
            <table>
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr
                    key={index}
                    className={
                      index === categories.length - 1 ? "border-b-0" : ""
                    }
                  >
                    <td
                      className={`w-0 ${
                        index === categories.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      {index + 1}.
                    </td>
                    <td
                      className={`w-[20rem] ${
                        index === categories.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      {category.name}
                    </td>
                    <td
                      className={`flex justify-end space-x-2 ${
                        index === categories.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <button
                        onClick={() => deleteCategory(category.id)}
                        className="py-1 px-3 bg-red-500 rounded-full text-sm text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="italic text-sm font-thin text-gray-400">
                  There are no categories
                </div>
              )}
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded-full"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Productpage;
