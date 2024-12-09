import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World!</h1>
      <h2>Praticando react</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui reiciendis maxime accusamus nisi itaque debitis odio doloribus eveniet aliquam voluptatum in porro at, praesentium dolorem voluptates, pariatur deserunt amet!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui, voluptate totam inventore excepturi incidunt minus! Consequatur minus possimus sit iusto quasi? Tempora soluta officiis perspiciatis facilis porro quisquam obcaecati.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut voluptatibus fugiat qui eligendi error aspernatur, facilis officia laudantium natus, non cupiditate velit obcaecati numquam similique pariatur excepturi quaerat, ad omnis.
      </p>
    </>
  )
}

export default App;

