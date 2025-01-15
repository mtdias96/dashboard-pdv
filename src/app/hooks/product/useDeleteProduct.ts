import { useGetProducts } from '@/app/hooks/product/useGetProduct';
import { ProductService } from '@/app/services/ProductService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useDeleteProduct() {
  const { refetch } = useGetProducts();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (productId: string): Promise<void> => {
      await ProductService.deleteProduct(productId);
    },
    onSuccess: () => {
      toast.success('Produto deletado com sucesso!', {
        icon: '✅',
        className:
          'text-sm text-gray-800 bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-95',
        description: 'O produto foi removido com sucesso.',
      });

      refetch();
    },
    onError: () => {
      toast.error('Falha ao deletar produto. Tente novamente!', {
        icon: '❌',
        className: 'text-lg font-bold text-red-600',
      });
    },
  });

  return { deleteProduct: mutateAsync, isPending };
}
