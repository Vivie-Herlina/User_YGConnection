import React from "react";
import Layout from "../../components/Layout"; // Import Layout component
import "./style.css"; // Custom styling
import axiosInstance from "../../axiosInstance";

function AddProduct() {
  const [artists, setArtists] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [formData, setFormData] = React.useState({
    productName: "",
    artist: "",
    category: 0,
    type: "",
    price: "",
    stocks: "",
    description: "",
    image: null, // Add state for the image
    point: "", // Add state for points
  });

  const fetchArtist = async () => {
    try {
      const artists = await axiosInstance.get("/artist");
      setArtists(artists.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categories = await axiosInstance.get("/category");
      setCategories(categories.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchArtist();
    fetchCategories();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file, // Store the file object instead of base64
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("productName", formData.productName);
    data.append("artist", formData.artist);
    data.append("type", formData.type);
    data.append("price", formData.price);
    data.append("stock", formData.stocks);
    data.append("category", formData.category);
    data.append("point", formData.point); // Include points in the request
    data.append("description", formData.description);
    if (formData.image) {
      data.append("productImage", formData.image); // Append image file
    }

    try {
      await axiosInstance.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Success");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className="add-product-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group image-upload">
              <label htmlFor="image-input">
                {formData.image ? (
                  <img
                    src={URL.createObjectURL(formData.image)} // Show image preview
                    alt="Product"
                    className="uploaded-image"
                  />
                ) : (
                  <span>+</span>
                )}
              </label>
              <input
                type="file"
                id="image-input"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }} // Hide the actual file input
              />
            </div>
            <div className="form-group product-name">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group artist">
              <label>Artist</label>
              <select
                name="artist"
                value={formData.artist}
                onChange={handleChange}
                required
              >
                <option value="">Select Artist</option>
                {artists &&
                  artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group type">
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Enter product type"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group price">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter product price"
                required
              />
            </div>
            <div className="form-group stocks">
              <label>Stocks</label>
              <input
                type="number"
                name="stocks"
                value={formData.stocks}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group description">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
              >
                <option value="">Select category</option>
                {categories &&
                  categories.map((category, index) => (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group">
              <label>Point</label>
              <input
                type="text"
                name="point"
                value={formData.point}
                onChange={handleChange}
                placeholder="Enter points for this product"
              />
            </div>
          </div>

          <div className="form-group description">
            <label>Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
