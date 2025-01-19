import React, { useState } from 'react'
import './MyForm.css';

const MyForm = ({user}) => {
    // 6 - Controlled input
    {/* 5 - Envio de form */}
    // 3- Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleChange = (e)=> {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name);
        console.log(email);
    }

    return (        
        <>
            {/* 1- Criação de Form */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleChange} id='name' value={name}/>


                {/* 2- Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} autoComplete='off' value={email}/>
                </label>

                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default MyForm