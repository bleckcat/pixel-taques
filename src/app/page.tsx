"use client";
import { ModalStatus } from "@/configuration/modal";
import { UiSizes } from "@/configuration/ui";
import { ConfigContext } from "@/context/configurations";
import { ModalContext } from "@/context/modals";
import { useState } from "react";
import SkillTree from "@/components/Sections/SkillTree";
import NavBar from "@/components/Header/NavBar";

export default function Home() {
  const [config, setConfig] = useState<UiSizes>(UiSizes.MEDIUM);
  const [modalStatus, setModalStatus] = useState<ModalStatus>(
    ModalStatus.NEUTRAL
  );
  const [isOpen, setIsOpen] = useState<boolean>(Boolean);

  return (
    <ConfigContext.Provider value={{ uiSize: config, setUiSize: setConfig }}>
      <ModalContext.Provider
        value={{
          status: modalStatus,
          setModalStatus: setModalStatus,
          isOpen: isOpen,
          setIsOpen: setIsOpen,
        }}
      >
        <NavBar />
        <main className="grid grid-cols-12 mx-auto sm:max-w-[480px] md:max-w-[720px] xl:max-w-[1200px] sm:gap-y-4 md:gap-y-8 xl:gap-y-16">
          <SkillTree />
        </main>

        {/* <ModalContainer /> */}
      </ModalContext.Provider>
    </ConfigContext.Provider>
  );
}
