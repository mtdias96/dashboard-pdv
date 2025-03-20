import { Badge } from "@/view/components/ui/badge"
import { Button } from "@/view/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/view/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/view/components/ui/table"
import { Download } from "lucide-react"

const transactions = [
  { id: 1, description: "Venda #P0023", type: "entrada", time: "14:35", value: 250.0 },
  { id: 2, description: "Pagamento Fornecedor", type: "saída", time: "13:20", value: 450.0 },
  { id: 3, description: "Venda #P0022", type: "entrada", time: "12:45", value: 180.5 },
  { id: 4, description: "Venda #P0021", type: "entrada", time: "11:30", value: 320.25 },
  { id: 5, description: "Reposição de Caixa", type: "saída", time: "10:15", value: 245.5 },
]

export function FinancialControl() {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Controle Financeiro</CardTitle>
        <CardDescription>Resumo das transações financeiras do dia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm text-muted-foreground">Entradas</div>
              <div className="mt-1 text-xl font-bold text-green-600">R$ 3.250,75</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm text-muted-foreground">Saídas</div>
              <div className="mt-1 text-xl font-bold text-red-600">R$ 695,50</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm text-muted-foreground">Saldo</div>
              <div className="mt-1 text-xl font-bold">R$ 2.555,25</div>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <Badge
                        variant={transaction.type === "entrada" ? "outline" : "destructive"}
                        className={
                          transaction.type === "entrada"
                            ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                            : ""
                        }
                      >
                        {transaction.type === "entrada" ? "Entrada" : "Saída"}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell
                      className={`text-right ${transaction.type === "entrada" ? "text-green-600" : "text-red-600"}`}
                    >
                      {transaction.type === "entrada" ? "+" : "-"}
                      R$ {transaction.value.toFixed(2).replace(".", ",")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Exportar relatório
        </Button>
        <Button size="sm">Fechamento de caixa</Button>
      </CardFooter>
    </Card>
  )
}

