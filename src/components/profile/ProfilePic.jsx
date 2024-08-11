import React from "react";

const ProfilePic = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-24 lg:h-[120px] w-24 lg:w-[120px] rounded-full bg-transparent border border-white">
      <div className="relative h-20 lg:h-[92px] w-20 lg:w-[92px] rounded-full bg-illusion-300">
        <div className="absolute left-16 -top-3">{children}</div>
      </div>
    </div>
  );
};

export default ProfilePic;
