import React from 'react'

import { useFetch } from '../hooks/useFetch';

import { useParams } from 'react-router-dom'



const product = () => {
  // 4 - rota dinamica
  const { id } = useParams();

  // 5 - carregamento de dado individual
  const url = 'http://localhost:3000/products/' + id;
  const {data: product, loading, error} = useFetch(url);

  return (
    <div>
      <p>Id do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  )
}

export default product