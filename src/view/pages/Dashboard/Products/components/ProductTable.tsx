import { IProduct } from '@/app/interfaces/IProduct';
import { fCurrency } from '@/app/utils/formatNumber';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/view/components/ui/table';
import { ProductModal } from '@/view/pages/Dashboard/Products/components/ProductModal';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

const icon = {
  açõe1: Pencil,
  ação2: Trash2,
};

type teste = {
  baseURL: string;
  products: IProduct[];
};

export function ProductTable({ baseURL, products }: teste) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Table className="w-full border-collapse">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[150px] text-center font-semibold">
              Imagem
            </TableHead>
            <TableHead className="w-[250px] text-left font-semibold">
              Nome
            </TableHead>
            <TableHead className="text-left font-semibold">Categoria</TableHead>
            <TableHead className="text-left font-semibold">Preço</TableHead>
            <TableHead className="text-left font-semibold">Estoque</TableHead>
            <TableHead className="text-right font-semibold">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((invoice) => (
            <TableRow key={invoice.id} className="hover:bg-gray-50">
              <TableCell className="w-[100px] h-[150px]">
                <img
                  className="w-full h-full object-cover"
                  src={`${baseURL}${invoice.imageUrl}`}
                  alt={invoice.name}
                />
              </TableCell>
              <TableCell className="leading-6 text-left">
                {invoice.name}
              </TableCell>
              <TableCell className="text-left leading-6">Cerveja</TableCell>
              <TableCell className="text-left leading-6">
                {fCurrency(invoice.price)}
              </TableCell>
              <TableCell className="text-left leading-6">
                {invoice.stock || 'N/A'}
              </TableCell>
              <TableCell className="text-right ">
                <div className="flex items-center justify-end space-x-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <icon.açõe1 className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
                    <icon.ação2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              {/* Add footer content if needed */}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        product={products}
      />
    </>
  );
}
