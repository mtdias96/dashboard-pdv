import { useCreateCategory } from '@/app/hooks/category/useCreateCategory';
import { Button } from '@/view/components/ui/button';
import { FormItem, FormLabel } from '@/view/components/ui/form';
import { Input } from '@/view/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const modalSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  icon: z.string().min(1, 'Nome é obrigatório'),
});

type ModalSchema = z.infer<typeof modalSchema>;

export function CategoryModalForm() {
  const { createCategory } = useCreateCategory();
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    // formState: { errors, isSubmitting },
  } = useForm<ModalSchema>({
    resolver: zodResolver(modalSchema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    createCategory(data);
    reset();
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 px-1">
      <div className="flex-1 h-auto">
        <div className="space-y-8">
          <FormItem>
            <FormLabel className="font-normal text-sm leading-5">
              Emoji
            </FormLabel>
            <Input
              placeholder="Ex: 🍺"
              type="text"
              className="placeholder:text-gray-400"
              {...register('icon')}
            />
          </FormItem>

          <FormItem>
            <FormLabel className="font-normal text-sm leading-5">
              Nome
            </FormLabel>
            <Input
              placeholder="Ex: Cerveja Haineken"
              type="text"
              className="placeholder:text-gray-400"
              {...register('name')}
            />
          </FormItem>
        </div>

        <div className="flex justify-end pt-16">
          <Button type="submit" className="w-52 h-11">
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  );
}
