import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/register" state={{ from: location }} />;
};
