import { AppSidebar } from '@/view/components/dashboard/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/view/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export default function DashLayout() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [dateRange, setDateRange] = useState<"hoje" | "semana" | "mes">("hoje")

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="pl-2 pr-2 mt-11">
          <div className='flex justify-end'>
          <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">

            </div>
          </div>
        </div>
          </div>
          <Outlet />
        </div>

      </SidebarInset>
    </SidebarProvider>


  );
}
