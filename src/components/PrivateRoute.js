import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const {isLogedIn} = useAuth();
  return isLogedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;