import { IProduct } from '@/app/interfaces/IProduct';
import { httpClient } from '@/app/services/httpClient';

export class ProductService {
  static async getProducts(): Promise<IProduct[]> {
    const { data } = await httpClient.get<IProduct[]>('/products');

    return data;
  }

  static async createProduct(product: IProduct): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name || '');
    formData.append('description', product.description || '');
    formData.append('price', product.price?.toString() || '');
    formData.append('stock', product.stock?.toString() || '');
    formData.append('categoryId', product.categoryId || '');

    if (product.image) {
      formData.append('image', product.image);
    }

    await httpClient.post('/products/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async deleteProduct(productId: string): Promise<void> {
    await httpClient.delete(`products/${productId}`);
  }
}
