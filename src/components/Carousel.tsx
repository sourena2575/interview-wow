import React, { useState } from "react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import LeftIcon from "./icons/LeftIcon";
import RightIcon from "./icons/RightIcon";
import DotIcon from "./icons/DotIcon";

const CarouselFile = () => {
  const [carousel, setcarousel] = useState(3);
  const First = () => (
    <>
      <div className="col-span-1 mx-2">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1 mx-2">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
    </>
  );
  const Second = () => (
    <>
      <div className="col-span-1 mx-2">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1 mx-2">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
    </>
  );
  const Third = () => (
    <>
      <div className="col-span-1 mx-2">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1 mx-2">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img2} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img1} className="w-24 h-34" />
      </div>
    </>
  );
  const Forth = () => (
    <>
      <div className="col-span-1 mx-2">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1 mx-2">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img3} className="w-24 h-34" />
      </div>
      <div className="col-span-1">
        <img src={img4} className="w-24 h-34" />
      </div>
    </>
  );
  const carouselIncrement = () => {
    if (carousel === 4) {
      setcarousel(1);
    } else {
      setcarousel(carousel + 1);
    }
  };
  const carouselDecrement = () => {
    if (carousel === 1) {
      setcarousel(4);
    } else {
      setcarousel(carousel - 1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-12 mb-8 mx-auto">
        <div className="col-span-2 ml-auto flex items-center">
          <button onClick={carouselDecrement}>
            <LeftIcon className="text-blue-800" w="2rem" h="2rem" />
          </button>
        </div>
        {carousel === 1 && <First />}
        {carousel === 2 && <Second />}
        {carousel === 3 && <Third />}
        {carousel === 4 && <Forth />}
        <div className="col-span-2 mr-auto flex items-center">
          <button onClick={carouselIncrement}>
            <RightIcon className="text-blue-800" w="2rem" h="2rem" />
          </button>
        </div>
      </div>
      <div className="w-32 flex flex-row items-center mx-auto mb-32">
        <DotIcon
          className={carousel === 1 ? "text-blue-700" : "text-gray-600"}
          w="2rem"
          h="2rem"
        />
        <DotIcon
          className={carousel === 2 ? "text-blue-700" : "text-gray-600"}
          w="2rem"
          h="2rem"
        />
        <DotIcon
          className={carousel === 3 ? "text-blue-700" : "text-gray-600"}
          w="2rem"
          h="2rem"
        />
        <DotIcon
          className={carousel === 4 ? "text-blue-700" : "text-gray-600"}
          w="2rem"
          h="2rem"
        />
      </div>
    </>
  );
};

export default CarouselFile;
