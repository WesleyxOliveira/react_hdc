import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css'
import { useState, useEffect } from 'react'

import { Navigate } from 'react-router-dom';

const Register = () => {
  const [displayname, setDisplayName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser, error: authError, auth, loading} = useAuthentication();

  const handleSubmit = async(e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayname,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais!');
      return;
    }

    const res = await createUser(user);
  }

  useEffect(()=> {
    if(authError) {
      setError(authError);
    }
  }, [authError])

  const { user } = useAuthValue();

  console.log(user);

  return  !user ? (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayname"
            required
            placeholder='Nome do usuário'
            value={displayname}
            onChange={(e) => setDisplayName(e.target.value)} />
        </label>

        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder='Email do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)} />
        </label>

        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required placeholder='Confirme a sua senha'
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)} />
        </label>

        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  ) : <Navigate to='/' />
}

export default Register