import React from "react";
import styled from "styled-components/native";
import { TextProps as RnTextProps } from "react-native";
import { useTheme } from "../../hooks";
import { FONT_SIZES } from "../../constants";

interface TextProps extends RnTextProps {
  size?: keyof typeof FONT_SIZES;
}

export const Text = ({ children, size = "md" }: TextProps) => {
  const { colors, fontSizes } = useTheme();

  const Component = styled.Text`
    align-items: center;
    color: ${colors.text};
    font-size: ${fontSizes[size]}px;
  `;

  return <Component>{children}</Component>;
};
