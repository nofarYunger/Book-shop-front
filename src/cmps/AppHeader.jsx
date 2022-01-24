import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function AppHeader() {

  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 70) {
        if (scrollState !== "app") {
          setScrollState("app")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])


  return (
    <header className={`app-layout flex space-between ${scrollState === 'top'? '': 'app'}` }>
      <ul className="clear-list links flex">
        <div className="flex space-between">
          <li>
            <NavLink to="/cart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login-signup">login</NavLink>
          </li>
          <li>
            <NavLink to="/books">Home </NavLink>
          </li>
        </div>
        <li className="logo">
          read<span>Books.</span>
        </li>
      </ul>
    </header>
  );
}
