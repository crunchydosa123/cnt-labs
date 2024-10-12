import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCarousel from '../components/CategoryCarousel'

const CataloguePage = () => {
  return (
    <>
    <Navbar />
    <div className='text-6xl m-10 font-bold'>Browse Catalogue</div>
    <CategoryCarousel />
    </>
  )
}

export default CataloguePage