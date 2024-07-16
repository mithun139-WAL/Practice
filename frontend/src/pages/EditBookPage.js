// src/pages/EditBookPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details from the backend
    fetch(`/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  const handleUpdateBook = (updatedBook) => {
    // Send PUT request to backend to update book
    fetch(`/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then(response => response.json())
      .then(() => {
        navigate(`/books/${id}`);
      });
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm book={book} onSubmit={handleUpdateBook} />
    </div>
  );
};

export default EditBookPage;
