import { IProduct } from '@/app/interfaces/IProduct';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/view/components/ui/dialog';
import ProductModalForm from '@/view/pages/Dashboard/ProductsHome/components/ProductModal/ProductModalForm';

import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface IProductModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  // onSubmit: (product: Product) => void;
  product?: IProduct[]; // Se fornecido, estamos no modo de edição
}

export function ProductModal({
  open,
  onOpenChange,
  product,
}: IProductModalProps) {
  const title = product ? 'Editar Produto' : 'Criar Novo Produto';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" h-full sm:max-w-[70%] sm:max-h-[98%] m-0 p-8 flex flex-col gap-12 overflow-auto">
        <DialogHeader className="h-9">
          <DialogTitle className="text-xl font-semibold w-full flex justify-between items-center">
            <span>{title}</span>
            <DialogClose className="hover:bg-gray-100 rounded-full p-2 transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        <ProductModalForm />
      </DialogContent>
    </Dialog>
  );
}
