// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeContext from "../components/ChangeContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
    const { counter } = useCounterContext();

  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeContext />
    </div>
  )
}

export default Home