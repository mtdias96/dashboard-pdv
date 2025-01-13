import { Button } from '@/view/components/ui/button';
import { Card, CardContent } from '@/view/components/ui/card';
import { Checkbox } from '@/view/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/view/components/ui/form';
import { Input } from '@/view/components/ui/input';
import { Textarea } from '@/view/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImagePlus, Plus, Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string(),
  categories: z.array(z.string()),
  image: z.string().optional(),
  stock: z.string(),
  price: z.number(),
});

export default function ContentModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
    },
  });

  const categories = [
    { id: 'pizzas', label: '🍺 Cervejas' },
    { id: 'lanches', label: '🍷 Vinhos' },
    { id: 'promocoes', label: '💰 Promoções' },
    { id: 'bebidas', label: '🥤 Refrigerantes' },
    { id: 'sobremesas', label: '🍹 Sucos' },
    { id: 'vegetariano', label: '🧉 Àgua de coco' },
    { id: 'water', label: '🍾 Champanhe' },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-6 items-start">
                <div>
                  <h2 className="text-lg font-semibold mb-6">Imagem</h2>
                  <div className="border-2 rounded-lg text-center flex flex-col items-center gap-4">
                    <div className="w-full h-40 bg-gray-50 flex justify-center items-center cursor-pointer">
                      <ImagePlus className="w-8 h-8" />
                    </div>
                    <Button
                      variant="outline"
                      type="button"
                      className="w-full border-none p-8 text-red-500 font-semibold hover:text-red-400"
                    >
                      Alterar Imagem
                    </Button>
                  </div>
                  <div className="space-y-4 pt-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-normal text-sm leading-5">
                            Nome do Produto
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Cerveja Haineken"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estoque</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 26" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preço</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: R$ 5,53" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descrição</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Opcional..." {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Categorias</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:text-red-400"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Nova Categoria
                    </Button>
                  </div>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Busque a categoria" className="pl-10" />
                  </div>
                  <div className="space-y-2 max-h-[300px] w-full overflow-scroll ">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2 p-4 hover:bg-gray-50 rounded-md border w-full max-w-[100%]"
                      >
                        <Checkbox
                          id={category.id}
                          onCheckedChange={(checked) => {
                            const currentCategories =
                              form.getValues('categories');
                            if (checked) {
                              form.setValue('categories', [
                                ...currentCategories,
                                category.id,
                              ]);
                            } else {
                              form.setValue(
                                'categories',
                                currentCategories.filter(
                                  (id) => id !== category.id,
                                ),
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full flex justify-end">
            <Button type="submit">Salvar Alterações</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
