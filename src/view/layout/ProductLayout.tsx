import { ShoppingBag } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Produtos',
      url: '/produtos',
      icon: ShoppingBag,
    },
    {
      title: 'Categorias',
      url: '/produtos/categorias',
      icon: ShoppingBag,
    },
  ],
};

export function ProductLayout() {
  const location = useLocation();

  const navItemsWithActiveState = data.navMain.map((item) => ({
    ...item,
    isActive: location.pathname === item.url,
  }));

  return (
    <section>
      <header className="space-y-6">
        <div className="flex gap-4">
          <ShoppingBag />
          <h1 className="font-semibold text-2xl leading-7">Cardápio</h1>
        </div>
        <p className="leading-6">Gerencie os produtos do seu estabelecimento</p>
      </header>

      <header className="w-full mt-16 border-b">
        <nav className="flex font-normal text-sm leading-5 text-gray-400">
          {navItemsWithActiveState.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`px-8 py-4 ${item.isActive ? 'text-red-500 bg-gray-100' : 'text-gray-400'}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </header>

      <Outlet />
    </section>
  );
}
