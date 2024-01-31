import { useCallback } from 'react'
import { Routes } from '@/navigation/routes'
import { useBearStore, useLionStore } from '@/store'
import { useNavigation } from '@react-navigation/native'
import { Screen, Button, Text } from '@/components/shared'
import { type AppNavigationProps } from '@/interfaces/navigation/navigation'
import { ButtonContainer } from './home-screen.styled'

export const HomeScreen = () => {
  const { navigate } = useNavigation<AppNavigationProps>()
  const {
    bears: numberOfBears,
    addBear,
    subBear
  } = useBearStore(state => state)

  const {
    lions: numberOfLions,
    addLion,
    subLion
  } = useLionStore(state => state)

  const handleNavigation = useCallback(() => {
    navigate(Routes.Details)
  }, [navigate])

  return (
    <Screen>
      <Text>{`You have ${numberOfBears} bears`}</Text>
      <Text>{'and'}</Text>
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
  )
}
