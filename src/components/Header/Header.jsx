import React from "react";
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import UserProfile from "./UserProfile/UserProfile";
import LoginSignUpModal from "../Modals/LoginSignupModal/LoginSignupModal";
import { useAuthContext } from "../../context/Auth/AuthProvider";
import "./header.css";

function Header() {
  const { isLoggedIn, setShowLoginSignupForm, showLoginSignupForm, logOut } =
    useAuthContext();
  console.log(showLoginSignupForm);

  function toggleLoginModal() {
    console.log("toggle login");
    setShowLoginSignupForm((prev) => !prev);
  }

  return (
    <header className="w-full  h-16 top-0 bg-white shadow-sm ">
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center px-[10px] justify-between max-sm:px-1"></div>
      <div className="flex">
        <UserProfile
          isLoggedIn={isLoggedIn}
          toggleLoginModal={toggleLoginModal}
        />
        {showLoginSignupForm && (
          <LoginSignUpModal toggleLoginModal={toggleLoginModal} />
        )}
      </div>
    </header>
  );
}
export default Header;
