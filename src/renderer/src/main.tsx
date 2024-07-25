import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import App from './App'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider>
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
)
