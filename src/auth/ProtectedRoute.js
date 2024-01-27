import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ roles, ...props }) => {
  const { role } = useContext(AuthContext);

  // eslint-disable-next-line react/prop-types
  if (roles.includes(role)) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
