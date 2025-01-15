import { useDeleteProduct } from '@/app/hooks/product/useDeleteProduct';
import { IProduct } from '@/app/interfaces/IProduct';
import { fCurrency } from '@/app/utils/formatNumber';
import { Button } from '@/view/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/view/components/ui/table';
import { ProductModal } from '@/view/pages/Dashboard/ProductsHome/components/ProductModal';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

const icon = {
  açõe1: Pencil,
  ação2: Trash2,
};

type ProductTableProps = {
  baseURL: string;
  products: IProduct[] | [];
};

export function ProductTable({ baseURL, products }: ProductTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteProduct } = useDeleteProduct();

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
          {products.length > 0 ? (
            products.map((invoice) => (
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
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <icon.açõe1 className="w-5 h-5" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                      onClick={() => deleteProduct(invoice.id)}
                    >
                      <icon.ação2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center text-gray-500 py-10"
              >
                <div className="flex flex-col items-center">
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    Nenhum produto cadastrado.
                  </p>
                  <p className="text-sm text-gray-400">
                    Parece que você ainda não cadastrou nenhum produto. Cadastre
                    o primeiro agora!
                  </p>
                  <div className="mt-4">
                    <Button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Cadastrar Produto
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}></TableCell>
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
