import React from "react";

function SearchBtn({ type, className }) {
  return (
    <button className={`${className} uppercase transition-all `}>
      SEARCH {type}
    </button>
  );
}

export default SearchBtn;
