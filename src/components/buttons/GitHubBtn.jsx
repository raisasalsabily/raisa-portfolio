import React from "react";
import Image from "next/image";
import Arrow from "/public/assets/vectors/half_right_arrow.svg";

const GitHubBtn = ({ link }) => {
  return (
    <a
      id="github__button"
      target="_blank"
      href={link}
      className="w-16 flex flex-col gap-y-0.5 flex-shrink-0 hover:cursor-pointer"
    >
      <p>GitHub</p>

      <div className="flex justify-end">
        <Image src={Arrow} />
      </div>
    </a>
  );
};

export default GitHubBtn;
