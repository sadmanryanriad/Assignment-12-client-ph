import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Spinner></Spinner>;

  if (!user?.email) return <Navigate to={'/login'}></Navigate>

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
