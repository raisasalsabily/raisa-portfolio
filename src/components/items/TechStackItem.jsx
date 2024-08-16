import React from "react";
import Image from "next/image";

const TechStackItem = ({ text = "text", img }) => {
  return (
    <div id="techstack__item" className="flex items-center gap-3">
      <Image src={img} className="w-8 h-8" />
      <p className="text-b-sm">{text}</p>
    </div>
  );
};

export default TechStackItem;
