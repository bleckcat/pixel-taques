"use client";
import NavBar from "@/components/Header/NavBar";
import { ModalStatus } from "@/configuration/modal";
import { UiSizes } from "@/configuration/ui";
import { ConfigContext } from "@/context/configurations";
import { ModalContext } from "@/context/modals";
import { useState } from "react";

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
      </ModalContext.Provider>
    </ConfigContext.Provider>
  );
}
