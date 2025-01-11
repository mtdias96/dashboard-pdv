import { AuthContext } from '@/app/contexts/AuthContext';
import { useContext } from 'react';

export function useAuth() {
  return useContext(AuthContext);
}
