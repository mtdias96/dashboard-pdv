import { IFinancial } from '@/app/interfaces/financial';
import { FinancialService } from '@/app/services/finantials/FinancialService';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useGetTotalFinacial(
  include: string[] = ['day', 'week', 'month', 'total'],
): UseQueryResult<IFinancial, Error> {
  return useQuery<IFinancial, Error>({
    queryKey: ['financial', include],
    queryFn: async () => {
      const response = await FinancialService.getTotalFinantials(include);
      if (!response) {
        throw new Error('Failed to fetch financial data');
      }
      return response as IFinancial;
    },
  });
}
