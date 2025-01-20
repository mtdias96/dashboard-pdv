export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  image?: File;
  categoryId: string;
  description?: string;
  category: {
    name: string;
  };
  stock: {
    quantity: number;
  };
}
