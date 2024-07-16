import React from 'react';
import BookDetails from '../components/BookDetails';
import DeleteBook from '../components/DeleteBook';

const BookDetailsPage = () => {
  return (
    <div>
      <h1>Book Details</h1>
      <BookDetails />
      <DeleteBook />
    </div>
  );
};

export default BookDetailsPage;
