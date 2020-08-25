import React from "react";
import UnknownIcon from "../components/icons/UnknownIcon";
import Image from "../components/assets/nokia-9_1x.png";
const Header = () => {
  return (
    <>
      <div className="bg-blue-500 h-120 grid grid-cols-2 relative">
        <div className="flex flex-col  items-center">
          <UnknownIcon w="3rem" h="3rem" className="text-white mt-16" />
          <h1 className="text-4xl text-white font-semibold">WORLD OF WORDS</h1>
          <div className="flex flex-row items-baseline pt-6">
            <span className="text-3xl opacity-75 text-white font-bold pr-3">
              Compete with{" "}
            </span>
            <span className="text-5xl opacity-75 text-white font-bold">
              {" "}
              70048
            </span>
          </div>
          <p className="text-3xl opacity-75 text-white font-bold">
            English learners in World
          </p>
          <div className="flex flex-row justify-between mt-10">
            <div className="bg-black flex flex-row p-1 items-center rounded-md">
              <UnknownIcon w="2rem" h="2rem" className="text-white mx-4" />
              <div className="flex flex-col pr-4">
                <span className="text-white text-xs">GET IT ON</span>
                <span className="text-white font-bold">Kanoon.ir</span>
              </div>
            </div>
            <div className="bg-black flex flex-row p-1 items-center rounded-md ml-8">
              <UnknownIcon w="2rem" h="2rem" className="text-white mx-4" />
              <div className="flex flex-col pr-4">
                <span className="text-white text-xs">GET IT ON</span>
                <span className="text-white font-bold">CafeBazar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={Image} className="object-cover w-8/12 h-w-10/12" alt="s" />
        </div>
        <button
          className="bg-red-600 rounded-full px-4 text-lg py-1 font-bold text-white w-32 absolute"
          style={{ bottom: -18, left: "45%" }}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default Header;
