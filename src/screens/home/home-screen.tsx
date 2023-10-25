import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@/interfaces/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { decrement, increment } from "@/store";
import { Routes } from "@/navigation/routes";

import { Button, Text } from "@/components/shared";
import { Screen } from "@/components/shared";
import { ButtonContainer } from "./home-screen.styled";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<AppNavigationProps>();

  const { value } = useAppSelector((state) => state.counter);

  const handleNavigation = useCallback(() => {
    navigate(Routes.Details);
  }, []);

  return (
    <Screen>
      <Text>{`Hello Home => ${value}`}</Text>
      <ButtonContainer>
        <Button onPress={handleNavigation}>Navigate</Button>

        <Button
          onPress={() => {
            dispatch(decrement());
          }}
        >
          Decrease
        </Button>

        <Button
          onPress={() => {
            dispatch(increment());
          }}
        >
          Increase
        </Button>
      </ButtonContainer>
    </Screen>
  );
};
