import { storageKeys } from '@/app/config/storageKeys';
import { AuthService } from '@/app/services/AuthService';
import { createContext, useCallback, useState } from 'react';

interface IAuthContextValue {
  signedIn: boolean;
  signIn(email: string, password: string): Promise<void>;
  signout(): void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem('myDega:accessToken');
  });

  const signIn = useCallback(async (email: string, password: string) => {
    const { acessToken } = await AuthService.signIn({ email, password });

    localStorage.setItem('myDega:accessToken', acessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(storageKeys.accesToken);
    setSignedIn(false);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    signIn,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
