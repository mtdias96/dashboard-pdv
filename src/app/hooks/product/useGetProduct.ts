import { IProduct } from '@/app/interfaces/IProduct';
import { ProductService } from '@/app/services/ProductService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetProducts(): UseQueryResult<IProduct[], Error> {
  return useQuery<IProduct[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await ProductService.getProducts();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
