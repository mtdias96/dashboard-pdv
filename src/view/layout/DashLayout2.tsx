import AddSaleModal from "@/view/components/models/AddSaleModal"
import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/view/components/ui/tabs"
import { Progress } from "@radix-ui/react-progress"
import { Separator } from "@radix-ui/react-separator"
import { ArrowRight, ArrowUp, Clock, DollarSign, Download, Package, PieChart, RefreshCcw, ShoppingCart, Truck, Wine } from "lucide-react"
import { useState } from "react"


export default function Dashboard2() {
  const [dateRange, setDateRange] = useState<"hoje" | "semana" | "mes">("hoje")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-2 font-semibold">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
            <span className="sr-only">Atualizar</span>
          </Button>

        </div>
        <div className="flex items-center gap-2">
            <Tabs defaultValue={dateRange} onValueChange={(v) => setDateRange(v as any)}>
              <TabsList>
                <TabsTrigger value="hoje">Hoje</TabsTrigger>
                <TabsTrigger value="semana">Semana</TabsTrigger>
                <TabsTrigger value="mes">Mês</TabsTrigger>
              </TabsList>
            </Tabs>
              <AddSaleModal/>
          </div>
      </header>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
        </div>

        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Diário</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 2.555,00</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUp className="mr-1 h-4 w-4" />
                <span>+15% em relação a ontem</span>
              </div>
              <div className="mt-4">
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="p-2">
              <Button variant="ghost" size="sm" className="w-full justify-between">
                <span>Ver detalhes</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas de Estoque</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
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
            <CardFooter className="p-2">
              <Button variant="ghost" size="sm" className="w-full justify-between">
                <span>Gerenciar estoque</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
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
            <CardFooter className="p-2">
              <Button variant="ghost" size="sm" className="w-full justify-between">
                <span>Ver análise</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vendas por Categoria</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
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
            <CardFooter className="p-2">
              <Button variant="ghost" size="sm" className="w-full justify-between">
                <span>Ver relatório</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div> */}

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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Últimos Pedidos</CardTitle>
                <CardDescription>Pedidos mais recentes do seu estabelecimento</CardDescription>
              </div>
              <Button variant="outline" size="icon" className="ml-auto">
                <MoreOptions />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b px-4 py-2 text-sm font-medium">
                  <div>Reg.</div>
                  <div className="col-span-2">Nome</div>
                  <div>Qtd</div>
                  <div>Status</div>
                  <div>Hora</div>
                </div>
                <div className="divide-y">
                  {orders.map((order) => (
                    <div key={order.id} className="grid grid-cols-6 items-center px-4 py-3 text-sm">
                      <div className="font-medium">{order.id}</div>
                      <div className="col-span-2">{order.name}</div>
                      <div>{order.quantity}</div>
                      <div>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {order.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-2">
              <Button variant="ghost" size="sm">
                Ver todos os pedidos
              </Button>
            </CardFooter>
          </Card>

          <Card className="lg:col-span-3">
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
                {topProducts.map((product) => (
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Desempenho de Vendas</CardTitle>
              <CardDescription>Comparativo de vendas nos últimos 7 dias</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <SalesChart />
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Produtos com Estoque Crítico</CardTitle>
              <CardDescription>Produtos que precisam de reposição</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockProducts.map((product) => (
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
      </div>
    </div>
  )
}

function MoreOptions() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}

function SalesChart() {
  return (
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
  )
}

// Dados de exemplo
const orders = [
  { id: "0001", name: "Vinho Chileno Malbec 750ml", quantity: 1, status: "completed", time: "12:21" },
  { id: "0002", name: "Vinho Chileno Malbec 750ml", quantity: 3, status: "completed", time: "12:22" },
  { id: "0003", name: "Vinho Chileno Malbec 750ml", quantity: 1, status: "completed", time: "10:36" },
  { id: "0004", name: "Vinho Chileno Malbec 750ml", quantity: 1, status: "completed", time: "10:37" },
  { id: "0005", name: "Vinho Chileno Malbec 750ml", quantity: 1, status: "completed", time: "11:16" },
]

const topProducts = [
  { id: 1, name: "Surf Excel", sold: 30, stock: 12, price: 100.0 },
  { id: 2, name: "Rin", sold: 21, stock: 15, price: 207.0 },
  { id: 3, name: "Perle G", sold: 19, stock: 17, price: 105.0 },
]

const lowStockProducts = [
  { id: 1, name: "Vinho Argentino Malbec 750ml", stock: 0 },
  { id: 2, name: "Whisky Jack Daniels 1L", stock: 2 },
  { id: 3, name: "Cerveja Heineken 350ml", stock: 3 },
]

