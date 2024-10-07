import React from 'react'
import LoginNavbarDropdown from './LoginNavbarDropdown'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-red-500 text-white'>
        <div className='text-2xl font-bold'>CNT Lab 5: Web Development</div>
        <div className='flex justify-around'>
            <div><LoginNavbarDropdown /></div>
            <div className='text-xl'>Signup</div>
        </div>
        
    </div>
  )
}

export default Navbar