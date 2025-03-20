import { Card, CardContent, CardHeader, CardTitle } from "@/view/components/ui/card";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";


const financialData = {
  daily: {
    value: 3245.88,
    percentage: 15,
    trend: "up",
  },
  monthly: {
    value: 32458.8,
    percentage: 18,
    trend: "down",
  },
  profit: {
    value: 1245.88,
    percentage: 8,
    trend: "down",
  },
}




export default function Invoicing(){

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Faturamento Diário</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">
            {financialData.daily.value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <p className="text-xs text-muted-foreground">+{financialData.daily.percentage}% em relação a ontem</p>
        </div>
        <div className={`rounded-full p-2 ${financialData.daily.trend === "up" ? "bg-green-100" : "bg-red-100"}`}>
          {financialData.daily.trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
        </div>
      </div>
    </CardContent>
  </Card>

  )
}
