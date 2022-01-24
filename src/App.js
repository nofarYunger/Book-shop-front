import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader.jsx";
import BookDetails from "./cmps/BookDetails.jsx";
import BookApp from "./pages/BookApp.jsx";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
function App() {
  return (
    <Router>
      <AppHeader />
      <main className="App">
        <Switch>
          {/* <Route component={BookDetails} path="/:bookId" /> */}
          <Route component={BookApp} path="/books/:bookId?" />
          <Route component={LoginSignup} path="/login-signup" />
          <Route component={Cart} path="/cart" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
