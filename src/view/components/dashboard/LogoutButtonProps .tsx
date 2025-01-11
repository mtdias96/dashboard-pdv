import { useAuth } from '@/app/hooks/useAuth';
import { SidebarMenuButton } from '@/view/components/ui/sidebar';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/view/components/ui/tooltip';
import { Power } from 'lucide-react';

export function LogoutButton() {
  const { signout } = useAuth();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarMenuButton
            className="h-14 w-14 rounded-full justify-center hover:bg-red-100 hover:text-red-600"
            onClick={signout}
          >
            <Power className="h-8 w-8" />
          </SidebarMenuButton>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
}
