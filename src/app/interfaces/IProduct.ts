export interface IProductCreate {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  categoryId: string;
  stock: number;
  lowStock: number;
  description?: string;
}

export interface IProductResponse extends IProductCreate {
  quantity: number;
}

export interface IProduct {
  category: {
    name: string;
  };
  stock: {
    quantity: number;
    lowStock: number;
  };
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  lowStock: number;
  description?: string;
}
