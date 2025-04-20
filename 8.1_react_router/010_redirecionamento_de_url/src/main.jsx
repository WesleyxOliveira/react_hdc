import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// pages
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Product from './routes/Product.jsx'
import Info from './routes/Info.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      // 6 - nested routes
      {
        path: '/products/:id/info',
        element: <Info />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/company',
        element: <Navigate to='/About' />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
