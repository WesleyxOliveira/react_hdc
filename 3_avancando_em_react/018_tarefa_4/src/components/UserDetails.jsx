const UserDetails = ({name, age, profession}) => {
  return (
    <>
        <ul>

            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
        </ul>
        {
          age >= 18 ? <p>O usuário {name} pode tirar a habilitação por ser maior de 18 anos</p> 
          : <p>O usuário {name} não pode tirar a habilitação por ser menor de 18 anos</p>
        }
        <hr />
    </>
  )
}

export default UserDetails