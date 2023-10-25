import { TouchableOpacityProps } from "react-native";
import { PrimaryButton, PrimaryButtonLabel } from "./button.styled";

interface ButtonProps extends TouchableOpacityProps {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <PrimaryButton {...rest}>
      <PrimaryButtonLabel>{children}</PrimaryButtonLabel>
    </PrimaryButton>
  );
};
