import React from "react";
import Image from "next/image";

const ProfileBar = () => {
  return (
    <div className="mb-4 -ml-16 relative">
      <Image
        src="img/profile-bar.svg"
        width={712}
        height={100}
        alt="profile bar"
      />
      <Image
        src="img/no-profile-picture.svg"
        width={92}
        height={92}
        alt="profile bar"
        className="absolute top-0 left-[52px] transition-all duration-300 cursor-pointer hover:contrast-125 hover:brightness-150 drop-shadow-button"
      />
      <h2 className="absolute top-[58px] left-[228px] text-2xl">
        Not logged in
      </h2>
    </div>
  );
};

export default ProfileBar;
