import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ roles, ...props }) => {
  const { role } = useContext(AuthContext);

  if (roles.includes(role)) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;