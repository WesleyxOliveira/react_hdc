import styles from './login.module.css'

import { useAuthValue } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { user } = useAuthValue();
  console.log(user);

  return !user ? (
    <div>
      <h2>Login</h2>
    </div>
  ) : (
    <Navigate to='/' />
  );
}

export default Login