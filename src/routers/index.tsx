import { AuthGuard } from '@/app/guards/AuthGuard';
import { PATHS } from '@/routers/path';
import Login from '@/view/pages/Auth/Login';
import Register from '@/view/pages/Auth/Register';
import { Dashboard } from '@/view/pages/Dashboard';


import { useRoutes } from 'react-router-dom';

export function Router() {
  return useRoutes([
    // {
    //   path: '*',
    //   element: <Navigate to={signedIn ? '/' : 'error 404'} />,
    // },
    {
      path: '/',
      element: <AuthGuard isPrivate />,
      children: [
        {
          path: PATHS.dashboard.root,
          element: <Dashboard />,
        },
      ],
    },
    {
      element: <AuthGuard isPrivate={false} />,
      children: [
        {
          path: PATHS.auth.login,
          element: <Login />,
        },
        {
          path: PATHS.auth.signup,
          element: <Register />,
        },
      ],
    },
  ]);
}
