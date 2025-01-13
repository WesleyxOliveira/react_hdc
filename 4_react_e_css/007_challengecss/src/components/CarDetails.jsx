import styles from './CarDetails.module.css';

const CarDetails = ({ brand, model, color }) => {
    return (
        <div className={styles.cars}>
            <ul>
                <li>Marca: {brand}</li>
                <li>Modelo {model}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    )
}

export default CarDetails