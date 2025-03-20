import { IProduct } from '@/app/interfaces/IProduct';
import { ProductService } from '@/app/services/ProductService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useSearchProducts(
  search: string,
): UseQueryResult<IProduct[], Error> {
  return useQuery<IProduct[], Error>({
    queryKey: ['products', search],
    queryFn: async () => {
      const response = await ProductService.getSearchProduct(search);

      if (!response) {
        throw new Error('Failed to fetch products');
      }

      return response;
    },
  });
}
