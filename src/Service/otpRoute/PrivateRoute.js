import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const getUser = () => {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const PrivateRoute = ({ element: Element, requiredRole, ...rest }) => {
  const user = getUser();
  const location = useLocation(); 

  const isAuthenticated = !!user;

  const hasAccess = requiredRole ? user?.id === requiredRole : true;

  return isAuthenticated && hasAccess ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
