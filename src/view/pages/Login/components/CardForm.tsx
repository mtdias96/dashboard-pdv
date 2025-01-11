import StoreTitle from '@/view/components/StoreTitle';
import { Button } from '@/view/components/ui/button';
import { Input } from '@/view/components/ui/input';
import { Label } from '@/view/components/ui/label';
import { useCardFormController } from '@/view/pages/Login/components/useCardFormController';
import { XCircle } from '@mynaui/icons-react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function CardForm() {
  const { handleSubmit, register, errors, isSubmitting } =
    useCardFormController();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center border rounded-3xl w-96">
      <div className="w-full px-8 rounded-2xl shadow-xl z-50 py-8">
        <StoreTitle />

        <div className="flex justify-center items-center flex-col gap-2 mt-12">
          <h2 className="font-bold text-2xl leading-8 tracking-[-0.5px]">
            Entre em sua conta
          </h2>

          <div className="flex gap-2 leading-8 tracking-[-0.5px] text-sm">
            <span className="font-light">Novo por aqui?</span>
            <Link to="/register" className="text-purple-700">
              Crie uma conta
            </Link>
          </div>
        </div>

        <form className="space-y-8 z-50 mt-12" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                E-mail
              </Label>
              <Input
                type="email"
                placeholder="Seu e-mail de acesso"
                {...register('email')}
                className="mt-1 w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400"
              />

              {errors.email && (
                <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                  <XCircle className="w-4 h-4" />
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Senha
              </Label>

              <div className="mt-1">
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Informe sua senha"
                    {...register('password')}
                    className="w-full text-sm leading-5 font-normal text-gray-900 placeholder-gray-400 pr-10"
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
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform mt-48"
          >
            {isSubmitting && 'Entrando...'}
            {!isSubmitting && 'Entrar'}
          </Button>
        </form>
      </div>
    </div>
  );
}
