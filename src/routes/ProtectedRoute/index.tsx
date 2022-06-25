import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserType } from "../../models/User";
import { RoutesEnum } from "../RoutesEnum";

const ProtectedRoute: React.FC = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user.userType == UserType.GUEST)
    return (
      <Navigate to={RoutesEnum.Login} state={{ from: location }} replace />
    );

  return <>{children}</>;
};

export default ProtectedRoute;
