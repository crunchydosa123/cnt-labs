import React from 'react'
import Navbar from '../components/Navbar'
import TeacherLoginForm from '../components/TeacherLoginForm'

const TeacherLogin = () => {
  return (
    <div className='flex flex-col bg-[#F4E3B2] h-screen'>
    <Navbar />
    <TeacherLoginForm />
    </div>
  )
}

export default TeacherLogin