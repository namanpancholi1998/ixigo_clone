import React from "react";

function Button({ type, className, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${className} uppercase transition-all `}
    >
      {type}
    </button>
  );
}

export default Button;
