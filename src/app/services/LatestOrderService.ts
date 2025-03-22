import { ILatestOrder } from '@/app/interfaces/ILatestOrder';
import { httpClient } from '@/app/services/httpClient';

export class LatestOrderService {
  static async getLatestOrder() {
    const { data } = await httpClient.get<ILatestOrder[]>(
      'orders/latest-orders',
    );

    return data;
  }
}
