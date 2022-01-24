import { bookService } from "../../services/bookService";

export function updateBooks(updBooks) {
  return async (dispatch) => {
    try {
      // here you call a func in the service that update the database.
      if(!updBooks)updBooks=await bookService.query()
      dispatch({ type: "UPD_BOOKS", updBooks });
      return Promise.resolve(updBooks)
    } catch (err) {
      console.log("Couldnt update the book ", updBooks.title, err);
    }
  };
}
export function filterBooks(filter) {
  return async (dispatch) => {
    try {
      // here you call a func in the service that update the database.
      dispatch({ type: "FILTER_BOOKS", filter });
    } catch (err) {
      console.log("Couldnt filter the books ", err);
    }
  };
}
