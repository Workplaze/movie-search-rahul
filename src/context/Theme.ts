import { createContext } from "react";

type Para = {
  mode: string;
  modeHandler: () => void;
};

export const ThemeContext = createContext<Para>({
  mode: "light",
  modeHandler: () => {},
});
