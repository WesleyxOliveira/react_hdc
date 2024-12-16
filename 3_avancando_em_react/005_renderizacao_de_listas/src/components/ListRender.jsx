import { useState } from "react"

const ListRender = () => {

    let [list] = useState(['Wesley', 'Juliana', 'Érika', 'João']);

    return (
        <div>
            <ul>
                {list.map((item)=> (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender