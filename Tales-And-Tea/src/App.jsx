import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import booksData from "./data/books.json";
import Home from "./pages/Home";       
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/fantasy.json?limit=12")
      .then((res) => res.json())
      .then((data) => {
        const mappedBooks = data.works.map((book, index) => ({
          id: index,
          title: book.title,
          author: book.authors?.[0]?.name || "Unknown",
          cover: book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover",
        }));
        setBooks(mappedBooks);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  useEffect(() => {
    setBooks(booksData); // fallback local data
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page showing your books */}
        <Route
          path="/"
          element={
            <div className="App p-4">
              <h1 className="text-2xl font-bold mb-4"> Tales and Tea</h1>
              <div className="books-container grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          }
        />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
