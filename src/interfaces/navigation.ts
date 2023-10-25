import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamList = {
  Home: undefined;
  Details: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppParamList>;
