import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Wesley', 'Juliana', 'Érika', 'João']);

    const [users] = useState([
        {id: 1, name: 'Wesley', age: 33},
        {id: 13421, name: 'João', age: 19},
        {id: 39884, name: 'Érika', age: 18}
    ])

    return (
        <div>
            <ul>
                {list.map((item, i)=> (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender