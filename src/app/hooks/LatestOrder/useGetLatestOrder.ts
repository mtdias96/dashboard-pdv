import { ILatestOrder } from '@/app/interfaces/ILatestOrder';
import { LatestOrderService } from '@/app/services/LatestOrderService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetLatestOrder(): UseQueryResult<ILatestOrder[]> {
  return useQuery<ILatestOrder[]>({
    queryKey: ['LatestOrders'],
    queryFn: async () => {
      const response = await LatestOrderService.getLatestOrder();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
