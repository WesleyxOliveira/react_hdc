import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// - Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   }, 
//   {
//     path: 'Contact',
//     element: <Contact />
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // 3 - página de erroe
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
