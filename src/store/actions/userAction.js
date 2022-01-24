import { sessionService } from "../../services/sessionStorageService";
import { userService } from "../../services/userService";

export function setUser(user, isLogin) {
  return async (dispatch) => {
    try {
      let userInfo = null;
      if (isLogin) {
        userInfo = await userService.login(user);
      } else {
        userInfo = await userService.signup(user);
      }
      console.log(userInfo);

      dispatch({ type: "SET_USER", user: userInfo.data.user });
      dispatch({ type: "SET_TOKEN", token: userInfo.data.token });
      dispatch({ type: "SET_ORDER", order: userInfo.data.order });
    } catch (err) {
      console.log("had problem setting the user", err);
    }
  };
}

export function clearUser() {
  return async (dispatch) => {
    try {
      userService.logout();

      const action = {
        type: "CLEAR_USER",
      };
      dispatch(action);
    } catch {
      console.log("couldnt log out!!");
    }
  };
}
export function setUserAfterRefresh(loggedUser) {
  return (dispatch) => {
    const action = {
      type: "SET_USER",
      loggedUser,
    };
    dispatch(action);
  };
}
// (diff= +1 \ -1)
export function updUserCart(order, bookId, diff = 1) {
  return async (dispatch) => {
    try {
      await userService.updCart(order.id, bookId, diff);
      
      const newBooks = { ...order.books };
      const quantity = newBooks[bookId];

      if (!quantity) newBooks[bookId] = 1;
      else newBooks[bookId] = quantity + diff;

      if (!newBooks[bookId]) delete newBooks[bookId];

      const updOrder = { ...order, books: newBooks };
      dispatch({ type: "SET_ORDER", order: updOrder });
    } catch (err) {
      console.log("had problem updating the order", err);
    }
  };
}
