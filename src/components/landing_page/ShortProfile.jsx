"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import GitHubIcon from "../../../public/assets/icons/github.svg";
import LinkedinIcon from "../../../public/assets/icons/linkedin.svg";
import EmailIcon from "../../../public/assets/icons/email.svg";
import SwirlArrow from "../../../public/assets/vectors/swirl_arrow.svg";
import ChatBubble from "../bubbles/ChatBubble";
import ProfilePic from "../profile/ProfilePic";
import DownloadBtn from "../buttons/DownloadBtn";
import "./short-profile.css";

const colors = ["#92ddea", "#ffa5d8"];
const strings = ["Raisa", "Salsabil"];

const ShortProfile = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const getNextColor = useCallback(() => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }, []);

  useEffect(() => {
    // Ensure that the color changes only after typing is complete
    const interval = setInterval(() => {
      getNextColor();
    }, 5000); // Adjust time to match the pause duration

    return () => clearInterval(interval);
  }, [getNextColor]);

  return (
    <div
      id="shortprof__container"
      className="relative min-h-screen w-full text-white"
    >
      {/* background start */}
      <div
        id="shortprof__bg"
        className="w-[100vw] h-[100vh] top-0 left-0 absolute z-0 overflow-hidden gradient-bg"
      >
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
      {/* background end */}

      <div
        id="shortprof__content"
        className="relative z-20 bg-black bg-opacity-0 w-full h-screen"
      >
        <div
          id="content__container"
          className="px-12 flex flex-col items-center"
        >
          <div id="profile__picture" className="pt-10 pb-8 bg-red-300">
            <ProfilePic>
              <ChatBubble strings={["Hi..!", "Keep scrolling!"]} />
            </ProfilePic>
          </div>

          <div
            id="profile__title"
            className="font-prozaLibre text-h-md font-bold py-2"
          >
            Hi, my name is <span className="color-changing-text">Raisa!</span>
          </div>

          <div id="profile__desc" className="text-center leading-7 py-2">
            An enthusiastic <b>web developer</b>, focusing on{" "}
            <b>front-end development</b>. I can do <b>back-end</b> too tho 😉 I
            am a fresh graduate in <b>Information Technology</b> from{" "}
            <b>Gadjah Mada University</b>.
          </div>

          <div id="profile__social" className="py-4 flex gap-2">
            <Image
              src={GitHubIcon}
              alt="Raisa's GitHub"
              className="w-10 h-10"
            />
            <Image
              src={LinkedinIcon}
              alt="Raisa's LinkedIn"
              className="w-10 h-10"
            />
            <Image src={EmailIcon} alt="Raisa's Email" className="w-10 h-10" />
          </div>
        </div>

        {/* ------- download cv start ------- */}
        <div
          id="download__cv"
          className="absolute bottom-28 right-10 flex gap-2"
        >
          <p className="flex items-center mr-2 text-right">
            Download <br />
            my CV
          </p>

          <div>
            <DownloadBtn />
          </div>

          <div className="flex items-end">
            <Image
              src={SwirlArrow}
              alt="Raisa's CV"
              className="w-[40px] h-[70px]"
            />
          </div>
        </div>
        {/* ------- download cv end ------- */}
      </div>
    </div>
  );
};

export default ShortProfile;
