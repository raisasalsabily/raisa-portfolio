import React from "react";

const ChatBubble = ({ text = "text" }) => {
  return (
    <div
      id="chat__bubble"
      className="relative w-min py-2 px-4 rounded-full bg-white text-black"
    >
      {text}
      <div className="w-3 h-3 absolute -left-[4px] bottom-1 clip-chat-bubble bg-white"></div>
    </div>
  );
};

export default ChatBubble;
