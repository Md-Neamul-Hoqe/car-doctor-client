import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PropType from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location?.pathname);

  const { user, loading } = useContext(AuthContext);

  if (loading)
    return <progress className="progress w-56 mx-auto my-96"></progress>;

  if (user?.email) return children;

  return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropType.node,
};

export default PrivateRoute;
