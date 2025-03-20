import { Badge } from "@/view/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface StatusMetricItemProps {
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
  title: string
  value: ReactNode
  badge?: {
    text: string
    variant?: "default" | "secondary" | "destructive" | "outline"
  }
}

export function StatusMetricItem({ icon: Icon, iconColor, iconBgColor, title, value, badge }: StatusMetricItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">{value}</p>
          {badge && (
            <Badge variant={badge.variant || "outline"} className="text-xs">
              {badge.text}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

