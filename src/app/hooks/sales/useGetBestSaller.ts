import { IBestSales } from '@/app/interfaces/ISales';
import { SaleslService } from '@/app/services/sales/SalesService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export function useGetBestSellerProduct(): UseQueryResult<IBestSales[]> {
  return useQuery<IBestSales[]>({
    queryKey: ['best-seller-product'],
    queryFn: async () => {
      const response = await SaleslService.getBestSellingProducts();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
