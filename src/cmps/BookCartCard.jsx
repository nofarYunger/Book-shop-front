import React from "react";

function BookCartCard({ book, quantity, addToCart }) {
  return (
    <tr className="book-cart-card flex">
      <td className="prodact-details">
        <img  src={book.thumbnail} />
        <div className="cart-book-info flex col">
          <h1>{book.title}</h1>
          <p className="author">By {book.author}</p>
        </div>
      </td>
      <td>
        <p className="total">Quantity {quantity}</p>
      </td>
      <td>${book.price}</td>
      <td>${book.price * quantity}</td>
    </tr>
  );
}

export default BookCartCard;
