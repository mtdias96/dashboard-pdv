import { Router } from '@/routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FormProvider, useForm } from 'react-hook-form';
import { Toaster } from 'sonner';

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
        gcTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  });

  const methods = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <Router />
        <Toaster position="top-center" />
        <ReactQueryDevtools position="right" />
      </FormProvider>
    </QueryClientProvider>
  );
}
