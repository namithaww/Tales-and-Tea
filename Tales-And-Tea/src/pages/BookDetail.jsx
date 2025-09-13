import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Book Details</h2>
      <p>Showing details for book ID: {id}</p>
    </div>
  );
};

export default BookDetail;
