import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando no react</h1>

      {/*Como inserir imagens da pasta public no projeto*/}
      <>
        <img src="/public/img1.jpg" alt="paisagem" />
      </>
    </>
  )
}

export default App
