import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeleteBook from './DeleteBook';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>ISBN: {book.isbn}</p>
      <DeleteBook bookId={id} />
    </div>
  );
};

export default BookDetails;
