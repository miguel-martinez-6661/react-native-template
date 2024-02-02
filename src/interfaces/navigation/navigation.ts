import { type Routes } from '@/navigation/routes'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type AppParamList = {
  [Routes.Home]: undefined
  [Routes.Details]: undefined
}

export type AppNavigationProps = NativeStackNavigationProp<AppParamList>
