import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  // 1 - resgatando datos
  const url = 'http://localhost:3000/products';


  useEffect(()=> {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {
          products.map((product)=> (
            <li key={product.id}>{product.name} R$: {product.price}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
