interface Product {
  name: string;
}

interface OrderItem {
  quantity: number;
  price: number;
  product: Product;
}

interface Order {
  reg: number;
  createdAt: string;
  status: string;
  items: OrderItem[];
}

export interface ILatestOrder {
  data: Order[];
}
