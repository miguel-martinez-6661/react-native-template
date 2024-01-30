import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/navigation/routes";
import { Screen } from "@/components/shared";
import { Button, Text } from "@/components/shared";
import { AppNavigationProps } from "@/interfaces/navigation/navigation";
import { ButtonContainer } from "./home-screen.styled";
import { useBearStore, useLionStore } from "@/store";

export const HomeScreen = () => {
  const { navigate } = useNavigation<AppNavigationProps>();
  const {
    bears: numberOfBears,
    addBear,
    subBear,
  } = useBearStore((state) => state);

  const {
    lions: numberOfLions,
    addLion,
    subLion,
  } = useLionStore((state) => state);

  const handleNavigation = useCallback(() => {
    navigate(Routes.Details);
  }, []);

  return (
    <Screen>
      <Text>{`You have ${numberOfBears} bears`}</Text>
      <Text>{`and`}</Text>
      <Text>{`You have ${numberOfLions} Lions`}</Text>
      <ButtonContainer>
        <Button onPress={subBear}>Remove Bear</Button>
        <Button onPress={addBear}>Add Bear</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onPress={subLion}>Remove Lion</Button>
        <Button onPress={addLion}>Add Lion</Button>
      </ButtonContainer>

      <ButtonContainer>
        <Button onPress={handleNavigation}>Navigate</Button>
      </ButtonContainer>
    </Screen>
  );
};
