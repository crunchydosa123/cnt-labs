import React from 'react'
import Navbar from '../components/Navbar'
import StudentSignupForm from '../components/StudentSignupForm'

const StudentSignup = () => {
  return (
    <div className='flex flex-col bg-[#F4E3B2] h-screen'>
    <Navbar />
    <StudentSignupForm />
    </div>
  )
}

export default StudentSignup