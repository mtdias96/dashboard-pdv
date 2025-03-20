import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Activity, AlertTriangle, Package, type LucideIcon } from "lucide-react"

interface Alert {
  id: number
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  bgColor: string
  time: string
  action: string
}

const alerts: Alert[] = [
  {
    id: 1,
    title: "Estoque crítico",
    description: "Vinho Argentino Malbec está sem estoque",
    icon: Package,
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
    time: "10 minutos atrás",
    action: "Repor estoque",
  },
  {
    id: 2,
    title: "Vendas abaixo da média",
    description: "As vendas estão 20% abaixo da média para terça-feira",
    icon: Activity,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100",
    time: "30 minutos atrás",
    action: "Ver análise",
  },
  {
    id: 3,
    title: "Produto próximo do vencimento",
    description: "Cerveja Heineken 350ml vence em 7 dias",
    icon: AlertTriangle,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    time: "1 hora atrás",
    action: "Verificar",
  },
]

export function Alerts() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Alertas e Notificações</CardTitle>
        <CardDescription>Situações que requerem sua atenção</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-4 rounded-lg border p-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${alert.bgColor}`}>
                <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{alert.title}</p>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{alert.description}</p>
              </div>
              <Button size="sm" variant="outline">
                {alert.action}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-2">
        <Button variant="ghost" size="sm">
          Ver todos os alertas
        </Button>
      </CardFooter>
    </Card>
  )
}

