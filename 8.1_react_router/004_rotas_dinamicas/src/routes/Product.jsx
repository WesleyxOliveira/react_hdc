import React from 'react'

import { useParams } from 'react-router-dom'



const product = () => {
  // 4 - rota dinamica
  const { id } = useParams();

  return (
    <div>
      <p>Id do produto: {id}</p>
    </div>
  )
}

export default product