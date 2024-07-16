import React, { useState } from 'react';

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [category, setCategory] = useState(book ? book.category : '');
  const [isbn, setIsbn] = useState(book ? book.isbn : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, category, isbn });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>ISBN</label>
        <input value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
