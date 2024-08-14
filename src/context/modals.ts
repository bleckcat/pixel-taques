import { ModalStatus } from "@/configuration/modal";
import { createContext, Dispatch, SetStateAction } from "react";

interface ModalProps {
  status: ModalStatus;
  setModalStatus?: Dispatch<SetStateAction<ModalStatus>>;
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalProps>({
  status: ModalStatus.NEUTRAL,
  isOpen: false,
});
