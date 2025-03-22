import StoreTitle from "@/view/components/StoreTitle"
import { Button } from "@/view/components/ui/button"
import { Input } from "@/view/components/ui/input"
import { Label } from "@/view/components/ui/label"
import { useCardFormController } from "@/view/pages/Auth/Login/components/useCardFormController"
import { XCircle } from "@mynaui/icons-react"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function CardForm() {
  const { handleSubmit, register, errors, isSubmitting } = useCardFormController()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col space-y-2 text-center">
        <StoreTitle />
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">Entre em sua conta</h1>
        <p className="text-sm text-gray-600">Acesse sua conta para continuar</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              E-mail
            </Label>
            <Input
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className="mt-1 w-full bg-white border-gray-300 text-gray-800 placeholder:text-gray-400"
            />

            {errors.email && (
              <span className="text-xs text-red-500 flex gap-2 items-center mt-2">
                <XCircle className="w-4 h-4" />
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Senha
            </Label>

            <div className="mt-1">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password")}
                  className="w-full bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 pr-10"
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
          className="w-full bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-700 hover:to-red-600 text-white transition-colors"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Ou continue com</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-11 border-gray-200">
          <svg className="mr-2 h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
          Facebook
        </Button>
        <Button variant="outline" className="h-11 border-gray-200">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
      </div>

      <div className="text-center text-sm text-gray-500">
        Novo por aqui?{" "}
        <Link to="/register" className="text-purple-700 hover:underline">
          Crie uma conta
        </Link>
      </div>
    </div>
  )
}

