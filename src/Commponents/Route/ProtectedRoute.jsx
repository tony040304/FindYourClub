import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectedRoute = ({ allowedRoles, redirectPath = '/app/*' }) => {
  const cookies = new Cookies();
  const tokenUser = cookies.get("tokenUser");
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

export default ProtectedRoute;
