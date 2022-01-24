import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/userAction";
import { bindActionCreators } from "redux";
import BookList from "../cmps/BookList";
import CartBookList from "../cmps/CartBookList";
import { bookService } from "../services/bookService";

function Cart() {
  const user = useSelector((state) => state.userReducer.user);
  const order = useSelector((state) => state.userReducer.order);
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const { updUserCart } = bindActionCreators(actions, dispatch);
  const [cartBooks, setCartBooks] = useState([]);

  const getBooks = async () => {
    const { data } = await bookService.getOrderBooks(order.id);
    console.log(data);
    return data;
  };

  useEffect(async () => {
    const books = await getBooks();
    setCartBooks(books);
  }, []);

  const addToCart = () => {
    console.log("next step");
  };
  if (!user) return <div>Sign in to see your cart</div>;

  return (
    <div className="cart-page app-layout flex">
      <section className="cart-details cart-layout">
        <div className="cart-header flex space-between ">
          <h1>Shopping Cart</h1>
          {/* <h1>{user.cart.lenght} Items</h1> */}
          {console.log(user)}
        </div>
        <div className="cart-content">
          <CartBookList books={cartBooks} addToCart={addToCart} />
        </div>
      </section>
      <section className="order-summery grid-center">
        <h1>here is the cart summery and Checkout info</h1>
      </section>
    </div>
  );
}

export default Cart;
