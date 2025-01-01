import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = 'Wesley';
  const [userName] = useState('Joaquim');

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
      <ListRender />
      <ConditionalRender />
      {/*Props */}
      <ShowUserName name={userName}/>
      {/*Destructuring em props */}
      <CarDetails brand="VW" km={100000} color="vermelho" newCar={false}/>
      {/*Reaproveitando componentes */}
      <CarDetails  brand="Ford" km={0} color="branco" newCar={true}/>
      <CarDetails  brand="Fiat" km={50000} color="azul" newCar={false}/>
    </>
  )
}

export default App
