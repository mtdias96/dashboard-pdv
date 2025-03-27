import { useGetBestSellerProduct } from "@/app/hooks/sales/useGetBestSaller"
import { fCurrency } from "@/app/utils/formatNumber"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Separator } from "@/view/components/ui/separator"
import { Download } from "lucide-react"

export function TopProducts() {
  const {data: bestSellerProduct} = useGetBestSellerProduct()

  return (
    <Card className="lg:col-span-3 max-w-[500px] flex flex-col">
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Produtos Mais Vendidos</CardTitle>
          <CardDescription>Top produtos por volume de vendas</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bestSellerProduct?.map((product) => (
            <div key={product.productId} className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden ">
               <img src={`${import.meta.env.VITE_API_URL}${product.imageUrl}`} alt={product.name} className=" object-cover" />
              </div>
              <div className="ml-4 flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{product.name}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Vendidos: {product.count}</span>
                  <Separator orientation="vertical" className="mx-2 h-3" />
                  {/* <span>Em estoque: {product.stock}</span> */}
                </div>
              </div>
              <div className="font-medium">R$ {fCurrency(product.price)}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-end border-t p-4 mt-auto ">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Exportar lista
        </Button>
        <Button size="sm">Gerenciar venda</Button>
      </CardFooter>
    </Card>
  )
}

