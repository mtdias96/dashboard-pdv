import { IProduct, IProductCreate } from '@/app/interfaces/IProduct';
import { httpClient } from '@/app/services/httpClient';

export class ProductService {
  static async getProducts(): Promise<IProduct[]> {
    const { data } = await httpClient.get<IProduct[]>('/product');

    return data;
  }

  static async getSearchProduct(search: string): Promise<IProduct[]> {
    const { data } = await httpClient.get<IProduct[]>(
      `product/search/${search}`,
    );

    return data;
  }

  static async createProduct(product: IProductCreate): Promise<void> {
    await httpClient.post('/product/create', product);
  }

  static async editProduct(
    productId: string,
    product: IProductCreate,
  ): Promise<void> {
    await httpClient.put(`product/edit/${productId}`, product);
  }

  static async deleteProduct(productId: string): Promise<void> {
    await httpClient.delete(`product/${productId}`);
  }
}
