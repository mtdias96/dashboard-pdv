import { storageKeys } from '@/app/config/storageKeys';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(storageKeys.accesToken);

  if (accessToken) {
    config.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  return config;
});
