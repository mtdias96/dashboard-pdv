import { IProduct } from '@/app/interfaces/IProduct';
import { cn } from '@/app/lib/utils';
import { Button } from '@/view/components/ui/button';
import { Card, CardContent } from '@/view/components/ui/card';
import { Checkbox } from '@/view/components/ui/checkbox';
import { FormItem, FormLabel } from '@/view/components/ui/form';
import { Input } from '@/view/components/ui/input';
import { Textarea } from '@/view/components/ui/textarea';
import { ImagePlus, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useContentModalController } from './useContentModalController';

interface IProductModalForm {
  productEdit?: IProduct;
  isEditing: boolean;
}

export default function ProductModalForm({
  productEdit,
  isEditing,
}: IProductModalForm) {
  const {
    register,
    handleSubmit,
    getRootProps,
    getInputProps,
    isDragActive,
    selectedImage,
    setSelectedImage,
    isPending,
    setValue,
    open,
    categories,
    watch,
  } = useContentModalController(isEditing);

  useEffect(() => {
    if (isEditing && productEdit) {
      setValue('name', productEdit.name);
      setValue('description', productEdit.description || '');
      setValue('stock', productEdit.stock || 0);
      setValue('price', productEdit.price || 0);
      setValue('id', productEdit.id || '');
    }
  }, [isEditing, productEdit, setValue]);

  const baseURL = 'http://localhost:8080/';
  const selectedCategoryId = watch('categoryId');

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-lg font-semibold mb-6">Imagem</h2>
              <div
                {...getRootProps()}
                className={cn(
                  'border-2 rounded-lg text-center flex flex-col items-center gap-4',
                  isDragActive && 'bg-accent',
                )}
              >
                <input {...getInputProps()} />
                <div className="w-full h-44 flex bg-gray-50 justify-center items-center cursor-pointer">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected product"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : productEdit?.imageUrl ? (
                    <img
                      src={`${baseURL}${productEdit.imageUrl}`}
                      alt="Product"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <ImagePlus className="w-8 h-8" />
                  )}
                </div>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full border-none p-8 text-red-500 font-semibold hover:text-red-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                    open();
                  }}
                >
                  {selectedImage ? 'Remover Imagem' : 'Selecionar Imagem'}
                </Button>
              </div>
              <div className="space-y-4 pt-8">
                <FormItem>
                  <FormLabel className="font-normal text-sm leading-5">
                    Nome do Produto
                  </FormLabel>
                  <Input
                    placeholder="Ex: Cerveja Haineken"
                    type="text"
                    {...register('name', {})}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <Input
                    placeholder="Ex: R$ 5,53"
                    type="text"
                    {...register('price', {
                      required: 'Preço é obrigatório',
                      onChange: (e) => {
                        let value = e.target.value;
                        value = value.replace(/[^\d.]/g, '');
                        value = value.replace(/(\..*?)\..*/g, '$1');
                        e.target.value = `R$ ${value}`;
                      },
                      setValueAs: (value) => {
                        if (typeof value === 'string') {
                          return parseFloat(value.replace(/[^\d.]/g, '')) || 0;
                        }
                        return value || 0;
                      },
                    })}
                  />
                </FormItem>
                <FormItem>
                  <FormLabel>Estoque</FormLabel>
                  <Input
                    placeholder="Ex: 26"
                    type="number"
                    {...register('stock')}
                  />
                </FormItem>

                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <Textarea
                    placeholder="Opcional..."
                    {...register('description')}
                  />
                </FormItem>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Categorias</h2>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Busque a categoria" className="pl-10" />
              </div>

              <div className="space-y-2 max-h-[300px] w-full overflow-auto">
                {categories?.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2 p-4 hover:bg-gray-50 rounded-md border w-full max-w-[100%]"
                  >
                    <Checkbox
                      id={category.id}
                      {...register('categoryId')}
                      checked={selectedCategoryId === category.id}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          register('categoryId').onChange({
                            target: { value: category.id, name: 'categoryId' },
                          });
                        } else {
                          register('categoryId').onChange({
                            target: { value: '', name: 'categoryId' },
                          });
                        }
                      }}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {category.icon} {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            {isPending && (
              <Button type="submit" disabled={isPending}>
                Cadastrando...
              </Button>
            )}
            <Button type="submit" className="w-52 h-11" disabled={isPending}>
              {isEditing ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
