import React from "react";

const BookCard = ({ title, author, image }) => {
  return (
    <div className="book-card">
      <img src={image || "placeholder.jpg"} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
