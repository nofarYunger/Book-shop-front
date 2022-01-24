import axios from "axios";

export const bookService = {
  query,
  deleteBook,
  updBook,
  getBook,
  getOrderBooks,
};
const BASE_URL = "http://localhost:3030/api/books/";

async function query() {
  try {
    const res = await axios.get(BASE_URL);
    const books = res.data;
    console.log(books, BASE_URL);
    return books;
  } catch (err) {
    console.log(err);
  }
}
async function getBook(id) {
  try {
    const res = await axios.get(`${BASE_URL}${id}`);
    const book = res.data;
    return book;
  } catch (err) {
    console.log(err);
  }
}

async function updBook(book) {
  try {
    const method = book.id ? "put" : "post";
    const res = await axios({
      url: `${BASE_URL}${book.id}`,
      method,
      book,
    });
    return Promise.resolve();
  } catch (err) {
    console.log(err);
  }
}
async function deleteBook(bookId) {
  try {
    await axios.delete(`${BASE_URL}${bookId}`);
    return Promise.resolve();
  } catch (err) {
    console.log(err);
  }
}

async function getOrderBooks(orderId) {
  try {
    const books = await axios.get(
      `http://localhost:3030/api/order/books/${orderId}`
    );
    return books;
  } catch (error) {
    console.log(error);
  }
}
