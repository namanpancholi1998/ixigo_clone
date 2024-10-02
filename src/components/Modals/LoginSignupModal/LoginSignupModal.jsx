import React from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";
import LoginSignup from "../../../pages/LoginSignup/LoginSignup";
import "./loginSignup.css";

function LoginSignUpModal({ toggleLoginModal }) {
  const modalRoot = document.getElementById("modal");

  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[rgba(71,85,105,0.7)] z-10"></div>
      <div className="flex justify-center items-center  ">
        <div className="fixed bg-white z-50 top-20  m-auto rounded-lg">
          <button
            onClick={toggleLoginModal}
            className="absolute top-1 right-1 text-2xl"
          >
            <IoMdCloseCircle />
          </button>
          <LoginSignup />
        </div>
      </div>
    </>,
    modalRoot
  );
}
export default LoginSignUpModal;
