import React from "react";
import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="pb-16 relative flex flex-col items-center lg:items-start bg-white text-black lg:px-24">
      <div
        id="projects__container"
        className="w-[90%] flex flex-col items-center lg:items-start py-8"
      >
        <h4
          id="projects__title"
          className="mt-4 mb-12 font-prozaLibre font-bold text-h-md lg:text-h-xl"
        >
          Projects
        </h4>

        {/* project items start */}
        <div
          id="project__items"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-12 gap-x-6 lg:gap-x-12"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        {/* project items end */}

        {/*  read more start*/}
        <div id="read__more__projects"></div>
        {/*  read more end*/}
      </div>
    </div>
  );
};

export default ProjectsSection;
