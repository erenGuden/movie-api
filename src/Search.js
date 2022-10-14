import React from "react";
import { DebounceInput } from "react-debounce-input";

const Search = ({ getQuery }) => {
  return (
    <section className="search-class">
      <DebounceInput
        debounceTimeout={400}
        type="text"
        className="form-control"
        placeholder="Search movies"
        onChange={(e) => getQuery(e.target.value)}
        autoFocus
      />
    </section>
  );
};

export default Search;
