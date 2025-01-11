import { LucideIcon } from 'lucide-react';

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/view/components/ui/sidebar';
import { Link } from 'react-router-dom';

interface INavMain {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}

export function NavMain({ items }: INavMain) {
  return (
    <SidebarGroup>
      <SidebarMenu className="flex flex-col justify-center items-center w-full gap-3 h-full">
        {items.map((item) => (
          <SidebarMenuItem
            key={item.title}
            className="w-full flex justify-center h-full"
          >
            <Link to={item.url}>
              <SidebarMenuButton
                className="gap-2 flex flex-col h-16 w-20 items-center justify-center"
                tooltip={item.title}
                isActive={item.isActive}
              >
                {item.icon && <item.icon />}
                <span className="font-medium text-sm leading-1 active:text-red-400">
                  {item.title}
                </span>
                {/* {item.isActive && <span>--</span>} */}
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
