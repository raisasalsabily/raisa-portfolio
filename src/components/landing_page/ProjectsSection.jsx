import React from "react";
import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";
import SparkImg from "/public/assets/vectors/spark.svg";
import CircularBtn from "../buttons/CircularBtn";

const ProjectsSection = () => {
  return (
    <div className="pb-16 relative flex flex-col items-center lg:items-center bg-white text-black lg:px-24">
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
        <div className="w-full flex justify-center px-16 py-16 lg:py-24">
          <div
            id="read__more__projects"
            className="w-full lg:w-[80%] flex flex-col lg:flex-row items-center lg:justify-center lg:gap-x-32"
          >
            <p className="relative font-prozaLibre font-bold text-h-md lg:text-h-xl text-center lg:text-start">
              <Image
                src={SparkImg}
                alt="Spark vector"
                className="absolute -top-12 -left-12 lg:-top-24 lg:-left-28 lg:w-[170px]"
              />
              Wanna read <br className="hidden lg:block" />
              more projects?
            </p>

            <div className="py-5">
              <CircularBtn text="click for more projects" />
            </div>
          </div>
        </div>
        {/*  read more end*/}
      </div>
    </div>
  );
};

export default ProjectsSection;
