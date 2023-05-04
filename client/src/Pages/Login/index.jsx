import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import './LoginForm.css'
import axios from 'axios';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      })

      if(res.status === 200) {
        const username = res.data.login;
        const id = res.data.id;
        
        dispatch(login({email, username, id}));
        window.location.reload();
      }else {
        throw new Error('Something went wrong');
      }
    }catch(err){
      setError(true);
    }

    
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="email" id="email" value={email} onChange={handleUsernameChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />

      {error ? <p> Algo deu errado </p> : null}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
