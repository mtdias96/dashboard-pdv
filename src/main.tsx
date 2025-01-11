import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/index.css';

import { AuthProvider } from '@/app/contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AuthProvider>,
);
