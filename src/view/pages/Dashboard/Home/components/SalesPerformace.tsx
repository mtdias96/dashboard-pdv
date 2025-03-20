
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card";

export function SalesPerformance() {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Desempenho de Vendas</CardTitle>
        <CardDescription>Comparativo de vendas nos últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[200px] w-full">
          <div className="flex h-full items-end gap-2 pb-4">
            {[40, 30, 70, 50, 90, 80, 100].map((height, i) => (
              <div key={i} className="relative flex w-full flex-col items-center">
                <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }} />
                <span className="mt-2 text-xs text-muted-foreground">
                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-sm font-medium">Total da semana</div>
          <div className="text-lg font-bold">R$ 18.750,25</div>
        </div>
      </CardFooter>
    </Card>
  )
}

