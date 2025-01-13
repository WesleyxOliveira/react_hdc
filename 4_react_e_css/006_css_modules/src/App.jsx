import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Wesley');
  const [redTitle] = useState(true);

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

      {/*CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>

      <h2 style={name === 'Wesley' ? ({backgroundColor: 'lightblue'}) : null}>Teste nome</h2>

      {/*Classes dinâmicas */}
      <h2 className={redTitle ? 'red' : 'blue'}>Este título vai ter classe dinâmica</h2>

      {/*CSS Modules */}
      <Title />
    </>
  )
}

export default App
