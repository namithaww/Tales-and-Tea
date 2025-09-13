import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Classes for navbar links
  const linkClasses =
    "block px-6 py-2 rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-700 transition-all";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-blue-600 flex items-center gap-2">
            <span>📚</span> Book Recommendations
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={linkClasses}>Home</Link>
            <Link to="/books" className={linkClasses}>Books</Link>
            <Link to="/about" className={linkClasses}>About</Link>
            <Link to="/contact" className={linkClasses}>Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-3 p-4">
          <Link to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/books" className={linkClasses} onClick={() => setIsOpen(false)}>Books</Link>
          <Link to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
