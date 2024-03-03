/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

