import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/font.css'
import './styles/boilerplate.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
