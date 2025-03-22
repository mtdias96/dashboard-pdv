export interface ISalesResponse {
  percentageByCategory: Record<string, number>;
  totalSales: number;
}

export interface IBestSales {
  productId: string;
  name: string;
  count: number;
  imageUrl: string;
  price: number;
}
