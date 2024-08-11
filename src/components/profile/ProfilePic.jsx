import React from "react";

const ProfilePic = ({ children }) => {
  return (
    <div className="bg-red-400 flex items-center justify-center h-24 w-24 rounded-full bg-transparent border border-white">
      <div className="relative h-20 w-20 rounded-full bg-illusion-300">
        <div className="absolute left-16 -top-3">{children}</div>
      </div>
    </div>
  );
};

export default ProfilePic;
