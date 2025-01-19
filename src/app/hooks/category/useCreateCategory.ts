import { useGetCategory } from '@/app/hooks/category/useGetCategory';
import { ICategory } from '@/app/interfaces/ICategory';
import { CategoriesService } from '@/app/services/CategoriesService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useCreateCategory() {
  const { refetch } = useGetCategory();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (category: ICategory): Promise<void> => {
      await CategoriesService.createCategories(category);
    },
    onSuccess: () => {
      toast.success('Categoria criada com sucesso!', {
        icon: '✅',
        className:
          'text-sm text-gray-800 bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-95',
      });
      refetch();
    },
    onError: () => {
      toast.error('Falha ao criar o categoria. Tente novamente!', {
        icon: '❌',
        className: 'text-lg font-bold text-red-600',
      });
    },
  });

  return { createCategory: mutateAsync, isPending };
}
