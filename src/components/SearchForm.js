import React, { useState, useEffect } from "react";
import "../styles/SearchForm.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Kullanıcının yazdığı kelime
  const [suggestions, setSuggestions] = useState([]); // Öneri listesi

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetchBooksFromAPI(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // 📌 Google Books API'den veri çekme fonksiyonu
  const fetchBooksFromAPI = async (query) => {
    const API_KEY = "YOUR_GOOGLE_BOOKS_API_KEY"; // 🚨 API Key'ini buraya eklemelisin!
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        const books = data.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title || "Unknown Title",
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown Author",
          thumbnail: item.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg",
        }));
        setSuggestions(books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <label htmlFor="book">Book</label>
        <input
          id="book"
          type="text"
          placeholder="Book name or ISBN"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 📌 API'den gelen kitap önerileri */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((book) => (
            <li key={book.id} onClick={() => setSearchTerm(book.title)}>
              <img src={book.thumbnail} alt={book.title} className="book-thumbnail" />
              <div>
                <strong>{book.title}</strong>
                <p className="author-name">{book.author}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
