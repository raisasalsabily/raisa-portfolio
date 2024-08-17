import React from "react";
import Image from "next/image";
import Arrow from "/public/assets/vectors/arrow_right_slant.svg";

const RightSlantBtn = () => {
  return (
    <Image
      src={Arrow}
      className="w-12 h-12 p-0.5 rounded-md bg-illusion-200 drop-shadow-xl group-hover:drop-shadow-[-4px_-4px_12px_rgba(255,255,255,0.8)] duration-1000 text-black hover:cursor-pointer"
    />
  );
};

export default RightSlantBtn;
