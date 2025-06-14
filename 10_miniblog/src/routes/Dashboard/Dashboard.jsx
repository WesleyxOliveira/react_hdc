import styles from './Dashboard.module.css'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuthValue();

  return user ? (
    <div>
        <h1>Dashboard</h1>
    </div>
  ) : <Navigate to='/login' />
}

export default Dashboard