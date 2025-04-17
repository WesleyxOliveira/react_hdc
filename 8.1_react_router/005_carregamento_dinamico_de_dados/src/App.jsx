import './App.css'

import { Outlet } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
