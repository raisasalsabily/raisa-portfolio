import React from "react";
import Image from "next/image";
import ProjectImage from "/public/assets/images/project_image.jpg";
import Tag from "../tags/Tag";
import GitHubBtn from "../buttons/GitHubBtn";
import RightSlantBtn from "../buttons/RightSlantBtn";

const ProjectCard = ({}) => {
  return (
    <div id="project__item" className="w-full flex flex-col gap-4">
      <div className="relative w-full group">
        <Image
          src={ProjectImage}
          alt="Project Image"
          className="w-full rounded-xl border border-black"
        />

        {/* Overlay div */}
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl p-4">
          <p className="text-white text-xl">
            KandangKoo merupakan Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. KandangKoo merupakan Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
        </div>

        <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4">
          <RightSlantBtn />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div
          id="project__item__title"
          className="flex-1 font-prozaLibre font-medium text-h-sm truncate"
        >
          Capstone Project Capstone Project
        </div>

        <GitHubBtn />
      </div>

      <div id="project__item__tags" className="flex gap-2">
        <Tag text="IoT" />
        <Tag text="Web Development" />
      </div>

      <p id="project__item__contribution" className="leading-8">
        in charge of: React.js, Express.js, Tailwind
      </p>
    </div>
  );
};

export default ProjectCard;
