import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({ name, author, summary, id }) => {
    const navigate = useNavigate();
  return (
    <div className='border rounded-md flex flex-col p-2'>
        <div className='text-2xl'>{name}</div>
        <div className='text-xl'>{author}</div>
        <div className='flex justify-between'>
            <div>{summary}</div>
            <button className='p-1 px-3 text-xl bg-blue-200 rounded-md hover:bg-blue-500' onClick={() => navigate(`/book/${id}`)}>Issue</button>
        </div>
    </div>
  )
}

export default BookCard