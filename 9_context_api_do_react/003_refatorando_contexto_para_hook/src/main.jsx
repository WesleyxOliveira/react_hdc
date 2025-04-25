import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1 - config react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 2 - pages
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Products from './routes/Products.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  }
])

import { CounterContextProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
  </StrictMode>,
)
