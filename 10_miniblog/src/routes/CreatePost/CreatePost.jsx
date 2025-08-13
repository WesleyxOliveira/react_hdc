import styles from './CreatePost.module.css';

// import { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocuments';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();

  const navigate = useNavigate();  

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError('');

    // validate image URL
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
    }

    // criar o array de tags
    const tagsArray = tags.split(",").map((tag)=> tag.trim().toLowerCase());

    // checar todos os valores
    if(!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos!');
    }

    // teste aqui
    console.log(tagsArray);

     console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return;

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });

    // redirect to home page
    navigate('/');
  }

  return user ? (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título: </span>
          <input
            type="text"
            name="title"
            placeholder='Pense num bom título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            name="image"
            placeholder='Insira uma imagem que represente o seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo: </span>
          <textarea
            name="body"
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            placeholder='Insira as tags separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className='btn'>Criar post!</button>}
        {response.loading && (<button className='btn' disabled>Aguarde...</button>)}
        {response.error && <p className='error'>{response.error || formError}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  ) : <navigate to='/login' />
}

export default CreatePost