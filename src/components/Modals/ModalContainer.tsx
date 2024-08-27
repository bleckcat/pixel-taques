import { ConfigContext } from "@/context/configurations";
import React, { useContext } from "react";

const ModalContainer = () => {
  const { uiSize } = useContext(ConfigContext);
  const tailwindUiSizes = ["scale-50", "scale-75", "scale-100"];

  return (
    <div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
      <div
        className={
          "w-[700px] h-[700px] bg-modal animate-slide-top text-4xl " +
          tailwindUiSizes[uiSize]
        }
      >
        Teste
      </div>
    </div>
  );
};

export default ModalContainer;
