import { storageKeys } from '@/app/config/storageKeys';
import { ICategory } from '@/app/interfaces/ICategory';
import { httpClient } from '@/app/services/httpClient';

export class CategoriesService {
  static async getCategories() {
    const accessToken = localStorage.getItem(storageKeys.accesToken);
    const { data } = await httpClient.get<ICategory[]>('categories', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }
}
