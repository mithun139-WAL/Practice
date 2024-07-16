import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteBook = ({ bookId }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`/api/books/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      });
  };

  return (
    <button onClick={handleDelete}>
      Delete Book
    </button>
  );
};

export default DeleteBook;
