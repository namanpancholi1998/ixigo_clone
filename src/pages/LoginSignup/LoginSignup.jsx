import React, { useState } from "react";
import { useAuthContext } from "../../context/Auth/AuthProvider";
import loginSignupImg from "../../assets/images/logIn/login-signup-banner.png";
import LoginTab from "./Login";
import SignUpTab from "./Signup";

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-4">{children}</div>}
    </div>
  );
}

function LoginSignup() {
  const [tab, setTab] = useState(0);
  const handleTabSwitch = (newValue) => {
    setTab(newValue);
  };
  const { setShowLoginSignupForm, signUp } = useAuthContext();
  return (
    <div className="flex mx-auto h-[450px] max-w-[500px]">
      <img
        className="w-1/2 rounded-l-lg"
        src={loginSignupImg}
        alt="Login/Signup"
      />
      <div className="w-full px-10 py-2">
        <div className="flex">
          <div
            onClick={() => handleTabSwitch(0)}
            className={`flex-1 py-3 px-4 text-center border-b-2 ${
              tab === 0 ? "border-orange-600 text-orange-600" : "text-slate-500"
            } cursor-pointer`}
          >
            LOGIN
          </div>
          <div
            onClick={() => handleTabSwitch(1)}
            className={`flex-1 py-3 px-4 text-center border-b-2 ${
              tab === 1 ? "border-orange-600 text-orange-600" : "text-slate-500"
            } cursor-pointer`}
          >
            SIGNUP
          </div>
        </div>
        <CustomTabPanel value={tab} index={0}>
          <LoginTab />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <SignUpTab />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default LoginSignup;
