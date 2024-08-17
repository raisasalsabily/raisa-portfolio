import React from "react";
import Image from "next/image";

const TechStackItem = ({ name = "name", img }) => {
  return (
    <div id="techstack__item" className="flex items-center gap-3 lg:gap-5">
      <Image src={img} alt={name} className="w-8 h-8" />
      <p className="text-b-sm">{name}</p>
    </div>
  );
};

export default TechStackItem;
