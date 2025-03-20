import { ISubmitNewSale } from '@/app/hooks/financial/useAddNewSale';
import { ITicketResponse } from '@/app/hooks/financial/useGetTicket';
import { IFinancial } from '@/app/interfaces/financial';
import { httpClient } from '@/app/services/httpClient';

export class FinancialService {
  static async getTotalFinantials(
    include: string[] = ['day', 'week', 'month', 'total'],
  ) {
    const { data } = await httpClient.get<IFinancial>('financial', {
      params: { include },
    });

    return data;
  }

  static async getCurrentDayFinantial() {
    const { data } = await httpClient.get<IFinancial>('financial/current-day');

    return data;
  }

  static async addNewSale(data: ISubmitNewSale) {
    await httpClient.post<ISubmitNewSale>('/orders', data);
  }

  static async getTotalTicket() {
    const { data } = await httpClient.get<ITicketResponse>(
      '/financial/averageTicket',
    );

    return data;
  }
}
