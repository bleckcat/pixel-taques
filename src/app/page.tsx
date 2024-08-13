"use client";
import NavBar from "@/components/NavBar";
import { UiSizes } from "@/configuration/ui";
import { ConfigContext } from "@/context/configurations";
import { useState } from "react";

export default function Home() {
  const [resizeUiSize, setResizeUiSize] = useState<UiSizes>(UiSizes.MEDIUM);

  return (
    <ConfigContext.Provider
      value={{ uiSize: resizeUiSize, setUiSize: setResizeUiSize }}
    >
      <NavBar />
    </ConfigContext.Provider>
  );
}
