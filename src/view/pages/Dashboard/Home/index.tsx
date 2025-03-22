
import { useGetTotalFinacial } from "@/app/hooks/financial/useGetTotalFinancial"
import { useGetLatestOrder } from "@/app/hooks/LatestOrder/useGetLatestOrder"
import { Alerts } from "@/view/pages/Dashboard/Home/components/Alerts"
import { CriticalStock } from "@/view/pages/Dashboard/Home/components/CriticalStock"
import { FinancialControl } from "@/view/pages/Dashboard/Home/components/FinancialControl"
import { DashboardHeader } from "@/view/pages/Dashboard/Home/components/Header"
import { MetricsGrid } from "@/view/pages/Dashboard/Home/components/MetricGrid"
import { DateRange, PageHeader } from "@/view/pages/Dashboard/Home/components/PageHeader"
import PeakHoursChart from "@/view/pages/Dashboard/Home/components/PeakHoursChart"
import { SalesPerformance } from "@/view/pages/Dashboard/Home/components/SalesPerformace"
import { StatusCard } from "@/view/pages/Dashboard/Home/components/StatusCard"
import { TopProducts } from "@/view/pages/Dashboard/Home/components/TopProduct"
import { useState } from "react"

export default function Dashboard() {
  const [dateRange, setDateRange] = useState<DateRange>(DateRange.HOJE);
  const {data: financial } = useGetTotalFinacial()
  const {data: latestOrder} = useGetLatestOrder()


  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 space-y-4 p-4 md:p-6">
          <PageHeader dateRange={dateRange} setDateRange={setDateRange} />

          {/* Status em Tempo Real */}
          <StatusCard financialCurrentDay={financial?.day?.financialCurrentDay as number}/>

          {/* Métricas Principais */}
          <MetricsGrid financialCurrentDay={financial?.total?.financialTotal as number} />

          {/* Horários de Pico e Produtos Mais Vendidos */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-10">
            <PeakHoursChart orders={latestOrder} />
            <TopProducts />
            <CriticalStock />
          </div>

          {/* Controle Financeiro e Produtos com Estoque Crítico */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <FinancialControl />
          </div>

          {/* Desempenho de Vendas e Alertas */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <SalesPerformance/>
            <Alerts />
          </div>
        </main>
      </div>
    </div>
  )
}

