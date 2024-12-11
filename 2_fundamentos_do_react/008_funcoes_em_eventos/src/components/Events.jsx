const Events = ()=> {
    const handleClick = (e)=> {
        console.log('Clicou!');

        console.log(e)
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
                <button onClick={()=> {console.log('Clicou!')}}>Clique aqui também</button>
                <button onClick={()=> {
                    if(true) {
                        console.log('Isso não deveria existir =)');
                    }
                }}>Clique aqui por favor</button>
            </div>
        </>
    )
}

export default Events;