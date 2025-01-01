const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Marca: {km}</li>
                <li>Marca: {color}</li>
            </ul>
            {newCar && <p>Este carro é novo</p>}
            {!newCar && <p>Este carro é usado</p>}
        </div>
    )
}

export default CarDetails