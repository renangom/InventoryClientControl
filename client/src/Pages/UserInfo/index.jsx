import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

export default function UserInfo() {
    const user = useSelector((state) => state.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const id = user.id;

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`http://localhost:5000/acount/${id}`);
        setUsername(res.data.login);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setImgUrl(res.data.imageUrl);
        setIsAdmin(res.data.isAdmin);
      }

      fetchUser();
    }, [])

  
    function handleImageChange(event) {
      setSelectedImage(event.target.files[0]);
    }

    const handleSubmit = (event) => {
      const formData = new FormData();
      formData.append('image', selectedImage);

      //fazer requisição para o backend
    }

  return (
    <>
        <Header />
        <div className='container'>
            <div className='info'>
              <div className='title'>
                <h2>Informações de Usuário</h2>
                <button className='btn' onClick={() => setIsEditMode(!isEditMode)}> {isEditMode ? 'Voltar' : 'Editar'} </button>
              </div>
              <div className='field'>
                <label>Nome de Usuário: </label>
                {isEditMode ? <input type='text' value={username} /> :<p>{username}</p>}
              </div>
              <div className='field'>
                <label>Email: </label>
                {isEditMode ? <input type='text' value={email} /> :<p>{email}</p>}
              </div>
              <div className='field'>
                <label>Senha: </label>
                {isEditMode ? <input type='password' value={password} /> :<p>{password}</p>}
              </div>
              <div className='field'>
                <label>Imagem de Perfil: </label>
                <p>{isEditMode ? <input type="file" onChange={handleImageChange} /> : imgUrl}</p>
              </div>
              <div className='field'>
                <label>Administrador: </label>
                <p>{isAdmin ? 'Sim' : 'Não'}</p>
              </div>
              <div className='field'>
                { isEditMode ? <button onClick={handleSubmit} type='submit'>Enviar</button> : null}
              </div>
            </div>
        </div>
    </>
  )
}
