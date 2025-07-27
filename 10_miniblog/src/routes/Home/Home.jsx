// CSS
import styles from './Home.module.css';

import { useAuthValue } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

// hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

// components

const Home = () => {
  const { user } = useAuthValue();

  const [query, setQuery] = useState('');
  const [posts] = useState([]);
  
  const handleSubmit = (e)=> {
    e.preventDefault();
  }

  // return !user ? <Navigate to='/login' /> : <div>Home</div>
  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onClick={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e)=> setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        <h1>Posts...</h1>

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to='/posts/create' className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home