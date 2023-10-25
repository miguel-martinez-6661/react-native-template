import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./src/providers";
import { AppNavigation } from "./src/navigation/app-navigation";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
