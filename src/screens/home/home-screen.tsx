import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@/interfaces/navigation/navigation";
import { Routes } from "@/navigation/routes";
import { Button, Text } from "@/components/shared";
import { Screen } from "@/components/shared";
import { ButtonContainer } from "./home-screen.styled";
import { useStore } from "@/store";

export const HomeScreen = () => {
  const { bears, increasePopulation } = useStore((state) => state);
  const { navigate } = useNavigation<AppNavigationProps>();

  const handleNavigation = useCallback(() => {
    navigate(Routes.Details);
  }, []);

  console.log(bears);

  return (
    <Screen>
      <Text>{`Hello Home`}</Text>
      <ButtonContainer>
        <Button onPress={handleNavigation}>Navigate</Button>

        <Button
          onPress={() => {
            increasePopulation();
          }}
        >
          Decrease
        </Button>

        <Button onPress={() => {}}>Increase</Button>
      </ButtonContainer>
    </Screen>
  );
};
