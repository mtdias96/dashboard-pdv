
import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Download, Package, Truck } from "lucide-react"

const criticalProducts = [
  { id: 1, name: "Vinho Argentino Malbec 750ml", stock: 0 },
  { id: 2, name: "Whisky Jack Daniels 1L", stock: 2 },
  { id: 3, name: "Cerveja Heineken 350ml", stock: 3 },
  { id: 4, name: "Gin Tanqueray 750ml", stock: 4 },
]

export function CriticalStock() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Produtos com Estoque Crítico</CardTitle>
        <CardDescription>Produtos que precisam de reposição</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {criticalProducts.map((product) => (
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
  )
}

