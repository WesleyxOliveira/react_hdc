import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [carDetails] = useState([
    {id: 1, brand: 'Fiat', model: 'Strada', color: 'Branca'},
    {id: 2, brand: 'VW', model: 'GOL', color: 'Vermelho'},
    {id: 3, brand: 'BYD', model: 'Dolphin', color: 'Cinza'},
    {id: 4, brand: 'Ford', model: 'Focus', color: 'Preto'},
  ])

  return (
    <>
      {
        carDetails.map((car)=> (
          <CarDetails key={car.id} brand={car.brand} model={car.model} color={car.color}/>
        ))
      }
    </>
  )
}

export default App
