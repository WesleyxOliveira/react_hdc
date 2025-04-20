import './App.css'
import { Outlet } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Navbar />
      {/* 9 - search */}
      <SearchForm />
      <Outlet />
    </div>
  )
}

export default App
