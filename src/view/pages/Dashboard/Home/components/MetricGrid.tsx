
import { useGetTicket } from "@/app/hooks/financial/useGetTicket"
import { useGetSalesCategory } from "@/app/hooks/sales/useGetSalesCategory"
import { useGetStockLow } from "@/app/hooks/stock/useStockLow"
import { fCurrency } from "@/app/utils/formatNumber"
import { Progress } from "@/view/components/ui/progress"
import { DollarSign, Package, PieChart, ShoppingCart } from "lucide-react"
import { MetricCard } from "./MetricCard"

export function MetricsGrid({ financialCurrentDay }: { financialCurrentDay: number }) {
  const financialCurrent = fCurrency(financialCurrentDay)
  const { data: productLowStock } = useGetStockLow()
  const { data: totalTicket } = useGetTicket()
  const {data: salesCategory} = useGetSalesCategory()

  const outOfStock = productLowStock?.filter(p => p.quantity < 1);
  const criticalStock = productLowStock?.filter(p => p.quantity >= 1)
  const colors = ["bg-primary", "bg-blue-500", "bg-yellow-500"];

const topCategories = Object.entries(salesCategory?.percentageByCategory ?? {})
  .sort(([, percA], [, percB]) => percB - percA)
  .slice(0, 3);


  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Faturamento Diário"
        value={financialCurrent}
        icon={DollarSign}
        trend={{
          value: "+15% em relação a ontem",
          isPositive: true,
        }}
      >
        <div className="mt-4">
          <Progress value={75} className="h-2" />
        </div>
      </MetricCard>

      <MetricCard title="Alertas de Estoque" value={String(productLowStock?.length || 0)} icon={Package}>
        <p className="text-xs text-muted-foreground">Produtos com estoque baixo</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
            <span className="text-sm">Sem estoque: {outOfStock?.length}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="text-sm">Estoque crítico: {criticalStock?.length}</span>
          </div>
        </div>
      </MetricCard>

      <MetricCard
        title="Ticket Médio"
        value={fCurrency(Number(totalTicket?.averageTicket))}
        icon={ShoppingCart}
        trend={{
          value: "+5% em relação a ontem",
          isPositive: true,
        }}
      >
        <div className="mt-4 space-y-1">
          {totalTicket?.salesByCategory.map(t => (
            <div key={t.category} className="flex items-center justify-between text-sm">
              <span>{t?.category}</span>
              <span>{fCurrency(Number(t.totalSales))}</span>
            </div>
          ))}
        </div>
      </MetricCard>

      <MetricCard title="Vendas por Categoria" value={(salesCategory?.totalSales) || 0 } icon={PieChart}>
        <p className="text-xs text-muted-foreground">Vendas totais hoje</p>
        <div className="mt-4 space-y-2">
    {topCategories.map(([category, percentage], index) => (
      <div key={category} className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`mr-2 h-2 w-2 rounded-full ${colors[index]}`}></div>
          <span className="text-sm">{category}</span>
        </div>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
    ))}
  </div>
      </MetricCard>
    </div>
  )
}

