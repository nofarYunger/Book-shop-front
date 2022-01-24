import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {bookReducer} from "./reducers/bookReducer"
import {userReducer} from "./reducers/userReducer"

const rootReducer = combineReducers({
  bookReducer,
  userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
