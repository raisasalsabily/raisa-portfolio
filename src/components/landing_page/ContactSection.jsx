"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Oval from "../../../public/assets/vectors/oval_doodle.svg";
import GitHubIcon from "/public/assets/icons/github_blk.svg";
import LinkedinIcon from "/public/assets/icons/linkedin_blk.svg";
import EmailIcon from "/public/assets/icons/email_blk.svg";

const ContactSection = () => {
  const { ref: refContact, inView: inViewContact } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id="contact__section"
      className={`py-6 lg:py-20 mb-36 flex flex-col gap-6 lg:gap-36 items-center`}
    >
      <div className={`py-12 flex justify-center items-center`}>
        <Image
          src={Oval}
          ref={refContact}
          className={`absolute z-0 w-[60%] ${
            inViewContact ? "entrance-scale-in-for-cen" : "opacity-0"
          }`}
        />

        <p
          ref={refContact}
          className={`z-10 font-prozaLibre font-bold text-h-md lg:text-h-2xl text-center ${
            inViewContact ? "entrance-scale-in-for-cen" : "opacity-0"
          }`}
        >
          stalk or talk <br className="block lg:hidden" />
          with me ;)
        </p>
      </div>

      <div
        id="profile__social"
        ref={refContact}
        className={`py-4 flex gap-2 ${
          inViewContact ? "entrance-fade-in-bot delay-05" : "opacity-0"
        }`}
      >
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
  );
};

export default ContactSection;
