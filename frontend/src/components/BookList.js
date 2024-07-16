// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookList = ({ books }) => {
//   return (
//     <div>
//       <h2>Books List</h2>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             <Link to={`/books/${book.id}`}>{book.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
}

export default BookList;
