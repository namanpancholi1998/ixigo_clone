import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to={"/"} className="mx-4 w-[115px] h-[40px] shrink-0">
      <img
        src="src\assets\navbar\ixigo-logo.webp"
        className="flex justify-center items-center h-full "
      />
    </NavLink>
  );
}
export default Logo;
