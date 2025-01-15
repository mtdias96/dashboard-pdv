import { useGetProducts } from '@/app/hooks/product/useGetProduct';
import { useEffect, useState } from 'react';
import { ProductModal } from './components/ProductModal';
import { ProductTable } from './components/ProductTable';

const baseURL = 'http://localhost:8080/';

export function ProductsHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: products, refetch } = useGetProducts();

  useEffect(() => {
    refetch();
  }, [isModalOpen]);

  return (
    <main className="h-screen">
      <div className="flex justify-between pt-8 py-6">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          Produtos{' '}
          <p className="bg-gray-200 px-2 border rounded-lg text-base">
            {products?.length}
          </p>
        </h2>
        <button
          className="font-semibold text-red-500 text-sm leading-5"
          onClick={() => setIsModalOpen(true)}
        >
          Novo Produto
        </button>
      </div>
      <ProductTable baseURL={baseURL} products={products || []} />
      <ProductModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
}
