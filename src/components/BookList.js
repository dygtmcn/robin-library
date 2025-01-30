import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import AddBook from "./AddBook"; // 🔹 AddBook popup içinde çağrılacak
import "../styles/BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchBooks = () => {
      const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const bookData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(bookData);
      });

      return () => unsubscribe();
    };

    fetchBooks();
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="book-list-container">
      <h2>Your Book Shelf</h2>
      <div className="book-grid">
        {/* Add Book Card - Popup açacak */}
        <div className="book-card add-book-card" onClick={openPopup}>
          <p className="add-book-text">+ Add Book</p>
        </div>

        {/* Kitap Kartları */}
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image || "placeholder.jpg"} alt="Book Cover" className="book-image" />
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>

      {/* Popup Ekranı */}
      {isPopupOpen && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>✖</button>
            <AddBook closeForm={closePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
