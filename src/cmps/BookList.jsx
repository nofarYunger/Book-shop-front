import React from "react";
import BookCartCard from "./BookCartCard";
import BookPreview from "./BookPreview";

function BookList({ books, addToCart, isCartView }) {
  return (
    <section className="book-list">
      {books.map((book) => {
        if (!isCartView) {
          return (
            <BookPreview key={book.id} book={book} addToCart={addToCart} />
          );
        } else {
          return (
            <BookCartCard key={book.id} book={book} addToCart={addToCart} />
          );
        }
      })}
    </section>
  );
}

export default BookList;
