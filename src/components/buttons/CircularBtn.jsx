import React from "react";
import Image from "next/image";
import ClickHandImg from "/public/assets/vectors/click_hand.svg";

const CircularBtn = ({ text = "text", onClick }) => {
  return (
    <button
      onClick={onClick}
      id="circular__button"
      className="circular__button relative w-[138px] h-[138px] text-center hover:cursor-pointer"
    >
      <div
        id="second__circle"
        className="second__circle absolute top-1 -left-0.5 w-[138px] h-[144px] rounded-full border border-black bg-transparent pulse-regular"
      />

      <div
        id="circle__button"
        className="relative w-full h-full px-6 pb-4 rounded-full bg-blizblue-300 flex flex-col items-center justify-center"
      >
        <div>
          <Image src={ClickHandImg} alt="Click" />
          <p className="text-b-xsm">{text}</p>
        </div>
      </div>
    </button>
  );
};

export default CircularBtn;
