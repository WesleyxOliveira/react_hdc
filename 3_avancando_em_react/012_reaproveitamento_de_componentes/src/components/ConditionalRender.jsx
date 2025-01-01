import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState('João');
    return (
        <div>
            <h1>Isso será exibido?</h1>

            {x && <p>Sim será exibido!</p>}
            {!x && <p>Agora x é falso</p>}
            <h1>If ternário</h1>
            {name === 'João' ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não foi encontrado!</p>
                </div>
            )}

            <button onClick={()=> setName('xzera')}>Change name</button>
        </div>
    )
}

export default ConditionalRender