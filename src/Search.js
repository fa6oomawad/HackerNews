import React from "react";

function Search(props) {
  const { value, onChange, onSubmit, children } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit">{children}</button>
    </form>
  );
}

export default Search;
