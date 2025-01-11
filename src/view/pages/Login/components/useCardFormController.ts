import { useAuth } from '@/app/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  email: z
    .string()
    .nonempty('Insira seu e-mail para entrar')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Insira sua senha para entrar')
    .min(8, 'A senha deve conter pelo menos 8 digitos'),
});

type Schema = z.infer<typeof schema>;

export function useCardFormController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const { email, password } = data;

    const toastId = toast.loading('Fazendo login...');
    try {
      await signIn(email, password);
      toast.success('Login realizado com sucesso!', { id: toastId });
    } catch {
      toast.error('Credenciais inválidas', { id: toastId });
    }
  });

  return { handleSubmit, register, errors, isSubmitting };
}
