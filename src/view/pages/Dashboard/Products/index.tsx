import { IProduct } from '@/app/interfaces/IProduct';
import { ProductService } from '@/app/services/ProductService';
import { useEffect, useState } from 'react';
import { ProductModal } from './components/ProductModal';
import { ProductTable } from './components/ProductTable';

export function ProductsHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]); // Array vazio como padrão

  const getProducts = async () => {
    const fetchedProducts = await ProductService.getProducts();
    setProducts(fetchedProducts); // Define diretamente os produtos
  };

  useEffect(() => {
    getProducts();
  }, []); // Remove a dependência de `products` para evitar chamadas infinitas
  const baseURL = 'http://localhost:8080/';
  return (
    <main className="h-screen">
      <div className="flex justify-between pt-8 py-6">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          Produtos{' '}
          <p className="bg-gray-200 px-2 border rounded-lg text-base">
            {products.length}
          </p>
        </h2>
        <button
          className="font-semibold text-red-500 text-sm leading-5"
          onClick={() => setIsModalOpen(true)}
        >
          Novo Produto
        </button>
      </div>
      <ProductTable baseURL={baseURL} products={products} />{' '}
      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        // onSubmit={true}
      />
    </main>
  );
}
