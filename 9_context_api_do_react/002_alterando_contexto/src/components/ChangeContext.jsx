
// 3 - alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

const ChangeContext = () => {

    const { counter, setCounter } = useContext(CounterContext);

    return (
        <button onClick={(e)=> setCounter(counter +1)}>Adicionar</button>
    )
}

export default ChangeContext