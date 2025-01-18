import { IProduct } from '@/app/interfaces/IProduct';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/view/components/ui/dialog';
import { CategoryModalForm } from '@/view/pages/Dashboard/CategoryHome/components/CategoryModalForm';

import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface IProductModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  productEdit?: IProduct;
  isEditing?: boolean;
}

export function CategoryModal({
  open,
  onOpenChange,
  productEdit,
}: IProductModalProps) {
  const title = productEdit ? 'Criar nova Categoria' : 'Criar nova Categoria';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" h-full sm:max-w-[25%] sm:max-h-[48%] m-0 p-8 flex flex-col gap-12 overflow-auto ">
        <DialogHeader className="h-9">
          <DialogTitle className="text-xl font-semibold w-full flex justify-between items-center">
            <span>{title}</span>
            <DialogClose className="hover:bg-gray-100 rounded-full p-2 transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        <CategoryModalForm />
      </DialogContent>
    </Dialog>
  );
}
