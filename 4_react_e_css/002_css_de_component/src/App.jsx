import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*CSS GLOBAL */}
      <h1>React com css</h1>

      {/*CSS de Component */}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
    </>
  )
}

export default App
