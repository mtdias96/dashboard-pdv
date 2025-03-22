import { ITotalSales } from '@/app/hooks/sales/useGetTotalSales';
import { IBestSales, ISalesResponse } from '@/app/interfaces/ISales';
import { httpClient } from '@/app/services/httpClient';

export class SaleslService {
  static async getTotalSales() {
    const { data } = await httpClient.get<ITotalSales>('/sales/total-sales');

    return data;
  }

  static async getSalesToCategory() {
    const { data } = await httpClient.get<ISalesResponse>(
      '/sales/sales-category',
    );

    return data;
  }

  static async getBestSellingProducts() {
    const { data } = await httpClient.get<IBestSales[]>('/sales/best-seller');

    return data;
  }
}
