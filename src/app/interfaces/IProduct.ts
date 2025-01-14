export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  image: File;
  categoryId: string;
  stock: number;
  description?: string;
}
