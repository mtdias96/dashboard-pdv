import { useGetProducts } from "@/app/hooks/product/useGetProduct"
import { Card, CardContent, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Progress } from "@/view/components/ui/progress"
import { AlertTriangle } from "lucide-react"

interface StockItem {
  id: string
  name: string
  stock: {
    quantity: number
    lowStock: number
  }
  imageUrl?: string | undefined
}

const baseURL = "http://localhost:8080/"

function StockItem({ item }: { item: StockItem }) {

  const calculatePercentage = (quantity: number, lowStock: number) => {
    if (lowStock === 0) return quantity > 0 ? 100 : 0

    const idealStock = lowStock * 2
    const percentage = Math.min(Math.round((quantity / idealStock) * 100), 100)
    return percentage
  }

  const getStockStatus = (stock: number, lowStock: number) => {
    if (stock === 0) return "danger"
    if (stock <= lowStock / 2) return "danger"
    if (stock <= lowStock) return "warning"
    return "success"
  }

  const status = getStockStatus(item.stock.quantity, item.stock.lowStock)
  const statusColors = {
    over: "text-zinc-300",
    danger: "text-red-500",
    warning: "text-yellow-500",
    success: "text-green-500",
  }

  const percentage = calculatePercentage(item.stock.quantity, item.stock.lowStock)
  const isOutOfStock = item.stock.quantity === 0

  return (
    <div
      className={`flex items-center gap-4 py-4 px-2 rounded-lg bg-card hover:bg-accent/50 transition-colors ${isOutOfStock ? "opacity-70" : ""}`}
    >
      <div className="relative">
        <img
          src={`${baseURL}${item.imageUrl}`}
          alt={item.name}
          className={`w-20 h-20 rounded-md object-cover ${isOutOfStock ? "grayscale" : ""}`}
        />
        {status !== "success" && (
          <AlertTriangle className={`absolute -top-2 -right-2 w-5 h-5 ${statusColors[status]}`} />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className={`font-medium ${isOutOfStock ? "line-through text-muted-foreground" : ""}`}>{item.name}</h3>
          <span className={`${statusColors[status]} font-medium`}>{percentage}%</span>
        </div>
        <Progress
          value={percentage}
          className={`h-2 ${
            isOutOfStock
              ? "bg-zinc-200 [&>div]:bg-zinc-400"
              : status === "danger"
                ? "bg-red-100 [&>div]:bg-red-500"
                : status === "warning"
                  ? "bg-yellow-100 [&>div]:bg-yellow-500"
                  : "bg-green-100 [&>div]:bg-green-500"
          }`}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span className={isOutOfStock ? "font-medium text-red-500" : ""}>
            {isOutOfStock ? "Sem estoque" : `Estoque: ${item.stock.quantity}`}
          </span>
          <span>Estoque mínimo: {item.stock.lowStock}</span>
        </div>
      </div>
    </div>
  )
}

export default function StockControlCard() {
  const { data } = useGetProducts()

const sortStockItems = (a: StockItem, b: StockItem): number => {
  const { quantity: qa, lowStock: la } = a.stock;
  const { quantity: qb, lowStock: lb } = b.stock;

  if (qa === 0 && qb !== 0) return -1;
  if (qa !== 0 && qb === 0) return 1;

  return qa / la - qb / lb;
};

const stockItems = data
  ?.filter(({ stock: { quantity, lowStock } }) => quantity <= lowStock)
  ?.sort(sortStockItems);


  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Controle de Estoque</span>
          <span className="text-sm text-muted-foreground font-normal">- Itens em baixa</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stockItems?.map((item) => (
          <StockItem key={item.id} item={item} />
        ))}
      </CardContent>
    </Card>
  )
}

