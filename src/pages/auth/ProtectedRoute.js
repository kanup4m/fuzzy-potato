import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate replace to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;
