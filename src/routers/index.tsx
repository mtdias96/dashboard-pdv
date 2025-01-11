import { AuthGuard } from '@/app/guards/AuthGuard';
import { PATHS } from '@/routers/path';
import { Dashboard } from '@/view/pages/Dashboard';

import Login from '@/view/pages/Login';
import Register from '@/view/pages/Register';

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
        {
          path: PATHS.dashboard.inventory,
          element: <h2>Inventory</h2>,
          children: [
            {
              path: PATHS.dashboard.inventoryPrices,
              element: <h2>Inventory Price</h2>,
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
