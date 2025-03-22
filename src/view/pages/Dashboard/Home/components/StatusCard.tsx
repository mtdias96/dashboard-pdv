import { useGetProducts } from "@/app/hooks/product/useGetProduct"
import { useGetTotalSales } from "@/app/hooks/sales/useGetTotalSales"
import { fCurrency } from "@/app/utils/formatNumber"
import { Badge } from "@/view/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/view/components/ui/card"
import { StatusMetricItem } from "@/view/pages/Dashboard/Home/components/StatusMetricItem"
import { AlertTriangle, DollarSign, Package, ShoppingCart } from "lucide-react"

interface StatusCardProps {
  financialCurrentDay: number
}

export function StatusCard({ financialCurrentDay }: StatusCardProps) {
  const {data: products} = useGetProducts()
  const {data} = useGetTotalSales()

  return (
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
          <StatusMetricItem
            icon={DollarSign}
            iconColor="text-primary"
            iconBgColor="bg-primary/10"
            title="Faturamento Hoje"
            value={fCurrency(financialCurrentDay)}
          />

          <StatusMetricItem
            icon={ShoppingCart}
            iconColor="text-blue-500"
            iconBgColor="bg-blue-100"
            title="Total de Vendas"
            value={data?.total}
            // badge={{
            //   text: "+8% vs semana anterior",
            //   variant: "outline",
            // }}
          />

          <StatusMetricItem
            icon={Package}
            iconColor="text-green-500"
            iconBgColor="bg-green-100"
            title="Produtos Cadastrados"
            value={products?.length}
          />

          <StatusMetricItem
            icon={AlertTriangle}
            iconColor="text-amber-500"
            iconBgColor="bg-amber-100"
            title="Alertas Pendentes"
            value="0"
          />
        </div>
      </CardContent>
    </Card>
  )
}

