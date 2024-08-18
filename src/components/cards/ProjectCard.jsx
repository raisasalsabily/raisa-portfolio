import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Tag from "../tags/Tag";
import GitHubBtn from "../buttons/GitHubBtn";
import RightSlantBtn from "../buttons/RightSlantBtn";

const ProjectCard = ({
  title,
  thumbnail,
  tags,
  contrib,
  short_desc,
  link,
  github_fe,
  github_be,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id="project__item"
      ref={ref}
      className={`w-full flex flex-col gap-4 ${
        inView ? "entrance-fade-in-bot" : "opacity-0"
      }`}
    >
      <div className="relative w-full group">
        <div className="w-full h-[280px]">
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl border border-black"
          />
        </div>
        {/* Overlay div */}
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl p-4">
          <p className="text-white text-xl">{short_desc}</p>
        </div>

        <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4">
          <RightSlantBtn link={link} />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div
          id="project__item__title"
          className="flex-1 font-prozaLibre font-medium text-h-sm truncate"
        >
          {title}
        </div>

        <GitHubBtn link={github_fe} />
      </div>

      <div id="project__item__tags" className="flex gap-2 flex-wrap">
        {tags?.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>

      <p id="project__item__contribution" className="leading-8">
        In charge of: {contrib}
      </p>
    </div>
  );
};

export default ProjectCard;
