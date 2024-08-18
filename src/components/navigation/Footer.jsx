import React from "react";

const Footer = () => {
  return (
    <div className="font-prozaLibre bottom-0 bg-black text-white h-[100px] w-full flex flex-col gap-2 justify-center items-center px-8">
      <div className="flex text-h-md font-semibold hover:cursor-pointer">
        <p className="font-pacifico text-h-md font-medium">👩🏻‍💻</p>
        <p className="font-pacifico text-h-md">Raisa</p>
      </div>

      <p className="text-b-sm">Copyright @ 2024 Raisa Salsabil</p>
    </div>
  );
};

export default Footer;
