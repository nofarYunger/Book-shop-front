import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../services/customHooks";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/bookActions";

function BookFilter() {
  const [filterBy, handleFormChange, setFilterBy] = useForm({ keyWord: "" });
  const dispatch = useDispatch();
  const { filterBooks } = bindActionCreators(actions, dispatch);

  //   useEffect(() => {
  //       setFilterBy(stateFilterBy)
  //     }, [])

  useEffect(() => {
    filterBooks(filterBy);
  }, [filterBy]);

  return (
    <section className="book-filter flex space-between">
      <div className="search-bar flex">
        <div className="search-icon"></div>
        <input
          type="text"
          name="keyWord"
          autoComplete="off "
          value={filterBy.keyWord}
          onChange={handleFormChange}
          placeholder="Search Book"
        />
      </div>
      <ul className="flex clear-list">
        <li onClick={() => setFilterBy({ keyWord: "Computers" })}>Computers</li>
        <li onClick={() => setFilterBy({ keyWord: "Hack" })}>Hack</li>
        <li onClick={() => setFilterBy({ keyWord: "Romance" })}>Romance</li>
        <li onClick={() => setFilterBy({ keyWord: "History" })}>History</li>
      </ul>
    </section>
  );
}

export default BookFilter;
