import { useContext } from "react";
import { ThemeContext } from "../providers";
import { COLOR_SCHEME, FONT_SIZES } from "../constants";

export const useTheme = () => {
  const { isDark } = useContext(ThemeContext);

  return {
    colors: COLOR_SCHEME[isDark ? "dark" : "light"],
    fontSizes: FONT_SIZES,
  };
};
