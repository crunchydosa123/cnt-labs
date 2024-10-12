import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const CategoryCarousel = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/api/books";
    
    axios.get(url)
      .then(response => {
        console.log("books fetched");
        setBooks(response.data); 
      })
      .catch(error => {
        console.error('Error fetching books:', error.response?.data?.message || error.message);
      });
  }, []); 

  return (
    <div className='p-10'>
      <div className="carousel">
        {books.length > 0 ? (
          books.map(book => (
            <BookCard id = {book._id} name={book.bookname} author ={book.author} summary={book.summary}/>
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCarousel;