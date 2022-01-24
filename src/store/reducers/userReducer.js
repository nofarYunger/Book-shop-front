const initialState = {
  user: null,
  order: {
    orderId: null,
    books: {
      // bookId: quantity
    },
  },
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_ORDER":
      return { ...state, order: action.order };
    case "CLEAR_USER":
      return { ...state, user: null, order: {}, token: null };
    default:
      return state;
  }
}
