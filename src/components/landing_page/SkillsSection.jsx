"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DiamondDoodle from "/public/assets/vectors/diamond_doodle.svg";
import TechStackItem from "../items/TechStackItem";
import ReactJs from "/public/assets/images/tech_stacks/reactjs.svg";
import NextJs from "/public/assets/images/tech_stacks/nextjs.svg";
import NodeJs from "/public/assets/images/tech_stacks/nodejs.svg";
import ExpressJs from "/public/assets/images/tech_stacks/expressjs.svg";
import TailwindCSS from "/public/assets/images/tech_stacks/tailwindcss.svg";
import Sass from "/public/assets/images/tech_stacks/sass.svg";
import CSS3 from "/public/assets/images/tech_stacks/css3.svg";
import HTML5 from "/public/assets/images/tech_stacks/html5.svg";
import Javascript from "/public/assets/images/tech_stacks/javascript.svg";
import Python from "/public/assets/images/tech_stacks/python.svg";
import Csharp from "/public/assets/images/tech_stacks/csharp.svg";
import MongoDB from "/public/assets/images/tech_stacks/mongodb.svg";
import PostgreSQL from "/public/assets/images/tech_stacks/postgresql.svg";
import MySQL from "/public/assets/images/tech_stacks/mysql.svg";
import Git from "/public/assets/images/tech_stacks/git.svg";
import Azure from "/public/assets/images/tech_stacks/azure.svg";
import AWS from "/public/assets/images/tech_stacks/aws.svg";
import Figma from "/public/assets/images/tech_stacks/figma.svg";
import RunningItem from "../running_text/RunningItem";

const techStackData = [
  {
    name: "React.js",
    img: ReactJs,
  },
  {
    name: "Next.js",
    img: NextJs,
  },
  {
    name: "Node.js",
    img: NodeJs,
  },
  {
    name: "Express.js",
    img: ExpressJs,
  },
  {
    name: "TailwindCSS",
    img: TailwindCSS,
  },
  {
    name: "Sass",
    img: Sass,
  },
  {
    name: "CSS3",
    img: CSS3,
  },
  {
    name: "HTML5",
    img: HTML5,
  },
  {
    name: "Javascript",
    img: Javascript,
  },
  {
    name: "Python",
    img: Python,
  },
  {
    name: "C#",
    img: Csharp,
  },
  {
    name: "MongoDB",
    img: MongoDB,
  },
  {
    name: "PostgreSQL",
    img: PostgreSQL,
  },
  {
    name: "MySQL",
    img: MySQL,
  },
  {
    name: "Git",
    img: Git,
  },
  {
    name: "Azure",
    img: Azure,
  },
  {
    name: "AWS",
    img: AWS,
  },
  {
    name: "Figma",
    img: Figma,
  },
];

const RunningTextData = [
  {
    text: "&lt;&gt;",
    style: "solid",
  },
  {
    text: "web development",
    style: "solid",
  },
  {
    text: "&lt;&gt;",
    style: "transparent",
  },
  {
    text: "project management",
    style: "transparent",
  },
  {
    text: "&lt;&gt;",
    style: "solid",
  },
  {
    text: "read my portfolio",
    style: "solid",
  },
  {
    text: "&lt;&gt;",
    style: "transparent",
  },
  {
    text: "web development",
    style: "transparent",
  },
  {
    text: "&lt;&gt;",
    style: "solid",
  },
  {
    text: "project management",
    style: "solid",
  },
  {
    text: "&lt;&gt;",
    style: "transparent",
  },
  {
    text: "download my CV",
    style: "transparent",
  },
];

const SkillsSection = () => {
  return (
    <div>
      <div className="pb-16 relative flex flex-col items-center lg:items-start bg-black lg:px-24">
        <Image
          src={DiamondDoodle}
          className="w-[100px] lg:w-[400px] absolute right-8 lg:right-20 top-2 lg:top-36"
        />
        <div
          id="skills__container"
          className="w-[90%] flex flex-col items-center lg:items-start text-white py-8"
        >
          <h4
            id="skills__title"
            className="mb-12 lg:mb-6 font-prozaLibre font-bold text-h-md lg:text-h-xl"
          >
            Skills
          </h4>

          {/* items start */}
          <div id="skills__items" className="flex flex-col items-center gap-10">
            {/* tech stacks start */}
            <div
              id="techstacks__container"
              className="grid grid-cols-2 gap-y-6 gap-x-6 lg:gap-x-28"
            >
              {techStackData?.map(({ name, img }, index) => (
                <TechStackItem key={index} text={name} img={img} />
              ))}
            </div>
            {/* tech stacks end */}

            {/* others start */}
            <div
              id="others__container"
              className="w-[75%] lg:w-full flex flex-col items-center lg:items-start gap-4"
            >
              <h3 className="font-prozaLibre text-h-sm font-bold">Others</h3>
              <p className="text-center leading-10">
                Microsoft Word, Excel, and Power Point
              </p>
            </div>
            {/* others end */}
          </div>
          {/* items end */}
        </div>
      </div>

      <div id="skills__running__text">
        <Marquee
          speed={20}
          direction="left"
          loop={0}
          gradient={false}
          pauseOnHover={true}
          className="font-prozaLibre h-[70px] bg-blizblue-200"
        >
          <div className="flex items-center gap-x-8 pl-8">
            {RunningTextData?.map(({ text, style }, index) => (
              <RunningItem key={index} text={text} style={style} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsSection;
