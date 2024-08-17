import React from "react";

const RunningItem = ({ text, style }) => {
  return (
    <>
      <p
        className={`font-bold text-h-md ${
          style === "solid" ? "text-transparent stroke-text" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px black;
        }
      `}</style>
    </>
  );
};

export default RunningItem;
