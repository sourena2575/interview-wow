import React, { FC } from "react";
import CartIcon from "../../containers/main/CartIcon";
import PayIcon from "../../containers/main/PayIcon";
import RelaxIcon from "../../containers/main/RelaxIcon";

const Card: FC<{ title?: string; icon?: string }> = ({ title, icon }) => {
  return (
    <div className="border rounded-lg border-gray-500 w-full h-76">
      <p className="text-center text-gray-700 py-8 text-xl">{title}</p>
      {icon === "cart" && <CartIcon style="w-12 h-12 text-red-500 mx-auto" />}
      {icon === "pay" && <PayIcon style="w-12 h-12 text-red-500 mx-auto" />}
      {icon === "relax" && <RelaxIcon style="w-12 h-12 text-red-500 mx-auto" />}
      <div className="px-8 py-8">
        <span className="text-gray-500">
          Pick. It was popularised in the 1960s with the release of Letraset
          sheets containing
        </span>
      </div>
    </div>
  );
};

export default Card;
