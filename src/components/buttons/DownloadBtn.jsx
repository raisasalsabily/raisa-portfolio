import React from "react";
import Image from "next/image";
import DownloadIcon from "../../../public/assets/icons/download_rounded.svg";

const DownloadBtn = () => {
  return (
    <div className="flex items-center justify-center w-24 h-24 rounded-full border border-white bg-transparent">
      <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-transparent">
        <Image src={DownloadIcon} alt="Raisa's CV" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default DownloadBtn;
