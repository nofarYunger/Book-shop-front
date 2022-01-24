import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { bookService } from "../services/bookService";

function BookDetails({ match, history }) {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  const loadBook = async () => {
    const bookFromData = await bookService.getBook(bookId);
    setBook(bookFromData);
  };

  useEffect(() => {
    loadBook();
  }, []);

  if (!book) return <div>Loading...</div>;
  return (
    <section className="details">
      <Link to="/books">
        <div className="overlay"></div>
      </Link>
      <div className="popup flex ">
        {/* <span className="edit-icon"></span> */}
        <img className="thumbnail" src={book.thumbnail} />
        
          <div className="details-title">
            <h1>{book.title}</h1>
            {/* <p className="author">By {book.authors[0]}</p> */}
            <p className="book-sum">{book.subtitle}</p>
          </div>
          <p className="book-desc">{book.description}</p>
          <div className="stars">stars</div>
        <div className="btns-container">
          <button className=" btn btn-2 hover-slide-right">
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default BookDetails;
