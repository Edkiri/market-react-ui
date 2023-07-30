import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const location = useLocation();
  const roleId = useSelector((state) => state.user.roleId);

  if (roleId !== 1) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
