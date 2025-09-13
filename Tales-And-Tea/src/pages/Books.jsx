import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  // Example book list
  const books = [
    { id: 1, title: "Book One" },
    { id: 2, title: "Book Two" },
    { id: 3, title: "Book Three" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-2">
            <Link to={`/books/${book.id}`} className="text-blue-700 hover:underline">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
