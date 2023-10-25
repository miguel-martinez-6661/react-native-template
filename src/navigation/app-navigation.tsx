import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/screens/home/home-screen";
import { DetailsScreen } from "@/screens/details/details-screen";
import { AppParamList } from "@/interfaces/navigation";
import { Routes } from "./routes";

const Stack = createNativeStackNavigator<AppParamList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
