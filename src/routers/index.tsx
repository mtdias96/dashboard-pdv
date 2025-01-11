import { AuthGuard } from '@/app/guards/AuthGuard';
import { PATHS } from '@/routers/path';
import DashLayout from '@/view/layout/DashLayout';
import Login from '@/view/pages/Auth/Login';
import Register from '@/view/pages/Auth/Register';

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
          element: <DashLayout />,
          children: [
            {
              path: PATHS.dashboard.root,
              element: 'Homne',
            },
            {
              path: '/produtos',
              element: 'produto',
            },
          ],
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
