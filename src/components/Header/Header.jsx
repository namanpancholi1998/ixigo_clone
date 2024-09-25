import React from "react";
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import UserProfile from "./UserProfile/UserProfile";
import "./header.css";

function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-sm">
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center px-[50px] justify-between max-sm:px-1">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>
        <div className="flex">
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
export default Header;
