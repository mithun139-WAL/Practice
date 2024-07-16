// src/pages/AddBookPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    // Send POST request to backend to add new book
    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBookPage;
