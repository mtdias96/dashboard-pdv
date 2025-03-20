import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"

export function PeakHoursChart() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Horários de Pico</CardTitle>
        <CardDescription>Análise de movimento por hora do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <div className="flex h-full items-end gap-1">
            {[10, 15, 20, 35, 60, 90, 75, 45, 30, 20, 15, 10].map((height, i) => (
              <div key={i} className="relative flex w-full flex-col items-center">
                <div
                  className={`w-full rounded-sm ${height > 70 ? "bg-primary" : "bg-primary/60"}`}
                  style={{ height: `${height}%` }}
                />
                <span className="mt-2 text-xs text-muted-foreground">
                  {`${(i + 10) % 12 || 12}${i + 10 < 12 || i + 10 > 21 ? "am" : "pm"}`}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium">Horário mais movimentado:</div>
          <Badge>18h - 20h</Badge>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button variant="outline" size="sm" className="w-full">
          Ver análise completa
        </Button>
      </CardFooter>
    </Card>
  )
}

