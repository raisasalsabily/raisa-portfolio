"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../cards/ProjectCard";
import SparkImg from "/public/assets/vectors/spark.svg";
import CircularBtn from "../buttons/CircularBtn";
import ProjectsData from "../../data/projects.json";

const ProjectsSection = () => {
  const handleDownload = () => {
    // URL path to your PDF file in the public directory
    const pdfUrl = "/assets/docs/Raisa_Salsabil_Yusriyya_Portfolio.pdf";
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Raisa_Salsabil_Yusriyya_Portfolio.pdf"; // Specify the download file name
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };

  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refReadMore, inView: inViewReadMore } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id="projects__section"
      className="pb-16 relative flex flex-col items-center lg:items-center bg-white text-black lg:px-24"
    >
      <div
        id="projects__container"
        className="w-[90%] flex flex-col items-center lg:items-start py-8"
      >
        <h4
          id="projects__title"
          ref={refTitle}
          className={`mt-4 mb-12 font-prozaLibre font-bold text-h-md lg:text-h-xl  ${
            inViewTitle ? "entrance-fade-in-bot" : "opacity-0"
          }`}
        >
          Projects
        </h4>

        {/* project items start */}
        <div
          id="project__items"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-12 gap-x-6 lg:gap-x-12"
        >
          {ProjectsData?.map(
            ({
              id,
              title,
              thumbnail,
              tags,
              contrib,
              short_desc,
              link,
              github_fe,
              github_be,
            }) => (
              <ProjectCard
                key={id}
                title={title}
                thumbnail={thumbnail}
                tags={tags}
                contrib={contrib}
                short_desc={short_desc}
                link={link}
                github_fe={github_fe}
                github_be={github_be}
              />
            )
          )}
        </div>
        {/* project items end */}

        {/*  read more start*/}
        <div className="w-full flex justify-center px-16 py-16 lg:py-24">
          <div
            id="read__more__projects"
            ref={refReadMore}
            className={`w-full lg:w-[80%] flex flex-col lg:flex-row items-center lg:justify-center lg:gap-x-32 ${
              inViewReadMore ? "entrance-fade-in-bot" : "opacity-0"
            }`}
          >
            <p
              className={`relative font-prozaLibre font-bold text-h-md lg:text-h-xl text-center lg:text-start`}
            >
              <Image
                src={SparkImg}
                alt="Spark vector"
                className="absolute -top-12 -left-12 lg:-top-24 lg:-left-28 lg:w-[170px]"
              />
              Wanna read <br className="hidden lg:block" />
              more projects?
            </p>

            <div className="py-5">
              <CircularBtn
                text="click for more projects"
                onClick={handleDownload}
              />
            </div>
          </div>
        </div>
        {/*  read more end*/}
      </div>
    </div>
  );
};

export default ProjectsSection;
