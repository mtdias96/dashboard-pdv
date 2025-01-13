import { AppSidebar } from '@/view/components/dashboard/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/view/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export default function DashLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="pl-9 pr-20 mt-11">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
