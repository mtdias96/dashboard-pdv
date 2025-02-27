import { useGetProducts } from '@/app/hooks/product/useGetProduct';
import { IProductCreate } from '@/app/interfaces/IProduct';
import { ProductService } from '@/app/services/ProductService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useEditProduct() {
  const { refetch } = useGetProducts();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (product: IProductCreate) => {
      await ProductService.editProduct(product.id, product);
    },
    onSuccess: () => {
      toast.success('Produto editado com sucesso!', {
        icon: '✅',
        className:
          'text-sm text-gray-800 bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-95',
      });
      refetch();
    },
    onError: () => {
      toast.error('Falha ao editar o produto. Tente novamente!', {
        icon: '❌',
        className: 'text-lg font-bold text-red-600',
      });
    },
  });

  return { edit: mutateAsync, isPending };
}
