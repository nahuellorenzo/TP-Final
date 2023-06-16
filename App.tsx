import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./components/config/fonts";
import { LoginProvider } from "./components/context/LoginContext";

import AppRouter from "./components/navigation/AppRouter";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <LoginProvider>
    <SafeAreaProvider>
      <AppRouter />
      <StatusBar />
    </SafeAreaProvider>
    </LoginProvider>
  );
}