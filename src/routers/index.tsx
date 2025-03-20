import { AuthGuard } from '@/app/guards/AuthGuard';
import { PATHS } from '@/routers/path';
import DashLayout from '@/view/layout/DashLayout';
import { ProductLayout } from '@/view/layout/ProductLayout';
import Login from '@/view/pages/Auth/Login';
import Register from '@/view/pages/Auth/Register';
import { CategoryHome } from '@/view/pages/Dashboard/CategoryHome';
import Home from '@/view/pages/Dashboard/Home';
import { ProductsHome } from '@/view/pages/Dashboard/ProductsHome';


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
              element: <Home/>,
            },
            {
              path: '/produtos',
              element: <ProductLayout />,
              children: [
                {
                  path: '/produtos',
                  element: <ProductsHome />,
                },
                {
                  path: '/produtos/categorias',
                  element: <CategoryHome />,
                },
              ],
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
