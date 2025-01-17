import React from 'react'
import './MyForm.css';

const MyForm = () => {
    return (        
        <>
            {/*Criação de Form */}
            <form>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome'/>

                {/*Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email"/>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm