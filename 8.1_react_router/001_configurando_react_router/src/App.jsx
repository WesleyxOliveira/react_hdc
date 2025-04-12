import './App.css'

// 1 - config react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
])

function App() {
  return (
    
    <>
      <h1>React Router</h1>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
