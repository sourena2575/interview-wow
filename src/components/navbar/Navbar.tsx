import React from "react";
import image from "./1.jpg";
import image2 from "./2.jpg";
import UserIcon from "./UserIcon";
const Navbar = () => {
  return (
    <header className="h-20 p-8 flex flex-row justify-between">
      <div className="flex flex-row ">
        <img className=" pr-12 h-16 object-cover " src={image} alt="a" />
        <span className="text-gray-600 px-12 text-lg pt-2">Home</span>
        <span className="text-gray-600 px-12 text-lg pt-2">Store</span>
      </div>
      <div className="flex items-center">
        <UserIcon style="w-6 h-6 relative z-0" />
        <button className=" h-4 w-4 bg-red-600 rounded-full text-xsm pb-2 text-white -ml-2 z-50">
          1
        </button>
        <img className="ml-20 -mr-6" src={image2} alt="q" />
      </div>
    </header>
  );
};

export default Navbar;
