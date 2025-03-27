import { useGetProducts } from '@/app/hooks/product/useGetProduct';
import { useSearchProducts } from '@/app/hooks/product/useSearchProduct';
import { Button } from '@/view/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/view/components/ui/card';
import { Input } from '@/view/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/view/components/ui/select';
import { Plus, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProductModal } from './components/ProductModal';
import { ProductTable } from './components/ProductModal/ProductTable';

const baseURL = `https://adega-tech.s3.sa-east-1.amazonaws.com/`;

export function ProductsHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const { data: products } = useGetProducts();
  const { data: searchData } = useSearchProducts(searchTerm);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
  };

  useEffect(() => {
    handleSearch();
    return () => handleSearch();
  }, [searchTerm, category]);

  const displayedProducts =
    searchData && searchData.length > 0 ? searchResults : products || [];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-2xl font-bold">Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Busque um produto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-96"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px] h-14 outline-none focus:outline-none">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Categorias</SelectItem>
                <SelectItem value="electronics">🍺 Cervejas</SelectItem>
                <SelectItem value="clothing">🍷 Vinhos</SelectItem>
                <SelectItem value="books">🥤 Sucos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 hover:text-red-400 h-14 w-40"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </Button>
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          Total de produtos: {displayedProducts.length}
        </div>
        <ProductTable
          baseURL={baseURL}
          products={displayedProducts}
          search={searchData}
        />
      </CardContent>
      <ProductModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </Card>
  );
}
