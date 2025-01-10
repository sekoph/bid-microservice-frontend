"use client";

import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";



const Header = () => {
  const user = useSelector((state: RootState) => state.user.userDetails)
  return (
    <header className="flex flex-col p-4 w-full border-b border-b-black">
      <div className="flex flex-row justify-between">
        <div className="flex justify-items-start gap-2">
        <FaUserCircle style={{ fontSize: "24px", color: "black" }} />
        </div>
        <div className="flex justify-items-end gap-2">
        <FaBell style={{ fontSize: "24px", color: "black" }} />
        <MdOutlineSettingsSuggest style={{ fontSize: "26px", color: "black" }} />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text- font-semibold">Welcome,&nbsp;{user?.username}</h1>
      </div>
    </header>
  );
};

export default Header;
