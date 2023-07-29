import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthRoute({ children }) {
  const location = useLocation();
  const token = useSelector((state) => state.user.token);

  if (!token)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return <>{children}</>;
}
