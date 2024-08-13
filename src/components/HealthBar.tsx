import React from "react";
import Image from "next/image";

const HealthBar = () => {
  return (
    <div className="relative">
      <Image
        src="img/health-bar.svg"
        width={652}
        height={64}
        alt="health bar"
      />
      <div className="absolute top-0 w-[calc(100%-56px)] h-full ml-[56px] flex items-center justify-center text-2xl drop-shadow-text">
        700/700
      </div>
      <div className="absolute -z-10 top-0 w-[calc(100%-56px)] h-full ml-[56px] bg-health-bar flex items-center" />
    </div>
  );
};

export default HealthBar;
