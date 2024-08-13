import React from "react";
import Image from "next/image";

const HealthBar = () => {
  return (
    <div className="-ml-4">
      <Image
        src="img/health-bar.svg"
        width={4 * 163}
        height={4 * 16}
        alt="health bar"
      />
    </div>
  );
};

export default HealthBar;
