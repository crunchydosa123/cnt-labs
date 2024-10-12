import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const SingleBook = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [isIssued, setIsIssued] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/api/books/${id}`;

    axios.get(url)
      .then(response => {
        console.log('Book fetched successfully');
        setInfo(response.data);
        setIsIssued(response.data.issued);  // Set issued status
      })
      .catch(error => {
        console.error(error.response?.data || error.message);
      });
  }, [id]);

  // Function to handle book issue/return
  const handleIssueBook = () => {
    const url = `http://localhost:5000/api/books/${id}/issue`;

    axios.put(url, { issued: !isIssued })  // Toggle the issued status
      .then(response => {
        console.log(response.data.message);
        setIsIssued(!isIssued);  // Update the local state
      })
      .catch(error => {
        console.error(error.response?.data || error.message);
      });
  };

  return (
    <>
      <Navbar />

      <div className="m-10 grid grid-cols-5 p-4">
        <div className="flex flex-col col-span-2">
          <div className="text-3xl">{info.bookname}</div>
          <div className="text-2xl">{info.author}</div>
          <div>{isIssued ? 'Issued' : 'Not Issued'}</div>
          <div>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={handleIssueBook}
            >
              {isIssued ? 'Return the book' : 'Issue for yourself'}
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-3">
          <div className="text-xl">{info.summary}</div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
