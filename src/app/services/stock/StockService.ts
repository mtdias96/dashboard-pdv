import { IProductResponse } from '@/app/interfaces/IProduct';
import { httpClient } from '@/app/services/httpClient';

export class StockService {
  static async getLowStock(): Promise<IProductResponse[]> {
    const { data } = await httpClient.get<IProductResponse[]>('/stock/low');

    return data;
  }
}
