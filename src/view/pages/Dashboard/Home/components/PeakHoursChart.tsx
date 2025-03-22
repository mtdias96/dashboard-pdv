"use client"


import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/view/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/view/components/ui/tooltip"
import { Clock, Info, TrendingUp } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

export type Order = {
  reg: number
  createdAt: string
  status: string
  items: Array<{
    quantity: number
    price: number
    product: {
      name: string
    }
  }>
}

export type OrderData = {
  data: Order[]
}

type PeakHoursChartProps = {
  orders?: OrderData[] | OrderData
  className?: string
}

type ChartDimensions = {
  width: number
  height: number
}

type HourlyAnalysis = {
  hourlyDistribution: number[]
  totalOrders: number
  allHourCounts: number[]
}

const TIME_PERIODS = [
  { name: "Manhã/Tarde", startHour: 6, length: 12, icon: "☀️" },
  { name: "Noite", startHour: 18, length: 12, icon: "🌙" },
]

export default function PeakHoursChart({ orders = [] }: PeakHoursChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartDimensions, setChartDimensions] = useState<ChartDimensions>({ width: 0, height: 0 })
  const [activePeriod, setActivePeriod] = useState<string>(TIME_PERIODS[0].name)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  const currentPeriodIndex = TIME_PERIODS.findIndex((period) => period.name === activePeriod)

  const { hourlyDistribution, totalOrders, allHourCounts } = useMemo<HourlyAnalysis>(() => {
    const hourCounts = Array(24).fill(0)

    const orderItems = Array.isArray(orders)
      ? orders.length > 0 && "data" in orders[0]
        ? orders[0].data
        : []
      : "data" in orders
        ? orders.data
        : []

    orderItems.forEach((item) => {
      const orderDate = new Date(item.createdAt)
      const hour = orderDate.getHours()
      hourCounts[hour]++
    })

    const maxCount = Math.max(...hourCounts)

    const maxHeight = maxCount > 0 ? maxCount : 1
    const hourlyDistribution = hourCounts.map((count) => Math.max(5, Math.round((count / maxHeight) * 100)))

    const totalOrders = orderItems.length

    return {
      hourlyDistribution,
      totalOrders,
      allHourCounts: hourCounts,
    }
  }, [orders])

  const businessHours = useMemo(() => {
    const currentPeriod = TIME_PERIODS[currentPeriodIndex]
    return Array.from({ length: currentPeriod.length }, (_, i) => (currentPeriod.startHour + i) % 24)
  }, [currentPeriodIndex])

  const currentPeriodPeak = useMemo(() => {
    const currentPeriodHours = businessHours

    let maxCount = 0
    let peakHour = -1

    currentPeriodHours.forEach(hour => {
      if (allHourCounts[hour] > maxCount) {
        maxCount = allHourCounts[hour]
        peakHour = hour
      }
    })

    if (peakHour === -1) {
      return { hour: "Não disponível", count: 0 }
    }

    return {
      hour: formatHour(peakHour),
      count: maxCount
    }
  }, [businessHours, allHourCounts])

  function formatHour(hour: number): string {
    return `${hour.toString().padStart(2, "0")}:00`
  }

  useEffect(() => {
    if (!chartRef.current) return

    const updateDimensions = () => {
      if (chartRef.current) {
        setChartDimensions({
          width: chartRef.current.clientWidth,
          height: chartRef.current.clientHeight,
        })
      }
    }

    updateDimensions()

    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(chartRef.current)

    return () => {
      if (chartRef.current) {
        resizeObserver.unobserve(chartRef.current)
      }
    }
  }, [])

  const linePoints = useMemo(() => {
    if (chartDimensions.width === 0 || chartDimensions.height === 0) return ""

    const barWidth = chartDimensions.width / businessHours.length
    const barSpacing = barWidth * 0.2
    const adjustedBarWidth = barWidth - barSpacing

    return businessHours
      .map((hour, index) => {
        const x = index * barWidth + adjustedBarWidth / 2
        const heightPercentage = hourlyDistribution[hour]
        const y = chartDimensions.height - (chartDimensions.height * heightPercentage) / 100
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }, [businessHours, hourlyDistribution, chartDimensions])
 // Get actual order count for a specific hour
  const getOrderCountForHour = (hour: number): number => {
    const orderItems = Array.isArray(orders)
      ? orders.length > 0 && "data" in orders[0]
        ? orders[0].data
        : []
      : "data" in orders
        ? orders.data
        : []

    return orderItems.filter((item) => {
      const orderDate = new Date(item.createdAt)
      return orderDate.getHours() === hour
    }).length
  }

  return (
    <Card className="lg:col-span-4 ">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Horários de Pico
            </CardTitle>
            <CardDescription>Análise de movimento por hora do dia</CardDescription>
          </div>

          <Tabs value={activePeriod} onValueChange={setActivePeriod} className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-2">
              {TIME_PERIODS.map((period) => (
                <TabsTrigger key={period.name} value={period.name} className="flex items-center gap-1">
                  <span className="hidden sm:inline">{period.icon}</span> {period.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full relative" ref={chartRef}>
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>

          <div className="absolute left-6 right-0 top-0 h-full">
            <div className="border-t border-dashed border-muted h-0 absolute top-0 w-full"></div>
            <div className="border-t border-dashed border-muted h-0 absolute top-1/2 w-full"></div>
            <div className="border-t border-dashed border-muted h-0 absolute bottom-0 w-full"></div>
          </div>

          <div className="flex h-full items-end gap-1 pl-6">
            {businessHours.map((hour, i) => {
              const heightPercentage = hourlyDistribution[hour]
              const isPeak = heightPercentage === 100
              const orderCount = getOrderCountForHour(hour)
              const percentage = totalOrders > 0 ? Math.round((orderCount / totalOrders) * 100) : 0

              return (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="relative flex w-full flex-col items-center group"
                        onMouseEnter={() => setHoveredBar(hour)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        <div
                          className={`w-full rounded-sm transition-all duration-200 ${
                            hoveredBar === hour ? "bg-primary" : isPeak ? "bg-primary" : "bg-primary/60"
                          } ${heightPercentage < 10 ? "min-h-[10px]" : ""}`}
                          style={{ height: `${heightPercentage}%` }}
                          aria-label={`${orderCount} pedidos às ${formatHour(hour)}`}
                        />
                        <span className="mt-2 text-xs text-muted-foreground">{formatHour(hour)}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-background border shadow-lg p-2">
                      <div className="text-sm font-medium">{formatHour(hour)}</div>
                      <div className="text-xs text-muted-foreground">
                        {orderCount} pedidos ({percentage}% do total)
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>

          <svg
            className="absolute bottom-2 left-6 right-0 w-[calc(100%-2px)] h-full pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <path
              d={linePoints}
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="5,5"
            />

            {businessHours.map((hour, i) => {
              const barWidth = (chartDimensions.width - 24) / businessHours.length
              const barSpacing = barWidth * 0.2
              const adjustedBarWidth = barWidth - barSpacing
              const x = i * barWidth + adjustedBarWidth / 2

              const heightPercentage = hourlyDistribution[hour]
              const y = chartDimensions.height - (chartDimensions.height * heightPercentage) / 100

              const isPeak = heightPercentage === 100

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={isPeak ? 5 : 3}
                  fill={isPeak ? "hsl(var(--destructive))" : "white"}
                  stroke="hsl(var(--destructive))"
                  strokeWidth="2"
                />
              )
            })}
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Horário mais movimentado:</span>
            </div>
            <Badge variant="secondary" className="text-sm font-medium">
              {currentPeriodPeak.hour || "Não disponível"}
            </Badge>
          </div>

          <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Pedidos no pico:</span>
            </div>
            <Badge variant="secondary" className="text-sm font-medium">
              {currentPeriodPeak.count > 0 ? `${currentPeriodPeak.count} pedidos` : "Não disponível"}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button variant="outline" size="sm" className="w-full group">
          Ver análise completa
          <Info className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </Button>
      </CardFooter>
    </Card>
  )
}

