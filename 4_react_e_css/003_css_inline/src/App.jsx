import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      {/*CSS GLOBAL */}
      <h1>React com css</h1>

      {/*CSS de Component */}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>
      
      {/*Inline CSS */}
      <p style={{color: 'white', padding: '25px', borderTop: '25px solid magenta'}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: 'white', padding: '25px', borderTop: '25px solid magenta'}}>Este elemento foi estilizado de forma inline</p>
    </>
  )
}

export default App
