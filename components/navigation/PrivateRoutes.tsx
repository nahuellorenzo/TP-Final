/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Color";
import MainScreen from "../screens/Main";
import UserProfileScreen from "../screens/UserProfile";

import { RootStackParamList } from "../../types";
import MemoryGame from "../screens/MemoryGame";
import Again from "../screens/Again";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function NavigationPrivate() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigatorPrivate />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigatorPrivate() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="MemoryGame" component={MemoryGame} />
      <Stack.Screen name="Again" component={Again} />
    </Stack.Navigator>
  );
}