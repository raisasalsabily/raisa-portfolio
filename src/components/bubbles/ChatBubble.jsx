import React from "react";
import Typewriter from "typewriter-effect";

const ChatBubble = ({ strings = ["Hi..!", "Download my full portfolio!"] }) => {
  return (
    <div
      id="chat__bubble"
      className="relative py-2 px-4 min-w-12 max-w-96 lg:whitespace-nowrap rounded-full bg-white text-black text-b-xsm lg:text-b-md"
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
