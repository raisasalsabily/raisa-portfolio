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

  useEffect(() => {
    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(() => {
        move();
      });
    }

    function handleMouseMove(event) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    document.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="shortprof__container"
      className="relative w-full min-h-screen text-white"
    >
      {/* background start */}
      <div
        id="shortprof__bg"
        className="w-full h-full top-0 left-0 absolute z-0 overflow-hidden gradient-bg"
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      {/* background end */}

      <div
        id="shortprof__content"
        className="lg:flex lg:items-center relative z-20 bg-black bg-opacity-30 w-full h-screen lg:px-32 lg:py-12"
      >
        <div className="pt-24 lg:pt-0">
          <div
            id="profile__picture"
            className="pt-10 pb-8 flex justify-center lg:justify-start"
          >
            <ProfilePic>
              <ChatBubble />
            </ProfilePic>
          </div>

          <div
            id="text__content__container"
            className="px-12 lg:px-48 flex flex-col items-center"
          >
            <div
              id="profile__title"
              className="font-prozaLibre text-h-md lg:text-h-xl font-bold py-2"
            >
              Hi, my name is <span className="color-changing-text">Raisa!</span>
            </div>

            <div
              id="profile__desc"
              className="text-center leading-7 py-2 lg:text-h-sm"
            >
              An enthusiastic <b>web developer</b>, focusing on{" "}
              <b>front-end development</b>.<br /> I can do <b>back-end</b> too
              tho 😉 I am a fresh graduate in <b>Information Technology</b> from{" "}
              <b>Gadjah Mada University</b>.
            </div>

            <div id="profile__social" className="py-4 flex gap-2">
              <a
                href="https://github.com/raisasalsabily"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GitHubIcon}
                  alt="Raisa's GitHub"
                  className="w-10 lg:w-12 h-10 lg:h-12 hover:cursor-pointer"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/raisa-salsabil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LinkedinIcon}
                  alt="Raisa's LinkedIn"
                  className="w-10 lg:w-12 h-10 lg:h-12 hover:cursor-pointer"
                />
              </a>

              <a
                href="mailto:raisa.salsabil@mail.ugm.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={EmailIcon}
                  alt="Raisa's Email"
                  className="w-10 lg:w-12 h-10 lg:h-12 hover:cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* ------- download cv start ------- */}
          <div
            id="download__cv"
            className="flex gap-2 absolute bottom-20 right-6 lg:relative lg:bottom-auto lg:right-auto lg:flex-row lg:justify-end lg:gap-2"
          >
            <p className="flex items-center mr-2 text-right lg:text-b-xl">
              Download my complete
              <br />
              portfolio projects
            </p>

            <div>
              <DownloadBtn />
            </div>

            <div className="flex items-end">
              <Image
                src={SwirlArrow}
                alt="Raisa's CV"
                className="w-[40px] h-[70px] swirl-arrow"
              />
            </div>
          </div>
          {/* ------- download cv end ------- */}
        </div>
      </div>
    </div>
  );
};

export default ShortProfile;
