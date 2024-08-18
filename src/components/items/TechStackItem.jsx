import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const TechStackItem = ({ name = "name", img }) => {
  const { ref: refItem, inView: inViewItem } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id="techstack__item"
      ref={refItem}
      className={`flex items-center gap-3 lg:gap-5 ${
        inViewItem ? "entrance-scale-in-for-left" : "opacity-0"
      }`}
    >
      <Image src={img} alt={name} className="w-8 h-8" />
      <p className="text-b-sm">{name}</p>
    </div>
  );
};

export default TechStackItem;
