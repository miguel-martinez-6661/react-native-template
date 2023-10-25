import { createContext } from "react";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
  isDark: boolean;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({ isDark: false });

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const theme = { isDark: colorScheme === "dark" };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
