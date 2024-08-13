"use client";
import { ConfigContext } from "@/context/configurations";
import Image from "next/image";
import React, { useContext, useState } from "react";

interface NavButtonProps {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButton = ({ src, alt, onClick }: NavButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative">
      <button
        className={`absolute z-50 w-[60px] h-[60px] rotate-45 left-[10px] top-[10px] cursor-pointer`}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={onClick}
      ></button>
      <Image
        height={256}
        width={256}
        src={src}
        className={hovered ? "saturate-200" : "transition-all duration-300"}
        alt={alt}
      />
    </div>
  );
};

export default NavButton;
