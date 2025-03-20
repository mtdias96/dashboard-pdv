
"use client"

import { AvatarFallback } from "@/view/components/ui/avatar"

import { Avatar, AvatarImage } from "@/view/components/ui/avatar"
import { Button } from "@/view/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/view/components/ui/dropdown-menu"
import { Input } from "@/view/components/ui/input"
import { Activity, AlertTriangle, Bell, Package, RefreshCcw, Search } from "lucide-react"
import { useState } from "react"

export function   DashboardHeader() {
  const [notificationsCount, setNotificationsCount] = useState(3)

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-[11px] h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar..." className="h-10 w-52 px-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              {notificationsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  {notificationsCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-auto">
              <DropdownMenuItem className="flex items-start gap-2 p-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 text-red-500 shrink-0" />
                <div>
                  <p className="font-medium">Estoque crítico</p>
                  <p className="text-xs text-muted-foreground">Vinho Argentino Malbec está sem estoque</p>
                  <p className="text-xs text-muted-foreground mt-1">Há 10 minutos</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 p-3">
                <Activity className="mt-0.5 h-4 w-4 text-amber-500 shrink-0" />
                <div>
                  <p className="font-medium">Vendas abaixo da média</p>
                  <p className="text-xs text-muted-foreground">As vendas estão 20% abaixo da média para terça-feira</p>
                  <p className="text-xs text-muted-foreground mt-1">Há 30 minutos</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 p-3">
                <Package className="mt-0.5 h-4 w-4 text-blue-500 shrink-0" />
                <div>
                  <p className="font-medium">Produto próximo do vencimento</p>
                  <p className="text-xs text-muted-foreground">Cerveja Heineken 350ml vence em 7 dias</p>
                  <p className="text-xs text-muted-foreground mt-1">Há 1 hora</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center"
              onClick={() => setNotificationsCount(0)}
            >
              Marcar todas como lidas
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon">
          <RefreshCcw className="h-4 w-4" />
          <span className="sr-only">Atualizar</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

