import React from 'react'
import './MyForm.css';

const MyForm = () => {
    return (        
        <div>
            {/*Criação de Form */}
            <form>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome'/>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm