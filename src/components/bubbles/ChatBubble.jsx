import React from "react";
import Typewriter from "typewriter-effect";

const ChatBubble = ({ strings = ["Hi..!", "Keep scrolling!"] }) => {
  return (
    <div
      id="chat__bubble"
      className="relative w-min max-w-32 py-2 px-4 rounded-full bg-white text-black text-b-xsm"
    >
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
      <div className="w-3 h-3 absolute -left-[7px] top-3 bg-white clip-chat-bubble"></div>
      <style jsx>{`
        .clip-chat-bubble {
          clip-path: polygon(100% 20%, 0 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default ChatBubble;
