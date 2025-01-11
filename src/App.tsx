import { Router } from '@/routers';
import { Toaster } from 'sonner';

export function App() {
  return (
    <>
      <Router />
      <Toaster position="top-center" />
    </>
  );
}
