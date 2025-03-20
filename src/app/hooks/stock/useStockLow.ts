import { IProductResponse } from '@/app/interfaces/IProduct';
import { StockService } from '@/app/services/stock/StockService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetStockLow(): UseQueryResult<IProductResponse[]> {
  return useQuery<IProductResponse[]>({
    queryKey: ['stock-low'],
    queryFn: async () => {
      const response = await StockService.getLowStock();
      if (!response) {
        throw new Error('Failed to fetch products stock');
      }
      return response;
    },
  });
}
