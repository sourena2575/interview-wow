import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 px-44">
      <div className="grid grid-cols-4 gap-x-16 gap-y-10 pt-16 border-b border-gray-600 pb-16">
        <span className="text-lg text-gray-400 ">Contact Us</span>
        <span className="text-lg text-gray-400 ">FAQ(s)</span>
        <span className="text-lg text-gray-400 col-span-2 ">
          Ask Us To Host Your Local Product
        </span>
        <span className="text-lg text-gray-400 ">About Us</span>
        <span className="text-lg text-gray-400 ">Report Page</span>
        <span className="text-lg text-gray-400 col-span-2 ">Drive For Us</span>
      </div>
      <div className="flex flex-row justify-between py-14 items-baseline">
        <span className=" text-gray-400 ">2020 Car2Cup Copy Right</span>
        <button className="bg-gray-600 rounded-lg w-24 h-10"></button>
      </div>
    </div>
  );
};

export default Footer;
