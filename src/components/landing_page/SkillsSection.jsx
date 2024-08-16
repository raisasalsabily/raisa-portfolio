import React from "react";
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

const SkillsSection = () => {
  return (
    <div className="flex justify-center bg-black">
      <div
        id="skills__container"
        className="w-[90%] flex flex-col items-center text-white py-8"
      >
        <h4
          id="skills__title"
          className="font-prozaLibre font-bold text-h-md mb-6"
        >
          Skills
        </h4>

        {/* items start */}
        <div id="skills__items" className="flex flex-col items-center gap-10">
          {/* tech stacks start */}
          <div
            id="techstacks__container"
            className="grid grid-cols-2 gap-y-6 gap-x-6"
          >
            {techStackData?.map(({ name, img }, index) => (
              <TechStackItem key={index} text={name} img={img} />
            ))}
          </div>
          {/* tech stacks end */}

          {/* others start */}
          <div
            id="others__container"
            className="w-[75%] flex flex-col items-center gap-4"
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
  );
};

export default SkillsSection;
