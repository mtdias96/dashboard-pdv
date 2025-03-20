import { Avatar, AvatarImage } from "@/view/components/ui/avatar"
import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/view/components/ui/dropdown-menu"
import { Input } from "@/view/components/ui/input"
import { Separator } from "@/view/components/ui/separator"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/view/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/view/components/ui/tabs"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Progress } from "@radix-ui/react-progress"
import { Activity, AlertTriangle, ArrowRight, ArrowUp, Bell, DollarSign, Download, Package, PieChart, Plus, RefreshCcw, Search, ShoppingCart, Table, Truck, Wine } from "lucide-react"
import { useState } from "react"


export default function DashboardAvancado() {
  const [dateRange, setDateRange] = useState<"hoje" | "semana" | "mes">("hoje")
  const [notificationsCount, setNotificationsCount] = useState(3)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
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
                      <p className="text-xs text-muted-foreground">
                        As vendas estão 20% abaixo da média para terça-feira
                      </p>
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

        <main className="flex-1 space-y-4 p-4 md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Última atualização: {new Date().toLocaleTimeString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <Tabs defaultValue={dateRange} onValueChange={(v) => setDateRange(v as any)} className="hidden sm:block">
                <TabsList>
                  <TabsTrigger value="hoje">Hoje</TabsTrigger>
                  <TabsTrigger value="semana">Semana</TabsTrigger>
                  <TabsTrigger value="mes">Mês</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nova Venda
              </Button>
            </div>
          </div>

          {/* Status em Tempo Real */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Status do Estabelecimento</CardTitle>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
                  Loja Aberta
                </Badge>
              </div>
              <CardDescription>Monitoramento em tempo real da sua adega</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Faturamento Hoje</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">R$ 2.555,00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <ShoppingCart className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vendas Realizadas</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">42</p>
                      <Badge variant="outline" className="text-xs">
                        +8% vs ontem
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Package className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Produtos Ativos</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold">187</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <AlertTriangle className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alertas Pendentes</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Métricas Principais */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faturamento Diário</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">R$ 2.555,00</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  <span>+15% em relação a ontem</span>
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Ver detalhes</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alertas de Estoque</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Produtos com estoque baixo</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="text-sm">Sem estoque: 1</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>
                    <span className="text-sm">Estoque crítico: 2</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Gerenciar estoque</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">R$ 78,45</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  <span>+5% em relação a ontem</span>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Bebidas</span>
                    <span>R$ 45,20</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Alimentos</span>
                    <span>R$ 33,25</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Ver análise</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas por Categoria</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Vendas totais hoje</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Vinhos</span>
                    </div>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Cervejas</span>
                    </div>
                    <span className="text-sm font-medium">24%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Destilados</span>
                    </div>
                    <span className="text-sm font-medium">8%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Ver relatório</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Horários de Pico e Produtos Mais Vendidos */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Horários de Pico</CardTitle>
                <CardDescription>Análise de movimento por hora do dia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <div className="flex h-full items-end gap-1">
                    {[10, 15, 20, 35, 60, 90, 75, 45, 30, 20, 15, 10].map((height, i) => (
                      <div key={i} className="relative flex w-full flex-col items-center">
                        <div
                          className={`w-full rounded-sm ${height > 70 ? "bg-primary" : "bg-primary/60"}`}
                          style={{ height: `${height}%` }}
                        />
                        <span className="mt-2 text-xs text-muted-foreground">
                          {`${(i + 10) % 12 || 12}${i + 10 < 12 || i + 10 > 21 ? "am" : "pm"}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">Horário mais movimentado:</div>
                  <Badge>18h - 20h</Badge>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="outline" size="sm" className="w-full">
                  Ver análise completa
                </Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-4">
              <CardHeader className="flex flex-row items-center">
                <div>
                  <CardTitle>Produtos Mais Vendidos</CardTitle>
                  <CardDescription>Top produtos por volume de vendas</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Ver Todos
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, name: "Vinho Chileno Malbec 750ml", sold: 30, stock: 12, price: 100.0 },
                    { id: 2, name: "Whisky Jack Daniels 1L", sold: 21, stock: 15, price: 207.0 },
                    { id: 3, name: "Cerveja Heineken 350ml", sold: 19, stock: 17, price: 105.0 },
                    { id: 4, name: "Vinho Português Tinto 750ml", sold: 15, stock: 8, price: 89.0 },
                    { id: 5, name: "Gin Tanqueray 750ml", sold: 12, stock: 6, price: 129.0 },
                  ].map((product) => (
                    <div key={product.id} className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Wine className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-4 flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{product.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Vendidos: {product.sold}</span>
                          <Separator orientation="vertical" className="mx-2 h-3" />
                          <span>Em estoque: {product.stock}</span>
                        </div>
                      </div>
                      <div className="font-medium">R$ {product.price.toFixed(2).replace(".", ",")}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm font-medium">Total de vendas hoje</div>
                  <div className="text-lg font-bold">R$ 4.325,75</div>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Controle Financeiro e Produtos com Estoque Crítico */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Controle Financeiro</CardTitle>
                <CardDescription>Resumo das transações financeiras do dia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-3">
                      <div className="text-sm text-muted-foreground">Entradas</div>
                      <div className="mt-1 text-xl font-bold text-green-600">R$ 3.250,75</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm text-muted-foreground">Saídas</div>
                      <div className="mt-1 text-xl font-bold text-red-600">R$ 695,50</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="text-sm text-muted-foreground">Saldo</div>
                      <div className="mt-1 text-xl font-bold">R$ 2.555,25</div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Descrição</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Hora</TableHead>
                          <TableHead className="text-right">Valor</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: 1, description: "Venda #P0023", type: "entrada", time: "14:35", value: 250.0 },
                          { id: 2, description: "Pagamento Fornecedor", type: "saída", time: "13:20", value: 450.0 },
                          { id: 3, description: "Venda #P0022", type: "entrada", time: "12:45", value: 180.5 },
                          { id: 4, description: "Venda #P0021", type: "entrada", time: "11:30", value: 320.25 },
                          { id: 5, description: "Reposição de Caixa", type: "saída", time: "10:15", value: 245.5 },
                        ].map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>
                              <Badge
                                variant={transaction.type === "entrada" ? "outline" : "destructive"}
                                className={
                                  transaction.type === "entrada"
                                    ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                    : ""
                                }
                              >
                                {transaction.type === "entrada" ? "Entrada" : "Saída"}
                              </Badge>
                            </TableCell>
                            <TableCell>{transaction.time}</TableCell>
                            <TableCell
                              className={`text-right ${
                                transaction.type === "entrada" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transaction.type === "entrada" ? "+" : "-"}
                              R$ {transaction.value.toFixed(2).replace(".", ",")}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar relatório
                </Button>
                <Button size="sm">Fechamento de caixa</Button>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Produtos com Estoque Crítico</CardTitle>
                <CardDescription>Produtos que precisam de reposição</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, name: "Vinho Argentino Malbec 750ml", stock: 0 },
                    { id: 2, name: "Whisky Jack Daniels 1L", stock: 2 },
                    { id: 3, name: "Cerveja Heineken 350ml", stock: 3 },
                    { id: 4, name: "Gin Tanqueray 750ml", stock: 4 },
                  ].map((product) => (
                    <div key={product.id} className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          product.stock === 0 ? "bg-red-100" : "bg-orange-100"
                        }`}
                      >
                        <Package className={`h-5 w-5 ${product.stock === 0 ? "text-red-500" : "text-orange-500"}`} />
                      </div>
                      <div className="ml-4 flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{product.name}</p>
                        <div className="flex items-center">
                          <Badge variant={product.stock === 0 ? "destructive" : "outline"} className="text-xs">
                            {product.stock === 0 ? "Sem estoque" : "Estoque crítico"}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Truck className="mr-2 h-4 w-4" />
                        Pedir
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar lista
                </Button>
                <Button size="sm">Gerenciar estoque</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Desempenho de Vendas e Alertas */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Desempenho de Vendas</CardTitle>
                <CardDescription>Comparativo de vendas nos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full">
                  <div className="flex h-full items-end gap-2 pb-4">
                    {[40, 30, 70, 50, 90, 80, 100].map((height, i) => (
                      <div key={i} className="relative flex w-full flex-col items-center">
                        <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }} />
                        <span className="mt-2 text-xs text-muted-foreground">
                          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm font-medium">Total da semana</div>
                  <div className="text-lg font-bold">R$ 18.750,25</div>
                </div>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Alertas e Notificações</CardTitle>
                <CardDescription>Situações que requerem sua atenção</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Estoque crítico",
                      description: "Vinho Argentino Malbec está sem estoque",
                      icon: Package,
                      iconColor: "text-red-500",
                      bgColor: "bg-red-100",
                      time: "10 minutos atrás",
                      action: "Repor estoque",
                    },
                    {
                      id: 2,
                      title: "Vendas abaixo da média",
                      description: "As vendas estão 20% abaixo da média para terça-feira",
                      icon: Activity,
                      iconColor: "text-amber-500",
                      bgColor: "bg-amber-100",
                      time: "30 minutos atrás",
                      action: "Ver análise",
                    },
                    {
                      id: 3,
                      title: "Produto próximo do vencimento",
                      description: "Cerveja Heineken 350ml vence em 7 dias",
                      icon: AlertTriangle,
                      iconColor: "text-blue-500",
                      bgColor: "bg-blue-100",
                      time: "1 hora atrás",
                      action: "Verificar",
                    },
                  ].map((alert) => (
                    <div key={alert.id} className="flex items-start gap-4 rounded-lg border p-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${alert.bgColor}`}
                      >
                        <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{alert.title}</p>
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        {alert.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t p-2">
                <Button variant="ghost" size="sm">
                  Ver todos os alertas
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

