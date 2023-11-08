import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./components/config/fonts";
import { LoginProvider } from "./components/context/LoginContext";
import { RootSiblingParent } from 'react-native-root-siblings';

import AppRouter from "./components/navigation/AppRouter";
import { ScoreProvider } from "./components/context/ScoreContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <RootSiblingParent>
    <LoginProvider>
      <ScoreProvider>
        <SafeAreaProvider>
          <AppRouter />
          <StatusBar />
        </SafeAreaProvider>
      </ScoreProvider>
    </LoginProvider>
    </RootSiblingParent>
    </GestureHandlerRootView>
  );
}