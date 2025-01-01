import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
  const name = 'Wesley';
  const [userName] = useState('Joaquim');

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 1300},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km:234},
  ]

  return (
    <>
      <h1>Avançando no react</h1>

      {/*Como inserir imagens da pasta public no projeto*/}
      <>
        <img src="/img1.jpg" alt="paisagem" />
      </>

      {/*Como importar imagens da pasta src */}
      <>
      <img src={City} alt="Cidade" />
      </>     

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*Props */}
      <ShowUserName name={userName}/>
      {/*Destructuring em props */}
      <CarDetails brand="VW" km={100000} color="vermelho" newCar={false}/>
      {/*Reaproveitando componentes */}
      <CarDetails  brand="Ford" km={0} color="branco" newCar={true}/>
      <CarDetails  brand="Fiat" km={50000} color="azul" newCar={false}/>

      {/*Loop em array de objetos */}
      {
        cars.map((car)=> (
          <CarDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
        ))
      }

      {/*Fragment */}
      <Fragment propFragment='Teste'/>
    </>
  )
}

export default App
