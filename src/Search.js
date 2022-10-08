import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search-class">
      <form>
        <DebounceInput
          debounceTimeout={400}
          type="text"
          className="form-control"
          placeholder="Search movies"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
