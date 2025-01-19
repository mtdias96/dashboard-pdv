'use client';

import { useGetCategory } from '@/app/hooks/category/useGetCategory';
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
import { Pencil, Trash2 } from 'lucide-react';

const icon = {
  açõe1: Pencil,
  ação2: Trash2,
};

export function CategoryTable() {
  const { data: categories } = useGetCategory();

  return (
    <>
      <Table className="w-full border-collapse">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[150px] text-center font-semibold">
              Ícone
            </TableHead>
            <TableHead className="w-[250px] text-left font-semibold">
              Nome
            </TableHead>
            <TableHead className="text-right font-semibold">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories ? (
            categories.map((category) => (
              <TableRow key={category.id} className="hover:bg-gray-50 h-20">
                <TableCell className="text-center">
                  <span className="text-4xl">{category.icon}</span>
                </TableCell>
                <TableCell className="leading-6 text-left">
                  {category.name}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
                      <icon.açõe1 className="w-5 h-5" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                      // onClick={() => deleteCategory(category.id)}
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
                colSpan={3}
                className="text-center text-gray-500 py-10"
              >
                <div className="flex flex-col items-center">
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    Nenhuma categoria cadastrada.
                  </p>
                  <p className="text-sm text-gray-400">
                    Parece que você ainda não cadastrou nenhuma categoria.
                    Cadastre a primeira agora!
                  </p>
                  <div className="mt-4">
                    <Button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                      // onClick={() => {
                      //   setIsModalOpen(true);
                      // }}
                    >
                      Cadastrar Categoria
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
