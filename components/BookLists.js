import React from "react";
import BookCard from "./BookCard";

const BookLists = ({ title, books, containerClassName }) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookLists;
