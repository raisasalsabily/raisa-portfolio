import React from "react";
import Image from "next/image";
import DownloadIcon from "../../../public/assets/icons/download_rounded.svg";

const DownloadBtn = () => {
  const handleDownload = () => {
    // URL path to your PDF file in the public directory
    const pdfUrl = "/assets/docs/sample.pdf";
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "sample.pdf"; // Specify the download file name
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="flex items-center justify-center w-24 lg:w-[130px] h-24 lg:h-[130px] rounded-full border border-white bg-transparent">
      <div
        onClick={handleDownload}
        className="flex items-center justify-center w-16 lg:w-[90px] h-16 lg:h-[90px] rounded-full border border-white bg-transparent hover:cursor-pointer"
      >
        <Image
          src={DownloadIcon}
          alt="Raisa's projects"
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default DownloadBtn;
