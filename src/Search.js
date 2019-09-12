import React from "react";

function Search(props) {
  const { value, onChange, onSubmit, children } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
