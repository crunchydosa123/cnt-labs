import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SingleBook = () => {
    const {id}  = useParams();
  return (
    <>
    <Navbar />

    <div className='m-10 grid grid-cols-5 p-4'>
        <div className='flex flex-col col-span-2'>
            <div>Book Name</div>
            <div>Author</div>
            <div>Issued/Not Issued</div>
        </div>
        <div className='flex flex-col col-span-3'>
            <div className='text-3xl'>Summary</div>
            <div className='break-words whitespace-normal'>lkjhbhjkiokijhbgvbhjkiijhbgvghjioiuhygftrfdsxcghuygvbnjkiujhbnjkuhbgnjuhdvsdfgvfdfvddfsdfvdfvdcfvsddsdcsdxcsdcfsdcsdxc</div>
        </div>
    </div>
    </>
  )
}

export default SingleBook