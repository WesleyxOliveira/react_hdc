const Events = ()=> {
    const handleClick = (e)=> {
        console.log('Clicou!');

        console.log(e)
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
        </>
    )
}

export default Events;