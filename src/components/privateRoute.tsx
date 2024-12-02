// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, isAdmin, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (!isAdmin) {
    return <Navigate to="/picks" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
