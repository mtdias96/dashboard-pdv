import { ISalesResponse } from '@/app/interfaces/ISales';
import { SaleslService } from '@/app/services/sales/SalesService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export type ITotalSales = {
  total: number;
};

export function useGetSalesCategory(): UseQueryResult<ISalesResponse> {
  return useQuery<ISalesResponse>({
    queryKey: ['sales-category'],
    queryFn: async () => {
      const response = await SaleslService.getSalesToCategory();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
