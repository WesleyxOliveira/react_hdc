import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const people = [
    { name: 'Wesley', age: 33, profession: 'Programmer' },
    { name: 'Juliana', age: 16, profession: 'Student' },
    { name: 'João', age: 45, profession: 'Electrician' },
    { name: 'Márcia', age: 14, profession: 'Student' }
  ]

  return (
    <>
      {
        people.map((person, i)=> (
          <UserDetails key={i} name={person.name} age={person.age} profession={person.profession}/>
        ))
      }
    </>
  )
}

export default App
