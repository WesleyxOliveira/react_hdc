import styles from './CarDetails.module.css';

const CarDetails = ({ brand, model, color }) => {
    return (
        <>
            <ul>
                <li>Marca: {brand}</li>
                <li>Modelo {model}</li>
                <li>Cor: {color}</li>
            </ul>
        </>
    )
}

export default CarDetails