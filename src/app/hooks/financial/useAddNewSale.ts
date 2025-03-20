import { useGetTotalFinacial } from '@/app/hooks/financial/useGetTotalFinancial';
import { useGetProducts } from '@/app/hooks/product/useGetProduct';
import { FinancialService } from '@/app/services/finantials/FinancialService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export type ISubmitNewSale = {
  items: {
    productId: string;
    quantity: number;
  }[];
};

export function useAddNewSale() {
  const { refetch: refetchProduct } = useGetProducts();
  const { refetch: refetchFinancial } = useGetTotalFinacial();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (product: ISubmitNewSale): Promise<void> => {
      await FinancialService.addNewSale(product);
    },
    onSuccess: () => {
      toast.success('Venda registrada com sucesso!', {
        icon: '✅',
        className:
          'text-sm text-gray-800 bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-95',
      });

      refetchProduct();
      refetchFinancial();
    },

    onError: (error: {
      response?: { data?: { message?: string } };
      message?: string;
    }) => {
      const errorMessage =
        error?.response?.data?.message || error?.message || 'Erro desconhecido';
      toast.error(errorMessage, {
        icon: '❌',
        className:
          'text-sm text-red-600 bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-95',
      });
    },
  });

  return { addSale: mutateAsync, isPending };
}
