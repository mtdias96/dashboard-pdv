
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { ArrowRight, ArrowUp, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface MetricCardProps {
  title: string,
  value: string | number,
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  children?: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  children,
  actionLabel = "Ver detalhes",
  onAction,
}: MetricCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className={`flex items-center text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
            <ArrowUp className="mr-1 h-4 w-4" />
            <span>{trend.value}</span>
          </div>
        )}
        {children}
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" size="sm" className="w-full justify-between" onClick={onAction}>
          <span>{actionLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

