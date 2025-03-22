import { useGetProducts } from "@/app/hooks/product/useGetProduct"
import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { AlertTriangle, Download, Package, Truck } from "lucide-react"

const baseURL = "http://localhost:8080/"
export function CriticalStock() {
  const { data } = useGetProducts()

  const stockItems = data
    ?.filter(({ stock: { quantity, lowStock } }) => quantity <= lowStock)
    .sort((a, b) => {
      const { quantity: qa, lowStock: la } = a.stock
      const { quantity: qb, lowStock: lb } = b.stock

      if (qa === 0 && qb !== 0) return -1
      if (qa !== 0 && qb === 0) return 1

      return qa / la - qb / lb
    })

  const hasItems = stockItems && stockItems.length > 0

  return (
    <Card className="lg:col-span-3 flex flex-col max-w-[480px]">
      <CardHeader>
        <CardTitle>Produtos com Estoque Crítico</CardTitle>
        <CardDescription>Produtos que precisam de reposição</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto">
        {hasItems ? (
          <div className="space-y-4">
            {stockItems.map((product) => {
              const isOutOfStock = product.stock.quantity === 0
              const isLowStock = product.stock.quantity <= product.stock.lowStock

              return (
                <div key={product.id} className="flex items-center">
                  <div className="relative">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full overflow-hidden ${
                        isOutOfStock ? "bg-red-100" : "bg-orange-100"
                      }`}
                    >
                      <img
                        src={product.imageUrl ? `${baseURL}${product.imageUrl}` : "/placeholder.svg?height=40&width=40"}
                        alt={product.name}
                        className={`h-full w-full object-cover ${isOutOfStock ? "opacity-70" : ""}`}
                      />
                    </div>
                    {isOutOfStock && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <div className="flex items-center">
                      <Badge
                        variant={isOutOfStock ? "destructive" : isLowStock ? "outline" : "outline"}
                        className={`text-xs ${isLowStock && !isOutOfStock ? "bg-orange-500 text-white" : ""}`}
                      >
                        {isOutOfStock ? "Sem estoque" : ` Estoque Baixo`}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Truck className="mr-2 h-4 w-4" />
                    Pedir
                  </Button>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
            <div className="bg-muted/50 p-3 rounded-full mb-3">
              <Package className="h-8 w-8" />
            </div>
            <p>Não há produtos com estoque crítico</p>
            <p className="text-sm">Todos os produtos estão com estoque adequado</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between border-t p-4 mt-auto">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Exportar lista
        </Button>
        <Button size="sm">Gerenciar estoque</Button>
      </CardFooter>
    </Card>
  )
}

