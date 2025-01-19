import { Button } from '@/view/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/view/components/ui/card';
import { CategoryModal } from '@/view/pages/Dashboard/CategoryHome/components/CategoryModal';
import { CategoryTable } from '@/view/pages/Dashboard/CategoryHome/components/CategoryTable';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function CategoryHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Card className="">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-8">
        <CardTitle className="text-2xl font-bold">Categorias</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="text-red-500 hover:text-red-400 "
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Categoria
        </Button>
      </CardHeader>
      <CardContent>
        <CategoryTable />
      </CardContent>
      <CategoryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </Card>
  );
}
