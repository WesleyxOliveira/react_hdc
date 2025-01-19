import React, { useState } from 'react'
import './MyForm.css';

const MyForm = ({user}) => {
    // 6 - Controlled input
    {/* 5 - Envio de form */}
    // 3- Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleChange = (e)=> {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name, email, bio, role);

        // 7 - Limpar formulário
        setName('');
        setEmail('');
        setRole('user')
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
                    <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} autoComplete='off' value={email} placeholder='Digite seu e-mail'/>
                </label>

                {/*Textarea */}
                <label>
                    <span>Bio: </span>
                    <textarea name="bio" id="bio" placeholder='Digite aqui o seu texto' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/*Select */}
                <label>
                    <span>Função do sistema: </span>
                    <select name="role" id="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}

export default MyForm