import React from "react";
import Image from "next/image";
import GitHubIcon from "../../../public/assets/icons/github.svg";
import LinkedinIcon from "../../../public/assets/icons/linkedin.svg";
import EmailIcon from "../../../public/assets/icons/email.svg";

const ShortProfile = () => {
  return (
    <div
      id="shortprof__container"
      className="min-h-screen w-full bg-blizblue-100 text-white"
    >
      <div id="shortprof__bg" className="bg-blue-200">
        <div
          id="shortprof__trans__layer"
          className="bg-black bg-opacity-40 w-full h-screen"
        >
          <div
            id="content__container"
            className="px-12 flex flex-col items-center"
          >
            <div id="profile__picture" className="bg-blizblue-700 py-8">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-transparent border border-white">
                <img className="h-16 w-16 rounded-full bg-illusion-300"></img>
              </div>
            </div>

            <div
              id="profile__title"
              className="font-prozaLibre text-h-md font-bold py-2"
            >
              Hi, my name is Raisa!
            </div>

            <div id="profile__desc" className="text-center leading-7 py-2">
              An enthusiastic <b>web developer</b>, focusing on{" "}
              <b>front-end development</b>. I can do <b>back-end</b> too tho 😉
              I am a fresh graduate in <b>Information Technology</b> from{" "}
              <b>Gadjah Mada University</b>.
            </div>

            <div id="profile__social">
              <Image
                src={GitHubIcon}
                alt="Raisa's GitHub"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div id="download__cv">cv</div>
        </div>
      </div>
    </div>
  );
};

export default ShortProfile;
