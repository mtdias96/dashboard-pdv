import { useAuth } from '@/app/hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface AuthGuardsProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardsProps) {
  const { signedIn } = useAuth();
  const location = useLocation();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
