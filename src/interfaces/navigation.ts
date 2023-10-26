import { Routes } from "@/navigation/routes";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamList = {
  [Routes.Home]: undefined;
  [Routes.Details]: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppParamList>;
