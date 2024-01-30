import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from './src/providers'
import { AppNavigation } from './src/navigation/app-navigation'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
