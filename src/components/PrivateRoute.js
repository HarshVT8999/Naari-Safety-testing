import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

const PrivateRoute = () => {
  const currentUser = useAuth();
  return currentUser ? <HomePage /> : <LoginPage />;
}

export default PrivateRoute;