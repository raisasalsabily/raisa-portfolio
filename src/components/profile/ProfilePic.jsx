import React from "react";
import Image from "next/image";
import ProfPic from "../../../public/assets/images/profile_picture.jpg";

const ProfilePic = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-[110px] lg:h-[140px] w-[110px] lg:w-[140px] rounded-full bg-transparent border border-white">
      <div className="relative flex items-center justify-center h-24 lg:h-[120px] w-24 lg:w-[120px] rounded-full bg-transparent border border-white">
        <div className="h-20 lg:h-[92px] w-20 lg:w-[92px] rounded-full overflow-hidden">
          <Image
            src={ProfPic}
            alt="Raisa's Profile Picture"
            layout="fill"
            objectFit="cover"
            className="hover:cursor-pointer rounded-full"
          />
        </div>
        <div className="absolute left-20 lg:left-24 -top-0 z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
