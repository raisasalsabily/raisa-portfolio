import React from "react";

const Tag = ({ text }) => {
  return (
    <div
      id="tag"
      className="text-b-sm px-1 py-0.5 lg:px-2 lg:py-1 w-max bg-illusion-200"
    >
      {text}
    </div>
  );
};

export default Tag;
