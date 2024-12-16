import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg';
import ManageData from './components/ManageData';

function App() {
  return (
    <>
      <h1>Avançando no react</h1>

      {/*Como inserir imagens da pasta public no projeto*/}
      <>
        <img src="/public/img1.jpg" alt="paisagem" />
      </>

      {/*Como importar imagens da pasta src */}
      <>
      <img src={City} alt="Cidade" />
      </>     

      <ManageData />
    </>
  )
}

export default App
