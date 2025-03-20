import { SaleslService } from '@/app/services/sales/SalesService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export type ITotalSales = {
  total: number;
};

export function useGetTotalSales(): UseQueryResult<ITotalSales> {
  return useQuery<ITotalSales>({
    queryKey: ['total-sales'],
    queryFn: async () => {
      const response = await SaleslService.getTotalSales();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
