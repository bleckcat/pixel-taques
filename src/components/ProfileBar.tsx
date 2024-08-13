import React from "react";
import Image from "next/image";

const ProfileBar = () => {
  return (
    <div className="mb-4 -ml-16 relative">
      <Image
        src="img/profile-bar.svg"
        width={4 * 178}
        height={4 * 25}
        alt="profile bar"
      />
      <h2 className="absolute top-[32px]">Not logged in</h2>
    </div>
  );
};

export default ProfileBar;
