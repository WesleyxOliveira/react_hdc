import React from 'react'
import { Link } from 'react-router-dom';

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
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default product