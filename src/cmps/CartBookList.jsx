import React from "react";
import { bookService } from "../services/bookService";
import BookCartCard from "./BookCartCard";
import BookPreview from "./BookPreview";

function CartBookList({ books, addToCart, isCartView }) {
  if (!books) return <div>Loading...</div>;
  console.log({ books });
  return (
    <table className="cart-book-list">
      <thead>
        <tr>
          <td>Prodact Details</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {books.map((item) => {
          return (
            <BookCartCard
              key={item.id}
              book={item.Book}
              quantity={item.quantity}
              addToCart={addToCart}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CartBookList;
