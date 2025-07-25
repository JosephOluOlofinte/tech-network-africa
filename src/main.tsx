import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/boilerplate.css';
import './styles/index.css';
import './styles/fonts.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router/Routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
