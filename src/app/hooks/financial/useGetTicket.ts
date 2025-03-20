import { FinancialService } from '@/app/services/finantials/FinancialService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export type ITicketResponse = {
  averageTicket: string;
  salesByCategory: {
    category: string;
    totalSales: string;
  }[];
};

export function useGetTicket(): UseQueryResult<ITicketResponse> {
  return useQuery<ITicketResponse>({
    queryKey: ['ticket'],
    queryFn: async () => {
      const response = await FinancialService.getTotalTicket();
      if (!response) {
        throw new Error('Failed to fetch products');
      }
      return response;
    },
  });
}
