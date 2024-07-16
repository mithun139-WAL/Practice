// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Library Books Manager</h1>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
