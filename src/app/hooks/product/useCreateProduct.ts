import { IProduct } from '@/app/interfaces/IProduct';
import { ProductService } from '@/app/services/ProductService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useCreateProduct() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (product: IProduct): Promise<void> => {
      await ProductService.createProduct(product);
    },
    onSuccess: () => {
      toast.success('Produto criado com sucesso!', {
        icon: '✅',
        className: 'text-lg font-bold text-green-600',
      });
    },
  });

  return { createProduct: mutateAsync, isPending };
}
