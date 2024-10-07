import React from 'react'

const StudentLoginForm = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col bg-gray-700 m-10 py-4 px-4 w-1/3'>
        <div className='text-white text-3xl font-bold my-2'>Student Login</div>
        <div className='text-white mt-4'>Username</div>
        <input  className='bg-white my-2 p-2 w-full'/>
        <div className='text-white mt-4'>Password</div>
        <input  className='bg-white my-2 p-2 w-full'/>
        <button className='mt-5 bg-yellow-400 p-3 mb-4 hover:font-bold hover:bg-red-500 hover:text-white'>Login</button>
    </div>
    </div>
  )
}

export default StudentLoginForm