import React, { useState } from 'react'
import './MyForm.css';

const MyForm = () => {

    //3- Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleChange = (e)=> {
        setName(e.target.value);
    }

    console.log(name);
    console.log(email);

    return (        
        <>
            {/* 1- Criação de Form */}
            <form>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleChange} id='name'/>

                {/* 2- Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm