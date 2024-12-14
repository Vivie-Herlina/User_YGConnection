import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin";

  if (!isAdmin) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
