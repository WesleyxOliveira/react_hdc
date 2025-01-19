import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      {/*Criação de Form */}
      <h2>Forms</h2>
      <MyForm user={{name:'Wesley', email: 'xiz@gmail.com', bio: 'Eu sou programador', role: 'admin'}}/>
    </>
  )
}

export default App
