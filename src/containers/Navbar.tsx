import React from "react";
import UserIcon from "../components/icons/UserIcon";
import UnknownIcon from "../components/icons/UnknownIcon";

const Navbar = () => {
  return (
    <header className="h-10 bg-blue-600  shadow flex flex-row justify-between px-2 items-center">
      <div className="flex flex-row justify-start">
        <UnknownIcon w="2rem" h="2rem" className="text-white mx-2" />
        <span className="px-2 text-white">Start</span>
        <span className="px-2 text-white">WOW Stories</span>
        <span className="px-2 text-white">WOW Magazine</span>
        <span className="px-2 text-white">Top Users</span>
        <span className="px-2 text-white">Rules</span>
        <span className="px-2 text-white">Contact Us</span>
      </div>
      <div className="flex flex-row justify-end items-center">
        <div className="bg-blue-400 rounded-lg flex flex-row items-center p-1">
          <span className="text-white font-semibold border-r text-sm pr-2">
            Register
          </span>
          <span className="text-white font-semibold pl-2 text-sm ">Login</span>
        </div>
        <UserIcon w="1.5rem" h="1.5rem" className="text-white ml-2 " />
      </div>
    </header>
  );
};

export default Navbar;
