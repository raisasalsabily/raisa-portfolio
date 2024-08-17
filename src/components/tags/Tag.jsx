import React from "react";

const Tag = ({ text }) => {
  return (
    <div id="tag" className="px-3 py-2 w-max bg-illusion-200">
      {text}
    </div>
  );
};

export default Tag;
