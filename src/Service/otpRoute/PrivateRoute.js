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

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const id = user.user.userId;
  const trimmed = id.trim();
  const firstTwo = trimmed.substring(0, 2);  
  const hasAccess = requiredRole ? firstTwo === requiredRole : true;

  return isAuthenticated && hasAccess ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
