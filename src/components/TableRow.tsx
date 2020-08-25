import React, { FC } from "react";
import UserIcon from "./icons/UserIcon";

const TableRow: FC<{ item: any; index: any }> = ({ item, index }) => {
  return (
    <div
      className={`grid grid-cols-12 py-2 ${index % 2 === 0 && "bg-gray-200"}`}
    >
      <div className="col-span-1 flex flex-row items-center">
        <span className="px-1">{item.n}</span>
        <UserIcon className="" w="1rem" h="1rem" />
      </div>
      <div className="col-span-2 text-left ">{item.name}</div>
      <div className="col-span-1 text-left">{item.score}</div>
      <div className="col-span-1 text-left">{item.grade}</div>
      <div className="col-span-1 text-left">{item.words}</div>
      <div className="col-span-6 "></div>
    </div>
  );
};

export default TableRow;
