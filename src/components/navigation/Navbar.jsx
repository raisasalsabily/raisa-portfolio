"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HamMenuIcon from "../../../public/assets/icons/hamburger_menu.svg";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const toggleMenu = () => {
    if (isOpen) {
      setAnimationClass("slide-out");
      // Tunggu animasi selesai sebelum mengubah state
      setTimeout(() => {
        setIsOpen(false);
        setAnimationClass(""); // Reset animation class
      }, 300); // Durasi animasi slide-out
    } else {
      setIsOpen(true);
      setAnimationClass("slide-in");
    }
  };

  // Menghapus kelas animasi slide-out ketika menu ditutup
  useEffect(() => {
    if (!isOpen) {
      setAnimationClass("slide-out");
    }
  }, [isOpen]);

  return (
    <nav className="bg-white h-14 w-full flex justify-between items-center px-6 lg:px-16">
      <div className="flex gap-2 hover:cursor-pointer">
        <p className="font-pacifico text-h-md font-medium">👩🏻‍💻</p>
        <p className="font-pacifico text-h-md font-medium">Raisa</p>
      </div>

      <Image
        onClick={toggleMenu}
        src={HamMenuIcon}
        alt=""
        className="block lg:hidden w-6 h-6"
      />

      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-blizblue-50 z-40 flex items-center justify-center lg:hidden ${animationClass}`}
          onAnimationEnd={() => {
            // Hapus animasi slide-out setelah animasi selesai
            if (!isOpen) {
              setAnimationClass("");
            }
          }}
        >
          <button
            className="absolute top-6 right-6 text-h-md"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <div className="flex flex-col items-center gap-8 text-h-md font-sourceCodePro font-semibold">
            <a
              href="#shortprof__container"
              onClick={toggleMenu}
              className="my-2 text-xl"
            >
              about me
            </a>
            <a
              href="#skills__section"
              onClick={toggleMenu}
              className="my-2 text-xl"
            >
              skills
            </a>
            <a
              href="#projects__section"
              onClick={toggleMenu}
              className="my-2 text-xl"
            >
              projects
            </a>
            <a
              href="#contact__section"
              onClick={toggleMenu}
              className="my-2 text-xl"
            >
              contact me
            </a>
          </div>
        </div>
      )}

      <div className="hidden lg:flex gap-12 font-sourceCodePro text-h-sm font-semibold">
        <a href="#shortprof__container">about me</a>
        <a href="#skills__section">skills</a>
        <a href="#projects__section">projects</a>
        {/* <a href="">blog</a> */}
        <a href="#contact__section">contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;
