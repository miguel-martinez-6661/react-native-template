import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "../../components/shared";
import { Screen } from "../../components/shared";
import { Routes } from "../../navigation/routes";
import { AppNavigationProps } from "../../types/navigation";

export const HomeScreen = () => {
  const { navigate } = useNavigation<AppNavigationProps>();

  const handleNavigation = useCallback(() => {
    navigate(Routes.Details);
  }, []);

  return (
    <Screen>
      <Text>Hello Home</Text>
      <Button onPress={handleNavigation}>Hello</Button>
    </Screen>
  );
};
