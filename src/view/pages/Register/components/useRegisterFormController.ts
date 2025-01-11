import { AuthService } from '@/app/services/AuthService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// const RoleEnum = {
//   OWNER: 'OWNER',
//   ATTENDANT: 'ATTENDANT',
// } as const;

const schema = z.object({
  name: z.string().nonempty('Insira seu nome para cadastrar'),
  email: z
    .string()
    .nonempty('Insira seu e-mail para cadastrar')
    .email('Insira um e-mail valido'),
  password: z
    .string()
    .nonempty('Insira sua senha para cadastrar')
    .min(8, 'Password deve ter no mínimo 8 caracteres'),
  adega: z.object({
    name: z.string().nonempty('Insira um nome para cadastrar'),
    city: z.string().nonempty('Insira uma cidade para cadastrar'),
    neighborhood: z.string().nonempty('Insira um bairro para cadastrar'),
    zipCode: z.string().nonempty('Insira um cep para cadastraro'),
    state: z.string().nonempty('Insira um estado para cadastrar'),
    phone: z.string().nonempty('Insira um celular para cadastrar'),
    role: z.string(),
  }),
});

type Schema = z.infer<typeof schema>;

export function useRegisterFormController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await AuthService.signUp(data);
  });

  return { handleSubmit, register, errors, isSubmitting };
}
