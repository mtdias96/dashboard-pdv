import { ICategory } from '@/app/interfaces/ICategory';
import { httpClient } from '@/app/services/httpClient';

export class CategoriesService {
  static async getCategories() {
    const { data } = await httpClient.get<ICategory[]>('categories');

    return data;
  }

  static async createCategories(category: ICategory) {
    await httpClient.post<ICategory[]>('categories', category);
  }
}
