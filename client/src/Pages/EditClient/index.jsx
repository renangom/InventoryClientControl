import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

export default function EditClient() {
    const location = useLocation();
    const id = location.pathname.split("/")[2]

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const [edit, setEdit] = useState(false);

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`http://localhost:5000/client/${id}`);
        setName(res.data.first_name);
        setSurname(res.data.last_name);
        setEmail(res.data.email);
      }

      fetchUser();
    }, [])

    const handleUpdate = async () => {
      try{
        await axios.put(`http://localhost:5000/client/${id}`, {
          first_name: name,
          email: email,
          last_name: surname
        })

        window.location.reload();
        setEdit(false);
      }catch(err) {
        console.log(err);
      }
    }
  return (
    <div className='page'>
      <div className="container">
        <div className="title">
          <h2> Update User </h2>
          <button className='btn' onClick={() => setEdit(!edit)}> {edit ? 'Cancel' : 'Edit'} </button>
        </div>
        <div className="field">
          <h4>Name: </h4>
          {edit ? <input onChange={(e) => setName(e.target.value)} autoFocus value={name} type='text' /> : <p>{name}</p> }
        </div>
        <div className="field">
          <h4>Surname: </h4>
          {edit ? <input onChange={(e) => setSurname(e.target.value)} value={surname} type='text' /> : <p>{surname}</p> }
        </div>
        <div className="field">
          <h4>Email: </h4>
          {edit ? <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' /> : <p>{email}</p> }
        </div>
        {edit ? <button onClick={handleUpdate} type='submit' className='btn btn-secondary'> Alterar </button> : null}
        <Link to='/'><button className='btn btn-voltar'> Voltar </button></Link>
      </div>
    </div>
  )
}
