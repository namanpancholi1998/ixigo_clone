import React from "react";
import { useAuthContext } from "../.../../../../context/Auth/AuthProvider";
import userSvg from "../../../assets/navbar/svgs/userFilled.svg";
import { IoMdLogOut } from "react-icons/io";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Profile({ toggleLoginModal, isLoggedIn }) {
  const { user, logOut } = useAuthContext();
  return (
    <>
      {!isLoggedIn ? (
        <>
          <button onClick={toggleLoginModal}>
            <div className=" rounded-lg hover:text-orange-600   flex truncate flex-auto items-center  w-[168px] h-11 px-[10px] gap-2 m-3  cursor-pointer max-sm:w-fit"></div>
          </button>
        </>
      ) : (
        <div
          onClick={logOut}
          className="user  relative  rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit overflow-visible"
        >
          <span className="logo-profile inline-block w-8 h-8 logo-nav mr-2"></span>
          <span className="text-orange-500 font-medium text-md text-ellipsis text-center ">
            Hey, {user?.name.split(" ")[0] || "User"}
          </span>
        </div>
      )}
    </>
  );
}

export default Profile;
