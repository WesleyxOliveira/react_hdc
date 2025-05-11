import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div className="container">
        <Navbar />
        <Outlet />
        
      </div>
<Footer />
    </div>
  )
}

export default App
