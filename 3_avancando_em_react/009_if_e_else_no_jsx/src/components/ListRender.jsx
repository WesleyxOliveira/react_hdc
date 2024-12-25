import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Wesley', 'Juliana', 'Érika', 'João']);

    const [users, setUsers] = useState([
        {id: 1, name: 'Wesley', age: 33},
        {id: 2, name: 'João', age: 19},
        {id: 3, name: 'Érika', age: 18}
    ]);

    const deleteRandom = ()=> {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers)=> {
            return prevUsers.filter(user=> randomNumber !== user.id);
        })
    }
                            

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

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender