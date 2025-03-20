import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Separator } from "@/view/components/ui/separator"
import { Wine } from "lucide-react"

const products = [
  { id: 1, name: "Vinho Chileno Malbec 750ml", sold: 30, stock: 12, price: 100.0 },
  { id: 2, name: "Whisky Jack Daniels 1L", sold: 21, stock: 15, price: 207.0 },
  { id: 3, name: "Cerveja Heineken 350ml", sold: 19, stock: 17, price: 105.0 },
  { id: 4, name: "Vinho Português Tinto 750ml", sold: 15, stock: 8, price: 89.0 },
  { id: 5, name: "Gin Tanqueray 750ml", sold: 12, stock: 6, price: 129.0 },
]

export function TopProducts() {
  return (
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
          {products.map((product) => (
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
  )
}

