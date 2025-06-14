// CSS
import styles from './Home.module.css';

import { useAuthValue } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthValue();

  // return !user ? <Navigate to='/login' /> : <div>Home</div>
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home