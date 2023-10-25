import { ScreenContainer } from "./screen.styled";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen = ({ children }: ScreenProps) => {
  return <ScreenContainer>{children}</ScreenContainer>;
};
