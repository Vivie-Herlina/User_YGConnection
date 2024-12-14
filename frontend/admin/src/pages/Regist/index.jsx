import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
// import "../../style/Regis.css";

function Regis() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    role: "admin",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    try {
      await axiosInstance.post("/auth/register", values);
      setSuccessMessage("Registration successful! You can now log in.");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };
  return (
    <>
      <main className="flex justify-center py-5">
        <div className="shadow-lg p-10 rounded-lg max-w-lg">
          <h1 className="text-2xl font-bold text-center">
            YGEntertainment Account
          </h1>
          <p className="text-sm mb-5 text-center">
            Sign Up YGEntertainment Account
          </p>

          <div className="flex justify-center items-center">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </div>

          <form onSubmit={handlesubmit} className="space-y-3">
            <label htmlFor="name" className="block">
              Fullname
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Fullname"
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />

            <label htmlFor="phonenumber" className="block">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phonenumber"
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />

            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />

            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={handleChange}
              required
              className="border rounded p-2 w-full"
            />

            <button
              type="submit"
              className="bg-blue-500 w-full text-white rounded p-2 mt-7"
            >
              Sign Up
            </button>
          </form>

          <div className="links">
            <p>
              Already have an account?{" "}
              <Link to="/Login" className="text-blue-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Regis;
