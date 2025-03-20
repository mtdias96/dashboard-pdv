import {
  DollarSign,
  FileText,
  HomeIcon as House,
  PackageOpen,
  ShoppingBag,
} from 'lucide-react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { LogoutButton } from '@/view/components/dashboard/LogoutButton';

import { NavMain } from '@/view/components/dashboard/NavMain';
import { Avatar } from '@/view/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/view/components/ui/sidebar';
import { AvatarImage } from '@radix-ui/react-avatar';

// Mock data
const data = {
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: House,
    },
    {
      title: 'Produtos',
      url: '/produtos',
      sub: '/produtos/categorias',
      icon: ShoppingBag,
    },
    {
      title: 'Finanças',
      url: '/financas',
      icon: DollarSign,
    },
    {
      title: 'Estoque',
      url: '/estoque',
      icon: PackageOpen,
    },
    {
      title: 'Relatórios',
      url: '/relatorios',
      icon: FileText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  const navItemsWithActiveState = data.navMain.map((item) => ({
    ...item,
    isActive: location.pathname === item.url || location.pathname === item.sub,
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="items-center p-4 pt-10">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </SidebarHeader>
      <SidebarContent className="justify-center">
        <NavMain items={navItemsWithActiveState} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="items-center justify-center p-4">
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}


