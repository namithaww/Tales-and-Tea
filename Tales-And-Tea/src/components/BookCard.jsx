import React from "react";
// import "./BookCard.css"; 

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Language:</strong> {book.language}</p>
    </div>
  );
}

export default BookCard;
