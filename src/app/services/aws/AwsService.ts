import { httpClient } from '@/app/services/httpClient';
import axios from 'axios';

export class AwsService {
  static async getPresignedURL(file: File) {
    const { data } = await httpClient.post<{
      fileUrl: string;
      imageKey: string;
    }>(`${import.meta.env.VITE_API_URL}/aws/get-presigned-url`, {
      fileName: file.name,
    });

    console.log(data);
    return data;
  }

  static async uploadFile(url: string, file: File) {
    await axios.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
  }
}
