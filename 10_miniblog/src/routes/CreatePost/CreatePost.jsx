import styles from './CreatePost.module.css';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
  const { user } = useAuthValue();

  return user ? (
    <div>
        <h1>Create Post</h1>
    </div>
  ) : <Navigate to='/login' />
}

export default CreatePost