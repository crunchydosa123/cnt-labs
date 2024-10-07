import React from 'react'
import Navbar from '../components/Navbar'
import StudentLoginForm from '../components/StudentLoginForm'

const StudentLogin = () => {
  return (
    <div className='flex flex-col bg-[#F4E3B2] h-screen'>
    <Navbar />
    <StudentLoginForm />
    </div>
  )
}

export default StudentLogin