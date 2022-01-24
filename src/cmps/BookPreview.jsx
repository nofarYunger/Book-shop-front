import React from "react";
import { Link } from "react-router-dom";

function BookPreview({ book, addToCart }) {
  return (
    <article className="book-card">
      <div className="card-wrapper">
        <span className="edit-icon"></span>
        <img className="thumbnail" src={book.thumbnail} />
        <div className="card-content">
          <h1>{book.title}</h1>
          <p className="author">By {book.author}</p>
          <p className="book-sum">{book.description}</p>
        </div>
      </div>
      <div className="btns-container">
        <Link to={`/books/${book.id}`}>
          {" "}
          <button className="btn btn-2 hover-slide-left">
            <span>Read More</span>
          </button>
        </Link>
        <button
          onClick={() => addToCart(book.id)}
          className=" btn btn-2 hover-slide-right"
        >
          <span>Add To Cart</span>
        </button>
      </div>
    </article>
  );
}

export default BookPreview;
