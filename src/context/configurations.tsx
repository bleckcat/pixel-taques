import { UiSizes } from "@/configuration/ui";
import { createContext, Dispatch, SetStateAction } from "react";

interface ConfigProps {
  uiSize: UiSizes;
  setUiSize?: Dispatch<SetStateAction<UiSizes>>;
}

export const ConfigContext = createContext<ConfigProps>({
  uiSize: UiSizes.MEDIUM,
});
