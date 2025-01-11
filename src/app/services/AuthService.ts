import { httpClient } from '@/app/services/httpClient';

interface ISignUpDTO {
  name: string;
  email: string;
  password: string;
  adega: {
    name: string;
    city: string;
    neighborhood: string;
    zipCode: string;
    state: string;
    phone: string;
    role?: string;
  };
}

interface ISigInDTO {
  email: string;
  password: string;
}

interface IsSigninResponse {
  acessToken: string;
}

export class AuthService {
  static async signUp({ email, password, adega, name }: ISignUpDTO) {
    const { data } = await httpClient.post('/administrative/users', {
      name,
      email,
      password,
      adega,
    });

    return data;
  }

  static async signIn({ email, password }: ISigInDTO) {
    const { data } = await httpClient.post<IsSigninResponse>('/auth/login', {
      email,
      password,
    });

    return data;
  }
}
