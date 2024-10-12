import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentSignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const url = "http://localhost:5000/api/signup"
    const data = {
        name: name,
        email: email,
        password: password
    }

    if(password !== password2){
        console.error("passwords do not match");
    }else{
        axios.post(url, data)
            .then((response)=>{
                console.log("user created successfully!", response.data);
                navigate('/catalogue');
            })
            .catch((error)=>{
                console.error(error.response.data);
            })
    }
  };

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col bg-gray-700 m-10 py-4 px-4 w-1/3'>
        <div className='text-white text-3xl font-bold my-2'>Student Signup</div>
        <form onSubmit={handleSubmit}>
        <div className='text-white mt-4'>Name</div>
        <input  className='bg-white my-2 p-2 w-full' value={name} onChange={(e) => setName(e.target.value)}/>
        <div className='text-white mt-4'>Username</div>
        <input  className='bg-white my-2 p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className='text-white mt-4'>Password</div>
        <input  className='bg-white my-2 p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className='text-white mt-4'>Password</div>
        <input  className='bg-white my-2 p-2 w-full' value={password2} onChange={(e) => setPassword2(e.target.value)}/>
        <button type="submit" className='mt-5 bg-yellow-400 p-3 mb-4 hover:font-bold hover:bg-red-500 hover:text-white'>Signup</button>
        </form>
    </div>
    </div>
  )
}

export default StudentSignupForm