/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from './src/providers'
import { AppNavigation } from './src/navigation/app-navigation'
import { store } from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App
