<<<<<<< HEAD
import React from "react"
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )

}
// const PrivateRoute = () => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// }
=======
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const currentUser = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0

// export default PrivateRoute;