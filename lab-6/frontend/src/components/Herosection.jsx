import React from 'react'

const Herosection = () => {
  return (
    <div className='flex flex-col bg-[#F4E3B2] h-screen'>
    <div className='flex justify-center'>
        <div className='text-7xl p-10 text-center font-semibold'>Some hero section text, <br></br>that is a slogan</div>
    </div>
    <div className='flex justify-center'>
        <button className='bg-[#CF5C36] text-white text-xl px-6 py-3 rounded-md hover:text-white hover:bg-black hover:font-bold'>Some call to action</button>
    </div>
    </div>
  )
}

export default Herosection