import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    return (
        <div>
            <h1>Isso será exibido?</h1>

            {x && <p>Sim será exibido!</p>}
            {!x && <p>Agora x é falso</p>}
        </div>
    )
}

export default ConditionalRender