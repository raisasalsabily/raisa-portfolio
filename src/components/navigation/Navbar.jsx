// "use client";
// import React, { useState, useEffect } from "react";
import Image from "next/image";
import HamMenuIcon from "../../../public/assets/icons/hamburger_menu.svg";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 bg-white h-16 w-full flex justify-between items-center px-8">
      <p className="font-prozaLibre text-h-md font-medium">👩🏻‍💻</p>

      <Image src={HamMenuIcon} alt="" className="hidden w-6 h-6" />
    </nav>
  );
};

export default Navbar;
