import StoreTitle from '@/view/components/StoreTitle';
import { Button } from '@/view/components/ui/button';
import { Input } from '@/view/components/ui/input';
import { Label } from '@/view/components/ui/label';
import { useRegisterFormController } from '@/view/pages/Register/components/useRegisterFormController';
import { XCircle } from '@mynaui/icons-react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SignUpForm() {
  const { handleSubmit, register, errors, isSubmitting } =
    useRegisterFormController();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[720px] border rounded-3xl">
      <div className="w-full max-w-3xl p-8 rounded-2xl shadow-xl ">
        <StoreTitle />

        <div className="flex justify-center items-center flex-col gap-4 mt-12">
          <h2 className="font-bold text-2xl leading-8 tracking-[-0.5px]">
            Crie sua conta
          </h2>

          <div className="flex gap-2 leading-8 tracking-[-0.5px] text-sm">
            <span className="font-light">Já possui uma conta?</span>
            <Link to="/login" className="text-purple-700">
              Fazer Login
            </Link>
          </div>
        </div>

        <form className="mt-12" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nome
                </Label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('name', { required: 'Nome é obrigatório' })}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('email', { required: 'Email é obrigatório' })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Senha
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Crie uma senha forte"
                    className="w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400 pr-10"
                    {...register('password', {
                      required: 'Senha é obrigatória',
                    })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="funcao"
                  className="text-sm font-medium text-gray-700"
                >
                  Função
                </Label>
                <Input
                  type="text"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  value="OWNER"
                  {...register('adega.role')}
                  readOnly
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="adegaName"
                  className="text-sm font-medium text-gray-700"
                >
                  Nome da Adega
                </Label>
                <Input
                  type="text"
                  placeholder="Nome da sua adega"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.name', {
                    required: 'Nome da adega é obrigatório',
                  })}
                />
                {errors.adega?.name && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.name.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  Cidade
                </Label>
                <Input
                  type="text"
                  placeholder="Cidade da adega"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.city', {
                    required: 'Cidade é obrigatória',
                  })}
                />
                {errors.adega?.city && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.city.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="neighborhood"
                  className="text-sm font-medium text-gray-700"
                >
                  Bairro
                </Label>
                <Input
                  type="text"
                  placeholder="Bairro da adega"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.neighborhood', {
                    required: 'Bairro é obrigatório',
                  })}
                />
                {errors.adega?.neighborhood && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.neighborhood.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="zipCode"
                  className="text-sm font-medium text-gray-700"
                >
                  CEP
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="00000-000"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.zipCode', {
                    required: 'CEP é obrigatório',
                  })}
                />
                {errors.adega?.zipCode && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.zipCode.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="state"
                  className="text-sm font-medium text-gray-700"
                >
                  Estado
                </Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="UF"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.state', {
                    required: 'Estado é obrigatório',
                  })}
                />
                {errors.adega?.state && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.state.message}
                  </span>
                )}
              </div>
              <div className="flex-1 flex-col">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Telefone
                </Label>
                <Input
                  type="tel"
                  placeholder="+55 (00) 00000-0000"
                  className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
                  {...register('adega.phone', {
                    required: 'Telefone é obrigatório',
                  })}
                />
                {errors.adega?.phone && (
                  <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                    <XCircle className="w-4 h-4" />
                    {errors.adega?.phone.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r
             from-purple-600 to-red-500
             hover:from-purple-700 hover:to-red-600 text-white font-bold py-2 px-4
             rounded-md transition duration-300 ease-in-out transform mt-8"
          >
            {isSubmitting && 'Entrando...'}
            {!isSubmitting && 'Entrar'}
          </Button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-600">
          Ao criar uma conta, você concorda com nossos{' '}
          <a
            href="#"
            className="font-medium text-purple-600 hover:text-purple-500 underline underline-offset-4"
          >
            Termos de Serviço
          </a>{' '}
          e{' '}
          <a
            href="#"
            className="font-medium text-purple-600 hover:text-purple-500 underline underline-offset-4"
          >
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
