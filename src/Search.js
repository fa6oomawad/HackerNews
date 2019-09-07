import React from "react";

function Search(props) {
  const { value, onChange } = props;

  return (
    <form>
      <input type="text" onChange={onChange} value={value} />
    </form>
  );
}

export default Search;
