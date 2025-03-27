import { Button } from "@/view/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/view/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/view/components/ui/form"
import { Input } from "@/view/components/ui/input"
import { ScrollArea } from "@/view/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/view/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Banknote, CreditCard, Minus, Plus, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useAddNewSale } from "@/app/hooks/financial/useAddNewSale"
import { useGetProducts } from "@/app/hooks/product/useGetProduct"
import pix from '@/assets/svg/pix.svg'

// PIX Icon component
const PixIcon = () => (
  <img className="h-4 w-4 mr-2" src={pix} alt="" />
)

const formSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string(),
        quantity: z.number().min(1),
        name: z.string(),
        price: z.number(),
        imageUrl: z.string(),
      }),
    )
    .min(1, "Selecione pelo menos um produto"),
  paymentMethod: z.enum(["PIX", "DEBITO", "DINHEIRO"], {
    required_error: "Selecione um método de pagamento",
  }),
})

type FormValues = z.infer<typeof formSchema>


export default function SalesModal() {
  const {data} = useGetProducts()
  const {addSale} = useAddNewSale()
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItems, setSelectedItems] = useState<
    Array<{
      productId: string
      quantity: number
      name: string
      price: number
      imageUrl: string
    }>
  >([])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [],
      paymentMethod: undefined,
    },
  })

  const addProduct = (product: { id: string; name: string; price: number; imageUrl: string }) => {
    const existingItem = selectedItems.find((item) => item.productId === product.id)

    if (existingItem) {

      setSelectedItems(
        selectedItems.map((item) => (item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
      )
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          productId: product.id,
          quantity: 1,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
        },
      ])
    }
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setSelectedItems(
      selectedItems.map((item) => (item.productId === productId ? { ...item, quantity: newQuantity } : item)),
    )
  }

  const removeProduct = (productId: string) => {
    setSelectedItems(selectedItems.filter((item) => item.productId !== productId))
  }

  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleSubmit = form.handleSubmit((data ) => {
      const saleProduct = {
       items: data.items.map(item => ({
        quantity: item.quantity,
        productId: item.productId
      })),
      }

      addSale(saleProduct)
      setSelectedItems([]);
      form.reset();
    });

  useEffect(() => {
    form.setValue("items", selectedItems)
  }, [selectedItems, form])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-[38px]">
        <Plus className="mr-2 h-4 w-4" />
          Nova Venda</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form  onSubmit={handleSubmit}>
            <DialogHeader>

              <DialogTitle>Nova Venda</DialogTitle>
              <DialogDescription>Adicione produtos e finalize a venda.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative text-center">
                <Search className="absolute left-2.5 top-[19px] h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="border rounded-md">
                <ScrollArea className="h-[200px] w-full">
                  <div className="p-4 grid gap-2">
                    {data ? (
                      data.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer"
                          onClick={() => addProduct(product)}
                        >
                          <div className="flex items-center gap-3">
                            <img src={`${import.meta.env.VITE_API_URL}${product.imageUrl}`} className="w-14 h-14" />
                            <div>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-sm text-muted-foreground">R$ {product.price.toFixed(2)}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">Nenhum produto encontrado</div>
                    )}
                  </div>
                </ScrollArea>
              </div>

              {selectedItems.length > 0 && (
                <div className="border rounded-md p-4 space-y-2">
                  <h3 className="font-medium">Itens Selecionados</h3>
                  <ScrollArea className="h-[100px] w-full">
                  {selectedItems.map((item) => (
                    <div key={item.productId} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                      <img src={`${import.meta.env.VITE_API_URL}${item.imageUrl}`} className="w-10 h-10" />
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-sm text-muted-foreground">R$ {item.price.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeProduct(item.productId)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  </ScrollArea>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold">R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Método de Pagamento</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o método de pagamento">
                            {field.value && (
                              <div className="flex items-center">
                                {field.value === "PIX" && <PixIcon />}
                                {field.value === "DEBITO" && <CreditCard className="mr-2 h-4 w-4" />}
                                {field.value === "DINHEIRO" && <Banknote className="mr-2 h-4 w-4" />}
                                {field.value}
                              </div>
                            )}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PIX">
                          <div className="flex items-center">
                            <PixIcon />
                            PIX
                          </div>
                        </SelectItem>
                        <SelectItem value="DEBITO">
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            DÉBITO
                          </div>
                        </SelectItem>
                        <SelectItem value="CASH">
                          <div className="flex items-center">
                            <Banknote className="mr-2 h-4 w-4" />
                            DINHEIRO
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={selectedItems.length === 0 || !form.getValues().paymentMethod}>
                Finalizar Venda
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

