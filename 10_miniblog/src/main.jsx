import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

// context
import { AuthProvider, useAuthValue } from './context/AuthContext.jsx'

// pages
import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Login from './routes/Login/Login.jsx'
import Register from './routes/Register/Register.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import CreatePost from './routes/CreatePost/CreatePost.jsx'
import Search from './routes/Search/Search.jsx'

// router config
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/posts/create',
        element: <CreatePost />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/search',
        element: <Search />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
