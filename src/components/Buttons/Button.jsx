import React from "react";

function Button({ type, className, handleSearch }) {
  return (
    <button
      onClick={handleSearch}
      className={`${className} uppercase transition-all `}
    >
      {type}
    </button>
  );
}

export default Button;
