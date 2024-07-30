import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ allowedRoles, redirectPath = '/app/*' }) => {
  const cookies = new Cookies();
  const tokenUser = cookies.get("token");
  const tokenTeam = cookies.get("tokenTeam");
  const tokenAdmin = cookies.get("tokenAdmin");

  const isAllowed = 
    (allowedRoles.includes('user') && tokenUser) ||
    (allowedRoles.includes('team') && tokenTeam) ||
    (allowedRoles.includes('admin') && tokenAdmin);

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  redirectPath: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  redirectPath: '/app/*',
};

export default ProtectedRoute;
