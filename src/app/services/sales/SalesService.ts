import { ITotalSales } from '@/app/hooks/sales/useGetTotalSales';
import { httpClient } from '@/app/services/httpClient';

export class SaleslService {
  static async getTotalSales() {
    const { data } = await httpClient.get<ITotalSales>('/sales/total-sales');

    return data;
  }
}
