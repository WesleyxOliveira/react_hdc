import styles from './Title.module.css';

const Title = () => {
  return (
    <>
        <h2 className={styles.my_title}>Meu título</h2>
        <h2 className='my_title'>Meu título 2</h2>
    </>    
  )
}

export default Title