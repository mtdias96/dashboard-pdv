"use client"

import SalesModal from "@/view/components/models/AddSaleModal"
import { Tabs, TabsList, TabsTrigger } from "@/view/components/ui/tabs"

export enum DateRange {
  HOJE = "hoje",
  SEMANA = "semana",
  MES = "mes",
}

interface PageHeaderProps {
  dateRange: DateRange
  setDateRange: (value: DateRange) => void
}


export function PageHeader({ dateRange, setDateRange }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Última atualização: {new Date().toLocaleTimeString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <Tabs defaultValue={dateRange} onValueChange={(v) => setDateRange(v as DateRange)} className="hidden sm:block">
          <TabsList>
            <TabsTrigger value="hoje">Hoje</TabsTrigger>
            <TabsTrigger value="semana">Semana</TabsTrigger>
            <TabsTrigger value="mes">Mês</TabsTrigger>
          </TabsList>
        </Tabs>
        <SalesModal/>
      </div>
    </div>
  )
}

