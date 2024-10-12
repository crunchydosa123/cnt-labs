import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const url = "http://localhost:5000/api/login"
    const data = {
      email: email,
      password: password
    }

    axios.post(url, data)
      .then(response => {
        console.log('logged in successfully', response.data);
        navigate('/catalogue')
      })
      .catch(error =>{
        console.error(error.response.data);
      })
  };

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col bg-gray-700 m-10 py-4 px-4 w-1/3'>
        <div className='text-white text-3xl font-bold my-2'>Student Login</div>
        <form onSubmit={handleSubmit}>
        <div className='text-white mt-4'>Username</div>
        <input  className='bg-white my-2 p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className='text-white mt-4'>Password</div>
        <input  className='bg-white my-2 p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className='mt-5 bg-yellow-400 p-3 mb-4 hover:font-bold hover:bg-red-500 hover:text-white'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default StudentLoginForm