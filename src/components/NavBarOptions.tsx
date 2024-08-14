import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NavButton from "./NavButton";
import { ConfigContext } from "@/context/configurations";
import { UiSizes } from "@/configuration/ui";

const NavBarOptions = () => {
  const { setUiSize } = useContext(ConfigContext);
  return (
    <div className="relative w-fit">
      <Image
        height={256}
        width={256}
        src="img/main-menu.svg"
        alt="test"
        className="drop-shadow-2xl"
      />
      <div className={`absolute left-[88px] top-[38px] w-[80px] h-[80px]`}>
        <NavButton
          src="img/profile.svg"
          alt="open profile button"
          onClick={() => {
            console.log("I miss the rage");
          }}
          customHoverClasses="drop-shadow-yellow-glow"
        />
      </div>
      <div className="absolute left-[38px] top-[88px] w-[80px] h-[80px]">
        <NavButton
          src="img/chat-box.svg"
          alt="send a e-mail chat-box button"
          onClick={() => {
            setUiSize!(UiSizes.MEDIUM);
          }}
          customHoverClasses="drop-shadow-blue-glow"
        />
      </div>
      <div className="absolute right-[38px] bottom-[88px] w-[80px] h-[80px]">
        <NavButton
          src="img/config-cog.svg"
          alt="open configuration button"
          onClick={() => {
            setUiSize!(UiSizes.LARGE);
          }}
          customHoverClasses="drop-shadow-grey-glow"
        />
      </div>
      <div className="absolute right-[88px] bottom-[38px] w-[80px] h-[80px]">
        <NavButton
          src="img/arrow-down.svg"
          alt="go to page bottom arrow down button"
          onClick={() => {
            console.log("I miss the rage");
          }}
          customHoverClasses="drop-shadow-green-glow"
        />
      </div>
    </div>
  );
};

export default NavBarOptions;
