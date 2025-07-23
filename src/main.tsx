import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { element } from './router/Routes.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={element} />
  </StrictMode>,
);
