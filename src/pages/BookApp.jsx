import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { bindActionCreators } from "redux";
import BookDetails from "../cmps/BookDetails";
import BookFilter from "../cmps/BookFilter";
import BookList from "../cmps/BookList";
import Hero from "../cmps/Hero";
import * as bookActions from "../store/actions/bookActions";
import * as userActions from "../store/actions/userAction";

function BookApp({ match }) {
  const [booksToShow, setBooksToShow] = useState([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const userId = useSelector((state) => state.userReducer.user?.id);
  const order = useSelector((state) => state.userReducer.order);
  const books = useSelector((state) => state.bookReducer.books);
  const filterBy = useSelector((state) => state.bookReducer.filterBy);

  const dispatch = useDispatch();
  const { updateBooks } = bindActionCreators(bookActions, dispatch);
  const { updUserCart } = bindActionCreators(userActions, dispatch);

  useEffect(async () => {
    setBooksToShow(await updateBooks());
  }, []);

  useEffect(() => {
    setIsDetailsOpen(!!match.params.bookId);
  }, [match.params.bookId]);

  useEffect(() => {
    const filteredBooks = getBooksForDisplay();
    setBooksToShow(filteredBooks);
  }, [filterBy]);

  const getBooksForDisplay = () => {
    const filterRegex = new RegExp(filterBy.keyWord, "i");
    return books.filter(
      (book) =>
        filterRegex.test(book.title) ||
        filterRegex.test(book.description) ||
        filterRegex.test(book.subtitle) ||
        filterRegex.test(book.author)
    );
  };

  const addToCart = (bookId) => {
    console.log("the book was clicked", { bookId });

    updUserCart(order, bookId);
  };

  if (booksToShow === []) return <div>Loading...</div>;

  return (
    <main className="book-app app-layout">
      <Hero />
      <BookFilter />
      {booksToShow && <BookList books={booksToShow} addToCart={addToCart} />}
      {!booksToShow ||
        (!booksToShow.length && (
          <div className="not-found grid-center">
            <div className="not-found-container flex column align-center">
              <div className="not-found-img"></div>
              <h1>Couldn't find what you were looking for...</h1>
              <h2>Try spelling it differently</h2>
            </div>
          </div>
        ))}

      {isDetailsOpen && <BookDetails />}
    </main>
  );
}

export default BookApp;
