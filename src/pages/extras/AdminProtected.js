import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAdmin");
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate replace to="/" />;
  }

  return children;
};

export default AdminProtected;
