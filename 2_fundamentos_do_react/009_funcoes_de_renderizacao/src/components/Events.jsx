const Events = ()=> {
    const handleClick = (e)=> {
        console.log('Clicou!');

        console.log(e)
    }

    const renderSomething = (x)=> {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
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
            {renderSomething(true)}
            {renderSomething(false)}
        </>        
    )
}

export default Events;