import { ICategory } from '@/app/interfaces/ICategory';
import { CategoriesService } from '@/app/services/CategoriesService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetCategory(): UseQueryResult<ICategory[], Error> {
  return useQuery<ICategory[], Error>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await CategoriesService.getCategories();
      if (!response) {
        throw new Error('Failed to fetch categories');
      }
      return response;
    },
  });
}
