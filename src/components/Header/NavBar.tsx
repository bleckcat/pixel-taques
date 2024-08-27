import React, { useContext } from "react";
import NavBarOptions from "./NavBarOptions";
import ProfileBar from "./ProfileBar";
import HealthBar from "./HealthBar";
import { ConfigContext } from "@/context/configurations";

const NavBar = () => {
  const { uiSize } = useContext(ConfigContext);

  const tailwindUiSizes = ["scale-50", "scale-75", "scale-100"];

  return (
    <nav
      className={
        `fixed z-50 flex m-4 origin-top-left ` + tailwindUiSizes[uiSize]
      }
    >
      <NavBarOptions />
      <div>
        <ProfileBar />
        <HealthBar />
      </div>
    </nav>
  );
};

export default NavBar;
