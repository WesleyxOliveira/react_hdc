import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1>Context</h1>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
