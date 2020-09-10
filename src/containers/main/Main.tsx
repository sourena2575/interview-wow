import React from "react";
import image from "./3.jpg";
import Card from "../../components/card/Card";
const Main = () => {
  return (
    <div className="pt-20 pl-12">
      <p className="text-gray-600">About us</p>
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <h2 className="text-3xl pt-14 text-gray-800 pb-6">About us</h2>
          <span className=" text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing
          </span>
          <h2 className="text-3xl pt-8 text-gray-800 pb-6">Our Goal</h2>
          <span className=" text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </span>
        </div>
        <div className="col-span-2 pl-10 pt-14">
          <img src={image} alt="2" className="" />
        </div>
      </div>
      <div className="pt-14 mb-14">
        <p className="text-center text-2xl text-gray-800">What do we do</p>
        <div className="grid grid-cols-3 gap-8 pt-8">
          <Card icon="cart" title="Select" />
          <Card icon="pay" title="Pay" />
          <Card icon="relax" title="Relax" />
        </div>
      </div>
    </div>
  );
};

export default Main;
