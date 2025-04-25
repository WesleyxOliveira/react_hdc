import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeContext from "../components/ChangeContext";

const Home = () => {
    const {counter} = useContext(CounterContext);

  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeContext />
    </div>
  )
}

export default Home