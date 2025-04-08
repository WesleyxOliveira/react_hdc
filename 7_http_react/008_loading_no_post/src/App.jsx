import { useState, useEffect } from 'react'
import './App.css'

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  const url = 'http://localhost:3000/products';  

  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  // 4 - custom hook
  const { data: items, httpConfig, loading } = useFetch(url);

  // 1 - resgatando datos
  // useEffect(()=> {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []); 

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await res.json();

    // // 3 - carregamento dinâmico
    // setProducts((previousProducts) => [...previousProducts, addedProduct]);

    // 5 - Refatorando post
    httpConfig(product, 'POST');
    setName('');
    setPrice('');
  }

  return (
    <>
      <h1>Lista de produtos</h1>

      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}

      {
        !loading && <ul>
        {
          items && items.map((product) => (
            <li key={product.id}>{product.name} R$: {product.price}</li>
          ))
        }
      </ul>
      }
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Price: <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>

          {/* 7 - State de loading no post */}

          {loading && <input type="submit" value="Criar" disabled/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </>
  )
}

export default App
