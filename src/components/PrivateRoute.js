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

// export default PrivateRoute;