import { useState } from 'react'
import './App.css'

//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
    </>
  )
}

export default App
